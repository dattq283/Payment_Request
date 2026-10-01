import { buildScope } from './build-scope';

import { Role } from '../generated/prisma/enums';

const NOT_DRAFT = { status: { not: 'NHAP' } };
describe('buildScope', () => {
  it('Người tạo: cả site rỗng- chỉ thấy của bản thân mình', () => {
    const where = buildScope('u1', [{ siteId: 'HaNoi', role: Role.NGUOI_TAO }]);
    expect(where).toEqual({
      OR: [
        { creatorId: 'u1' },
        { approverId: 'u1', ...NOT_DRAFT },
        { siteId: { in: [] }, ...NOT_DRAFT },
        { watchers: { some: { userId: 'u1' } }, ...NOT_DRAFT },
      ],
    });
  });
  it('Kế toán thanh toán: ở 2 site- thấy cả Hà Nội và HCM', () => {
    const where = buildScope('u4', [
      { siteId: 'HaNoi', role: Role.KT_THANH_TOAN },
      { siteId: 'HCM', role: Role.KT_THANH_TOAN },
    ]);
    expect(where.OR).toContainEqual({
      siteId: { in: ['HaNoi', 'HCM'] },
      ...NOT_DRAFT,
    });
  });
  it('Admin: nháp của bản thân và các đề nghị không phải nháp', () => {
    const where = buildScope('ad', [{ siteId: 'HaNoi', role: Role.ADMIN }]);
    expect(where).toEqual({ OR: [{ creatorId: 'ad' }, NOT_DRAFT] });
  });
  it('Trưởng phòng: thấy cả site Hà Nội', () => {
    const where = buildScope('tp', [
      { siteId: 'HaNoi', role: Role.TRUONG_PHONG },
    ]);
    expect(where.OR).toContainEqual({
      siteId: { in: ['HaNoi'] },
      ...NOT_DRAFT,
    });
  });
  it('Chưa gán site: nhánh cả site rỗng', () => {
    const where = buildScope('x', []);
    expect(where.OR).toContainEqual({ siteId: { in: [] }, ...NOT_DRAFT });
  });
});
