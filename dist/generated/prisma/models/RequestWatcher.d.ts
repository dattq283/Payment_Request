import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RequestWatcherModel = runtime.Types.Result.DefaultSelection<Prisma.$RequestWatcherPayload>;
export type AggregateRequestWatcher = {
    _count: RequestWatcherCountAggregateOutputType | null;
    _min: RequestWatcherMinAggregateOutputType | null;
    _max: RequestWatcherMaxAggregateOutputType | null;
};
export type RequestWatcherMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    userId: string | null;
};
export type RequestWatcherMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    userId: string | null;
};
export type RequestWatcherCountAggregateOutputType = {
    id: number;
    requestId: number;
    userId: number;
    _all: number;
};
export type RequestWatcherMinAggregateInputType = {
    id?: true;
    requestId?: true;
    userId?: true;
};
export type RequestWatcherMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    userId?: true;
};
export type RequestWatcherCountAggregateInputType = {
    id?: true;
    requestId?: true;
    userId?: true;
    _all?: true;
};
export type RequestWatcherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequestWatcherWhereInput;
    orderBy?: Prisma.RequestWatcherOrderByWithRelationInput | Prisma.RequestWatcherOrderByWithRelationInput[];
    cursor?: Prisma.RequestWatcherWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RequestWatcherCountAggregateInputType;
    _min?: RequestWatcherMinAggregateInputType;
    _max?: RequestWatcherMaxAggregateInputType;
};
export type GetRequestWatcherAggregateType<T extends RequestWatcherAggregateArgs> = {
    [P in keyof T & keyof AggregateRequestWatcher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRequestWatcher[P]> : Prisma.GetScalarType<T[P], AggregateRequestWatcher[P]>;
};
export type RequestWatcherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequestWatcherWhereInput;
    orderBy?: Prisma.RequestWatcherOrderByWithAggregationInput | Prisma.RequestWatcherOrderByWithAggregationInput[];
    by: Prisma.RequestWatcherScalarFieldEnum[] | Prisma.RequestWatcherScalarFieldEnum;
    having?: Prisma.RequestWatcherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RequestWatcherCountAggregateInputType | true;
    _min?: RequestWatcherMinAggregateInputType;
    _max?: RequestWatcherMaxAggregateInputType;
};
export type RequestWatcherGroupByOutputType = {
    id: string;
    requestId: string;
    userId: string;
    _count: RequestWatcherCountAggregateOutputType | null;
    _min: RequestWatcherMinAggregateOutputType | null;
    _max: RequestWatcherMaxAggregateOutputType | null;
};
export type GetRequestWatcherGroupByPayload<T extends RequestWatcherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RequestWatcherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RequestWatcherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RequestWatcherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RequestWatcherGroupByOutputType[P]>;
}>>;
export type RequestWatcherWhereInput = {
    AND?: Prisma.RequestWatcherWhereInput | Prisma.RequestWatcherWhereInput[];
    OR?: Prisma.RequestWatcherWhereInput[];
    NOT?: Prisma.RequestWatcherWhereInput | Prisma.RequestWatcherWhereInput[];
    id?: Prisma.StringFilter<"RequestWatcher"> | string;
    requestId?: Prisma.StringFilter<"RequestWatcher"> | string;
    userId?: Prisma.StringFilter<"RequestWatcher"> | string;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RequestWatcherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    request?: Prisma.PaymentRequestOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.RequestWatcherOrderByRelevanceInput;
};
export type RequestWatcherWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    requestId_userId?: Prisma.RequestWatcherRequestIdUserIdCompoundUniqueInput;
    AND?: Prisma.RequestWatcherWhereInput | Prisma.RequestWatcherWhereInput[];
    OR?: Prisma.RequestWatcherWhereInput[];
    NOT?: Prisma.RequestWatcherWhereInput | Prisma.RequestWatcherWhereInput[];
    requestId?: Prisma.StringFilter<"RequestWatcher"> | string;
    userId?: Prisma.StringFilter<"RequestWatcher"> | string;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "requestId_userId">;
