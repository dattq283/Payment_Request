import { Role } from '../generated/prisma/client';
import type { SiteRole } from './build-scope';

/** Được tạo đề nghị ở site này nếu có vai trò ở site đó — trừ Người xem. */
export function canCreate(roles: SiteRole[], siteId: string): boolean {
  return roles.some((r) => r.siteId === siteId && r.role !== Role.NGUOI_XEM);
}
