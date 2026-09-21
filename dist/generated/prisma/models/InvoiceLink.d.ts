import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvoiceLinkModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoiceLinkPayload>;
export type AggregateInvoiceLink = {
    _count: InvoiceLinkCountAggregateOutputType | null;
    _avg: InvoiceLinkAvgAggregateOutputType | null;
    _sum: InvoiceLinkSumAggregateOutputType | null;
    _min: InvoiceLinkMinAggregateOutputType | null;
    _max: InvoiceLinkMaxAggregateOutputType | null;
};
export type InvoiceLinkAvgAggregateOutputType = {
    position: number | null;
};
export type InvoiceLinkSumAggregateOutputType = {
    position: number | null;
};
export type InvoiceLinkMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    url: string | null;
    position: number | null;
};
export type InvoiceLinkMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    url: string | null;
    position: number | null;
};
export type InvoiceLinkCountAggregateOutputType = {
    id: number;
    requestId: number;
    url: number;
    position: number;
    _all: number;
};
export type InvoiceLinkAvgAggregateInputType = {
    position?: true;
};
export type InvoiceLinkSumAggregateInputType = {
    position?: true;
};
export type InvoiceLinkMinAggregateInputType = {
    id?: true;
    requestId?: true;
    url?: true;
    position?: true;
};
export type InvoiceLinkMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    url?: true;
    position?: true;
};
export type InvoiceLinkCountAggregateInputType = {
    id?: true;
    requestId?: true;
    url?: true;
    position?: true;
    _all?: true;
};
export type InvoiceLinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLinkWhereInput;
    orderBy?: Prisma.InvoiceLinkOrderByWithRelationInput | Prisma.InvoiceLinkOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceLinkCountAggregateInputType;
    _avg?: InvoiceLinkAvgAggregateInputType;
    _sum?: InvoiceLinkSumAggregateInputType;
    _min?: InvoiceLinkMinAggregateInputType;
    _max?: InvoiceLinkMaxAggregateInputType;
};
export type GetInvoiceLinkAggregateType<T extends InvoiceLinkAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoiceLink]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoiceLink[P]> : Prisma.GetScalarType<T[P], AggregateInvoiceLink[P]>;
};
export type InvoiceLinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLinkWhereInput;
    orderBy?: Prisma.InvoiceLinkOrderByWithAggregationInput | Prisma.InvoiceLinkOrderByWithAggregationInput[];
    by: Prisma.InvoiceLinkScalarFieldEnum[] | Prisma.InvoiceLinkScalarFieldEnum;
    having?: Prisma.InvoiceLinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceLinkCountAggregateInputType | true;
    _avg?: InvoiceLinkAvgAggregateInputType;
    _sum?: InvoiceLinkSumAggregateInputType;
    _min?: InvoiceLinkMinAggregateInputType;
    _max?: InvoiceLinkMaxAggregateInputType;
};
export type InvoiceLinkGroupByOutputType = {
    id: string;
    requestId: string;
    url: string;
    position: number;
    _count: InvoiceLinkCountAggregateOutputType | null;
    _avg: InvoiceLinkAvgAggregateOutputType | null;
    _sum: InvoiceLinkSumAggregateOutputType | null;
    _min: InvoiceLinkMinAggregateOutputType | null;
    _max: InvoiceLinkMaxAggregateOutputType | null;
};
export type GetInvoiceLinkGroupByPayload<T extends InvoiceLinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceLinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceLinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceLinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceLinkGroupByOutputType[P]>;
}>>;
export type InvoiceLinkWhereInput = {
    AND?: Prisma.InvoiceLinkWhereInput | Prisma.InvoiceLinkWhereInput[];
    OR?: Prisma.InvoiceLinkWhereInput[];
    NOT?: Prisma.InvoiceLinkWhereInput | Prisma.InvoiceLinkWhereInput[];
    id?: Prisma.StringFilter<"InvoiceLink"> | string;
    requestId?: Prisma.StringFilter<"InvoiceLink"> | string;
    url?: Prisma.StringFilter<"InvoiceLink"> | string;
    position?: Prisma.IntFilter<"InvoiceLink"> | number;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
};
export type InvoiceLinkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    request?: Prisma.PaymentRequestOrderByWithRelationInput;
    _relevance?: Prisma.InvoiceLinkOrderByRelevanceInput;
};
export type InvoiceLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvoiceLinkWhereInput | Prisma.InvoiceLinkWhereInput[];
    OR?: Prisma.InvoiceLinkWhereInput[];
    NOT?: Prisma.InvoiceLinkWhereInput | Prisma.InvoiceLinkWhereInput[];
    requestId?: Prisma.StringFilter<"InvoiceLink"> | string;
    url?: Prisma.StringFilter<"InvoiceLink"> | string;
    position?: Prisma.IntFilter<"InvoiceLink"> | number;
    request?: Prisma.XOR<Prisma.PaymentRequestScalarRelationFilter, Prisma.PaymentRequestWhereInput>;
}, "id">;
export type InvoiceLinkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    _count?: Prisma.InvoiceLinkCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceLinkAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceLinkMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceLinkMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceLinkSumOrderByAggregateInput;
};
export type InvoiceLinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceLinkScalarWhereWithAggregatesInput | Prisma.InvoiceLinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceLinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceLinkScalarWhereWithAggregatesInput | Prisma.InvoiceLinkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InvoiceLink"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"InvoiceLink"> | string;
    url?: Prisma.StringWithAggregatesFilter<"InvoiceLink"> | string;
    position?: Prisma.IntWithAggregatesFilter<"InvoiceLink"> | number;
};
export type InvoiceLinkCreateInput = {
    id?: string;
    url: string;
    position: number;
    request: Prisma.PaymentRequestCreateNestedOneWithoutInvoiceLinksInput;
};
export type InvoiceLinkUncheckedCreateInput = {
    id?: string;
    requestId: string;
    url: string;
    position: number;
};
export type InvoiceLinkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    request?: Prisma.PaymentRequestUpdateOneRequiredWithoutInvoiceLinksNestedInput;
};
export type InvoiceLinkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLinkCreateManyInput = {
    id?: string;
    requestId: string;
    url: string;
    position: number;
};
export type InvoiceLinkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLinkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLinkListRelationFilter = {
    every?: Prisma.InvoiceLinkWhereInput;
    some?: Prisma.InvoiceLinkWhereInput;
    none?: Prisma.InvoiceLinkWhereInput;
};
export type InvoiceLinkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceLinkOrderByRelevanceInput = {
    fields: Prisma.InvoiceLinkOrderByRelevanceFieldEnum | Prisma.InvoiceLinkOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InvoiceLinkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type InvoiceLinkAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type InvoiceLinkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type InvoiceLinkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type InvoiceLinkSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type InvoiceLinkCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.InvoiceLinkCreateWithoutRequestInput, Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput> | Prisma.InvoiceLinkCreateWithoutRequestInput[] | Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput | Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.InvoiceLinkCreateManyRequestInputEnvelope;
    connect?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
};
export type InvoiceLinkUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.InvoiceLinkCreateWithoutRequestInput, Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput> | Prisma.InvoiceLinkCreateWithoutRequestInput[] | Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput | Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.InvoiceLinkCreateManyRequestInputEnvelope;
    connect?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
};
export type InvoiceLinkUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLinkCreateWithoutRequestInput, Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput> | Prisma.InvoiceLinkCreateWithoutRequestInput[] | Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput | Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.InvoiceLinkUpsertWithWhereUniqueWithoutRequestInput | Prisma.InvoiceLinkUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.InvoiceLinkCreateManyRequestInputEnvelope;
    set?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    delete?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    connect?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    update?: Prisma.InvoiceLinkUpdateWithWhereUniqueWithoutRequestInput | Prisma.InvoiceLinkUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.InvoiceLinkUpdateManyWithWhereWithoutRequestInput | Prisma.InvoiceLinkUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.InvoiceLinkScalarWhereInput | Prisma.InvoiceLinkScalarWhereInput[];
};
export type InvoiceLinkUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLinkCreateWithoutRequestInput, Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput> | Prisma.InvoiceLinkCreateWithoutRequestInput[] | Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput | Prisma.InvoiceLinkCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.InvoiceLinkUpsertWithWhereUniqueWithoutRequestInput | Prisma.InvoiceLinkUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.InvoiceLinkCreateManyRequestInputEnvelope;
    set?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    delete?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    connect?: Prisma.InvoiceLinkWhereUniqueInput | Prisma.InvoiceLinkWhereUniqueInput[];
    update?: Prisma.InvoiceLinkUpdateWithWhereUniqueWithoutRequestInput | Prisma.InvoiceLinkUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.InvoiceLinkUpdateManyWithWhereWithoutRequestInput | Prisma.InvoiceLinkUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.InvoiceLinkScalarWhereInput | Prisma.InvoiceLinkScalarWhereInput[];
};
export type InvoiceLinkCreateWithoutRequestInput = {
    id?: string;
    url: string;
    position: number;
};
export type InvoiceLinkUncheckedCreateWithoutRequestInput = {
    id?: string;
    url: string;
    position: number;
};
export type InvoiceLinkCreateOrConnectWithoutRequestInput = {
    where: Prisma.InvoiceLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLinkCreateWithoutRequestInput, Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput>;
};
export type InvoiceLinkCreateManyRequestInputEnvelope = {
    data: Prisma.InvoiceLinkCreateManyRequestInput | Prisma.InvoiceLinkCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLinkUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.InvoiceLinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceLinkUpdateWithoutRequestInput, Prisma.InvoiceLinkUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.InvoiceLinkCreateWithoutRequestInput, Prisma.InvoiceLinkUncheckedCreateWithoutRequestInput>;
};
export type InvoiceLinkUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.InvoiceLinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceLinkUpdateWithoutRequestInput, Prisma.InvoiceLinkUncheckedUpdateWithoutRequestInput>;
};
export type InvoiceLinkUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.InvoiceLinkScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceLinkUpdateManyMutationInput, Prisma.InvoiceLinkUncheckedUpdateManyWithoutRequestInput>;
};
export type InvoiceLinkScalarWhereInput = {
    AND?: Prisma.InvoiceLinkScalarWhereInput | Prisma.InvoiceLinkScalarWhereInput[];
    OR?: Prisma.InvoiceLinkScalarWhereInput[];
    NOT?: Prisma.InvoiceLinkScalarWhereInput | Prisma.InvoiceLinkScalarWhereInput[];
    id?: Prisma.StringFilter<"InvoiceLink"> | string;
    requestId?: Prisma.StringFilter<"InvoiceLink"> | string;
    url?: Prisma.StringFilter<"InvoiceLink"> | string;
    position?: Prisma.IntFilter<"InvoiceLink"> | number;
};
export type InvoiceLinkCreateManyRequestInput = {
    id?: string;
    url: string;
    position: number;
};
export type InvoiceLinkUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLinkUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLinkUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    url?: boolean;
    position?: boolean;
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoiceLink"]>;
export type InvoiceLinkSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    url?: boolean;
    position?: boolean;
};
export type InvoiceLinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "url" | "position", ExtArgs["result"]["invoiceLink"]>;
export type InvoiceLinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.PaymentRequestDefaultArgs<ExtArgs>;
};
export type $InvoiceLinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvoiceLink";
    objects: {
        request: Prisma.$PaymentRequestPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        url: string;
        position: number;
    }, ExtArgs["result"]["invoiceLink"]>;
    composites: {};
};
export type InvoiceLinkGetPayload<S extends boolean | null | undefined | InvoiceLinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload, S>;
export type InvoiceLinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceLinkCountAggregateInputType | true;
};
export interface InvoiceLinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvoiceLink'];
        meta: {
            name: 'InvoiceLink';
        };
    };
    findUnique<T extends InvoiceLinkFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceLinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceLinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceLinkFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceLinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceLinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceLinkFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceLinkCreateArgs>(args: Prisma.SelectSubset<T, InvoiceLinkCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceLinkCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends InvoiceLinkDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceLinkDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceLinkUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceLinkUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceLinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceLinkUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends InvoiceLinkUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceLinkUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceLinkClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceLinkCountArgs>(args?: Prisma.Subset<T, InvoiceLinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceLinkCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceLinkAggregateArgs>(args: Prisma.Subset<T, InvoiceLinkAggregateArgs>): Prisma.PrismaPromise<GetInvoiceLinkAggregateType<T>>;
    groupBy<T extends InvoiceLinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceLinkGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceLinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceLinkFieldRefs;
}
export interface Prisma__InvoiceLinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.PaymentRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentRequestClient<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceLinkFieldRefs {
    readonly id: Prisma.FieldRef<"InvoiceLink", 'String'>;
    readonly requestId: Prisma.FieldRef<"InvoiceLink", 'String'>;
    readonly url: Prisma.FieldRef<"InvoiceLink", 'String'>;
    readonly position: Prisma.FieldRef<"InvoiceLink", 'Int'>;
}
export type InvoiceLinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where: Prisma.InvoiceLinkWhereUniqueInput;
};
export type InvoiceLinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where: Prisma.InvoiceLinkWhereUniqueInput;
};
export type InvoiceLinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where?: Prisma.InvoiceLinkWhereInput;
    orderBy?: Prisma.InvoiceLinkOrderByWithRelationInput | Prisma.InvoiceLinkOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceLinkScalarFieldEnum | Prisma.InvoiceLinkScalarFieldEnum[];
};
export type InvoiceLinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where?: Prisma.InvoiceLinkWhereInput;
    orderBy?: Prisma.InvoiceLinkOrderByWithRelationInput | Prisma.InvoiceLinkOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceLinkScalarFieldEnum | Prisma.InvoiceLinkScalarFieldEnum[];
};
export type InvoiceLinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where?: Prisma.InvoiceLinkWhereInput;
    orderBy?: Prisma.InvoiceLinkOrderByWithRelationInput | Prisma.InvoiceLinkOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceLinkScalarFieldEnum | Prisma.InvoiceLinkScalarFieldEnum[];
};
export type InvoiceLinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceLinkCreateInput, Prisma.InvoiceLinkUncheckedCreateInput>;
};
export type InvoiceLinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceLinkCreateManyInput | Prisma.InvoiceLinkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceLinkUpdateInput, Prisma.InvoiceLinkUncheckedUpdateInput>;
    where: Prisma.InvoiceLinkWhereUniqueInput;
};
export type InvoiceLinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceLinkUpdateManyMutationInput, Prisma.InvoiceLinkUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceLinkWhereInput;
    limit?: number;
};
export type InvoiceLinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where: Prisma.InvoiceLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLinkCreateInput, Prisma.InvoiceLinkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceLinkUpdateInput, Prisma.InvoiceLinkUncheckedUpdateInput>;
};
export type InvoiceLinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
    where: Prisma.InvoiceLinkWhereUniqueInput;
};
export type InvoiceLinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLinkWhereInput;
    limit?: number;
};
export type InvoiceLinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLinkSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLinkOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLinkInclude<ExtArgs> | null;
};
