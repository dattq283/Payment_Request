import { Body, Controller, Get, Param, Req, Post } from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service';
import type { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import type { AuthUser } from '../auth/jwt.strategy';
import { CreateDraftDto } from './dto/create-draft.dto';

@Controller('payment-request')
@ApiTags('Danh sách đề nghị')
@ApiBearerAuth()
export class PaymentRequestController {
  constructor(private readonly paymentRequestService: PaymentRequestService) {}

  @Get()
  list(@Req() req: Request & { user: AuthUser }) {
    return this.paymentRequestService.list(req.user.id);
  }

  @Get(':id')
  detail(@Param('id') id: string, @Req() req: Request & { user: AuthUser }) {
    return this.paymentRequestService.detail(req.user.id, id);
  }

  @Post()
  createDraft(
    @Req() req: Request & { user: AuthUser },
    @Body() dto: CreateDraftDto,
  ) {
    return this.paymentRequestService.createDraft(req.user.id, dto);
  }
}
