import {
  Body,
  Controller,
  Get,
  Param,
  Req,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service';
import type { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import type { AuthUser } from '../auth/jwt.strategy';
import { CreateDraftDto } from './dto/create-draft.dto';
import { UpdateDraftDto } from './dto/update-draft.dto';
import { TransitionDto } from './dto/transition.dto';

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

  @Patch(':id')
  updateDraft(
    @Param('id') id: string,
    @Req() req: Request & { user: AuthUser },
    @Body() dto: UpdateDraftDto,
  ) {
    return this.paymentRequestService.updateDraft(req.user.id, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteDraft(
    @Param('id') id: string,
    @Req() req: Request & { user: AuthUser },
  ) {
    return this.paymentRequestService.deleteDraft(req.user.id, id);
  }

  @Post(':id/submit')
  @HttpCode(HttpStatus.OK)
  submit(@Param('id') id: string, @Req() req: Request & { user: AuthUser }) {
    return this.paymentRequestService.submit(req.user.id, id);
  }

  @Post(':id/transition')
  @HttpCode(HttpStatus.OK)
  transition(
    @Param('id') id: string,
    @Req() req: Request & { user: AuthUser },
    @Body() dto: TransitionDto,
  ) {
    return this.paymentRequestService.transition(req.user.id, id, dto);
  }
}
