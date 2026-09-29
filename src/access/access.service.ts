import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { buildScope, type SiteRole } from './build-scope';
import { BusinessException } from '../errors/business.exception';
import { Role } from '../generated/prisma/enums';

const APPROVER_ROLES: Role[] = [
  Role.TRUONG_PHONG,
  Role.BGD,
  Role.KT_TONG_HOP,
  Role.KT_THANH_TOAN,
  Role.KT_TRUONG,
];
@Injectable()
export class AccessService {
  constructor(private readonly prisma: PrismaService) {}
  async getRoles(userId: string): Promise<SiteRole[]> {
    return await this.prisma.userSiteRole.findMany({
      where: {
        userId,
      },
      select: { siteId: true, role: true },
    });
  }

  /** Lấy đề nghị nếu user được phép xem */
  async findVisibleOrThrow(
    userId: string,
    roles: SiteRole[],
    requestId: string,
  ) {
    const request = await this.prisma.paymentRequest.findFirst({
      where: {
        AND: [{ id: requestId }, buildScope(userId, roles)],
      },
    });
    if (request) return request;
    const requestExisting = await this.prisma.paymentRequest.count({
      where: { id: requestId },
    });
    if (requestExisting > 0) {
      throw new BusinessException('ERR-203');
    }
    throw new NotFoundException();
  }

  /** Check có được chọn làm người duyệt ở site này?*/
  async isValidApprover(approverId: string, siteId: string): Promise<boolean> {
    const count = await this.prisma.user.count({
      where: {
        id: approverId,
        isActive: true,
        siteRoles: { some: { siteId, role: { in: APPROVER_ROLES } } },
      },
    });
    return count > 0;
  }
}
