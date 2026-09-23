import { HttpException } from '@nestjs/common';
import { ERRORS, ErrorCode } from './error-codes';

type Params = Record<string, string | number>;

export class BusinessException extends HttpException {
  constructor(code: ErrorCode, params?: Params, details?: unknown) {
    const { status, message } = ERRORS[code];
    // details = undefined sẽ tự biến mất khi Nest chuyển sang JSON
    super({ code, message: fill(message, params), details }, status);
  }
}

// Thay {from}, {to}... bằng giá trị thật. Thiếu tham số thì giữ nguyên {key} để dễ phát hiện.
function fill(template: string, params?: Params): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(params?.[key] ?? `{${key}}`),
  );
}
