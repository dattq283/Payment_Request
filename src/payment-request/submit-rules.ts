import { BusinessException } from '../errors/business.exception';
import { Currency, Prisma } from '../generated/prisma/client';
import { toBusinessDate } from '../utils/business-date';

export type SubmitAttribute = {
  title: string | null;
  amount: Prisma.Decimal | null;
  currency: Currency;
  paymentContent: string | null;
  bankName: string | null;
  bankAccount: string | null;
  recipientName: string | null;
  dueDate: Date | null;
  approverId: string | null;
  createdAt: Date;
};

const REQUIRED = [
  'title',
  'amount',
  'dueDate',
  'paymentContent',
  'bankName',
  'bankAccount',
  'recipientName',
  'approverId',
] as const;
/** Hàm check xem đề nghị có đủ điều kiện để gửi duyệt */
export function checkSubmit(r: SubmitAttribute): void {
  const missing = REQUIRED.filter((f) => {
    const v = r[f];
    return v === null || (typeof v === 'string' && v.trim() === '');
  });
  if (missing.length > 0) {
    throw new BusinessException('ERR-101', undefined, { fields: missing });
  }
  //BR-11: Số tiền phải lớn hơn 0
  const amount = r.amount!;

  if (amount.lte(0)) {
    throw new BusinessException('ERR-102');
  }
  //BR-13: Hạn thanh toán không được trước ngày tạo.
  if (toBusinessDate(r.dueDate!) < toBusinessDate(r.createdAt)) {
    throw new BusinessException('ERR-103');
  }

  //Định dạng
  const invalid: string[] = [];

  const isOk =
    r.currency === Currency.VND
      ? amount.isInteger()
      : amount.decimalPlaces() <= 2;
  if (!isOk) invalid.push('amount');

  if (!lengthBetween(r.title!, 5, 200)) invalid.push('title');
  if (!lengthBetween(r.paymentContent!, 10, 2000))
    invalid.push('paymentContent');
  if (!lengthBetween(r.bankName!, 3, 100)) invalid.push('bankName');
  if (!lengthBetween(r.recipientName!, 3, 200)) invalid.push('recipientName');

  if (!/^[0-9 ]{6,30}$/.test(r.bankAccount!)) invalid.push('bankAccount');

  if (invalid.length > 0) {
    throw new BusinessException('ERR-107', undefined, { fields: invalid });
  }
}
function lengthBetween(s: string, min: number, max: number): boolean {
  const n = s.trim().length;
  return n >= min && n <= max;
}
