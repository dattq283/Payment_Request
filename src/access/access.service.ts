import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { SiteRole } from './build-scope';

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
}
