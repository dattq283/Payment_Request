import { RequestStatus } from '../generated/prisma/client';

export type Actor = 'NGUOI_DUYET' | 'KE_TOAN' | 'KT_THANH_TOAN';

export type Note = 'LY_DO_TU_CHOI' | 'CHUNG_TU_THIEU';

export type Transition = {
  from: RequestStatus[];
  to: RequestStatus;
  actor: Actor;
  note?: Note;
};
export const STATUS_LABEL: Record<RequestStatus, string> = {
  NHAP: 'Nháp',
  KHOI_TAO: 'Khởi tạo',
  TRUONG_PHONG_DUYET: 'Trưởng phòng duyệt',
  BGD_DUYET: 'BGĐ duyệt',
  KT_XU_LY: 'Kế toán xử lý',
  DA_CK_CHO_BO_SUNG: 'Đã CK, chờ bổ sung hồ sơ',
  DA_THANH_TOAN: 'Đã thanh toán',
  DA_IN_PDF: 'Đã in PDF',
  BGD_TU_CHOI: 'BGĐ từ chối',
};
export const TRANSITIONS: Transition[] = [
  {
    from: [RequestStatus.KHOI_TAO],
    to: RequestStatus.TRUONG_PHONG_DUYET,
    actor: 'NGUOI_DUYET',
  },
  {
    from: [RequestStatus.TRUONG_PHONG_DUYET],
    to: RequestStatus.BGD_DUYET,
    actor: 'NGUOI_DUYET',
  },
  {
    from: [RequestStatus.BGD_DUYET],
    to: RequestStatus.KT_XU_LY,
    actor: 'KE_TOAN',
  },
  {
    from: [RequestStatus.KT_XU_LY],
    to: RequestStatus.DA_CK_CHO_BO_SUNG,
    actor: 'KT_THANH_TOAN',
    note: 'CHUNG_TU_THIEU',
  },
  {
    from: [RequestStatus.KT_XU_LY],
    to: RequestStatus.DA_THANH_TOAN,
    actor: 'KT_THANH_TOAN',
  },
  {
    from: [RequestStatus.DA_CK_CHO_BO_SUNG],
    to: RequestStatus.DA_THANH_TOAN,
    actor: 'KT_THANH_TOAN',
  },
  {
    from: [RequestStatus.DA_THANH_TOAN],
    to: RequestStatus.DA_IN_PDF,
    actor: 'KT_THANH_TOAN',
  },
  {
    from: [
      RequestStatus.KHOI_TAO,
      RequestStatus.TRUONG_PHONG_DUYET,
      RequestStatus.BGD_DUYET,
    ],
    to: RequestStatus.BGD_TU_CHOI,
    actor: 'NGUOI_DUYET',
    note: 'LY_DO_TU_CHOI',
  },
];

export function findTransition(
  from: RequestStatus,
  to: RequestStatus,
): Transition | undefined {
  return TRANSITIONS.find((t) => t.from.includes(from) && t.to === to);
}
