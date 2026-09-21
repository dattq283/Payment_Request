import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "site" | "user" | "userSiteRole" | "paymentRequest" | "invoiceLink" | "attachment" | "requestWatcher" | "comment" | "changeLog" | "notification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Site: {
            payload: Prisma.$SitePayload<ExtArgs>;
            fields: Prisma.SiteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SiteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>;
                };
                findFirst: {
                    args: Prisma.SiteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>;
                };
                findMany: {
                    args: Prisma.SiteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>[];
                };
                create: {
                    args: Prisma.SiteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>;
                };
                createMany: {
                    args: Prisma.SiteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SiteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>;
                };
                update: {
                    args: Prisma.SiteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>;
                };
                deleteMany: {
                    args: Prisma.SiteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SiteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SiteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePayload>;
                };
                aggregate: {
                    args: Prisma.SiteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSite>;
                };
                groupBy: {
                    args: Prisma.SiteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SiteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SiteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SiteCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserSiteRole: {
            payload: Prisma.$UserSiteRolePayload<ExtArgs>;
            fields: Prisma.UserSiteRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserSiteRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserSiteRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>;
                };
                findFirst: {
                    args: Prisma.UserSiteRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserSiteRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>;
                };
                findMany: {
                    args: Prisma.UserSiteRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>[];
                };
                create: {
                    args: Prisma.UserSiteRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>;
                };
                createMany: {
                    args: Prisma.UserSiteRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserSiteRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>;
                };
                update: {
                    args: Prisma.UserSiteRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>;
                };
                deleteMany: {
                    args: Prisma.UserSiteRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserSiteRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserSiteRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSiteRolePayload>;
                };
                aggregate: {
                    args: Prisma.UserSiteRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserSiteRole>;
                };
                groupBy: {
                    args: Prisma.UserSiteRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSiteRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserSiteRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSiteRoleCountAggregateOutputType> | number;
                };
            };
        };
        PaymentRequest: {
            payload: Prisma.$PaymentRequestPayload<ExtArgs>;
            fields: Prisma.PaymentRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>;
                };
                findMany: {
                    args: Prisma.PaymentRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[];
                };
                create: {
                    args: Prisma.PaymentRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>;
                };
                createMany: {
                    args: Prisma.PaymentRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PaymentRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>;
                };
                update: {
                    args: Prisma.PaymentRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PaymentRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentRequestPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePaymentRequest>;
                };
                groupBy: {
                    args: Prisma.PaymentRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentRequestCountAggregateOutputType> | number;
                };
            };
        };
        InvoiceLink: {
            payload: Prisma.$InvoiceLinkPayload<ExtArgs>;
            fields: Prisma.InvoiceLinkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceLinkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceLinkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceLinkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceLinkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>;
                };
                findMany: {
                    args: Prisma.InvoiceLinkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>[];
                };
                create: {
                    args: Prisma.InvoiceLinkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>;
                };
                createMany: {
                    args: Prisma.InvoiceLinkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InvoiceLinkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>;
                };
                update: {
                    args: Prisma.InvoiceLinkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceLinkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceLinkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InvoiceLinkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceLinkPayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceLinkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoiceLink>;
                };
                groupBy: {
                    args: Prisma.InvoiceLinkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceLinkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceLinkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceLinkCountAggregateOutputType> | number;
                };
            };
        };
        Attachment: {
            payload: Prisma.$AttachmentPayload<ExtArgs>;
            fields: Prisma.AttachmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttachmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                findFirst: {
                    args: Prisma.AttachmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                findMany: {
                    args: Prisma.AttachmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>[];
                };
                create: {
                    args: Prisma.AttachmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                createMany: {
                    args: Prisma.AttachmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AttachmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                update: {
                    args: Prisma.AttachmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AttachmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttachmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AttachmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                aggregate: {
                    args: Prisma.AttachmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttachment>;
                };
                groupBy: {
                    args: Prisma.AttachmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttachmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttachmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttachmentCountAggregateOutputType> | number;
                };
            };
        };
        RequestWatcher: {
            payload: Prisma.$RequestWatcherPayload<ExtArgs>;
            fields: Prisma.RequestWatcherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RequestWatcherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RequestWatcherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>;
                };
                findFirst: {
                    args: Prisma.RequestWatcherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RequestWatcherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>;
                };
                findMany: {
                    args: Prisma.RequestWatcherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>[];
                };
                create: {
                    args: Prisma.RequestWatcherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>;
                };
                createMany: {
                    args: Prisma.RequestWatcherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RequestWatcherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>;
                };
                update: {
                    args: Prisma.RequestWatcherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>;
                };
                deleteMany: {
                    args: Prisma.RequestWatcherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RequestWatcherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RequestWatcherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestWatcherPayload>;
                };
                aggregate: {
                    args: Prisma.RequestWatcherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRequestWatcher>;
                };
                groupBy: {
                    args: Prisma.RequestWatcherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequestWatcherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RequestWatcherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequestWatcherCountAggregateOutputType> | number;
                };
            };
        };
        Comment: {
            payload: Prisma.$CommentPayload<ExtArgs>;
            fields: Prisma.CommentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>;
                };
                findFirst: {
                    args: Prisma.CommentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>;
                };
                findMany: {
                    args: Prisma.CommentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>[];
                };
                create: {
                    args: Prisma.CommentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>;
                };
                createMany: {
                    args: Prisma.CommentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CommentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>;
                };
                update: {
                    args: Prisma.CommentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>;
                };
                deleteMany: {
                    args: Prisma.CommentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CommentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentPayload>;
                };
                aggregate: {
                    args: Prisma.CommentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComment>;
                };
                groupBy: {
                    args: Prisma.CommentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentCountAggregateOutputType> | number;
                };
            };
        };
        ChangeLog: {
            payload: Prisma.$ChangeLogPayload<ExtArgs>;
            fields: Prisma.ChangeLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChangeLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChangeLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>;
                };
                findFirst: {
                    args: Prisma.ChangeLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChangeLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>;
                };
                findMany: {
                    args: Prisma.ChangeLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>[];
                };
                create: {
                    args: Prisma.ChangeLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>;
                };
                createMany: {
                    args: Prisma.ChangeLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChangeLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>;
                };
                update: {
                    args: Prisma.ChangeLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>;
                };
                deleteMany: {
                    args: Prisma.ChangeLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChangeLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChangeLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChangeLogPayload>;
                };
                aggregate: {
                    args: Prisma.ChangeLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChangeLog>;
                };
                groupBy: {
                    args: Prisma.ChangeLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChangeLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChangeLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChangeLogCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type EnumSiteCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SiteCode'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>;
export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type EnumAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttachmentType'>;
export type EnumChangeLogActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChangeLogAction'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    site?: Prisma.SiteOmit;
    user?: Prisma.UserOmit;
    userSiteRole?: Prisma.UserSiteRoleOmit;
    paymentRequest?: Prisma.PaymentRequestOmit;
    invoiceLink?: Prisma.InvoiceLinkOmit;
    attachment?: Prisma.AttachmentOmit;
    requestWatcher?: Prisma.RequestWatcherOmit;
    comment?: Prisma.CommentOmit;
    changeLog?: Prisma.ChangeLogOmit;
    notification?: Prisma.NotificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
