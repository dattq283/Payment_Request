import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserSiteRoleModel = runtime.Types.Result.DefaultSelection<Prisma.$UserSiteRolePayload>;
export type AggregateUserSiteRole = {
    _count: UserSiteRoleCountAggregateOutputType | null;
    _min: UserSiteRoleMinAggregateOutputType | null;
    _max: UserSiteRoleMaxAggregateOutputType | null;
};
export type UserSiteRoleMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    siteId: string | null;
    role: $Enums.Role | null;
};
export type UserSiteRoleMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    siteId: string | null;
    role: $Enums.Role | null;
};
export type UserSiteRoleCountAggregateOutputType = {
    id: number;
    userId: number;
    siteId: number;
    role: number;
    _all: number;
};
export type UserSiteRoleMinAggregateInputType = {
    id?: true;
    userId?: true;
    siteId?: true;
    role?: true;
};
export type UserSiteRoleMaxAggregateInputType = {
    id?: true;
    userId?: true;
    siteId?: true;
    role?: true;
};
export type UserSiteRoleCountAggregateInputType = {
    id?: true;
    userId?: true;
    siteId?: true;
    role?: true;
    _all?: true;
};
export type UserSiteRoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSiteRoleWhereInput;
    orderBy?: Prisma.UserSiteRoleOrderByWithRelationInput | Prisma.UserSiteRoleOrderByWithRelationInput[];
    cursor?: Prisma.UserSiteRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserSiteRoleCountAggregateInputType;
    _min?: UserSiteRoleMinAggregateInputType;
    _max?: UserSiteRoleMaxAggregateInputType;
};
export type GetUserSiteRoleAggregateType<T extends UserSiteRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateUserSiteRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserSiteRole[P]> : Prisma.GetScalarType<T[P], AggregateUserSiteRole[P]>;
};
export type UserSiteRoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSiteRoleWhereInput;
    orderBy?: Prisma.UserSiteRoleOrderByWithAggregationInput | Prisma.UserSiteRoleOrderByWithAggregationInput[];
    by: Prisma.UserSiteRoleScalarFieldEnum[] | Prisma.UserSiteRoleScalarFieldEnum;
    having?: Prisma.UserSiteRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserSiteRoleCountAggregateInputType | true;
    _min?: UserSiteRoleMinAggregateInputType;
    _max?: UserSiteRoleMaxAggregateInputType;
};
export type UserSiteRoleGroupByOutputType = {
    id: string;
    userId: string;
    siteId: string;
    role: $Enums.Role;
    _count: UserSiteRoleCountAggregateOutputType | null;
    _min: UserSiteRoleMinAggregateOutputType | null;
    _max: UserSiteRoleMaxAggregateOutputType | null;
};
export type GetUserSiteRoleGroupByPayload<T extends UserSiteRoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserSiteRoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserSiteRoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserSiteRoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserSiteRoleGroupByOutputType[P]>;
}>>;
export type UserSiteRoleWhereInput = {
    AND?: Prisma.UserSiteRoleWhereInput | Prisma.UserSiteRoleWhereInput[];
    OR?: Prisma.UserSiteRoleWhereInput[];
    NOT?: Prisma.UserSiteRoleWhereInput | Prisma.UserSiteRoleWhereInput[];
    id?: Prisma.StringFilter<"UserSiteRole"> | string;
    userId?: Prisma.StringFilter<"UserSiteRole"> | string;
    siteId?: Prisma.StringFilter<"UserSiteRole"> | string;
    role?: Prisma.EnumRoleFilter<"UserSiteRole"> | $Enums.Role;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    site?: Prisma.XOR<Prisma.SiteScalarRelationFilter, Prisma.SiteWhereInput>;
};
export type UserSiteRoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    siteId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    site?: Prisma.SiteOrderByWithRelationInput;
    _relevance?: Prisma.UserSiteRoleOrderByRelevanceInput;
};
export type UserSiteRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_siteId_role?: Prisma.UserSiteRoleUserIdSiteIdRoleCompoundUniqueInput;
    AND?: Prisma.UserSiteRoleWhereInput | Prisma.UserSiteRoleWhereInput[];
    OR?: Prisma.UserSiteRoleWhereInput[];
    NOT?: Prisma.UserSiteRoleWhereInput | Prisma.UserSiteRoleWhereInput[];
    userId?: Prisma.StringFilter<"UserSiteRole"> | string;
    siteId?: Prisma.StringFilter<"UserSiteRole"> | string;
    role?: Prisma.EnumRoleFilter<"UserSiteRole"> | $Enums.Role;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    site?: Prisma.XOR<Prisma.SiteScalarRelationFilter, Prisma.SiteWhereInput>;
}, "id" | "userId_siteId_role">;
export type UserSiteRoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    siteId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    _count?: Prisma.UserSiteRoleCountOrderByAggregateInput;
    _max?: Prisma.UserSiteRoleMaxOrderByAggregateInput;
    _min?: Prisma.UserSiteRoleMinOrderByAggregateInput;
};
export type UserSiteRoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserSiteRoleScalarWhereWithAggregatesInput | Prisma.UserSiteRoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserSiteRoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserSiteRoleScalarWhereWithAggregatesInput | Prisma.UserSiteRoleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserSiteRole"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserSiteRole"> | string;
    siteId?: Prisma.StringWithAggregatesFilter<"UserSiteRole"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"UserSiteRole"> | $Enums.Role;
};
export type UserSiteRoleCreateInput = {
    id?: string;
    role: $Enums.Role;
    user: Prisma.UserCreateNestedOneWithoutSiteRolesInput;
    site: Prisma.SiteCreateNestedOneWithoutUserRolesInput;
};
export type UserSiteRoleUncheckedCreateInput = {
    id?: string;
    userId: string;
    siteId: string;
    role: $Enums.Role;
};
export type UserSiteRoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    user?: Prisma.UserUpdateOneRequiredWithoutSiteRolesNestedInput;
    site?: Prisma.SiteUpdateOneRequiredWithoutUserRolesNestedInput;
};
export type UserSiteRoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    siteId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleCreateManyInput = {
    id?: string;
    userId: string;
    siteId: string;
    role: $Enums.Role;
};
export type UserSiteRoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    siteId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleListRelationFilter = {
    every?: Prisma.UserSiteRoleWhereInput;
    some?: Prisma.UserSiteRoleWhereInput;
    none?: Prisma.UserSiteRoleWhereInput;
};
export type UserSiteRoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserSiteRoleOrderByRelevanceInput = {
    fields: Prisma.UserSiteRoleOrderByRelevanceFieldEnum | Prisma.UserSiteRoleOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type UserSiteRoleUserIdSiteIdRoleCompoundUniqueInput = {
    userId: string;
    siteId: string;
    role: $Enums.Role;
};
export type UserSiteRoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    siteId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type UserSiteRoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    siteId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type UserSiteRoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    siteId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type UserSiteRoleCreateNestedManyWithoutSiteInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutSiteInput, Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput> | Prisma.UserSiteRoleCreateWithoutSiteInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput | Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput[];
    createMany?: Prisma.UserSiteRoleCreateManySiteInputEnvelope;
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
};
export type UserSiteRoleUncheckedCreateNestedManyWithoutSiteInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutSiteInput, Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput> | Prisma.UserSiteRoleCreateWithoutSiteInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput | Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput[];
    createMany?: Prisma.UserSiteRoleCreateManySiteInputEnvelope;
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
};
export type UserSiteRoleUpdateManyWithoutSiteNestedInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutSiteInput, Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput> | Prisma.UserSiteRoleCreateWithoutSiteInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput | Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput[];
    upsert?: Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutSiteInput | Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutSiteInput[];
    createMany?: Prisma.UserSiteRoleCreateManySiteInputEnvelope;
    set?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    disconnect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    delete?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    update?: Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutSiteInput | Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutSiteInput[];
    updateMany?: Prisma.UserSiteRoleUpdateManyWithWhereWithoutSiteInput | Prisma.UserSiteRoleUpdateManyWithWhereWithoutSiteInput[];
    deleteMany?: Prisma.UserSiteRoleScalarWhereInput | Prisma.UserSiteRoleScalarWhereInput[];
};
export type UserSiteRoleUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutSiteInput, Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput> | Prisma.UserSiteRoleCreateWithoutSiteInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput | Prisma.UserSiteRoleCreateOrConnectWithoutSiteInput[];
    upsert?: Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutSiteInput | Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutSiteInput[];
    createMany?: Prisma.UserSiteRoleCreateManySiteInputEnvelope;
    set?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    disconnect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    delete?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    update?: Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutSiteInput | Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutSiteInput[];
    updateMany?: Prisma.UserSiteRoleUpdateManyWithWhereWithoutSiteInput | Prisma.UserSiteRoleUpdateManyWithWhereWithoutSiteInput[];
    deleteMany?: Prisma.UserSiteRoleScalarWhereInput | Prisma.UserSiteRoleScalarWhereInput[];
};
export type UserSiteRoleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutUserInput, Prisma.UserSiteRoleUncheckedCreateWithoutUserInput> | Prisma.UserSiteRoleCreateWithoutUserInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutUserInput | Prisma.UserSiteRoleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserSiteRoleCreateManyUserInputEnvelope;
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
};
export type UserSiteRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutUserInput, Prisma.UserSiteRoleUncheckedCreateWithoutUserInput> | Prisma.UserSiteRoleCreateWithoutUserInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutUserInput | Prisma.UserSiteRoleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserSiteRoleCreateManyUserInputEnvelope;
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
};
export type UserSiteRoleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutUserInput, Prisma.UserSiteRoleUncheckedCreateWithoutUserInput> | Prisma.UserSiteRoleCreateWithoutUserInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutUserInput | Prisma.UserSiteRoleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutUserInput | Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserSiteRoleCreateManyUserInputEnvelope;
    set?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    disconnect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    delete?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    update?: Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutUserInput | Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserSiteRoleUpdateManyWithWhereWithoutUserInput | Prisma.UserSiteRoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserSiteRoleScalarWhereInput | Prisma.UserSiteRoleScalarWhereInput[];
};
export type UserSiteRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutUserInput, Prisma.UserSiteRoleUncheckedCreateWithoutUserInput> | Prisma.UserSiteRoleCreateWithoutUserInput[] | Prisma.UserSiteRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSiteRoleCreateOrConnectWithoutUserInput | Prisma.UserSiteRoleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutUserInput | Prisma.UserSiteRoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserSiteRoleCreateManyUserInputEnvelope;
    set?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    disconnect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    delete?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    connect?: Prisma.UserSiteRoleWhereUniqueInput | Prisma.UserSiteRoleWhereUniqueInput[];
    update?: Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutUserInput | Prisma.UserSiteRoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserSiteRoleUpdateManyWithWhereWithoutUserInput | Prisma.UserSiteRoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserSiteRoleScalarWhereInput | Prisma.UserSiteRoleScalarWhereInput[];
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type UserSiteRoleCreateWithoutSiteInput = {
    id?: string;
    role: $Enums.Role;
    user: Prisma.UserCreateNestedOneWithoutSiteRolesInput;
};
export type UserSiteRoleUncheckedCreateWithoutSiteInput = {
    id?: string;
    userId: string;
    role: $Enums.Role;
};
export type UserSiteRoleCreateOrConnectWithoutSiteInput = {
    where: Prisma.UserSiteRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutSiteInput, Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput>;
};
export type UserSiteRoleCreateManySiteInputEnvelope = {
    data: Prisma.UserSiteRoleCreateManySiteInput | Prisma.UserSiteRoleCreateManySiteInput[];
    skipDuplicates?: boolean;
};
export type UserSiteRoleUpsertWithWhereUniqueWithoutSiteInput = {
    where: Prisma.UserSiteRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserSiteRoleUpdateWithoutSiteInput, Prisma.UserSiteRoleUncheckedUpdateWithoutSiteInput>;
    create: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutSiteInput, Prisma.UserSiteRoleUncheckedCreateWithoutSiteInput>;
};
export type UserSiteRoleUpdateWithWhereUniqueWithoutSiteInput = {
    where: Prisma.UserSiteRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserSiteRoleUpdateWithoutSiteInput, Prisma.UserSiteRoleUncheckedUpdateWithoutSiteInput>;
};
export type UserSiteRoleUpdateManyWithWhereWithoutSiteInput = {
    where: Prisma.UserSiteRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.UserSiteRoleUpdateManyMutationInput, Prisma.UserSiteRoleUncheckedUpdateManyWithoutSiteInput>;
};
export type UserSiteRoleScalarWhereInput = {
    AND?: Prisma.UserSiteRoleScalarWhereInput | Prisma.UserSiteRoleScalarWhereInput[];
    OR?: Prisma.UserSiteRoleScalarWhereInput[];
    NOT?: Prisma.UserSiteRoleScalarWhereInput | Prisma.UserSiteRoleScalarWhereInput[];
    id?: Prisma.StringFilter<"UserSiteRole"> | string;
    userId?: Prisma.StringFilter<"UserSiteRole"> | string;
    siteId?: Prisma.StringFilter<"UserSiteRole"> | string;
    role?: Prisma.EnumRoleFilter<"UserSiteRole"> | $Enums.Role;
};
export type UserSiteRoleCreateWithoutUserInput = {
    id?: string;
    role: $Enums.Role;
    site: Prisma.SiteCreateNestedOneWithoutUserRolesInput;
};
export type UserSiteRoleUncheckedCreateWithoutUserInput = {
    id?: string;
    siteId: string;
    role: $Enums.Role;
};
export type UserSiteRoleCreateOrConnectWithoutUserInput = {
    where: Prisma.UserSiteRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutUserInput, Prisma.UserSiteRoleUncheckedCreateWithoutUserInput>;
};
export type UserSiteRoleCreateManyUserInputEnvelope = {
    data: Prisma.UserSiteRoleCreateManyUserInput | Prisma.UserSiteRoleCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserSiteRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserSiteRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserSiteRoleUpdateWithoutUserInput, Prisma.UserSiteRoleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserSiteRoleCreateWithoutUserInput, Prisma.UserSiteRoleUncheckedCreateWithoutUserInput>;
};
export type UserSiteRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserSiteRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserSiteRoleUpdateWithoutUserInput, Prisma.UserSiteRoleUncheckedUpdateWithoutUserInput>;
};
export type UserSiteRoleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserSiteRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.UserSiteRoleUpdateManyMutationInput, Prisma.UserSiteRoleUncheckedUpdateManyWithoutUserInput>;
};
export type UserSiteRoleCreateManySiteInput = {
    id?: string;
    userId: string;
    role: $Enums.Role;
};
export type UserSiteRoleUpdateWithoutSiteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    user?: Prisma.UserUpdateOneRequiredWithoutSiteRolesNestedInput;
};
export type UserSiteRoleUncheckedUpdateWithoutSiteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleUncheckedUpdateManyWithoutSiteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleCreateManyUserInput = {
    id?: string;
    siteId: string;
    role: $Enums.Role;
};
export type UserSiteRoleUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    site?: Prisma.SiteUpdateOneRequiredWithoutUserRolesNestedInput;
};
export type UserSiteRoleUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    siteId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    siteId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
};
export type UserSiteRoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    siteId?: boolean;
    role?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    site?: boolean | Prisma.SiteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userSiteRole"]>;
