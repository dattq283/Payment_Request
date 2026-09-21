import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Site: "Site";
    readonly User: "User";
    readonly UserSiteRole: "UserSiteRole";
    readonly PaymentRequest: "PaymentRequest";
    readonly InvoiceLink: "InvoiceLink";
    readonly Attachment: "Attachment";
    readonly RequestWatcher: "RequestWatcher";
    readonly Comment: "Comment";
    readonly ChangeLog: "ChangeLog";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SiteScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
};
export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly avatarUrl: "avatarUrl";
    readonly isActive: "isActive";
    readonly lastSiteSelected: "lastSiteSelected";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserSiteRoleScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly siteId: "siteId";
    readonly role: "role";
};
export type UserSiteRoleScalarFieldEnum = (typeof UserSiteRoleScalarFieldEnum)[keyof typeof UserSiteRoleScalarFieldEnum];
export declare const PaymentRequestScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly siteId: "siteId";
    readonly title: "title";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly paymentContent: "paymentContent";
    readonly bankName: "bankName";
    readonly bankAccount: "bankAccount";
    readonly recipientName: "recipientName";
    readonly dueDate: "dueDate";
    readonly creatorId: "creatorId";
    readonly approverId: "approverId";
    readonly status: "status";
    readonly rejectReason: "rejectReason";
    readonly replenishForId: "replenishForId";
    readonly version: "version";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentRequestScalarFieldEnum = (typeof PaymentRequestScalarFieldEnum)[keyof typeof PaymentRequestScalarFieldEnum];
export declare const InvoiceLinkScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly url: "url";
    readonly position: "position";
};
export type InvoiceLinkScalarFieldEnum = (typeof InvoiceLinkScalarFieldEnum)[keyof typeof InvoiceLinkScalarFieldEnum];
export declare const AttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly type: "type";
    readonly originalName: "originalName";
    readonly storageKey: "storageKey";
    readonly mimeType: "mimeType";
    readonly sizeBytes: "sizeBytes";
    readonly uploadedById: "uploadedById";
    readonly uploadedAt: "uploadedAt";
};
export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum];
export declare const RequestWatcherScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly userId: "userId";
};
export type RequestWatcherScalarFieldEnum = (typeof RequestWatcherScalarFieldEnum)[keyof typeof RequestWatcherScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly authorId: "authorId";
    readonly content: "content";
    readonly createdAt: "createdAt";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const ChangeLogScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly action: "action";
    readonly actorId: "actorId";
    readonly fromStatus: "fromStatus";
    readonly toStatus: "toStatus";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type ChangeLogScalarFieldEnum = (typeof ChangeLogScalarFieldEnum)[keyof typeof ChangeLogScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly requestId: "requestId";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const SiteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type SiteOrderByRelevanceFieldEnum = (typeof SiteOrderByRelevanceFieldEnum)[keyof typeof SiteOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly avatarUrl: "avatarUrl";
    readonly lastSiteSelected: "lastSiteSelected";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const UserSiteRoleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly siteId: "siteId";
};
export type UserSiteRoleOrderByRelevanceFieldEnum = (typeof UserSiteRoleOrderByRelevanceFieldEnum)[keyof typeof UserSiteRoleOrderByRelevanceFieldEnum];
export declare const PaymentRequestOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly siteId: "siteId";
    readonly title: "title";
    readonly paymentContent: "paymentContent";
    readonly bankName: "bankName";
    readonly bankAccount: "bankAccount";
    readonly recipientName: "recipientName";
    readonly creatorId: "creatorId";
    readonly approverId: "approverId";
    readonly rejectReason: "rejectReason";
    readonly replenishForId: "replenishForId";
};
export type PaymentRequestOrderByRelevanceFieldEnum = (typeof PaymentRequestOrderByRelevanceFieldEnum)[keyof typeof PaymentRequestOrderByRelevanceFieldEnum];
export declare const InvoiceLinkOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly url: "url";
};
export type InvoiceLinkOrderByRelevanceFieldEnum = (typeof InvoiceLinkOrderByRelevanceFieldEnum)[keyof typeof InvoiceLinkOrderByRelevanceFieldEnum];
export declare const AttachmentOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly originalName: "originalName";
    readonly storageKey: "storageKey";
    readonly mimeType: "mimeType";
    readonly uploadedById: "uploadedById";
};
export type AttachmentOrderByRelevanceFieldEnum = (typeof AttachmentOrderByRelevanceFieldEnum)[keyof typeof AttachmentOrderByRelevanceFieldEnum];
export declare const RequestWatcherOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly userId: "userId";
};
export type RequestWatcherOrderByRelevanceFieldEnum = (typeof RequestWatcherOrderByRelevanceFieldEnum)[keyof typeof RequestWatcherOrderByRelevanceFieldEnum];
export declare const CommentOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly authorId: "authorId";
    readonly content: "content";
};
export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum];
export declare const ChangeLogOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly actorId: "actorId";
    readonly note: "note";
};
export type ChangeLogOrderByRelevanceFieldEnum = (typeof ChangeLogOrderByRelevanceFieldEnum)[keyof typeof ChangeLogOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly requestId: "requestId";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
