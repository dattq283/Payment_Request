import { RequestStatus, Role } from '../generated/prisma/client';
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
