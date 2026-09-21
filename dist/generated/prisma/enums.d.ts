export declare const SiteCode: {
    readonly HA_NOI: "HA_NOI";
    readonly THAI_NGUYEN: "THAI_NGUYEN";
    readonly HO_CHI_MINH: "HO_CHI_MINH";
};
export type SiteCode = (typeof SiteCode)[keyof typeof SiteCode];
export declare const Role: {
    readonly NGUOI_TAO: "NGUOI_TAO";
    readonly TRUONG_PHONG: "TRUONG_PHONG";
    readonly BGD: "BGD";
    readonly KT_TONG_HOP: "KT_TONG_HOP";
    readonly KT_TRUONG: "KT_TRUONG";
    readonly KT_THANH_TOAN: "KT_THANH_TOAN";
    readonly NGUOI_XEM: "NGUOI_XEM";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const RequestStatus: {
    readonly NHAP: "NHAP";
    readonly KHOI_TAO: "KHOI_TAO";
    readonly TRUONG_PHONG_DUYET: "TRUONG_PHONG_DUYET";
    readonly BGD_DUYET: "BGD_DUYET";
    readonly KT_XU_LY: "KT_XU_LY";
    readonly DA_CK_CHO_BO_SUNG: "DA_CK_CHO_BO_SUNG";
    readonly DA_THANH_TOAN: "DA_THANH_TOAN";
    readonly DA_IN_PDF: "DA_IN_PDF";
    readonly BGD_TU_CHOI: "BGD_TU_CHOI";
};
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
export declare const Currency: {
    readonly VND: "VND";
    readonly USD: "USD";
};
export type Currency = (typeof Currency)[keyof typeof Currency];
export declare const AttachmentType: {
    readonly CONFIRM_IMAGE_1: "CONFIRM_IMAGE_1";
    readonly CONFIRM_IMAGE_2: "CONFIRM_IMAGE_2";
    readonly CONTRACT_IMAGE: "CONTRACT_IMAGE";
    readonly FREE: "FREE";
};
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType];
export declare const ChangeLogAction: {
    readonly CREATED: "CREATED";
    readonly SUBMITTED: "SUBMITTED";
    readonly STATUS_CHANGED: "STATUS_CHANGED";
    readonly FILE_UPLOADED: "FILE_UPLOADED";
    readonly COMMENTED: "COMMENTED";
};
export type ChangeLogAction = (typeof ChangeLogAction)[keyof typeof ChangeLogAction];
export declare const NotificationType: {
    readonly ASSIGNED: "ASSIGNED";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly SEND_TO_ACCOUNTING: "SEND_TO_ACCOUNTING";
    readonly MISSING_DOCS: "MISSING_DOCS";
    readonly PAID: "PAID";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
