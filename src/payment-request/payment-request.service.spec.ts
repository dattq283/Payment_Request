import { jest } from '@jest/globals';
import { PaymentRequestService } from './payment-request.service';
import { BusinessException } from '../errors/business.exception';
import { toBusinessDate } from '../utils/business-date';
import { Prisma } from '../generated/prisma/client';
import { Currency, RequestStatus, Role } from '../generated/prisma/enums';
import type { PrismaService } from '../prisma/prisma.service';
import type { AccessService } from '../access/access.service';
import type { SiteRole } from '../access/build-scope';

const S = RequestStatus;
const YEAR = toBusinessDate(new Date()).slice(0, 4);

// ======================= Dữ liệu mẫu =======================

/** Đề nghị đã gửi duyệt ở Hà Nội: người tạo 'nt', người duyệt 'tp', version 0. */
function sentRequest(overrides: Record<string, unknown> = {}) {
  return {
    id: 'r1',
    siteId: 'HaNoi',
    creatorId: 'nt',
    approverId: 'tp',
    status: S.KHOI_TAO,
    version: 0,
    ...overrides,
  };
}

/** Nháp đủ và hợp lệ của 'nt', người duyệt 'tp' — gửi duyệt là qua. */
function validDraft(overrides: Record<string, unknown> = {}) {
  return {
    ...sentRequest({ status: S.NHAP }),
    title: 'Mua bàn ghế phòng họp',
    amount: new Prisma.Decimal(1500000),
    currency: Currency.VND,
    paymentContent: 'Mua 10 bộ bàn ghế cho phòng họp tầng 3',
    bankName: 'Vietcombank',
    bankAccount: '0011 2233 4455',
    recipientName: 'Công ty Nội thất Hoà Phát',
    dueDate: new Date('2026-10-15'),
    createdAt: new Date('2026-09-28T03:00:00Z'),
    ...overrides,
  };
}

/** Người dùng có một vai trò tại một site (mặc định Hà Nội). */
function rolesAt(role: Role, siteId = 'HaNoi'): SiteRole[] {
  return [{ siteId, role }];
}

// ======================= Đồ giả =======================

type Options = {
  approverValid?: boolean; // isValidApprover trả gì — mặc định true
  lastCode?: string | null; // mã lớn nhất trong năm — null nếu chưa có
};

/** Tạo service với Prisma và AccessService giả; trả về service và hàm update giả để kiểm. */
function setup(request: object, roles: SiteRole[], opts: Options = {}) {
  const prisma = {
    paymentRequest: {
      update: jest.fn(async (args: { data: object }) => ({ ...request, ...args.data })),
      findFirst: jest.fn(async () =>
        opts.lastCode === null ? null : { code: opts.lastCode ?? `ĐNTT-${YEAR}-0010` },
      ),
    },
  };
  const access = {
    getRoles: jest.fn(async () => roles),
    findVisibleOrThrow: jest.fn(async () => request),
    isValidApprover: jest.fn(async () => opts.approverValid ?? true),
  };
  const service = new PaymentRequestService(
    prisma as unknown as PrismaService,
    access as unknown as AccessService,
  );
  return { service, update: prisma.paymentRequest.update };
}

/** Chạy một thao tác: trả mã lỗi nếu bị chặn, undefined nếu thành công. */
async function errorCode(action: Promise<unknown>): Promise<string | undefined> {
  try {
    await action;
    return undefined;
  } catch (e) {
    return ((e as BusinessException).getResponse() as { code: string }).code;
  }
}

// ======================= Gửi duyệt =======================

