import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SiteModel = runtime.Types.Result.DefaultSelection<Prisma.$SitePayload>;
export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null;
    _min: SiteMinAggregateOutputType | null;
    _max: SiteMaxAggregateOutputType | null;
};
export type SiteMinAggregateOutputType = {
    id: string | null;
    code: $Enums.SiteCode | null;
    name: string | null;
};
export type SiteMaxAggregateOutputType = {
    id: string | null;
    code: $Enums.SiteCode | null;
    name: string | null;
};
export type SiteCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    _all: number;
};
export type SiteMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
};
export type SiteMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
};
export type SiteCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    _all?: true;
};
export type SiteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SiteWhereInput;
    orderBy?: Prisma.SiteOrderByWithRelationInput | Prisma.SiteOrderByWithRelationInput[];
    cursor?: Prisma.SiteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SiteCountAggregateInputType;
    _min?: SiteMinAggregateInputType;
    _max?: SiteMaxAggregateInputType;
};
export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
    [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSite[P]> : Prisma.GetScalarType<T[P], AggregateSite[P]>;
};
export type SiteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SiteWhereInput;
    orderBy?: Prisma.SiteOrderByWithAggregationInput | Prisma.SiteOrderByWithAggregationInput[];
    by: Prisma.SiteScalarFieldEnum[] | Prisma.SiteScalarFieldEnum;
    having?: Prisma.SiteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SiteCountAggregateInputType | true;
    _min?: SiteMinAggregateInputType;
    _max?: SiteMaxAggregateInputType;
};
export type SiteGroupByOutputType = {
    id: string;
    code: $Enums.SiteCode;
    name: string;
    _count: SiteCountAggregateOutputType | null;
    _min: SiteMinAggregateOutputType | null;
    _max: SiteMaxAggregateOutputType | null;
};
export type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SiteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SiteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SiteGroupByOutputType[P]>;
}>>;
export type SiteWhereInput = {
    AND?: Prisma.SiteWhereInput | Prisma.SiteWhereInput[];
    OR?: Prisma.SiteWhereInput[];
    NOT?: Prisma.SiteWhereInput | Prisma.SiteWhereInput[];
    id?: Prisma.StringFilter<"Site"> | string;
    code?: Prisma.EnumSiteCodeFilter<"Site"> | $Enums.SiteCode;
    name?: Prisma.StringFilter<"Site"> | string;
    userRoles?: Prisma.UserSiteRoleListRelationFilter;
    requests?: Prisma.PaymentRequestListRelationFilter;
};
export type SiteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    userRoles?: Prisma.UserSiteRoleOrderByRelationAggregateInput;
    requests?: Prisma.PaymentRequestOrderByRelationAggregateInput;
    _relevance?: Prisma.SiteOrderByRelevanceInput;
};
export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: $Enums.SiteCode;
    AND?: Prisma.SiteWhereInput | Prisma.SiteWhereInput[];
    OR?: Prisma.SiteWhereInput[];
    NOT?: Prisma.SiteWhereInput | Prisma.SiteWhereInput[];
    name?: Prisma.StringFilter<"Site"> | string;
    userRoles?: Prisma.UserSiteRoleListRelationFilter;
    requests?: Prisma.PaymentRequestListRelationFilter;
}, "id" | "code">;
export type SiteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.SiteCountOrderByAggregateInput;
    _max?: Prisma.SiteMaxOrderByAggregateInput;
    _min?: Prisma.SiteMinOrderByAggregateInput;
};
export type SiteScalarWhereWithAggregatesInput = {
    AND?: Prisma.SiteScalarWhereWithAggregatesInput | Prisma.SiteScalarWhereWithAggregatesInput[];
    OR?: Prisma.SiteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SiteScalarWhereWithAggregatesInput | Prisma.SiteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Site"> | string;
    code?: Prisma.EnumSiteCodeWithAggregatesFilter<"Site"> | $Enums.SiteCode;
    name?: Prisma.StringWithAggregatesFilter<"Site"> | string;
};
export type SiteCreateInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
    userRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutSiteInput;
    requests?: Prisma.PaymentRequestCreateNestedManyWithoutSiteInput;
};
export type SiteUncheckedCreateInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
    userRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutSiteInput;
    requests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutSiteInput;
};
export type SiteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoles?: Prisma.UserSiteRoleUpdateManyWithoutSiteNestedInput;
    requests?: Prisma.PaymentRequestUpdateManyWithoutSiteNestedInput;
};
export type SiteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutSiteNestedInput;
    requests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutSiteNestedInput;
};
export type SiteCreateManyInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
};
export type SiteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SiteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SiteOrderByRelevanceInput = {
    fields: Prisma.SiteOrderByRelevanceFieldEnum | Prisma.SiteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SiteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SiteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SiteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SiteScalarRelationFilter = {
    is?: Prisma.SiteWhereInput;
    isNot?: Prisma.SiteWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumSiteCodeFieldUpdateOperationsInput = {
    set?: $Enums.SiteCode;
};
export type SiteCreateNestedOneWithoutUserRolesInput = {
    create?: Prisma.XOR<Prisma.SiteCreateWithoutUserRolesInput, Prisma.SiteUncheckedCreateWithoutUserRolesInput>;
    connectOrCreate?: Prisma.SiteCreateOrConnectWithoutUserRolesInput;
    connect?: Prisma.SiteWhereUniqueInput;
};
export type SiteUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: Prisma.XOR<Prisma.SiteCreateWithoutUserRolesInput, Prisma.SiteUncheckedCreateWithoutUserRolesInput>;
    connectOrCreate?: Prisma.SiteCreateOrConnectWithoutUserRolesInput;
    upsert?: Prisma.SiteUpsertWithoutUserRolesInput;
    connect?: Prisma.SiteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SiteUpdateToOneWithWhereWithoutUserRolesInput, Prisma.SiteUpdateWithoutUserRolesInput>, Prisma.SiteUncheckedUpdateWithoutUserRolesInput>;
};
export type SiteCreateNestedOneWithoutRequestsInput = {
    create?: Prisma.XOR<Prisma.SiteCreateWithoutRequestsInput, Prisma.SiteUncheckedCreateWithoutRequestsInput>;
    connectOrCreate?: Prisma.SiteCreateOrConnectWithoutRequestsInput;
    connect?: Prisma.SiteWhereUniqueInput;
};
export type SiteUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.SiteCreateWithoutRequestsInput, Prisma.SiteUncheckedCreateWithoutRequestsInput>;
    connectOrCreate?: Prisma.SiteCreateOrConnectWithoutRequestsInput;
    upsert?: Prisma.SiteUpsertWithoutRequestsInput;
    connect?: Prisma.SiteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SiteUpdateToOneWithWhereWithoutRequestsInput, Prisma.SiteUpdateWithoutRequestsInput>, Prisma.SiteUncheckedUpdateWithoutRequestsInput>;
};
export type SiteCreateWithoutUserRolesInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
    requests?: Prisma.PaymentRequestCreateNestedManyWithoutSiteInput;
};
export type SiteUncheckedCreateWithoutUserRolesInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
    requests?: Prisma.PaymentRequestUncheckedCreateNestedManyWithoutSiteInput;
};
export type SiteCreateOrConnectWithoutUserRolesInput = {
    where: Prisma.SiteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SiteCreateWithoutUserRolesInput, Prisma.SiteUncheckedCreateWithoutUserRolesInput>;
};
export type SiteUpsertWithoutUserRolesInput = {
    update: Prisma.XOR<Prisma.SiteUpdateWithoutUserRolesInput, Prisma.SiteUncheckedUpdateWithoutUserRolesInput>;
    create: Prisma.XOR<Prisma.SiteCreateWithoutUserRolesInput, Prisma.SiteUncheckedCreateWithoutUserRolesInput>;
    where?: Prisma.SiteWhereInput;
};
export type SiteUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: Prisma.SiteWhereInput;
    data: Prisma.XOR<Prisma.SiteUpdateWithoutUserRolesInput, Prisma.SiteUncheckedUpdateWithoutUserRolesInput>;
};
export type SiteUpdateWithoutUserRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    requests?: Prisma.PaymentRequestUpdateManyWithoutSiteNestedInput;
};
export type SiteUncheckedUpdateWithoutUserRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    requests?: Prisma.PaymentRequestUncheckedUpdateManyWithoutSiteNestedInput;
};
export type SiteCreateWithoutRequestsInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
    userRoles?: Prisma.UserSiteRoleCreateNestedManyWithoutSiteInput;
};
export type SiteUncheckedCreateWithoutRequestsInput = {
    id?: string;
    code: $Enums.SiteCode;
    name: string;
    userRoles?: Prisma.UserSiteRoleUncheckedCreateNestedManyWithoutSiteInput;
};
export type SiteCreateOrConnectWithoutRequestsInput = {
    where: Prisma.SiteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SiteCreateWithoutRequestsInput, Prisma.SiteUncheckedCreateWithoutRequestsInput>;
};
export type SiteUpsertWithoutRequestsInput = {
    update: Prisma.XOR<Prisma.SiteUpdateWithoutRequestsInput, Prisma.SiteUncheckedUpdateWithoutRequestsInput>;
    create: Prisma.XOR<Prisma.SiteCreateWithoutRequestsInput, Prisma.SiteUncheckedCreateWithoutRequestsInput>;
    where?: Prisma.SiteWhereInput;
};
export type SiteUpdateToOneWithWhereWithoutRequestsInput = {
    where?: Prisma.SiteWhereInput;
    data: Prisma.XOR<Prisma.SiteUpdateWithoutRequestsInput, Prisma.SiteUncheckedUpdateWithoutRequestsInput>;
};
export type SiteUpdateWithoutRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoles?: Prisma.UserSiteRoleUpdateManyWithoutSiteNestedInput;
};
export type SiteUncheckedUpdateWithoutRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.EnumSiteCodeFieldUpdateOperationsInput | $Enums.SiteCode;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userRoles?: Prisma.UserSiteRoleUncheckedUpdateManyWithoutSiteNestedInput;
};
export type SiteCountOutputType = {
    userRoles: number;
    requests: number;
};
export type SiteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userRoles?: boolean | SiteCountOutputTypeCountUserRolesArgs;
    requests?: boolean | SiteCountOutputTypeCountRequestsArgs;
};
export type SiteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteCountOutputTypeSelect<ExtArgs> | null;
};
export type SiteCountOutputTypeCountUserRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSiteRoleWhereInput;
};
export type SiteCountOutputTypeCountRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentRequestWhereInput;
};
export type SiteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    userRoles?: boolean | Prisma.Site$userRolesArgs<ExtArgs>;
    requests?: boolean | Prisma.Site$requestsArgs<ExtArgs>;
    _count?: boolean | Prisma.SiteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["site"]>;
