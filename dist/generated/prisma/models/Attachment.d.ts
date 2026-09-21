import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttachmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AttachmentPayload>;
export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null;
    _avg: AttachmentAvgAggregateOutputType | null;
    _sum: AttachmentSumAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type AttachmentAvgAggregateOutputType = {
    sizeBytes: number | null;
};
export type AttachmentSumAggregateOutputType = {
    sizeBytes: number | null;
};
export type AttachmentMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    type: $Enums.AttachmentType | null;
    originalName: string | null;
    storageKey: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    uploadedById: string | null;
    uploadedAt: Date | null;
};
export type AttachmentMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    type: $Enums.AttachmentType | null;
    originalName: string | null;
    storageKey: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    uploadedById: string | null;
    uploadedAt: Date | null;
};
export type AttachmentCountAggregateOutputType = {
    id: number;
    requestId: number;
    type: number;
    originalName: number;
    storageKey: number;
    mimeType: number;
    sizeBytes: number;
    uploadedById: number;
    uploadedAt: number;
    _all: number;
};
export type AttachmentAvgAggregateInputType = {
    sizeBytes?: true;
};
export type AttachmentSumAggregateInputType = {
    sizeBytes?: true;
};
export type AttachmentMinAggregateInputType = {
    id?: true;
    requestId?: true;
    type?: true;
    originalName?: true;
    storageKey?: true;
    mimeType?: true;
    sizeBytes?: true;
    uploadedById?: true;
    uploadedAt?: true;
};
export type AttachmentMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    type?: true;
    originalName?: true;
    storageKey?: true;
    mimeType?: true;
    sizeBytes?: true;
    uploadedById?: true;
    uploadedAt?: true;
};
export type AttachmentCountAggregateInputType = {
    id?: true;
    requestId?: true;
    type?: true;
    originalName?: true;
    storageKey?: true;
    mimeType?: true;
    sizeBytes?: true;
    uploadedById?: true;
    uploadedAt?: true;
    _all?: true;
};
export type AttachmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttachmentCountAggregateInputType;
    _avg?: AttachmentAvgAggregateInputType;
    _sum?: AttachmentSumAggregateInputType;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttachment[P]> : Prisma.GetScalarType<T[P], AggregateAttachment[P]>;
};
export type AttachmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithAggregationInput | Prisma.AttachmentOrderByWithAggregationInput[];
    by: Prisma.AttachmentScalarFieldEnum[] | Prisma.AttachmentScalarFieldEnum;
    having?: Prisma.AttachmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttachmentCountAggregateInputType | true;
    _avg?: AttachmentAvgAggregateInputType;
    _sum?: AttachmentSumAggregateInputType;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type AttachmentGroupByOutputType = {
    id: string;
    requestId: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedById: string;
    uploadedAt: Date;
    _count: AttachmentCountAggregateOutputType | null;
    _avg: AttachmentAvgAggregateOutputType | null;
    _sum: AttachmentSumAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttachmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]>;
}>>;
export type AttachmentWhereInput = {
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    requestId?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType;
    originalName?: Prisma.StringFilter<"Attachment"> | string;
    storageKey?: Prisma.StringFilter<"Attachment"> | string;
    mimeType?: Prisma.StringFilter<"Attachment"> | string;
    sizeBytes?: Prisma.IntFilter<"Attachment"> | number;
    uploadedById?: Prisma.StringFilter<"Attachment"> | string;
    uploadedAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
    uploadBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AttachmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    request?: Prisma.PaymentRequestOrderByWithRelationInput;
    uploadBy?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.AttachmentOrderByRelevanceInput;
};
export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    requestId?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType;
    originalName?: Prisma.StringFilter<"Attachment"> | string;
    storageKey?: Prisma.StringFilter<"Attachment"> | string;
    mimeType?: Prisma.StringFilter<"Attachment"> | string;
    sizeBytes?: Prisma.IntFilter<"Attachment"> | number;
    uploadedById?: Prisma.StringFilter<"Attachment"> | string;
    uploadedAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
    uploadBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AttachmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    _count?: Prisma.AttachmentCountOrderByAggregateInput;
    _avg?: Prisma.AttachmentAvgOrderByAggregateInput;
    _max?: Prisma.AttachmentMaxOrderByAggregateInput;
    _min?: Prisma.AttachmentMinOrderByAggregateInput;
    _sum?: Prisma.AttachmentSumOrderByAggregateInput;
};
export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttachmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeWithAggregatesFilter<"Attachment"> | $Enums.AttachmentType;
    originalName?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    sizeBytes?: Prisma.IntWithAggregatesFilter<"Attachment"> | number;
    uploadedById?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    uploadedAt?: Prisma.DateTimeWithAggregatesFilter<"Attachment"> | Date | string;
};
export type AttachmentCreateInput = {
    id?: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedAt?: Date | string;
    request: Prisma.PaymentRequestCreateNestedOneWithoutAttachmentsInput;
    uploadBy: Prisma.UserCreateNestedOneWithoutAttachmentsInput;
};
export type AttachmentUncheckedCreateInput = {
    id?: string;
    requestId: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedById: string;
    uploadedAt?: Date | string;
};
export type AttachmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutAttachmentsNestedInput;
    uploadBy?: Prisma.UserUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentCreateManyInput = {
    id?: string;
    requestId: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedById: string;
    uploadedAt?: Date | string;
};
export type AttachmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentListRelationFilter = {
    every?: Prisma.AttachmentWhereInput;
    some?: Prisma.AttachmentWhereInput;
    none?: Prisma.AttachmentWhereInput;
};
export type AttachmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttachmentOrderByRelevanceInput = {
    fields: Prisma.AttachmentOrderByRelevanceFieldEnum | Prisma.AttachmentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AttachmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
};
export type AttachmentAvgOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type AttachmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
};
export type AttachmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
};
export type AttachmentSumOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type AttachmentCreateNestedManyWithoutUploadByInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadByInput, Prisma.AttachmentUncheckedCreateWithoutUploadByInput> | Prisma.AttachmentCreateWithoutUploadByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadByInput | Prisma.AttachmentCreateOrConnectWithoutUploadByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadByInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUncheckedCreateNestedManyWithoutUploadByInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadByInput, Prisma.AttachmentUncheckedCreateWithoutUploadByInput> | Prisma.AttachmentCreateWithoutUploadByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadByInput | Prisma.AttachmentCreateOrConnectWithoutUploadByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadByInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUpdateManyWithoutUploadByNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadByInput, Prisma.AttachmentUncheckedCreateWithoutUploadByInput> | Prisma.AttachmentCreateWithoutUploadByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadByInput | Prisma.AttachmentCreateOrConnectWithoutUploadByInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadByInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadByInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadByInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadByInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutUploadByInput | Prisma.AttachmentUpdateManyWithWhereWithoutUploadByInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentUncheckedUpdateManyWithoutUploadByNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadByInput, Prisma.AttachmentUncheckedCreateWithoutUploadByInput> | Prisma.AttachmentCreateWithoutUploadByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadByInput | Prisma.AttachmentCreateOrConnectWithoutUploadByInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadByInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadByInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadByInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadByInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutUploadByInput | Prisma.AttachmentUpdateManyWithWhereWithoutUploadByInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutRequestInput, Prisma.AttachmentUncheckedCreateWithoutRequestInput> | Prisma.AttachmentCreateWithoutRequestInput[] | Prisma.AttachmentUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutRequestInput | Prisma.AttachmentCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.AttachmentCreateManyRequestInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutRequestInput, Prisma.AttachmentUncheckedCreateWithoutRequestInput> | Prisma.AttachmentCreateWithoutRequestInput[] | Prisma.AttachmentUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutRequestInput | Prisma.AttachmentCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.AttachmentCreateManyRequestInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutRequestInput, Prisma.AttachmentUncheckedCreateWithoutRequestInput> | Prisma.AttachmentCreateWithoutRequestInput[] | Prisma.AttachmentUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutRequestInput | Prisma.AttachmentCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutRequestInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.AttachmentCreateManyRequestInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutRequestInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutRequestInput | Prisma.AttachmentUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutRequestInput, Prisma.AttachmentUncheckedCreateWithoutRequestInput> | Prisma.AttachmentCreateWithoutRequestInput[] | Prisma.AttachmentUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutRequestInput | Prisma.AttachmentCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutRequestInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.AttachmentCreateManyRequestInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutRequestInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutRequestInput | Prisma.AttachmentUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type EnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttachmentType;
};
export type AttachmentCreateWithoutUploadByInput = {
    id?: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedAt?: Date | string;
    request: Prisma.PaymentRequestCreateNestedOneWithoutAttachmentsInput;
};
export type AttachmentUncheckedCreateWithoutUploadByInput = {
    id?: string;
    requestId: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedAt?: Date | string;
};
export type AttachmentCreateOrConnectWithoutUploadByInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadByInput, Prisma.AttachmentUncheckedCreateWithoutUploadByInput>;
};
export type AttachmentCreateManyUploadByInputEnvelope = {
    data: Prisma.AttachmentCreateManyUploadByInput | Prisma.AttachmentCreateManyUploadByInput[];
    skipDuplicates?: boolean;
};
export type AttachmentUpsertWithWhereUniqueWithoutUploadByInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttachmentUpdateWithoutUploadByInput, Prisma.AttachmentUncheckedUpdateWithoutUploadByInput>;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadByInput, Prisma.AttachmentUncheckedCreateWithoutUploadByInput>;
};
export type AttachmentUpdateWithWhereUniqueWithoutUploadByInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateWithoutUploadByInput, Prisma.AttachmentUncheckedUpdateWithoutUploadByInput>;
};
export type AttachmentUpdateManyWithWhereWithoutUploadByInput = {
    where: Prisma.AttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyWithoutUploadByInput>;
};
export type AttachmentScalarWhereInput = {
    AND?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    OR?: Prisma.AttachmentScalarWhereInput[];
    NOT?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    requestId?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType;
    originalName?: Prisma.StringFilter<"Attachment"> | string;
    storageKey?: Prisma.StringFilter<"Attachment"> | string;
    mimeType?: Prisma.StringFilter<"Attachment"> | string;
    sizeBytes?: Prisma.IntFilter<"Attachment"> | number;
    uploadedById?: Prisma.StringFilter<"Attachment"> | string;
    uploadedAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
};
export type AttachmentCreateWithoutRequestInput = {
    id?: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedAt?: Date | string;
    uploadBy: Prisma.UserCreateNestedOneWithoutAttachmentsInput;
};
export type AttachmentUncheckedCreateWithoutRequestInput = {
    id?: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedById: string;
    uploadedAt?: Date | string;
};
export type AttachmentCreateOrConnectWithoutRequestInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutRequestInput, Prisma.AttachmentUncheckedCreateWithoutRequestInput>;
};
export type AttachmentCreateManyRequestInputEnvelope = {
    data: Prisma.AttachmentCreateManyRequestInput | Prisma.AttachmentCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type AttachmentUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttachmentUpdateWithoutRequestInput, Prisma.AttachmentUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutRequestInput, Prisma.AttachmentUncheckedCreateWithoutRequestInput>;
};
export type AttachmentUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateWithoutRequestInput, Prisma.AttachmentUncheckedUpdateWithoutRequestInput>;
};
export type AttachmentUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.AttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyWithoutRequestInput>;
};
export type AttachmentCreateManyUploadByInput = {
    id?: string;
    requestId: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedAt?: Date | string;
};
export type AttachmentUpdateWithoutUploadByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateWithoutUploadByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyWithoutUploadByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentCreateManyRequestInput = {
    id?: string;
    type: $Enums.AttachmentType;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    uploadedById: string;
    uploadedAt?: Date | string;
};
export type AttachmentUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploadBy?: Prisma.UserUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    type?: boolean;
    originalName?: boolean;
    storageKey?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    uploadedById?: boolean;
    uploadedAt?: boolean;
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
    uploadBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    type?: boolean;
    originalName?: boolean;
    storageKey?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    uploadedById?: boolean;
    uploadedAt?: boolean;
};
export type AttachmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "type" | "originalName" | "storageKey" | "mimeType" | "sizeBytes" | "uploadedById" | "uploadedAt", ExtArgs["result"]["attachment"]>;
export type AttachmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
    uploadBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AttachmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attachment";
    objects: {
        request: Prisma.$PaymentRequestPayload<ExtArgs>;
        uploadBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        type: $Enums.AttachmentType;
        originalName: string;
        storageKey: string;
        mimeType: string;
        sizeBytes: number;
        uploadedById: string;
        uploadedAt: Date;
    }, ExtArgs["result"]["attachment"]>;
    composites: {};
};
export type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttachmentPayload, S>;
export type AttachmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttachmentCountAggregateInputType | true;
};
export interface AttachmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attachment'];
        meta: {
            name: 'Attachment';
        };
    };
    findUnique<T extends AttachmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttachmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttachmentFindManyArgs>(args?: Prisma.SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttachmentCreateArgs>(args: Prisma.SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttachmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AttachmentDeleteArgs>(args: Prisma.SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttachmentUpdateArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttachmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AttachmentUpsertArgs>(args: Prisma.SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttachmentCountArgs>(args?: Prisma.Subset<T, AttachmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttachmentCountAggregateOutputType> : number>;
    aggregate<T extends AttachmentAggregateArgs>(args: Prisma.Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>;
    groupBy<T extends AttachmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttachmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AttachmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttachmentFieldRefs;
}
export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.PaymentRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentRequestClient<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    uploadBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttachmentFieldRefs {
    readonly id: Prisma.FieldRef<"Attachment", 'String'>;
    readonly requestId: Prisma.FieldRef<"Attachment", 'String'>;
    readonly type: Prisma.FieldRef<"Attachment", 'AttachmentType'>;
    readonly originalName: Prisma.FieldRef<"Attachment", 'String'>;
    readonly storageKey: Prisma.FieldRef<"Attachment", 'String'>;
    readonly mimeType: Prisma.FieldRef<"Attachment", 'String'>;
    readonly sizeBytes: Prisma.FieldRef<"Attachment", 'Int'>;
    readonly uploadedById: Prisma.FieldRef<"Attachment", 'String'>;
    readonly uploadedAt: Prisma.FieldRef<"Attachment", 'DateTime'>;
}
export type AttachmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttachmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttachmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttachmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
};
export type AttachmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttachmentCreateManyInput | Prisma.AttachmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttachmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyInput>;
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
};
export type AttachmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
};
export type AttachmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
};
export type AttachmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
};