describe('submit — gửi duyệt (Nháp → Khởi tạo)', () => {
  it('Người tạo: gửi nháp hợp lệ - sinh mã kế tiếp, chuyển Khởi tạo (FR-41)', async () => {
    const { service, update } = setup(validDraft(), rolesAt(Role.NGUOI_TAO));
    await service.submit('nt', 'r1');
    expect(update).toHaveBeenCalledWith({
      where: { id: 'r1', status: S.NHAP },
      data: { code: `ĐNTT-${YEAR}-0011`, status: S.KHOI_TAO, version: { increment: 1 } },
    });
  });

  it('Người tạo: đề nghị đầu tiên trong năm - mã bắt đầu từ 0001', async () => {
    const { service, update } = setup(validDraft(), rolesAt(Role.NGUOI_TAO), { lastCode: null });
    await service.submit('nt', 'r1');
    expect(update).toHaveBeenCalledWith(
      expect.objectContaining({ data: expect.objectContaining({ code: `ĐNTT-${YEAR}-0001` }) }),
    );
  });

  it('Người tạo: thiếu tiêu đề và người duyệt - ERR-101 (Bảng 3)', async () => {
    const { service } = setup(validDraft({ title: null, approverId: null }), rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.submit('nt', 'r1'))).toBe('ERR-101');
  });

  it('Người tạo: số tiền bằng 0 - ERR-102 (BR-11)', async () => {
    const { service } = setup(validDraft({ amount: new Prisma.Decimal(0) }), rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.submit('nt', 'r1'))).toBe('ERR-102');
  });

  it('Người tạo: hạn thanh toán trước ngày tạo - ERR-103 (BR-13)', async () => {
    const { service } = setup(validDraft({ dueDate: new Date('2026-09-27') }), rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.submit('nt', 'r1'))).toBe('ERR-103');
  });

  it('Người tạo: tạo lúc 6h sáng giờ VN, hạn cùng ngày - vẫn qua (#49 múi giờ)', async () => {
    const draft = validDraft({
      createdAt: new Date('2026-09-27T23:00:00Z'),
      dueDate: new Date('2026-09-28'),
    });
    const { service } = setup(draft, rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.submit('nt', 'r1'))).toBeUndefined();
  });

  it('Người tạo: chọn chính mình làm người duyệt - ERR-105 (BR-03)', async () => {
    const { service } = setup(validDraft({ approverId: 'nt' }), rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.submit('nt', 'r1'))).toBe('ERR-105');
  });

  it('Người tạo: người duyệt không có quyền duyệt tại site - ERR-106 (Bảng 2)', async () => {
    const { service } = setup(validDraft(), rolesAt(Role.NGUOI_TAO), { approverValid: false });
    expect(await errorCode(service.submit('nt', 'r1'))).toBe('ERR-106');
  });

  it('Trưởng phòng: gửi nháp của người khác - ERR-203 (BR-17)', async () => {
    const { service } = setup(validDraft(), rolesAt(Role.TRUONG_PHONG));
    expect(await errorCode(service.submit('tp', 'r1'))).toBe('ERR-203');
  });

  it('Người tạo: gửi lại đề nghị đã gửi - ERR-203 (BR-04)', async () => {
    const { service } = setup(validDraft({ status: S.KHOI_TAO }), rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.submit('nt', 'r1'))).toBe('ERR-203');
  });
});

// ======================= Chuyển trạng thái =======================

