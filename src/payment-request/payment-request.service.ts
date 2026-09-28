import { CreateDraftDto } from './dto/create-draft.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AccessService } from '../access/access.service';
import { buildScope } from '../access/build-scope';
import { canCreate } from '../access/policies';
import { BusinessException } from '../errors/business.exception';
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

  async createDraft(userId: string, dto: CreateDraftDto) {
    const roles = await this.access.getRoles(userId);
    const isCanCreate = await canCreate(roles, dto.siteId);
    if (!isCanCreate) throw new BusinessException('ERR-203');

    if (dto.approverId) {
      const approverCount = await this.prisma.user.count({
        where: { id: dto.approverId },
      });
      if (approverCount === 0) throw new BusinessException('ERR-106');
    }
    return this.prisma.paymentRequest.create({
      data: {
        ...dto,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        creatorId: userId,
      },
    });
  }
}
