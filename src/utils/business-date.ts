export const BUSINESS_TZ = 'Asia/Ho_Chi_Minh';

export function toBusinessDate(d: Date): string {
  return d.toLocaleDateString('sv-SE', { timeZone: BUSINESS_TZ });
}