export type SiteSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
};
export type SiteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["site"]>;
export type SiteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userRoles?: boolean | Prisma.Site$userRolesArgs<ExtArgs>;
    requests?: boolean | Prisma.Site$requestsArgs<ExtArgs>;
    _count?: boolean | Prisma.SiteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SitePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Site";
    objects: {
        userRoles: Prisma.$UserSiteRolePayload<ExtArgs>[];
        requests: Prisma.$PaymentRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: $Enums.SiteCode;
        name: string;
    }, ExtArgs["result"]["site"]>;
    composites: {};
};
export type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SitePayload, S>;
export type SiteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SiteCountAggregateInputType | true;
};
export interface SiteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Site'];
        meta: {
            name: 'Site';
        };
    };
    findUnique<T extends SiteFindUniqueArgs>(args: Prisma.SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SiteFindFirstArgs>(args?: Prisma.SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SiteFindManyArgs>(args?: Prisma.SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SiteCreateArgs>(args: Prisma.SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SiteCreateManyArgs>(args?: Prisma.SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SiteDeleteArgs>(args: Prisma.SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SiteUpdateArgs>(args: Prisma.SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SiteDeleteManyArgs>(args?: Prisma.SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SiteUpdateManyArgs>(args: Prisma.SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SiteUpsertArgs>(args: Prisma.SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SiteCountArgs>(args?: Prisma.Subset<T, SiteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SiteCountAggregateOutputType> : number>;
    aggregate<T extends SiteAggregateArgs>(args: Prisma.Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>;
    groupBy<T extends SiteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SiteGroupByArgs['orderBy'];
    } : {
        orderBy?: SiteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SiteFieldRefs;
}
export interface Prisma__SiteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userRoles<T extends Prisma.Site$userRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Site$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    requests<T extends Prisma.Site$requestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Site$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SiteFieldRefs {
    readonly id: Prisma.FieldRef<"Site", 'String'>;
    readonly code: Prisma.FieldRef<"Site", 'SiteCode'>;
    readonly name: Prisma.FieldRef<"Site", 'String'>;
}
export type SiteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where: Prisma.SiteWhereUniqueInput;
};
export type SiteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where: Prisma.SiteWhereUniqueInput;
};
export type SiteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where?: Prisma.SiteWhereInput;
    orderBy?: Prisma.SiteOrderByWithRelationInput | Prisma.SiteOrderByWithRelationInput[];
    cursor?: Prisma.SiteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SiteScalarFieldEnum | Prisma.SiteScalarFieldEnum[];
};
export type SiteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where?: Prisma.SiteWhereInput;
    orderBy?: Prisma.SiteOrderByWithRelationInput | Prisma.SiteOrderByWithRelationInput[];
    cursor?: Prisma.SiteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SiteScalarFieldEnum | Prisma.SiteScalarFieldEnum[];
};
export type SiteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where?: Prisma.SiteWhereInput;
    orderBy?: Prisma.SiteOrderByWithRelationInput | Prisma.SiteOrderByWithRelationInput[];
    cursor?: Prisma.SiteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SiteScalarFieldEnum | Prisma.SiteScalarFieldEnum[];
};
export type SiteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SiteCreateInput, Prisma.SiteUncheckedCreateInput>;
};
export type SiteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SiteCreateManyInput | Prisma.SiteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SiteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SiteUpdateInput, Prisma.SiteUncheckedUpdateInput>;
    where: Prisma.SiteWhereUniqueInput;
};
export type SiteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SiteUpdateManyMutationInput, Prisma.SiteUncheckedUpdateManyInput>;
    where?: Prisma.SiteWhereInput;
    limit?: number;
};
export type SiteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where: Prisma.SiteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SiteCreateInput, Prisma.SiteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SiteUpdateInput, Prisma.SiteUncheckedUpdateInput>;
};
export type SiteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
    where: Prisma.SiteWhereUniqueInput;
};
export type SiteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SiteWhereInput;
    limit?: number;
};
export type Site$userRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Site$requestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SiteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteSelect<ExtArgs> | null;
    omit?: Prisma.SiteOmit<ExtArgs> | null;
    include?: Prisma.SiteInclude<ExtArgs> | null;
};