export type UserSiteRoleSelectScalar = {
    id?: boolean;
    userId?: boolean;
    siteId?: boolean;
    role?: boolean;
};
export type UserSiteRoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "siteId" | "role", ExtArgs["result"]["userSiteRole"]>;
export type UserSiteRoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    site?: boolean | Prisma.SiteDefaultArgs<ExtArgs>;
};
export type $UserSiteRolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserSiteRole";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        site: Prisma.$SitePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        siteId: string;
        role: $Enums.Role;
    }, ExtArgs["result"]["userSiteRole"]>;
    composites: {};
};
export type UserSiteRoleGetPayload<S extends boolean | null | undefined | UserSiteRoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload, S>;
export type UserSiteRoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserSiteRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserSiteRoleCountAggregateInputType | true;
};
export interface UserSiteRoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserSiteRole'];
        meta: {
            name: 'UserSiteRole';
        };
    };
    findUnique<T extends UserSiteRoleFindUniqueArgs>(args: Prisma.SelectSubset<T, UserSiteRoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserSiteRoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserSiteRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserSiteRoleFindFirstArgs>(args?: Prisma.SelectSubset<T, UserSiteRoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserSiteRoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserSiteRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserSiteRoleFindManyArgs>(args?: Prisma.SelectSubset<T, UserSiteRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserSiteRoleCreateArgs>(args: Prisma.SelectSubset<T, UserSiteRoleCreateArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserSiteRoleCreateManyArgs>(args?: Prisma.SelectSubset<T, UserSiteRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserSiteRoleDeleteArgs>(args: Prisma.SelectSubset<T, UserSiteRoleDeleteArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserSiteRoleUpdateArgs>(args: Prisma.SelectSubset<T, UserSiteRoleUpdateArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserSiteRoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserSiteRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserSiteRoleUpdateManyArgs>(args: Prisma.SelectSubset<T, UserSiteRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserSiteRoleUpsertArgs>(args: Prisma.SelectSubset<T, UserSiteRoleUpsertArgs<ExtArgs>>): Prisma.Prisma__UserSiteRoleClient<runtime.Types.Result.GetResult<Prisma.$UserSiteRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserSiteRoleCountArgs>(args?: Prisma.Subset<T, UserSiteRoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserSiteRoleCountAggregateOutputType> : number>;
    aggregate<T extends UserSiteRoleAggregateArgs>(args: Prisma.Subset<T, UserSiteRoleAggregateArgs>): Prisma.PrismaPromise<GetUserSiteRoleAggregateType<T>>;
    groupBy<T extends UserSiteRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserSiteRoleGroupByArgs['orderBy'];
    } : {
        orderBy?: UserSiteRoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserSiteRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSiteRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserSiteRoleFieldRefs;
}
export interface Prisma__UserSiteRoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    site<T extends Prisma.SiteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SiteDefaultArgs<ExtArgs>>): Prisma.Prisma__SiteClient<runtime.Types.Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserSiteRoleFieldRefs {
    readonly id: Prisma.FieldRef<"UserSiteRole", 'String'>;
    readonly userId: Prisma.FieldRef<"UserSiteRole", 'String'>;
    readonly siteId: Prisma.FieldRef<"UserSiteRole", 'String'>;
    readonly role: Prisma.FieldRef<"UserSiteRole", 'Role'>;
}
export type UserSiteRoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    where: Prisma.UserSiteRoleWhereUniqueInput;
};
export type UserSiteRoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    where: Prisma.UserSiteRoleWhereUniqueInput;
};
export type UserSiteRoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserSiteRoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserSiteRoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserSiteRoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSiteRoleCreateInput, Prisma.UserSiteRoleUncheckedCreateInput>;
};
export type UserSiteRoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserSiteRoleCreateManyInput | Prisma.UserSiteRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserSiteRoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSiteRoleUpdateInput, Prisma.UserSiteRoleUncheckedUpdateInput>;
    where: Prisma.UserSiteRoleWhereUniqueInput;
};
export type UserSiteRoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserSiteRoleUpdateManyMutationInput, Prisma.UserSiteRoleUncheckedUpdateManyInput>;
    where?: Prisma.UserSiteRoleWhereInput;
    limit?: number;
};
export type UserSiteRoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    where: Prisma.UserSiteRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSiteRoleCreateInput, Prisma.UserSiteRoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserSiteRoleUpdateInput, Prisma.UserSiteRoleUncheckedUpdateInput>;
};
export type UserSiteRoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
    where: Prisma.UserSiteRoleWhereUniqueInput;
};
export type UserSiteRoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSiteRoleWhereInput;
    limit?: number;
};
export type UserSiteRoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSiteRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserSiteRoleOmit<ExtArgs> | null;
    include?: Prisma.UserSiteRoleInclude<ExtArgs> | null;
};
