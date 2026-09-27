import { Module } from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service';
import { PaymentRequestController } from './payment-request.controller';
import { AccessModule } from '../access/access.module';

@Module({
  imports:[AccessModule],
  providers: [PaymentRequestService],
  controllers: [PaymentRequestController]
})
export class PaymentRequestModule {}
