import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChangeLogModel = runtime.Types.Result.DefaultSelection<Prisma.$ChangeLogPayload>;
export type AggregateChangeLog = {
    _count: ChangeLogCountAggregateOutputType | null;
    _min: ChangeLogMinAggregateOutputType | null;
    _max: ChangeLogMaxAggregateOutputType | null;
};
export type ChangeLogMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    action: $Enums.ChangeLogAction | null;
    actorId: string | null;
    fromStatus: $Enums.RequestStatus | null;
    toStatus: $Enums.RequestStatus | null;
    note: string | null;
    createdAt: Date | null;
};
export type ChangeLogMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    action: $Enums.ChangeLogAction | null;
    actorId: string | null;
    fromStatus: $Enums.RequestStatus | null;
    toStatus: $Enums.RequestStatus | null;
    note: string | null;
    createdAt: Date | null;
};
export type ChangeLogCountAggregateOutputType = {
    id: number;
    requestId: number;
    action: number;
    actorId: number;
    fromStatus: number;
    toStatus: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type ChangeLogMinAggregateInputType = {
    id?: true;
    requestId?: true;
    action?: true;
    actorId?: true;
    fromStatus?: true;
    toStatus?: true;
    note?: true;
    createdAt?: true;
};
export type ChangeLogMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    action?: true;
    actorId?: true;
    fromStatus?: true;
    toStatus?: true;
    note?: true;
    createdAt?: true;
};
export type ChangeLogCountAggregateInputType = {
    id?: true;
    requestId?: true;
    action?: true;
    actorId?: true;
    fromStatus?: true;
    toStatus?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type ChangeLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeLogWhereInput;
    orderBy?: Prisma.ChangeLogOrderByWithRelationInput | Prisma.ChangeLogOrderByWithRelationInput[];
    cursor?: Prisma.ChangeLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChangeLogCountAggregateInputType;
    _min?: ChangeLogMinAggregateInputType;
    _max?: ChangeLogMaxAggregateInputType;
};
export type GetChangeLogAggregateType<T extends ChangeLogAggregateArgs> = {
    [P in keyof T & keyof AggregateChangeLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChangeLog[P]> : Prisma.GetScalarType<T[P], AggregateChangeLog[P]>;
};
export type ChangeLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeLogWhereInput;
    orderBy?: Prisma.ChangeLogOrderByWithAggregationInput | Prisma.ChangeLogOrderByWithAggregationInput[];
    by: Prisma.ChangeLogScalarFieldEnum[] | Prisma.ChangeLogScalarFieldEnum;
    having?: Prisma.ChangeLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChangeLogCountAggregateInputType | true;
    _min?: ChangeLogMinAggregateInputType;
    _max?: ChangeLogMaxAggregateInputType;
};
export type ChangeLogGroupByOutputType = {
    id: string;
    requestId: string;
    action: $Enums.ChangeLogAction;
    actorId: string;
    fromStatus: $Enums.RequestStatus | null;
    toStatus: $Enums.RequestStatus | null;
    note: string | null;
    createdAt: Date;
    _count: ChangeLogCountAggregateOutputType | null;
    _min: ChangeLogMinAggregateOutputType | null;
    _max: ChangeLogMaxAggregateOutputType | null;
};
export type GetChangeLogGroupByPayload<T extends ChangeLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChangeLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChangeLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChangeLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChangeLogGroupByOutputType[P]>;
}>>;
export type ChangeLogWhereInput = {
    AND?: Prisma.ChangeLogWhereInput | Prisma.ChangeLogWhereInput[];
    OR?: Prisma.ChangeLogWhereInput[];
    NOT?: Prisma.ChangeLogWhereInput | Prisma.ChangeLogWhereInput[];
    id?: Prisma.StringFilter<"ChangeLog"> | string;
    requestId?: Prisma.StringFilter<"ChangeLog"> | string;
    action?: Prisma.EnumChangeLogActionFilter<"ChangeLog"> | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFilter<"ChangeLog"> | string;
    fromStatus?: Prisma.EnumRequestStatusNullableFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    toStatus?: Prisma.EnumRequestStatusNullableFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    note?: Prisma.StringNullableFilter<"ChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChangeLog"> | Date | string;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
    actor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ChangeLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    toStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    request?: Prisma.PaymentRequestOrderByWithRelationInput;
    actor?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.ChangeLogOrderByRelevanceInput;
};
export type ChangeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ChangeLogWhereInput | Prisma.ChangeLogWhereInput[];
    OR?: Prisma.ChangeLogWhereInput[];
    NOT?: Prisma.ChangeLogWhereInput | Prisma.ChangeLogWhereInput[];
    requestId?: Prisma.StringFilter<"ChangeLog"> | string;
    action?: Prisma.EnumChangeLogActionFilter<"ChangeLog"> | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFilter<"ChangeLog"> | string;
    fromStatus?: Prisma.EnumRequestStatusNullableFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    toStatus?: Prisma.EnumRequestStatusNullableFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    note?: Prisma.StringNullableFilter<"ChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChangeLog"> | Date | string;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
    actor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ChangeLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    toStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ChangeLogCountOrderByAggregateInput;
    _max?: Prisma.ChangeLogMaxOrderByAggregateInput;
    _min?: Prisma.ChangeLogMinOrderByAggregateInput;
};
export type ChangeLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChangeLogScalarWhereWithAggregatesInput | Prisma.ChangeLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChangeLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChangeLogScalarWhereWithAggregatesInput | Prisma.ChangeLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChangeLog"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"ChangeLog"> | string;
    action?: Prisma.EnumChangeLogActionWithAggregatesFilter<"ChangeLog"> | $Enums.ChangeLogAction;
    actorId?: Prisma.StringWithAggregatesFilter<"ChangeLog"> | string;
    fromStatus?: Prisma.EnumRequestStatusNullableWithAggregatesFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    toStatus?: Prisma.EnumRequestStatusNullableWithAggregatesFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"ChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChangeLog"> | Date | string;
};
export type ChangeLogCreateInput = {
    id?: string;
    action: $Enums.ChangeLogAction;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
    request: Prisma.PaymentRequestCreateNestedOneWithoutChangeLogsInput;
    actor: Prisma.UserCreateNestedOneWithoutChangeLogsInput;
};
export type ChangeLogUncheckedCreateInput = {
    id?: string;
    requestId: string;
    action: $Enums.ChangeLogAction;
    actorId: string;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ChangeLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutChangeLogsNestedInput;
    actor?: Prisma.UserUpdateOneRequiredWithoutChangeLogsNestedInput;
};
export type ChangeLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogCreateManyInput = {
    id?: string;
    requestId: string;
    action: $Enums.ChangeLogAction;
    actorId: string;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ChangeLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogListRelationFilter = {
    every?: Prisma.ChangeLogWhereInput;
    some?: Prisma.ChangeLogWhereInput;
    none?: Prisma.ChangeLogWhereInput;
};
export type ChangeLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChangeLogOrderByRelevanceInput = {
    fields: Prisma.ChangeLogOrderByRelevanceFieldEnum | Prisma.ChangeLogOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ChangeLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChangeLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChangeLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChangeLogCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutActorInput, Prisma.ChangeLogUncheckedCreateWithoutActorInput> | Prisma.ChangeLogCreateWithoutActorInput[] | Prisma.ChangeLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutActorInput | Prisma.ChangeLogCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ChangeLogCreateManyActorInputEnvelope;
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
};
export type ChangeLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutActorInput, Prisma.ChangeLogUncheckedCreateWithoutActorInput> | Prisma.ChangeLogCreateWithoutActorInput[] | Prisma.ChangeLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutActorInput | Prisma.ChangeLogCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ChangeLogCreateManyActorInputEnvelope;
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
};
export type ChangeLogUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutActorInput, Prisma.ChangeLogUncheckedCreateWithoutActorInput> | Prisma.ChangeLogCreateWithoutActorInput[] | Prisma.ChangeLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutActorInput | Prisma.ChangeLogCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ChangeLogUpsertWithWhereUniqueWithoutActorInput | Prisma.ChangeLogUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ChangeLogCreateManyActorInputEnvelope;
    set?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    disconnect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    delete?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    update?: Prisma.ChangeLogUpdateWithWhereUniqueWithoutActorInput | Prisma.ChangeLogUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ChangeLogUpdateManyWithWhereWithoutActorInput | Prisma.ChangeLogUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ChangeLogScalarWhereInput | Prisma.ChangeLogScalarWhereInput[];
};
export type ChangeLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutActorInput, Prisma.ChangeLogUncheckedCreateWithoutActorInput> | Prisma.ChangeLogCreateWithoutActorInput[] | Prisma.ChangeLogUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutActorInput | Prisma.ChangeLogCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ChangeLogUpsertWithWhereUniqueWithoutActorInput | Prisma.ChangeLogUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ChangeLogCreateManyActorInputEnvelope;
    set?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    disconnect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    delete?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    update?: Prisma.ChangeLogUpdateWithWhereUniqueWithoutActorInput | Prisma.ChangeLogUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ChangeLogUpdateManyWithWhereWithoutActorInput | Prisma.ChangeLogUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ChangeLogScalarWhereInput | Prisma.ChangeLogScalarWhereInput[];
};
export type ChangeLogCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutRequestInput, Prisma.ChangeLogUncheckedCreateWithoutRequestInput> | Prisma.ChangeLogCreateWithoutRequestInput[] | Prisma.ChangeLogUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutRequestInput | Prisma.ChangeLogCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.ChangeLogCreateManyRequestInputEnvelope;
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
};
export type ChangeLogUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutRequestInput, Prisma.ChangeLogUncheckedCreateWithoutRequestInput> | Prisma.ChangeLogCreateWithoutRequestInput[] | Prisma.ChangeLogUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutRequestInput | Prisma.ChangeLogCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.ChangeLogCreateManyRequestInputEnvelope;
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
};
export type ChangeLogUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutRequestInput, Prisma.ChangeLogUncheckedCreateWithoutRequestInput> | Prisma.ChangeLogCreateWithoutRequestInput[] | Prisma.ChangeLogUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutRequestInput | Prisma.ChangeLogCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.ChangeLogUpsertWithWhereUniqueWithoutRequestInput | Prisma.ChangeLogUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.ChangeLogCreateManyRequestInputEnvelope;
    set?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    disconnect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    delete?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    update?: Prisma.ChangeLogUpdateWithWhereUniqueWithoutRequestInput | Prisma.ChangeLogUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.ChangeLogUpdateManyWithWhereWithoutRequestInput | Prisma.ChangeLogUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.ChangeLogScalarWhereInput | Prisma.ChangeLogScalarWhereInput[];
};
export type ChangeLogUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeLogCreateWithoutRequestInput, Prisma.ChangeLogUncheckedCreateWithoutRequestInput> | Prisma.ChangeLogCreateWithoutRequestInput[] | Prisma.ChangeLogUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ChangeLogCreateOrConnectWithoutRequestInput | Prisma.ChangeLogCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.ChangeLogUpsertWithWhereUniqueWithoutRequestInput | Prisma.ChangeLogUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.ChangeLogCreateManyRequestInputEnvelope;
    set?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    disconnect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    delete?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    connect?: Prisma.ChangeLogWhereUniqueInput | Prisma.ChangeLogWhereUniqueInput[];
    update?: Prisma.ChangeLogUpdateWithWhereUniqueWithoutRequestInput | Prisma.ChangeLogUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.ChangeLogUpdateManyWithWhereWithoutRequestInput | Prisma.ChangeLogUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.ChangeLogScalarWhereInput | Prisma.ChangeLogScalarWhereInput[];
};
export type EnumChangeLogActionFieldUpdateOperationsInput = {
    set?: $Enums.ChangeLogAction;
};
export type NullableEnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus | null;
};
export type ChangeLogCreateWithoutActorInput = {
    id?: string;
    action: $Enums.ChangeLogAction;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
    request: Prisma.PaymentRequestCreateNestedOneWithoutChangeLogsInput;
};
export type ChangeLogUncheckedCreateWithoutActorInput = {
    id?: string;
    requestId: string;
    action: $Enums.ChangeLogAction;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ChangeLogCreateOrConnectWithoutActorInput = {
    where: Prisma.ChangeLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeLogCreateWithoutActorInput, Prisma.ChangeLogUncheckedCreateWithoutActorInput>;
};
export type ChangeLogCreateManyActorInputEnvelope = {
    data: Prisma.ChangeLogCreateManyActorInput | Prisma.ChangeLogCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type ChangeLogUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.ChangeLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeLogUpdateWithoutActorInput, Prisma.ChangeLogUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.ChangeLogCreateWithoutActorInput, Prisma.ChangeLogUncheckedCreateWithoutActorInput>;
};
export type ChangeLogUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.ChangeLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeLogUpdateWithoutActorInput, Prisma.ChangeLogUncheckedUpdateWithoutActorInput>;
};
export type ChangeLogUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.ChangeLogScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeLogUpdateManyMutationInput, Prisma.ChangeLogUncheckedUpdateManyWithoutActorInput>;
};
export type ChangeLogScalarWhereInput = {
    AND?: Prisma.ChangeLogScalarWhereInput | Prisma.ChangeLogScalarWhereInput[];
    OR?: Prisma.ChangeLogScalarWhereInput[];
    NOT?: Prisma.ChangeLogScalarWhereInput | Prisma.ChangeLogScalarWhereInput[];
    id?: Prisma.StringFilter<"ChangeLog"> | string;
    requestId?: Prisma.StringFilter<"ChangeLog"> | string;
    action?: Prisma.EnumChangeLogActionFilter<"ChangeLog"> | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFilter<"ChangeLog"> | string;
    fromStatus?: Prisma.EnumRequestStatusNullableFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    toStatus?: Prisma.EnumRequestStatusNullableFilter<"ChangeLog"> | $Enums.RequestStatus | null;
    note?: Prisma.StringNullableFilter<"ChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChangeLog"> | Date | string;
};
export type ChangeLogCreateWithoutRequestInput = {
    id?: string;
    action: $Enums.ChangeLogAction;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
    actor: Prisma.UserCreateNestedOneWithoutChangeLogsInput;
};
export type ChangeLogUncheckedCreateWithoutRequestInput = {
    id?: string;
    action: $Enums.ChangeLogAction;
    actorId: string;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ChangeLogCreateOrConnectWithoutRequestInput = {
    where: Prisma.ChangeLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeLogCreateWithoutRequestInput, Prisma.ChangeLogUncheckedCreateWithoutRequestInput>;
};
export type ChangeLogCreateManyRequestInputEnvelope = {
    data: Prisma.ChangeLogCreateManyRequestInput | Prisma.ChangeLogCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type ChangeLogUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.ChangeLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeLogUpdateWithoutRequestInput, Prisma.ChangeLogUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.ChangeLogCreateWithoutRequestInput, Prisma.ChangeLogUncheckedCreateWithoutRequestInput>;
};
export type ChangeLogUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.ChangeLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeLogUpdateWithoutRequestInput, Prisma.ChangeLogUncheckedUpdateWithoutRequestInput>;
};
export type ChangeLogUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.ChangeLogScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeLogUpdateManyMutationInput, Prisma.ChangeLogUncheckedUpdateManyWithoutRequestInput>;
};
export type ChangeLogCreateManyActorInput = {
    id?: string;
    requestId: string;
    action: $Enums.ChangeLogAction;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ChangeLogUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutChangeLogsNestedInput;
};
export type ChangeLogUncheckedUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogUncheckedUpdateManyWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogCreateManyRequestInput = {
    id?: string;
    action: $Enums.ChangeLogAction;
    actorId: string;
    fromStatus?: $Enums.RequestStatus | null;
    toStatus?: $Enums.RequestStatus | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ChangeLogUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneRequiredWithoutChangeLogsNestedInput;
};
export type ChangeLogUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumChangeLogActionFieldUpdateOperationsInput | $Enums.ChangeLogAction;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    toStatus?: Prisma.NullableEnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChangeLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    action?: boolean;
    actorId?: boolean;
    fromStatus?: boolean;
    toStatus?: boolean;
    note?: boolean;
    createdAt?: boolean;
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["changeLog"]>;
export type ChangeLogSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    action?: boolean;
    actorId?: boolean;
    fromStatus?: boolean;
    toStatus?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type ChangeLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "action" | "actorId" | "fromStatus" | "toStatus" | "note" | "createdAt", ExtArgs["result"]["changeLog"]>;
