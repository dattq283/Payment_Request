"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = exports.ChangeLogAction = exports.AttachmentType = exports.Currency = exports.RequestStatus = exports.Role = exports.SiteCode = void 0;
exports.SiteCode = {
    HA_NOI: 'HA_NOI',
    THAI_NGUYEN: 'THAI_NGUYEN',
    HO_CHI_MINH: 'HO_CHI_MINH'
};
exports.Role = {
    NGUOI_TAO: 'NGUOI_TAO',
    TRUONG_PHONG: 'TRUONG_PHONG',
    BGD: 'BGD',
    KT_TONG_HOP: 'KT_TONG_HOP',
    KT_TRUONG: 'KT_TRUONG',
    KT_THANH_TOAN: 'KT_THANH_TOAN',
    NGUOI_XEM: 'NGUOI_XEM',
    ADMIN: 'ADMIN'
};
exports.RequestStatus = {
    NHAP: 'NHAP',
    KHOI_TAO: 'KHOI_TAO',
    TRUONG_PHONG_DUYET: 'TRUONG_PHONG_DUYET',
    BGD_DUYET: 'BGD_DUYET',
    KT_XU_LY: 'KT_XU_LY',
    DA_CK_CHO_BO_SUNG: 'DA_CK_CHO_BO_SUNG',
    DA_THANH_TOAN: 'DA_THANH_TOAN',
    DA_IN_PDF: 'DA_IN_PDF',
    BGD_TU_CHOI: 'BGD_TU_CHOI'
};
exports.Currency = {
    VND: 'VND',
    USD: 'USD'
};
exports.AttachmentType = {
    CONFIRM_IMAGE_1: 'CONFIRM_IMAGE_1',
    CONFIRM_IMAGE_2: 'CONFIRM_IMAGE_2',
    CONTRACT_IMAGE: 'CONTRACT_IMAGE',
    FREE: 'FREE'
};
exports.ChangeLogAction = {
    CREATED: 'CREATED',
    SUBMITTED: 'SUBMITTED',
    STATUS_CHANGED: 'STATUS_CHANGED',
    FILE_UPLOADED: 'FILE_UPLOADED',
    COMMENTED: 'COMMENTED'
};
exports.NotificationType = {
    ASSIGNED: 'ASSIGNED',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    SEND_TO_ACCOUNTING: 'SEND_TO_ACCOUNTING',
    MISSING_DOCS: 'MISSING_DOCS',
    PAID: 'PAID'
};
//# sourceMappingURL=enums.js.map