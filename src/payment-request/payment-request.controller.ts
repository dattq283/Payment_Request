import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import type { AuthUser } from '../auth/jwt.strategy';

@Controller('payment-request')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Danh sách đề nghị')
@ApiBearerAuth()
export class PaymentRequestController {
  constructor(private readonly paymentRequestService: PaymentRequestService) {}

  @Get()
  list(@Req() req: Request & { user: AuthUser }) {
    return this.paymentRequestService.list(req.user.id);
  }
}