export type ChangeLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ChangeLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChangeLog";
    objects: {
        request: Prisma.$PaymentRequestPayload<ExtArgs>;
        actor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        action: $Enums.ChangeLogAction;
        actorId: string;
        fromStatus: $Enums.RequestStatus | null;
        toStatus: $Enums.RequestStatus | null;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["changeLog"]>;
    composites: {};
};
export type ChangeLogGetPayload<S extends boolean | null | undefined | ChangeLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload, S>;
export type ChangeLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChangeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChangeLogCountAggregateInputType | true;
};
export interface ChangeLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChangeLog'];
        meta: {
            name: 'ChangeLog';
        };
    };
    findUnique<T extends ChangeLogFindUniqueArgs>(args: Prisma.SelectSubset<T, ChangeLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChangeLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChangeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChangeLogFindFirstArgs>(args?: Prisma.SelectSubset<T, ChangeLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChangeLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChangeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChangeLogFindManyArgs>(args?: Prisma.SelectSubset<T, ChangeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChangeLogCreateArgs>(args: Prisma.SelectSubset<T, ChangeLogCreateArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChangeLogCreateManyArgs>(args?: Prisma.SelectSubset<T, ChangeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ChangeLogDeleteArgs>(args: Prisma.SelectSubset<T, ChangeLogDeleteArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChangeLogUpdateArgs>(args: Prisma.SelectSubset<T, ChangeLogUpdateArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChangeLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChangeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChangeLogUpdateManyArgs>(args: Prisma.SelectSubset<T, ChangeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ChangeLogUpsertArgs>(args: Prisma.SelectSubset<T, ChangeLogUpsertArgs<ExtArgs>>): Prisma.Prisma__ChangeLogClient<runtime.Types.Result.GetResult<Prisma.$ChangeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChangeLogCountArgs>(args?: Prisma.Subset<T, ChangeLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChangeLogCountAggregateOutputType> : number>;
    aggregate<T extends ChangeLogAggregateArgs>(args: Prisma.Subset<T, ChangeLogAggregateArgs>): Prisma.PrismaPromise<GetChangeLogAggregateType<T>>;
    groupBy<T extends ChangeLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChangeLogGroupByArgs['orderBy'];
    } : {
        orderBy?: ChangeLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChangeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChangeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChangeLogFieldRefs;
}
export interface Prisma__ChangeLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.PaymentRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentRequestClient<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    actor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChangeLogFieldRefs {
    readonly id: Prisma.FieldRef<"ChangeLog", 'String'>;
    readonly requestId: Prisma.FieldRef<"ChangeLog", 'String'>;
    readonly action: Prisma.FieldRef<"ChangeLog", 'ChangeLogAction'>;
    readonly actorId: Prisma.FieldRef<"ChangeLog", 'String'>;
    readonly fromStatus: Prisma.FieldRef<"ChangeLog", 'RequestStatus'>;
    readonly toStatus: Prisma.FieldRef<"ChangeLog", 'RequestStatus'>;
    readonly note: Prisma.FieldRef<"ChangeLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ChangeLog", 'DateTime'>;
}
export type ChangeLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    where: Prisma.ChangeLogWhereUniqueInput;
};
export type ChangeLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    where: Prisma.ChangeLogWhereUniqueInput;
};
export type ChangeLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChangeLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChangeLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChangeLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChangeLogCreateInput, Prisma.ChangeLogUncheckedCreateInput>;
};
export type ChangeLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChangeLogCreateManyInput | Prisma.ChangeLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChangeLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChangeLogUpdateInput, Prisma.ChangeLogUncheckedUpdateInput>;
    where: Prisma.ChangeLogWhereUniqueInput;
};
export type ChangeLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChangeLogUpdateManyMutationInput, Prisma.ChangeLogUncheckedUpdateManyInput>;
    where?: Prisma.ChangeLogWhereInput;
    limit?: number;
};
export type ChangeLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    where: Prisma.ChangeLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeLogCreateInput, Prisma.ChangeLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChangeLogUpdateInput, Prisma.ChangeLogUncheckedUpdateInput>;
};
export type ChangeLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
    where: Prisma.ChangeLogWhereUniqueInput;
};
export type ChangeLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeLogWhereInput;
    limit?: number;
};
export type ChangeLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeLogSelect<ExtArgs> | null;
    omit?: Prisma.ChangeLogOmit<ExtArgs> | null;
    include?: Prisma.ChangeLogInclude<ExtArgs> | null;
};
