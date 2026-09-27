import { Prisma, RequestStatus, Role } from '../generated/prisma/client';

export type SiteRole = { siteId: string; role: Role };

const XEM_CA_SITE: readonly Role[] = [
  Role.TRUONG_PHONG,
  Role.BGD,
  Role.KT_TONG_HOP,
  Role.KT_TRUONG,
  Role.KT_THANH_TOAN,
  Role.NGUOI_XEM,
];

export function buildScope(
  userId: string,
  roles: SiteRole[],
): Prisma.PaymentRequestWhereInput {
  const notDraft: Prisma.PaymentRequestWhereInput = {
    status: { not: RequestStatus.NHAP },
  };
  if (roles.some((r) => r.role === Role.ADMIN)) {
    return {
      OR: [{ creatorId: userId }, notDraft],
    };
  }
  const siteIds = roles
    .filter((r) => XEM_CA_SITE.includes(r.role))
    .map((r) => r.siteId);
  return {
    OR: [
      { creatorId: userId },
      { approverId: userId, ...notDraft },
      { siteId: { in: siteIds }, ...notDraft },
    ],
  };
}