export type RequestWatcherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.RequestWatcherCountOrderByAggregateInput;
    _max?: Prisma.RequestWatcherMaxOrderByAggregateInput;
    _min?: Prisma.RequestWatcherMinOrderByAggregateInput;
};
export type RequestWatcherScalarWhereWithAggregatesInput = {
    AND?: Prisma.RequestWatcherScalarWhereWithAggregatesInput | Prisma.RequestWatcherScalarWhereWithAggregatesInput[];
    OR?: Prisma.RequestWatcherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RequestWatcherScalarWhereWithAggregatesInput | Prisma.RequestWatcherScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RequestWatcher"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"RequestWatcher"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"RequestWatcher"> | string;
};
export type RequestWatcherCreateInput = {
    id?: string;
    request: Prisma.PaymentRequestCreateNestedOneWithoutWatchersInput;
    user: Prisma.UserCreateNestedOneWithoutWatchingInput;
};
export type RequestWatcherUncheckedCreateInput = {
    id?: string;
    requestId: string;
    userId: string;
};
export type RequestWatcherUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutWatchersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutWatchingNestedInput;
};
export type RequestWatcherUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherCreateManyInput = {
    id?: string;
    requestId: string;
    userId: string;
};
export type RequestWatcherUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherListRelationFilter = {
    every?: Prisma.RequestWatcherWhereInput;
    some?: Prisma.RequestWatcherWhereInput;
    none?: Prisma.RequestWatcherWhereInput;
};
export type RequestWatcherOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RequestWatcherOrderByRelevanceInput = {
    fields: Prisma.RequestWatcherOrderByRelevanceFieldEnum | Prisma.RequestWatcherOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RequestWatcherRequestIdUserIdCompoundUniqueInput = {
    requestId: string;
    userId: string;
};
export type RequestWatcherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RequestWatcherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RequestWatcherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RequestWatcherCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutUserInput, Prisma.RequestWatcherUncheckedCreateWithoutUserInput> | Prisma.RequestWatcherCreateWithoutUserInput[] | Prisma.RequestWatcherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutUserInput | Prisma.RequestWatcherCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequestWatcherCreateManyUserInputEnvelope;
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
};
export type RequestWatcherUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutUserInput, Prisma.RequestWatcherUncheckedCreateWithoutUserInput> | Prisma.RequestWatcherCreateWithoutUserInput[] | Prisma.RequestWatcherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutUserInput | Prisma.RequestWatcherCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequestWatcherCreateManyUserInputEnvelope;
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
};
export type RequestWatcherUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutUserInput, Prisma.RequestWatcherUncheckedCreateWithoutUserInput> | Prisma.RequestWatcherCreateWithoutUserInput[] | Prisma.RequestWatcherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutUserInput | Prisma.RequestWatcherCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequestWatcherUpsertWithWhereUniqueWithoutUserInput | Prisma.RequestWatcherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequestWatcherCreateManyUserInputEnvelope;
    set?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    disconnect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    delete?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    update?: Prisma.RequestWatcherUpdateWithWhereUniqueWithoutUserInput | Prisma.RequestWatcherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequestWatcherUpdateManyWithWhereWithoutUserInput | Prisma.RequestWatcherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequestWatcherScalarWhereInput | Prisma.RequestWatcherScalarWhereInput[];
};
export type RequestWatcherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutUserInput, Prisma.RequestWatcherUncheckedCreateWithoutUserInput> | Prisma.RequestWatcherCreateWithoutUserInput[] | Prisma.RequestWatcherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutUserInput | Prisma.RequestWatcherCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequestWatcherUpsertWithWhereUniqueWithoutUserInput | Prisma.RequestWatcherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequestWatcherCreateManyUserInputEnvelope;
    set?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    disconnect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    delete?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    update?: Prisma.RequestWatcherUpdateWithWhereUniqueWithoutUserInput | Prisma.RequestWatcherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequestWatcherUpdateManyWithWhereWithoutUserInput | Prisma.RequestWatcherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequestWatcherScalarWhereInput | Prisma.RequestWatcherScalarWhereInput[];
};
export type RequestWatcherCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutRequestInput, Prisma.RequestWatcherUncheckedCreateWithoutRequestInput> | Prisma.RequestWatcherCreateWithoutRequestInput[] | Prisma.RequestWatcherUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutRequestInput | Prisma.RequestWatcherCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.RequestWatcherCreateManyRequestInputEnvelope;
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
};
export type RequestWatcherUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutRequestInput, Prisma.RequestWatcherUncheckedCreateWithoutRequestInput> | Prisma.RequestWatcherCreateWithoutRequestInput[] | Prisma.RequestWatcherUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutRequestInput | Prisma.RequestWatcherCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.RequestWatcherCreateManyRequestInputEnvelope;
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
};
export type RequestWatcherUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutRequestInput, Prisma.RequestWatcherUncheckedCreateWithoutRequestInput> | Prisma.RequestWatcherCreateWithoutRequestInput[] | Prisma.RequestWatcherUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutRequestInput | Prisma.RequestWatcherCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.RequestWatcherUpsertWithWhereUniqueWithoutRequestInput | Prisma.RequestWatcherUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.RequestWatcherCreateManyRequestInputEnvelope;
    set?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    disconnect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    delete?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    update?: Prisma.RequestWatcherUpdateWithWhereUniqueWithoutRequestInput | Prisma.RequestWatcherUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.RequestWatcherUpdateManyWithWhereWithoutRequestInput | Prisma.RequestWatcherUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.RequestWatcherScalarWhereInput | Prisma.RequestWatcherScalarWhereInput[];
};
export type RequestWatcherUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.RequestWatcherCreateWithoutRequestInput, Prisma.RequestWatcherUncheckedCreateWithoutRequestInput> | Prisma.RequestWatcherCreateWithoutRequestInput[] | Prisma.RequestWatcherUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.RequestWatcherCreateOrConnectWithoutRequestInput | Prisma.RequestWatcherCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.RequestWatcherUpsertWithWhereUniqueWithoutRequestInput | Prisma.RequestWatcherUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.RequestWatcherCreateManyRequestInputEnvelope;
    set?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    disconnect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    delete?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    connect?: Prisma.RequestWatcherWhereUniqueInput | Prisma.RequestWatcherWhereUniqueInput[];
    update?: Prisma.RequestWatcherUpdateWithWhereUniqueWithoutRequestInput | Prisma.RequestWatcherUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.RequestWatcherUpdateManyWithWhereWithoutRequestInput | Prisma.RequestWatcherUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.RequestWatcherScalarWhereInput | Prisma.RequestWatcherScalarWhereInput[];
};
export type RequestWatcherCreateWithoutUserInput = {
    id?: string;
    request: Prisma.PaymentRequestCreateNestedOneWithoutWatchersInput;
};
export type RequestWatcherUncheckedCreateWithoutUserInput = {
    id?: string;
    requestId: string;
};
export type RequestWatcherCreateOrConnectWithoutUserInput = {
    where: Prisma.RequestWatcherWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequestWatcherCreateWithoutUserInput, Prisma.RequestWatcherUncheckedCreateWithoutUserInput>;
};
export type RequestWatcherCreateManyUserInputEnvelope = {
    data: Prisma.RequestWatcherCreateManyUserInput | Prisma.RequestWatcherCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RequestWatcherUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequestWatcherWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequestWatcherUpdateWithoutUserInput, Prisma.RequestWatcherUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RequestWatcherCreateWithoutUserInput, Prisma.RequestWatcherUncheckedCreateWithoutUserInput>;
};
export type RequestWatcherUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequestWatcherWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequestWatcherUpdateWithoutUserInput, Prisma.RequestWatcherUncheckedUpdateWithoutUserInput>;
};
export type RequestWatcherUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RequestWatcherScalarWhereInput;
    data: Prisma.XOR<Prisma.RequestWatcherUpdateManyMutationInput, Prisma.RequestWatcherUncheckedUpdateManyWithoutUserInput>;
};
export type RequestWatcherScalarWhereInput = {
    AND?: Prisma.RequestWatcherScalarWhereInput | Prisma.RequestWatcherScalarWhereInput[];
    OR?: Prisma.RequestWatcherScalarWhereInput[];
    NOT?: Prisma.RequestWatcherScalarWhereInput | Prisma.RequestWatcherScalarWhereInput[];
    id?: Prisma.StringFilter<"RequestWatcher"> | string;
    requestId?: Prisma.StringFilter<"RequestWatcher"> | string;
    userId?: Prisma.StringFilter<"RequestWatcher"> | string;
};
export type RequestWatcherCreateWithoutRequestInput = {
    id?: string;
    user: Prisma.UserCreateNestedOneWithoutWatchingInput;
};
export type RequestWatcherUncheckedCreateWithoutRequestInput = {
    id?: string;
    userId: string;
};
export type RequestWatcherCreateOrConnectWithoutRequestInput = {
    where: Prisma.RequestWatcherWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequestWatcherCreateWithoutRequestInput, Prisma.RequestWatcherUncheckedCreateWithoutRequestInput>;
};
export type RequestWatcherCreateManyRequestInputEnvelope = {
    data: Prisma.RequestWatcherCreateManyRequestInput | Prisma.RequestWatcherCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type RequestWatcherUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.RequestWatcherWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequestWatcherUpdateWithoutRequestInput, Prisma.RequestWatcherUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.RequestWatcherCreateWithoutRequestInput, Prisma.RequestWatcherUncheckedCreateWithoutRequestInput>;
};
export type RequestWatcherUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.RequestWatcherWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequestWatcherUpdateWithoutRequestInput, Prisma.RequestWatcherUncheckedUpdateWithoutRequestInput>;
};
export type RequestWatcherUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.RequestWatcherScalarWhereInput;
    data: Prisma.XOR<Prisma.RequestWatcherUpdateManyMutationInput, Prisma.RequestWatcherUncheckedUpdateManyWithoutRequestInput>;
};
export type RequestWatcherCreateManyUserInput = {
    id?: string;
    requestId: string;
};
export type RequestWatcherUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutWatchersNestedInput;
};
export type RequestWatcherUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherCreateManyRequestInput = {
    id?: string;
    userId: string;
};
export type RequestWatcherUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWatchingNestedInput;
};
export type RequestWatcherUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RequestWatcherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    userId?: boolean;
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requestWatcher"]>;
export type RequestWatcherSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    userId?: boolean;
};
export type RequestWatcherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "userId", ExtArgs["result"]["requestWatcher"]>;
export type RequestWatcherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RequestWatcherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RequestWatcher";
    objects: {
        request: Prisma.$PaymentRequestPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        userId: string;
    }, ExtArgs["result"]["requestWatcher"]>;
    composites: {};
};
export type RequestWatcherGetPayload<S extends boolean | null | undefined | RequestWatcherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload, S>;
export type RequestWatcherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RequestWatcherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RequestWatcherCountAggregateInputType | true;
};
export interface RequestWatcherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RequestWatcher'];
        meta: {
            name: 'RequestWatcher';
        };
    };
    findUnique<T extends RequestWatcherFindUniqueArgs>(args: Prisma.SelectSubset<T, RequestWatcherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RequestWatcherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RequestWatcherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RequestWatcherFindFirstArgs>(args?: Prisma.SelectSubset<T, RequestWatcherFindFirstArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RequestWatcherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RequestWatcherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RequestWatcherFindManyArgs>(args?: Prisma.SelectSubset<T, RequestWatcherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RequestWatcherCreateArgs>(args: Prisma.SelectSubset<T, RequestWatcherCreateArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RequestWatcherCreateManyArgs>(args?: Prisma.SelectSubset<T, RequestWatcherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RequestWatcherDeleteArgs>(args: Prisma.SelectSubset<T, RequestWatcherDeleteArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RequestWatcherUpdateArgs>(args: Prisma.SelectSubset<T, RequestWatcherUpdateArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RequestWatcherDeleteManyArgs>(args?: Prisma.SelectSubset<T, RequestWatcherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RequestWatcherUpdateManyArgs>(args: Prisma.SelectSubset<T, RequestWatcherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RequestWatcherUpsertArgs>(args: Prisma.SelectSubset<T, RequestWatcherUpsertArgs<ExtArgs>>): Prisma.Prisma__RequestWatcherClient<runtime.Types.Result.GetResult<Prisma.$RequestWatcherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RequestWatcherCountArgs>(args?: Prisma.Subset<T, RequestWatcherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RequestWatcherCountAggregateOutputType> : number>;
    aggregate<T extends RequestWatcherAggregateArgs>(args: Prisma.Subset<T, RequestWatcherAggregateArgs>): Prisma.PrismaPromise<GetRequestWatcherAggregateType<T>>;
    groupBy<T extends RequestWatcherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RequestWatcherGroupByArgs['orderBy'];
    } : {
        orderBy?: RequestWatcherGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RequestWatcherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestWatcherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RequestWatcherFieldRefs;
}
export interface Prisma__RequestWatcherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.PaymentRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentRequestClient<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RequestWatcherFieldRefs {
    readonly id: Prisma.FieldRef<"RequestWatcher", 'String'>;
    readonly requestId: Prisma.FieldRef<"RequestWatcher", 'String'>;
    readonly userId: Prisma.FieldRef<"RequestWatcher", 'String'>;
}
export type RequestWatcherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    where: Prisma.RequestWatcherWhereUniqueInput;
};
export type RequestWatcherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    where: Prisma.RequestWatcherWhereUniqueInput;
};
export type RequestWatcherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RequestWatcherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RequestWatcherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RequestWatcherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequestWatcherCreateInput, Prisma.RequestWatcherUncheckedCreateInput>;
};
export type RequestWatcherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RequestWatcherCreateManyInput | Prisma.RequestWatcherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RequestWatcherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequestWatcherUpdateInput, Prisma.RequestWatcherUncheckedUpdateInput>;
    where: Prisma.RequestWatcherWhereUniqueInput;
};
export type RequestWatcherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RequestWatcherUpdateManyMutationInput, Prisma.RequestWatcherUncheckedUpdateManyInput>;
    where?: Prisma.RequestWatcherWhereInput;
    limit?: number;
};
export type RequestWatcherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    where: Prisma.RequestWatcherWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequestWatcherCreateInput, Prisma.RequestWatcherUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RequestWatcherUpdateInput, Prisma.RequestWatcherUncheckedUpdateInput>;
};
export type RequestWatcherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
    where: Prisma.RequestWatcherWhereUniqueInput;
};
export type RequestWatcherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequestWatcherWhereInput;
    limit?: number;
};
export type RequestWatcherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequestWatcherSelect<ExtArgs> | null;
    omit?: Prisma.RequestWatcherOmit<ExtArgs> | null;
    include?: Prisma.RequestWatcherInclude<ExtArgs> | null;
};
