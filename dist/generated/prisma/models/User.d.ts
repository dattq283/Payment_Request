import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    avatarUrl: string | null;
    isActive: boolean | null;
    lastSiteSelected: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    avatarUrl: string | null;
    isActive: boolean | null;
    lastSiteSelected: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    passwordHash: number;
    avatarUrl: number;
    isActive: number;
    lastSiteSelected: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    avatarUrl?: true;
    isActive?: true;
    lastSiteSelected?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    avatarUrl?: true;
    isActive?: true;
    lastSiteSelected?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    avatarUrl?: true;
    isActive?: true;
    lastSiteSelected?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl: string | null;
    isActive: boolean;
    lastSiteSelected: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastSiteSelected?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    siteRoles?: Prisma.UserSiteRoleListRelationFilter;
    createdRequests?: Prisma.PaymentRequestListRelationFilter;
    approvingRequests?: Prisma.PaymentRequestListRelationFilter;
    watching?: Prisma.RequestWatcherListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    changeLogs?: Prisma.ChangeLogListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastSiteSelected?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    siteRoles?: Prisma.UserSiteRoleOrderByRelationAggregateInput;
    createdRequests?: Prisma.PaymentRequestOrderByRelationAggregateInput;
    approvingRequests?: Prisma.PaymentRequestOrderByRelationAggregateInput;
    watching?: Prisma.RequestWatcherOrderByRelationAggregateInput;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    changeLogs?: Prisma.ChangeLogOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    _relevance?: Prisma.UserOrderByRelevanceInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastSiteSelected?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    siteRoles?: Prisma.UserSiteRoleListRelationFilter;
    createdRequests?: Prisma.PaymentRequestListRelationFilter;
    approvingRequests?: Prisma.PaymentRequestListRelationFilter;
    watching?: Prisma.RequestWatcherListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    changeLogs?: Prisma.ChangeLogListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastSiteSelected?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastSiteSelected?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserOrderByRelevanceInput = {
    fields: Prisma.UserOrderByRelevanceFieldEnum | Prisma.UserOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastSiteSelected?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastSiteSelected?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastSiteSelected?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutSiteRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSiteRolesInput, Prisma.UserUncheckedCreateWithoutSiteRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSiteRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSiteRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSiteRolesInput, Prisma.UserUncheckedCreateWithoutSiteRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSiteRolesInput;
    upsert?: Prisma.UserUpsertWithoutSiteRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSiteRolesInput, Prisma.UserUpdateWithoutSiteRolesInput>, Prisma.UserUncheckedUpdateWithoutSiteRolesInput>;
};
export type UserCreateNestedOneWithoutCreatedRequestsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedRequestsInput, Prisma.UserUncheckedCreateWithoutCreatedRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutApprovingRequestsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovingRequestsInput, Prisma.UserUncheckedCreateWithoutApprovingRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovingRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedRequestsInput, Prisma.UserUncheckedCreateWithoutCreatedRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedRequestsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedRequestsInput, Prisma.UserUpdateWithoutCreatedRequestsInput>, Prisma.UserUncheckedUpdateWithoutCreatedRequestsInput>;
};
export type UserUpdateOneWithoutApprovingRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovingRequestsInput, Prisma.UserUncheckedCreateWithoutApprovingRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovingRequestsInput;
    upsert?: Prisma.UserUpsertWithoutApprovingRequestsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutApprovingRequestsInput, Prisma.UserUpdateWithoutApprovingRequestsInput>, Prisma.UserUncheckedUpdateWithoutApprovingRequestsInput>;
};
export type UserCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAttachmentsInput, Prisma.UserUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAttachmentsInput, Prisma.UserUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.UserUpsertWithoutAttachmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.UserUpdateWithoutAttachmentsInput>, Prisma.UserUncheckedUpdateWithoutAttachmentsInput>;
};
export type UserCreateNestedOneWithoutWatchingInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWatchingInput, Prisma.UserUncheckedCreateWithoutWatchingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWatchingInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWatchingNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWatchingInput, Prisma.UserUncheckedCreateWithoutWatchingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWatchingInput;
    upsert?: Prisma.UserUpsertWithoutWatchingInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWatchingInput, Prisma.UserUpdateWithoutWatchingInput>, Prisma.UserUncheckedUpdateWithoutWatchingInput>;
};
export type UserCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.UserUpsertWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput, Prisma.UserUpdateWithoutCommentsInput>, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserCreateNestedOneWithoutChangeLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChangeLogsInput, Prisma.UserUncheckedCreateWithoutChangeLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChangeLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutChangeLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChangeLogsInput, Prisma.UserUncheckedCreateWithoutChangeLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChangeLogsInput;
    upsert?: Prisma.UserUpsertWithoutChangeLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutChangeLogsInput, Prisma.UserUpdateWithoutChangeLogsInput>, Prisma.UserUncheckedUpdateWithoutChangeLogsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutSiteRolesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSiteRolesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSiteRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSiteRolesInput, Prisma.UserUncheckedCreateWithoutSiteRolesInput>;
};
export type UserUpsertWithoutSiteRolesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSiteRolesInput, Prisma.UserUncheckedUpdateWithoutSiteRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSiteRolesInput, Prisma.UserUncheckedCreateWithoutSiteRolesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSiteRolesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSiteRolesInput, Prisma.UserUncheckedUpdateWithoutSiteRolesInput>;
};
export type UserUpdateWithoutSiteRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSiteRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCreatedRequestsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreatedRequestsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreatedRequestsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedRequestsInput, Prisma.UserUncheckedCreateWithoutCreatedRequestsInput>;
};
export type UserCreateWithoutApprovingRequestsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutApprovingRequestsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutApprovingRequestsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovingRequestsInput, Prisma.UserUncheckedCreateWithoutApprovingRequestsInput>;
};
export type UserUpsertWithoutCreatedRequestsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedRequestsInput, Prisma.UserUncheckedUpdateWithoutCreatedRequestsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedRequestsInput, Prisma.UserUncheckedCreateWithoutCreatedRequestsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedRequestsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedRequestsInput, Prisma.UserUncheckedUpdateWithoutCreatedRequestsInput>;
};
export type UserUpdateWithoutCreatedRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutApprovingRequestsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutApprovingRequestsInput, Prisma.UserUncheckedUpdateWithoutApprovingRequestsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovingRequestsInput, Prisma.UserUncheckedCreateWithoutApprovingRequestsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutApprovingRequestsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutApprovingRequestsInput, Prisma.UserUncheckedUpdateWithoutApprovingRequestsInput>;
};
export type UserUpdateWithoutApprovingRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutApprovingRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAttachmentsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAttachmentsInput, Prisma.UserUncheckedCreateWithoutAttachmentsInput>;
};
export type UserUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAttachmentsInput, Prisma.UserUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAttachmentsInput, Prisma.UserUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAttachmentsInput, Prisma.UserUncheckedUpdateWithoutAttachmentsInput>;
};
export type UserUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutWatchingInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutWatchingInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutWatchingInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWatchingInput, Prisma.UserUncheckedCreateWithoutWatchingInput>;
};
export type UserUpsertWithoutWatchingInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWatchingInput, Prisma.UserUncheckedUpdateWithoutWatchingInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWatchingInput, Prisma.UserUncheckedCreateWithoutWatchingInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWatchingInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWatchingInput, Prisma.UserUncheckedUpdateWithoutWatchingInput>;
};
export type UserUpdateWithoutWatchingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWatchingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCommentsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
};
export type UserUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutChangeLogsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutChangeLogsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutChangeLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutChangeLogsInput, Prisma.UserUncheckedCreateWithoutChangeLogsInput>;
};
export type UserUpsertWithoutChangeLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutChangeLogsInput, Prisma.UserUncheckedUpdateWithoutChangeLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutChangeLogsInput, Prisma.UserUncheckedCreateWithoutChangeLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutChangeLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutChangeLogsInput, Prisma.UserUncheckedUpdateWithoutChangeLogsInput>;
};
export type UserUpdateWithoutChangeLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutChangeLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastSiteSelected?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutUserInput;
    createdRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutCreatorInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutApproverInput;
    watching?: Prisma.RequestWatcherUncheckedCreateNestedManyWithoutUserInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadByInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    changeLogs?: Prisma.ChangeLogUncheckedCreateNestedManyWithoutActorInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastSiteSelected?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    siteRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput;
    createdRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutCreatorNestedInput;
    approvingRequests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutApproverNestedInput;
    watching?: Prisma.RequestWatcherUncheckedUpdateManyWithoutUserNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadByNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    changeLogs?: Prisma.ChangeLogUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserCountOutputType = {
    siteRoles: number;
    createdRequests: number;
    approvingRequests: number;
    watching: number;
    attachments: number;
    comments: number;
    changeLogs: number;
    notifications: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    siteRoles?: boolean | UserCountOutputTypeCountSiteRolesArgs;
    createdRequests?: boolean | UserCountOutputTypeCountCreatedRequestsArgs;
    approvingRequests?: boolean | UserCountOutputTypeCountApprovingRequestsArgs;
    watching?: boolean | UserCountOutputTypeCountWatchingArgs;
    attachments?: boolean | UserCountOutputTypeCountAttachmentsArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    changeLogs?: boolean | UserCountOutputTypeCountChangeLogsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountSiteRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSiteRoleWhereInput;
};
export type UserCountOutputTypeCountCreatedRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentRequestWhereInput;
};
export type UserCountOutputTypeCountApprovingRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentRequestWhereInput;
};
export type UserCountOutputTypeCountWatchingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequestWatcherWhereInput;
};
export type UserCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type UserCountOutputTypeCountChangeLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeLogWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    lastSiteSelected?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    siteRoles?: boolean | Prisma.User$siteRolesArgs<ExtArgs>;
    createdRequests?: boolean | Prisma.User$createdRequestsArgs<ExtArgs>;
    approvingRequests?: boolean | Prisma.User$approvingRequestsArgs<ExtArgs>;
    watching?: boolean | Prisma.User$watchingArgs<ExtArgs>;
    attachments?: boolean | Prisma.User$attachmentsArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    changeLogs?: boolean | Prisma.User$changeLogsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    lastSiteSelected?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "avatarUrl" | "isActive" | "lastSiteSelected" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    siteRoles?: boolean | Prisma.User$siteRolesArgs<ExtArgs>;
    createdRequests?: boolean | Prisma.User$createdRequestsArgs<ExtArgs>;
    approvingRequests?: boolean | Prisma.User$approvingRequestsArgs<ExtArgs>;
    watching?: boolean | Prisma.User$watchingArgs<ExtArgs>;
    attachments?: boolean | Prisma.User$attachmentsArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    changeLogs?: boolean | Prisma.User$changeLogsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        siteRoles: Prisma.$UserSiteRolePayload<ExtArgs>[];
        createdRequests: Prisma.$PaymentRequestPayload<ExtArgs>[];
        approvingRequests: Prisma.$PaymentRequestPayload<ExtArgs>[];
        watching: Prisma.$RequestWatcherPayload<ExtArgs>[];
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
        comments: Prisma.$CommentPayload<ExtArgs>[];
        changeLogs: Prisma.$ChangeLogPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        avatarUrl: string | null;
        isActive: boolean;
        lastSiteSelected: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    siteRoles<T extends Prisma.User$siteRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$siteRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdRequests<T extends Prisma.User$createdRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvingRequests<T extends Prisma.User$approvingRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$approvingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    watching<T extends Prisma.User$watchingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$watchingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attachments<T extends Prisma.User$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.User$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    changeLogs<T extends Prisma.User$changeLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$changeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastSiteSelected: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$siteRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    where?: Prisma.UserSiteRoleWhereInput;
    orderBy?: Prisma.UserSiteRoleOrderByWithRelationInput | Prisma.UserSiteRoleOrderByWithRelationInput[];
    cursor?: Prisma.UserSiteRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSiteRoleScalarFieldEnum | Prisma.UserSiteRoleScalarFieldEnum[];
};
export type User$createdRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentRequestSelect<ExtArgs> | null;
    omit?: Prisma.PaymentRequestOmit<ExtArgs> | null;
    include?: Prisma.PaymentRequestInclude<ExtArgs> | null;
    where?: Prisma.PaymentRequestWhereInput;
    orderBy?: Prisma.PaymentRequestOrderByWithRelationInput | Prisma.PaymentRequestOrderByWithRelationInput[];
    cursor?: Prisma.PaymentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentRequestScalarFieldEnum | Prisma.PaymentRequestScalarFieldEnum[];
};
export type User$approvingRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentRequestSelect<ExtArgs> | null;
    omit?: Prisma.PaymentRequestOmit<ExtArgs> | null;
    include?: Prisma.PaymentRequestInclude<ExtArgs> | null;
    where?: Prisma.PaymentRequestWhereInput;
    orderBy?: Prisma.PaymentRequestOrderByWithRelationInput | Prisma.PaymentRequestOrderByWithRelationInput[];
    cursor?: Prisma.PaymentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentRequestScalarFieldEnum | Prisma.PaymentRequestScalarFieldEnum[];
};
export type User$watchingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    where?: Prisma.RequestWatcherWhereInput;
    orderBy?: Prisma.RequestWatcherOrderByWithRelationInput | Prisma.RequestWatcherOrderByWithRelationInput[];
    cursor?: Prisma.RequestWatcherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequestWatcherScalarFieldEnum | Prisma.RequestWatcherScalarFieldEnum[];
};
export type User$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type User$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentSelect<ExtArgs> | null;
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
export type User$changeLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    where?: Prisma.ChangeLogWhereInput;
    orderBy?: Prisma.ChangeLogOrderByWithRelationInput | Prisma.ChangeLogOrderByWithRelationInput[];
    cursor?: Prisma.ChangeLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChangeLogScalarFieldEnum | Prisma.ChangeLogScalarFieldEnum[];
};
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