describe('transition — chuyển trạng thái (Bảng 3)', () => {
  // ----- Duyệt -----

  it('Người được chỉ định: duyệt Khởi tạo → TP duyệt - version tăng', async () => {
    const { service, update } = setup(sentRequest(), rolesAt(Role.TRUONG_PHONG));
    await service.transition('tp', 'r1', { to: S.TRUONG_PHONG_DUYET, version: 0 });
    expect(update).toHaveBeenCalledWith({
      where: { id: 'r1', version: 0 },
      data: expect.objectContaining({ status: S.TRUONG_PHONG_DUYET, version: { increment: 1 } }),
    });
  });

  it('BGĐ trong site: duyệt dù không được chỉ định (#51)', async () => {
    const { service } = setup(sentRequest(), rolesAt(Role.BGD));
    expect(await errorCode(service.transition('bgd', 'r1', { to: S.TRUONG_PHONG_DUYET, version: 0 }))).toBeUndefined();
  });

  it('BGĐ ở site khác: không duyệt được - ERR-203 (#51)', async () => {
    const { service } = setup(sentRequest(), rolesAt(Role.BGD, 'HCM'));
    expect(await errorCode(service.transition('bgd', 'r1', { to: S.TRUONG_PHONG_DUYET, version: 0 }))).toBe('ERR-203');
  });

  it('Trưởng phòng không được chỉ định: không duyệt được - ERR-203 (BR-02)', async () => {
    const { service } = setup(sentRequest({ approverId: 'bgd' }), rolesAt(Role.TRUONG_PHONG));
    expect(await errorCode(service.transition('tp', 'r1', { to: S.TRUONG_PHONG_DUYET, version: 0 }))).toBe('ERR-203');
  });

  // ----- Kế toán -----

  it('Người tạo: nhận xử lý kế toán - ERR-203 (Bảng 2)', async () => {
    const { service } = setup(sentRequest({ status: S.BGD_DUYET }), rolesAt(Role.NGUOI_TAO));
    expect(await errorCode(service.transition('nt', 'r1', { to: S.KT_XU_LY, version: 0 }))).toBe('ERR-203');
  });

  it('KT tổng hợp: nhận xử lý kế toán - qua (mục 14.1)', async () => {
    const { service } = setup(sentRequest({ status: S.BGD_DUYET }), rolesAt(Role.KT_TONG_HOP));
    expect(await errorCode(service.transition('kth', 'r1', { to: S.KT_XU_LY, version: 0 }))).toBeUndefined();
  });

  it('KT tổng hợp: chốt Đã thanh toán - ERR-203, chỉ KT thanh toán (Bảng 3)', async () => {
    const { service } = setup(sentRequest({ status: S.KT_XU_LY }), rolesAt(Role.KT_TONG_HOP));
    expect(await errorCode(service.transition('kth', 'r1', { to: S.DA_THANH_TOAN, version: 0 }))).toBe('ERR-203');
  });

  it('Admin ở site khác: làm bước kế toán - qua (Bảng 2 ✓)', async () => {
    const { service } = setup(sentRequest({ status: S.KT_XU_LY }), rolesAt(Role.ADMIN, 'HCM'));
    expect(await errorCode(service.transition('ad', 'r1', { to: S.DA_THANH_TOAN, version: 0 }))).toBeUndefined();
  });

  it('KT thanh toán: chuyển chờ bổ sung không ghi chứng từ thiếu - ERR-101 (BR-09)', async () => {
    const { service } = setup(sentRequest({ status: S.KT_XU_LY }), rolesAt(Role.KT_THANH_TOAN));
    expect(await errorCode(service.transition('ktt', 'r1', { to: S.DA_CK_CHO_BO_SUNG, version: 0 }))).toBe('ERR-101');
  });

  // ----- Từ chối -----

  it('Người được chỉ định: từ chối với lý do dưới 10 ký tự - ERR-107 (BR-08)', async () => {
    const { service } = setup(sentRequest(), rolesAt(Role.TRUONG_PHONG));
    const dto = { to: S.BGD_TU_CHOI, note: 'abc', version: 0 };
    expect(await errorCode(service.transition('tp', 'r1', dto))).toBe('ERR-107');
  });

  it('Người được chỉ định: từ chối với lý do hợp lệ - lý do được lưu (FR-47)', async () => {
    const { service, update } = setup(sentRequest(), rolesAt(Role.TRUONG_PHONG));
    const reason = 'Chưa có báo giá so sánh từ 3 nhà cung cấp';
    await service.transition('tp', 'r1', { to: S.BGD_TU_CHOI, note: reason, version: 0 });
    expect(update).toHaveBeenCalledWith(
      expect.objectContaining({ data: expect.objectContaining({ rejectReason: reason }) }),
    );
  });


  it('Chuyển từ trạng thái: Khởi tạo → BGĐ duyệt - ERR-201 (BR-07)', async () => {
    const { service } = setup(sentRequest(), rolesAt(Role.TRUONG_PHONG));
    expect(await errorCode(service.transition('tp', 'r1', { to: S.BGD_DUYET, version: 0 }))).toBe('ERR-201');
  });

  it('Đã in PDF: không đổi được nữa - ERR-201 (BR-10)', async () => {
    const { service } = setup(sentRequest({ status: S.DA_IN_PDF }), rolesAt(Role.KT_THANH_TOAN));
    expect(await errorCode(service.transition('ktt', 'r1', { to: S.DA_THANH_TOAN, version: 0 }))).toBe('ERR-201');
  });

  it('Màn hình cũ: gửi version lệch - ERR-202', async () => {
    const { service } = setup(sentRequest({ version: 1 }), rolesAt(Role.TRUONG_PHONG));
    expect(await errorCode(service.transition('tp', 'r1', { to: S.BGD_DUYET, version: 0 }))).toBe('ERR-202');
  });
});