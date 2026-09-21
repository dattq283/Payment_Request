"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationOrderByRelevanceFieldEnum = exports.ChangeLogOrderByRelevanceFieldEnum = exports.CommentOrderByRelevanceFieldEnum = exports.RequestWatcherOrderByRelevanceFieldEnum = exports.AttachmentOrderByRelevanceFieldEnum = exports.InvoiceLinkOrderByRelevanceFieldEnum = exports.PaymentRequestOrderByRelevanceFieldEnum = exports.UserSiteRoleOrderByRelevanceFieldEnum = exports.UserOrderByRelevanceFieldEnum = exports.NullsOrder = exports.SiteOrderByRelevanceFieldEnum = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.ChangeLogScalarFieldEnum = exports.CommentScalarFieldEnum = exports.RequestWatcherScalarFieldEnum = exports.AttachmentScalarFieldEnum = exports.InvoiceLinkScalarFieldEnum = exports.PaymentRequestScalarFieldEnum = exports.UserSiteRoleScalarFieldEnum = exports.UserScalarFieldEnum = exports.SiteScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Site: 'Site',
    User: 'User',
    UserSiteRole: 'UserSiteRole',
    PaymentRequest: 'PaymentRequest',
    InvoiceLink: 'InvoiceLink',
    Attachment: 'Attachment',
    RequestWatcher: 'RequestWatcher',
    Comment: 'Comment',
    ChangeLog: 'ChangeLog',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.SiteScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    lastSiteSelected: 'lastSiteSelected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserSiteRoleScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    siteId: 'siteId',
    role: 'role'
};
exports.PaymentRequestScalarFieldEnum = {
    id: 'id',
    code: 'code',
    siteId: 'siteId',
    title: 'title',
    amount: 'amount',
    currency: 'currency',
    paymentContent: 'paymentContent',
    bankName: 'bankName',
    bankAccount: 'bankAccount',
    recipientName: 'recipientName',
    dueDate: 'dueDate',
    creatorId: 'creatorId',
    approverId: 'approverId',
    status: 'status',
    rejectReason: 'rejectReason',
    replenishForId: 'replenishForId',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InvoiceLinkScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    url: 'url',
    position: 'position'
};
exports.AttachmentScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    type: 'type',
    originalName: 'originalName',
    storageKey: 'storageKey',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    uploadedById: 'uploadedById',
    uploadedAt: 'uploadedAt'
};
exports.RequestWatcherScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    userId: 'userId'
};
exports.CommentScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    authorId: 'authorId',
    content: 'content',
    createdAt: 'createdAt'
};
exports.ChangeLogScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    action: 'action',
    actorId: 'actorId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    note: 'note',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    requestId: 'requestId',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.SiteOrderByRelevanceFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.UserOrderByRelevanceFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    lastSiteSelected: 'lastSiteSelected'
};
exports.UserSiteRoleOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    siteId: 'siteId'
};
exports.PaymentRequestOrderByRelevanceFieldEnum = {
    id: 'id',
    code: 'code',
    siteId: 'siteId',
    title: 'title',
    paymentContent: 'paymentContent',
    bankName: 'bankName',
    bankAccount: 'bankAccount',
    recipientName: 'recipientName',
    creatorId: 'creatorId',
    approverId: 'approverId',
    rejectReason: 'rejectReason',
    replenishForId: 'replenishForId'
};
exports.InvoiceLinkOrderByRelevanceFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    url: 'url'
};
exports.AttachmentOrderByRelevanceFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    originalName: 'originalName',
    storageKey: 'storageKey',
    mimeType: 'mimeType',
    uploadedById: 'uploadedById'
};
exports.RequestWatcherOrderByRelevanceFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    userId: 'userId'
};
exports.CommentOrderByRelevanceFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    authorId: 'authorId',
    content: 'content'
};
exports.ChangeLogOrderByRelevanceFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    actorId: 'actorId',
    note: 'note'
};
exports.NotificationOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    requestId: 'requestId'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map