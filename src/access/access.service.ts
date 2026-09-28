import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { buildScope, type SiteRole } from './build-scope';
import { BusinessException } from '../errors/business.exception';

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

  //Lấy đề nghị nếu user được phép xem:
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
}
