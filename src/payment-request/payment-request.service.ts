import { CreateDraftDto } from './dto/create-draft.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AccessService } from '../access/access.service';
import { buildScope } from '../access/build-scope';
import { canCreate, canEditDraft } from '../access/policies';
import { BusinessException } from '../errors/business.exception';
import { UpdateDraftDto } from './dto/update-draft.dto';
import { toBusinessDate } from '../utils/business-date';
import { checkSubmit } from './submit-rules';
import { RequestStatus } from '../generated/prisma/enums';
import { Prisma } from '../generated/prisma/client';
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
    const isCanCreate = canCreate(roles, dto.siteId);
    if (!isCanCreate) {
      throw new BusinessException('ERR-203');
    }

    await this.ensureApproverExists(dto.approverId, userId);
    return this.prisma.paymentRequest.create({
      data: {
        ...dto,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : dto.dueDate,
        creatorId: userId,
      },
    });
  }
  async updateDraft(userId: string, id: string, dto: UpdateDraftDto) {
    const roles = await this.access.getRoles(userId);
    const requestDetails = await this.access.findVisibleOrThrow(
      userId,
      roles,
      id,
    );
    const canEdit = canEditDraft(userId, requestDetails);
    if (!canEdit) {
      throw new BusinessException('ERR-203');
    }
    await this.ensureApproverExists(dto.approverId, userId);
    return this.prisma.paymentRequest.update({
      where: { id },
      data: {
        ...dto,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : dto.dueDate,
      },
    });
  }

  async deleteDraft(userId: string, id: string) {
    const roles = await this.access.getRoles(userId);
    const requestDetails = await this.access.findVisibleOrThrow(
      userId,
      roles,
      id,
    );
    const canEdit = canEditDraft(userId, requestDetails);
    if (!canEdit) {
      throw new BusinessException('ERR-203');
    }
    return this.prisma.paymentRequest.delete({
      where: { id },
    });
  }
  //check xem khi có approverId được gửi thì người đó phải tồn tại
  private async ensureApproverExists(approverId: string | undefined, creatorId: string) {
    if (!approverId) {
      return;
    }
    if(approverId === creatorId) 
      throw new BusinessException('ERR-105');
    const count = await this.prisma.user.count({ where: { id: approverId } });
    if (count === 0) {
      throw new BusinessException('ERR-106');
    }
  }

  /** Sinh mã ĐNTT kế tiếp: ĐNTT-YYYY-NNNN (FR-41) */
  private async nextCode(): Promise<string> {
    const year = toBusinessDate(new Date()).slice(0, 4);
    const prefix = `ĐNTT-${year}-`;

    const last = await this.prisma.paymentRequest.findFirst({
      where: { code: { startsWith: prefix } },
      orderBy: { code: 'desc' },
      select: { code: true },
    });

    const lastNumber = last ? Number(last.code!.slice(prefix.length)) : 0;

    return prefix + String(lastNumber + 1).padStart(4, '0');
  }

  /** Gửi duyệt: Nháp -> Khởi tạo */
  async submit(userId: string, id: string) {
    const roles = await this.access.getRoles(userId);
    const requestDetails = await this.access.findVisibleOrThrow(
      userId,
      roles,
      id,
    );
    const canEdit = canEditDraft(userId, requestDetails);
    if (!canEdit) {
      throw new BusinessException('ERR-203');
    }
    checkSubmit(requestDetails);
    if (requestDetails.approverId === requestDetails.creatorId)
      throw new BusinessException('ERR-105');
    const isValid = await this.access.isValidApprover(
      requestDetails.approverId!,
      requestDetails.siteId,
    );
    if (!isValid) throw new BusinessException('ERR-106');

    return this.prisma.paymentRequest.update({
      where: { id, status: RequestStatus.NHAP },
      data: { code: await this.nextCode(), status: RequestStatus.KHOI_TAO },
    });
  }
}
