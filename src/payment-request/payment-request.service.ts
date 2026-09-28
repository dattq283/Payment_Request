import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AccessService } from '../access/access.service';
import { buildScope } from '../access/build-scope';
@Injectable()
export class PaymentRequestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly access: AccessService,
  ) {}
  async list(userId: string) {
    const roles = await this.access.getRoles(userId);
    return this.prisma.paymentRequest.findMany({
      where: buildScope(userId, roles),
      select: {
        id: true,
        code: true,
        title: true,
        status: true,
        siteId: true,
        creatorId: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
  async detail(userId: string, id: string) {
    const roles = await this.access.getRoles(userId);
    return this.access.findVisibleOrThrow(userId, roles, id);
  }
}
