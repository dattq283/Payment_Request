import { RequestStatus, Role } from '../generated/prisma/client';
import type { Actor } from '../payment-request/transitions';
import type { SiteRole } from './build-scope';
/** Được tạo đề nghị ở site này nếu có vai trò ở site đó — trừ Người xem. */
export function canCreate(roles: SiteRole[], siteId: string): boolean {
  return roles.some((r) => r.siteId === siteId && r.role !== Role.NGUOI_XEM);
}

/** Chỉ người tạo nháp mới được chỉnh sửa */

export function canEditDraft(
  userId: string,
  request: { creatorId: string; status: RequestStatus },
): boolean {
  return userId === request.creatorId && request.status === RequestStatus.NHAP;
}

/**Được quyền quyết định đề nghị */
export function canPerform(
  userId: string,
  roles: SiteRole[],
  request: { siteId: string; approverId?: string | null },
  actor: Actor,
): boolean {
  const isAdmin = roles.some((r) => r.role === Role.ADMIN);

  switch (actor) {
    case 'NGUOI_DUYET':
      return (
        userId === request.approverId ||
        hasRoleAt(roles, Role.BGD, request.siteId) ||
        hasRoleAt(roles, Role.ADMIN, request.siteId)
      );
    case 'KE_TOAN':
      return (
        isAdmin ||
        roles.some(
          (r) =>
            r.siteId === request.siteId &&
            (r.role === Role.KT_TONG_HOP ||
              r.role === Role.KT_TRUONG ||
              r.role === Role.KT_THANH_TOAN),
        )
      );
    case 'KT_THANH_TOAN':
      return isAdmin || hasRoleAt(roles, Role.KT_THANH_TOAN, request.siteId);
  }
}
function hasRoleAt(roles: SiteRole[], role: Role, siteId: string): boolean {
  return roles.some((r) => r.role === role && r.siteId === siteId);
}
