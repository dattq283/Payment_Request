import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { Request, Response } from 'express';
import { BusinessException } from './business.exception';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('Exception');

  catch(e: unknown, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const res = http.getResponse<Response>();

    // Lỗi HTTP — do mình ném (BusinessException) hoặc do Nest sinh — trả nguyên body
    if (e instanceof HttpException) {
      return res.status(e.getStatus()).json(e.getResponse());
    }

    // Lỗi hệ thống — log đầy đủ ở server, client chỉ thấy mã tra cứu (NFR-16)
    const req = http.getRequest<Request>();
    const lookupId = randomUUID().slice(0, 8);
    this.logger.error(
      `[${lookupId}] ${req.method} ${req.url}`,
      e instanceof Error ? e.stack : String(e),
    );

    const sys = new BusinessException('ERR-900', { lookupId });
    res.status(sys.getStatus()).json(sys.getResponse());
  }
}
