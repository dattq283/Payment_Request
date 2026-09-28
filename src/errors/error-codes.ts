import { HttpStatus } from '@nestjs/common';

// Mục 9.4 đặc tả — chỉ gồm mã dùng trong phạm vi 4 tuần.
// Chưa đưa vào: ERR-401 (trang quản trị), ERR-501/502 (import). ERR-901 là lỗi phía FE.
export const ERRORS = {
  'ERR-100': {
    status: HttpStatus.BAD_REQUEST,
    message: 'Dữ liệu gửi lên có trường không được phép.',
  },
  'ERR-101': {
    status: HttpStatus.BAD_REQUEST,
    message: 'Vui lòng điền các trường còn thiếu được đánh dấu.',
  },
  'ERR-102': {
    status: HttpStatus.BAD_REQUEST,
    message: 'Số tiền phải lớn hơn 0.',
  },
  'ERR-103': {
    status: HttpStatus.BAD_REQUEST,
    message: 'Thời hạn thanh toán không được trước ngày hôm nay.',
  },
  'ERR-104': {
    status: HttpStatus.BAD_REQUEST,
    message: 'Mỗi đề nghị chỉ nhập được tối đa 10 link hoá đơn.',
  },
  'ERR-105': {
    status: HttpStatus.BAD_REQUEST,
    message:
      'Bạn không thể tự duyệt đề nghị của mình. Vui lòng chọn người khác.',
  },
  'ERR-106': {
    status: HttpStatus.BAD_REQUEST,
    message: 'Người được chọn không có quyền duyệt tại site này.',
  }, // tự thêm
  'ERR-107': {
    status: HttpStatus.BAD_REQUEST,
    message:
      'Dữ liệu chưa đúng định dạng. Vui lòng kiểm tra các trường được đánh dấu.',
  },
  'ERR-201': {
    status: HttpStatus.CONFLICT,
    message: 'Không thể chuyển từ {from} sang {to}.',
  }, //tự thêm
  'ERR-202': {
    status: HttpStatus.CONFLICT,
    message: 'Đề nghị này vừa được cập nhật. Nội dung đã được tải lại.',
  },
  'ERR-203': {
    status: HttpStatus.FORBIDDEN,
    message: 'Bạn không có quyền thực hiện thao tác này.',
  },
  'ERR-301': {
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    message: 'Tệp vượt quá 20MB. Vui lòng chia nhỏ hoặc nén lại.',
  },
  'ERR-302': {
    status: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    message: 'Chỉ hỗ trợ PDF, JPG, PNG, XLSX, DOCX.',
  },
  'ERR-900': {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Đã có lỗi hệ thống. Mã tra cứu: {lookupId}.',
  }, // tự thêm
} as const;

export type ErrorCode = keyof typeof ERRORS;
