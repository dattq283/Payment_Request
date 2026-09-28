import { Controller, Get, Req } from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service';
import type { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import type { AuthUser } from '../auth/jwt.strategy';

@Controller('payment-request')
@ApiTags('Danh sách đề nghị')
@ApiBearerAuth()
export class PaymentRequestController {
  constructor(private readonly paymentRequestService: PaymentRequestService) {}

  @Get()
  list(@Req() req: Request & { user: AuthUser }) {
    return this.paymentRequestService.list(req.user.id);
  }
}
