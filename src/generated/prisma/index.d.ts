
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Fragment
 * 
 */
export type Fragment = $Result.DefaultSelection<Prisma.$FragmentPayload>
/**
 * Model ProjectVersion
 * 
 */
export type ProjectVersion = $Result.DefaultSelection<Prisma.$ProjectVersionPayload>
/**
 * Model AIUsage
 * 
 */
export type AIUsage = $Result.DefaultSelection<Prisma.$AIUsagePayload>
/**
 * Model APIKey
 * 
 */
export type APIKey = $Result.DefaultSelection<Prisma.$APIKeyPayload>
/**
 * Model RateLimit
 * 
 */
export type RateLimit = $Result.DefaultSelection<Prisma.$RateLimitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageRole: {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT'
};

export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole]


export const MessageType: {
  RESULT: 'RESULT',
  ERROR: 'ERROR'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type MessageRole = $Enums.MessageRole

export const MessageRole: typeof $Enums.MessageRole

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fragment`: Exposes CRUD operations for the **Fragment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fragments
    * const fragments = await prisma.fragment.findMany()
    * ```
    */
  get fragment(): Prisma.FragmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectVersion`: Exposes CRUD operations for the **ProjectVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectVersions
    * const projectVersions = await prisma.projectVersion.findMany()
    * ```
    */
  get projectVersion(): Prisma.ProjectVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIUsage`: Exposes CRUD operations for the **AIUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIUsages
    * const aIUsages = await prisma.aIUsage.findMany()
    * ```
    */
  get aIUsage(): Prisma.AIUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aPIKey`: Exposes CRUD operations for the **APIKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more APIKeys
    * const aPIKeys = await prisma.aPIKey.findMany()
    * ```
    */
  get aPIKey(): Prisma.APIKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimit`: Exposes CRUD operations for the **RateLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimits
    * const rateLimits = await prisma.rateLimit.findMany()
    * ```
    */
  get rateLimit(): Prisma.RateLimitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Message: 'Message',
    Fragment: 'Fragment',
    ProjectVersion: 'ProjectVersion',
    AIUsage: 'AIUsage',
    APIKey: 'APIKey',
    RateLimit: 'RateLimit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "message" | "fragment" | "projectVersion" | "aIUsage" | "aPIKey" | "rateLimit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Fragment: {
        payload: Prisma.$FragmentPayload<ExtArgs>
        fields: Prisma.FragmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FragmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FragmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          findFirst: {
            args: Prisma.FragmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FragmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          findMany: {
            args: Prisma.FragmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>[]
          }
          create: {
            args: Prisma.FragmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          createMany: {
            args: Prisma.FragmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FragmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>[]
          }
          delete: {
            args: Prisma.FragmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          update: {
            args: Prisma.FragmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          deleteMany: {
            args: Prisma.FragmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FragmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FragmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>[]
          }
          upsert: {
            args: Prisma.FragmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          aggregate: {
            args: Prisma.FragmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFragment>
          }
          groupBy: {
            args: Prisma.FragmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FragmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FragmentCountArgs<ExtArgs>
            result: $Utils.Optional<FragmentCountAggregateOutputType> | number
          }
        }
      }
      ProjectVersion: {
        payload: Prisma.$ProjectVersionPayload<ExtArgs>
        fields: Prisma.ProjectVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>
          }
          findFirst: {
            args: Prisma.ProjectVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>
          }
          findMany: {
            args: Prisma.ProjectVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>[]
          }
          create: {
            args: Prisma.ProjectVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>
          }
          createMany: {
            args: Prisma.ProjectVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>[]
          }
          delete: {
            args: Prisma.ProjectVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>
          }
          update: {
            args: Prisma.ProjectVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>
          }
          deleteMany: {
            args: Prisma.ProjectVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>[]
          }
          upsert: {
            args: Prisma.ProjectVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectVersionPayload>
          }
          aggregate: {
            args: Prisma.ProjectVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectVersion>
          }
          groupBy: {
            args: Prisma.ProjectVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectVersionCountAggregateOutputType> | number
          }
        }
      }
      AIUsage: {
        payload: Prisma.$AIUsagePayload<ExtArgs>
        fields: Prisma.AIUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>
          }
          findFirst: {
            args: Prisma.AIUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>
          }
          findMany: {
            args: Prisma.AIUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>[]
          }
          create: {
            args: Prisma.AIUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>
          }
          createMany: {
            args: Prisma.AIUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>[]
          }
          delete: {
            args: Prisma.AIUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>
          }
          update: {
            args: Prisma.AIUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>
          }
          deleteMany: {
            args: Prisma.AIUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>[]
          }
          upsert: {
            args: Prisma.AIUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIUsagePayload>
          }
          aggregate: {
            args: Prisma.AIUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIUsage>
          }
          groupBy: {
            args: Prisma.AIUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIUsageCountArgs<ExtArgs>
            result: $Utils.Optional<AIUsageCountAggregateOutputType> | number
          }
        }
      }
      APIKey: {
        payload: Prisma.$APIKeyPayload<ExtArgs>
        fields: Prisma.APIKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.APIKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.APIKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          findFirst: {
            args: Prisma.APIKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.APIKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          findMany: {
            args: Prisma.APIKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          create: {
            args: Prisma.APIKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          createMany: {
            args: Prisma.APIKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.APIKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          delete: {
            args: Prisma.APIKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          update: {
            args: Prisma.APIKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          deleteMany: {
            args: Prisma.APIKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.APIKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.APIKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          upsert: {
            args: Prisma.APIKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          aggregate: {
            args: Prisma.APIKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAPIKey>
          }
          groupBy: {
            args: Prisma.APIKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<APIKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.APIKeyCountArgs<ExtArgs>
            result: $Utils.Optional<APIKeyCountAggregateOutputType> | number
          }
        }
      }
      RateLimit: {
        payload: Prisma.$RateLimitPayload<ExtArgs>
        fields: Prisma.RateLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          findFirst: {
            args: Prisma.RateLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          findMany: {
            args: Prisma.RateLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>[]
          }
          create: {
            args: Prisma.RateLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          createMany: {
            args: Prisma.RateLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>[]
          }
          delete: {
            args: Prisma.RateLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          update: {
            args: Prisma.RateLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          aggregate: {
            args: Prisma.RateLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimit>
          }
          groupBy: {
            args: Prisma.RateLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    message?: MessageOmit
    fragment?: FragmentOmit
    projectVersion?: ProjectVersionOmit
    aIUsage?: AIUsageOmit
    aPIKey?: APIKeyOmit
    rateLimit?: RateLimitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    messages: number
    fragments: number
    versions: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ProjectCountOutputTypeCountMessagesArgs
    fragments?: boolean | ProjectCountOutputTypeCountFragmentsArgs
    versions?: boolean | ProjectCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFragmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FragmentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectVersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Project$messagesArgs<ExtArgs>
    fragments?: boolean | Project$fragmentsArgs<ExtArgs>
    versions?: boolean | Project$versionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Project$messagesArgs<ExtArgs>
    fragments?: boolean | Project$fragmentsArgs<ExtArgs>
    versions?: boolean | Project$versionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      fragments: Prisma.$FragmentPayload<ExtArgs>[]
      versions: Prisma.$ProjectVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Project$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fragments<T extends Project$fragmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$fragmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends Project$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.messages
   */
  export type Project$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Project.fragments
   */
  export type Project$fragmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    where?: FragmentWhereInput
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    cursor?: FragmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Project.versions
   */
  export type Project$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    where?: ProjectVersionWhereInput
    orderBy?: ProjectVersionOrderByWithRelationInput | ProjectVersionOrderByWithRelationInput[]
    cursor?: ProjectVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectVersionScalarFieldEnum | ProjectVersionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    role: $Enums.MessageRole | null
    type: $Enums.MessageType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    role: $Enums.MessageRole | null
    type: $Enums.MessageType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    role: number
    type: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    role?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    role?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    role?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    fragment?: boolean | Message$fragmentArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "role" | "type" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    fragment?: boolean | Message$fragmentArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      fragment: Prisma.$FragmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      role: $Enums.MessageRole
      type: $Enums.MessageType
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fragment<T extends Message$fragmentArgs<ExtArgs> = {}>(args?: Subset<T, Message$fragmentArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'MessageRole'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly projectId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.fragment
   */
  export type Message$fragmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    where?: FragmentWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Fragment
   */

  export type AggregateFragment = {
    _count: FragmentCountAggregateOutputType | null
    _min: FragmentMinAggregateOutputType | null
    _max: FragmentMaxAggregateOutputType | null
  }

  export type FragmentMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    sandboxUrl: string | null
    sandboxId: string | null
    title: string | null
    content: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FragmentMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    sandboxUrl: string | null
    sandboxId: string | null
    title: string | null
    content: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FragmentCountAggregateOutputType = {
    id: number
    messageId: number
    sandboxUrl: number
    sandboxId: number
    title: number
    content: number
    files: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FragmentMinAggregateInputType = {
    id?: true
    messageId?: true
    sandboxUrl?: true
    sandboxId?: true
    title?: true
    content?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FragmentMaxAggregateInputType = {
    id?: true
    messageId?: true
    sandboxUrl?: true
    sandboxId?: true
    title?: true
    content?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FragmentCountAggregateInputType = {
    id?: true
    messageId?: true
    sandboxUrl?: true
    sandboxId?: true
    title?: true
    content?: true
    files?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FragmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fragment to aggregate.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fragments
    **/
    _count?: true | FragmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FragmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FragmentMaxAggregateInputType
  }

  export type GetFragmentAggregateType<T extends FragmentAggregateArgs> = {
        [P in keyof T & keyof AggregateFragment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFragment[P]>
      : GetScalarType<T[P], AggregateFragment[P]>
  }




  export type FragmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FragmentWhereInput
    orderBy?: FragmentOrderByWithAggregationInput | FragmentOrderByWithAggregationInput[]
    by: FragmentScalarFieldEnum[] | FragmentScalarFieldEnum
    having?: FragmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FragmentCountAggregateInputType | true
    _min?: FragmentMinAggregateInputType
    _max?: FragmentMaxAggregateInputType
  }

  export type FragmentGroupByOutputType = {
    id: string
    messageId: string
    sandboxUrl: string
    sandboxId: string | null
    title: string
    content: string
    files: JsonValue | null
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: FragmentCountAggregateOutputType | null
    _min: FragmentMinAggregateOutputType | null
    _max: FragmentMaxAggregateOutputType | null
  }

  type GetFragmentGroupByPayload<T extends FragmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FragmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FragmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FragmentGroupByOutputType[P]>
            : GetScalarType<T[P], FragmentGroupByOutputType[P]>
        }
      >
    >


  export type FragmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    sandboxUrl?: boolean
    sandboxId?: boolean
    title?: boolean
    content?: boolean
    files?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fragment"]>

  export type FragmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    sandboxUrl?: boolean
    sandboxId?: boolean
    title?: boolean
    content?: boolean
    files?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fragment"]>

  export type FragmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    sandboxUrl?: boolean
    sandboxId?: boolean
    title?: boolean
    content?: boolean
    files?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fragment"]>

  export type FragmentSelectScalar = {
    id?: boolean
    messageId?: boolean
    sandboxUrl?: boolean
    sandboxId?: boolean
    title?: boolean
    content?: boolean
    files?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FragmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "sandboxUrl" | "sandboxId" | "title" | "content" | "files" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["fragment"]>
  export type FragmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FragmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FragmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FragmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fragment"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      sandboxUrl: string
      sandboxId: string | null
      title: string
      content: string
      files: Prisma.JsonValue | null
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fragment"]>
    composites: {}
  }

  type FragmentGetPayload<S extends boolean | null | undefined | FragmentDefaultArgs> = $Result.GetResult<Prisma.$FragmentPayload, S>

  type FragmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FragmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FragmentCountAggregateInputType | true
    }

  export interface FragmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fragment'], meta: { name: 'Fragment' } }
    /**
     * Find zero or one Fragment that matches the filter.
     * @param {FragmentFindUniqueArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FragmentFindUniqueArgs>(args: SelectSubset<T, FragmentFindUniqueArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fragment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FragmentFindUniqueOrThrowArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FragmentFindUniqueOrThrowArgs>(args: SelectSubset<T, FragmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fragment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentFindFirstArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FragmentFindFirstArgs>(args?: SelectSubset<T, FragmentFindFirstArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fragment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentFindFirstOrThrowArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FragmentFindFirstOrThrowArgs>(args?: SelectSubset<T, FragmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fragments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fragments
     * const fragments = await prisma.fragment.findMany()
     * 
     * // Get first 10 Fragments
     * const fragments = await prisma.fragment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fragmentWithIdOnly = await prisma.fragment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FragmentFindManyArgs>(args?: SelectSubset<T, FragmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fragment.
     * @param {FragmentCreateArgs} args - Arguments to create a Fragment.
     * @example
     * // Create one Fragment
     * const Fragment = await prisma.fragment.create({
     *   data: {
     *     // ... data to create a Fragment
     *   }
     * })
     * 
     */
    create<T extends FragmentCreateArgs>(args: SelectSubset<T, FragmentCreateArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fragments.
     * @param {FragmentCreateManyArgs} args - Arguments to create many Fragments.
     * @example
     * // Create many Fragments
     * const fragment = await prisma.fragment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FragmentCreateManyArgs>(args?: SelectSubset<T, FragmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fragments and returns the data saved in the database.
     * @param {FragmentCreateManyAndReturnArgs} args - Arguments to create many Fragments.
     * @example
     * // Create many Fragments
     * const fragment = await prisma.fragment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fragments and only return the `id`
     * const fragmentWithIdOnly = await prisma.fragment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FragmentCreateManyAndReturnArgs>(args?: SelectSubset<T, FragmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fragment.
     * @param {FragmentDeleteArgs} args - Arguments to delete one Fragment.
     * @example
     * // Delete one Fragment
     * const Fragment = await prisma.fragment.delete({
     *   where: {
     *     // ... filter to delete one Fragment
     *   }
     * })
     * 
     */
    delete<T extends FragmentDeleteArgs>(args: SelectSubset<T, FragmentDeleteArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fragment.
     * @param {FragmentUpdateArgs} args - Arguments to update one Fragment.
     * @example
     * // Update one Fragment
     * const fragment = await prisma.fragment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FragmentUpdateArgs>(args: SelectSubset<T, FragmentUpdateArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fragments.
     * @param {FragmentDeleteManyArgs} args - Arguments to filter Fragments to delete.
     * @example
     * // Delete a few Fragments
     * const { count } = await prisma.fragment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FragmentDeleteManyArgs>(args?: SelectSubset<T, FragmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fragments
     * const fragment = await prisma.fragment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FragmentUpdateManyArgs>(args: SelectSubset<T, FragmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fragments and returns the data updated in the database.
     * @param {FragmentUpdateManyAndReturnArgs} args - Arguments to update many Fragments.
     * @example
     * // Update many Fragments
     * const fragment = await prisma.fragment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fragments and only return the `id`
     * const fragmentWithIdOnly = await prisma.fragment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FragmentUpdateManyAndReturnArgs>(args: SelectSubset<T, FragmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fragment.
     * @param {FragmentUpsertArgs} args - Arguments to update or create a Fragment.
     * @example
     * // Update or create a Fragment
     * const fragment = await prisma.fragment.upsert({
     *   create: {
     *     // ... data to create a Fragment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fragment we want to update
     *   }
     * })
     */
    upsert<T extends FragmentUpsertArgs>(args: SelectSubset<T, FragmentUpsertArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentCountArgs} args - Arguments to filter Fragments to count.
     * @example
     * // Count the number of Fragments
     * const count = await prisma.fragment.count({
     *   where: {
     *     // ... the filter for the Fragments we want to count
     *   }
     * })
    **/
    count<T extends FragmentCountArgs>(
      args?: Subset<T, FragmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FragmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FragmentAggregateArgs>(args: Subset<T, FragmentAggregateArgs>): Prisma.PrismaPromise<GetFragmentAggregateType<T>>

    /**
     * Group by Fragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FragmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FragmentGroupByArgs['orderBy'] }
        : { orderBy?: FragmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FragmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFragmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fragment model
   */
  readonly fields: FragmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fragment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FragmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fragment model
   */
  interface FragmentFieldRefs {
    readonly id: FieldRef<"Fragment", 'String'>
    readonly messageId: FieldRef<"Fragment", 'String'>
    readonly sandboxUrl: FieldRef<"Fragment", 'String'>
    readonly sandboxId: FieldRef<"Fragment", 'String'>
    readonly title: FieldRef<"Fragment", 'String'>
    readonly content: FieldRef<"Fragment", 'String'>
    readonly files: FieldRef<"Fragment", 'Json'>
    readonly projectId: FieldRef<"Fragment", 'String'>
    readonly createdAt: FieldRef<"Fragment", 'DateTime'>
    readonly updatedAt: FieldRef<"Fragment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fragment findUnique
   */
  export type FragmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment findUniqueOrThrow
   */
  export type FragmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment findFirst
   */
  export type FragmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fragments.
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fragments.
     */
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Fragment findFirstOrThrow
   */
  export type FragmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fragments.
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fragments.
     */
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Fragment findMany
   */
  export type FragmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * Filter, which Fragments to fetch.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fragments.
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Fragment create
   */
  export type FragmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Fragment.
     */
    data: XOR<FragmentCreateInput, FragmentUncheckedCreateInput>
  }

  /**
   * Fragment createMany
   */
  export type FragmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fragments.
     */
    data: FragmentCreateManyInput | FragmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fragment createManyAndReturn
   */
  export type FragmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The data used to create many Fragments.
     */
    data: FragmentCreateManyInput | FragmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fragment update
   */
  export type FragmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Fragment.
     */
    data: XOR<FragmentUpdateInput, FragmentUncheckedUpdateInput>
    /**
     * Choose, which Fragment to update.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment updateMany
   */
  export type FragmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fragments.
     */
    data: XOR<FragmentUpdateManyMutationInput, FragmentUncheckedUpdateManyInput>
    /**
     * Filter which Fragments to update
     */
    where?: FragmentWhereInput
    /**
     * Limit how many Fragments to update.
     */
    limit?: number
  }

  /**
   * Fragment updateManyAndReturn
   */
  export type FragmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The data used to update Fragments.
     */
    data: XOR<FragmentUpdateManyMutationInput, FragmentUncheckedUpdateManyInput>
    /**
     * Filter which Fragments to update
     */
    where?: FragmentWhereInput
    /**
     * Limit how many Fragments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fragment upsert
   */
  export type FragmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Fragment to update in case it exists.
     */
    where: FragmentWhereUniqueInput
    /**
     * In case the Fragment found by the `where` argument doesn't exist, create a new Fragment with this data.
     */
    create: XOR<FragmentCreateInput, FragmentUncheckedCreateInput>
    /**
     * In case the Fragment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FragmentUpdateInput, FragmentUncheckedUpdateInput>
  }

  /**
   * Fragment delete
   */
  export type FragmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
    /**
     * Filter which Fragment to delete.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment deleteMany
   */
  export type FragmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fragments to delete
     */
    where?: FragmentWhereInput
    /**
     * Limit how many Fragments to delete.
     */
    limit?: number
  }

  /**
   * Fragment without action
   */
  export type FragmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FragmentInclude<ExtArgs> | null
  }


  /**
   * Model ProjectVersion
   */

  export type AggregateProjectVersion = {
    _count: ProjectVersionCountAggregateOutputType | null
    _min: ProjectVersionMinAggregateOutputType | null
    _max: ProjectVersionMaxAggregateOutputType | null
  }

  export type ProjectVersionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    label: string | null
    createdAt: Date | null
  }

  export type ProjectVersionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    label: string | null
    createdAt: Date | null
  }

  export type ProjectVersionCountAggregateOutputType = {
    id: number
    projectId: number
    snapshot: number
    label: number
    createdAt: number
    _all: number
  }


  export type ProjectVersionMinAggregateInputType = {
    id?: true
    projectId?: true
    label?: true
    createdAt?: true
  }

  export type ProjectVersionMaxAggregateInputType = {
    id?: true
    projectId?: true
    label?: true
    createdAt?: true
  }

  export type ProjectVersionCountAggregateInputType = {
    id?: true
    projectId?: true
    snapshot?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectVersion to aggregate.
     */
    where?: ProjectVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectVersions to fetch.
     */
    orderBy?: ProjectVersionOrderByWithRelationInput | ProjectVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectVersions
    **/
    _count?: true | ProjectVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectVersionMaxAggregateInputType
  }

  export type GetProjectVersionAggregateType<T extends ProjectVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectVersion[P]>
      : GetScalarType<T[P], AggregateProjectVersion[P]>
  }




  export type ProjectVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectVersionWhereInput
    orderBy?: ProjectVersionOrderByWithAggregationInput | ProjectVersionOrderByWithAggregationInput[]
    by: ProjectVersionScalarFieldEnum[] | ProjectVersionScalarFieldEnum
    having?: ProjectVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectVersionCountAggregateInputType | true
    _min?: ProjectVersionMinAggregateInputType
    _max?: ProjectVersionMaxAggregateInputType
  }

  export type ProjectVersionGroupByOutputType = {
    id: string
    projectId: string
    snapshot: JsonValue
    label: string | null
    createdAt: Date
    _count: ProjectVersionCountAggregateOutputType | null
    _min: ProjectVersionMinAggregateOutputType | null
    _max: ProjectVersionMaxAggregateOutputType | null
  }

  type GetProjectVersionGroupByPayload<T extends ProjectVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectVersionGroupByOutputType[P]>
        }
      >
    >


  export type ProjectVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    snapshot?: boolean
    label?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectVersion"]>

  export type ProjectVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    snapshot?: boolean
    label?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectVersion"]>

  export type ProjectVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    snapshot?: boolean
    label?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectVersion"]>

  export type ProjectVersionSelectScalar = {
    id?: boolean
    projectId?: boolean
    snapshot?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type ProjectVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "snapshot" | "label" | "createdAt", ExtArgs["result"]["projectVersion"]>
  export type ProjectVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectVersion"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      snapshot: Prisma.JsonValue
      label: string | null
      createdAt: Date
    }, ExtArgs["result"]["projectVersion"]>
    composites: {}
  }

  type ProjectVersionGetPayload<S extends boolean | null | undefined | ProjectVersionDefaultArgs> = $Result.GetResult<Prisma.$ProjectVersionPayload, S>

  type ProjectVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectVersionCountAggregateInputType | true
    }

  export interface ProjectVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectVersion'], meta: { name: 'ProjectVersion' } }
    /**
     * Find zero or one ProjectVersion that matches the filter.
     * @param {ProjectVersionFindUniqueArgs} args - Arguments to find a ProjectVersion
     * @example
     * // Get one ProjectVersion
     * const projectVersion = await prisma.projectVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectVersionFindUniqueArgs>(args: SelectSubset<T, ProjectVersionFindUniqueArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectVersionFindUniqueOrThrowArgs} args - Arguments to find a ProjectVersion
     * @example
     * // Get one ProjectVersion
     * const projectVersion = await prisma.projectVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionFindFirstArgs} args - Arguments to find a ProjectVersion
     * @example
     * // Get one ProjectVersion
     * const projectVersion = await prisma.projectVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectVersionFindFirstArgs>(args?: SelectSubset<T, ProjectVersionFindFirstArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionFindFirstOrThrowArgs} args - Arguments to find a ProjectVersion
     * @example
     * // Get one ProjectVersion
     * const projectVersion = await prisma.projectVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectVersions
     * const projectVersions = await prisma.projectVersion.findMany()
     * 
     * // Get first 10 ProjectVersions
     * const projectVersions = await prisma.projectVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectVersionWithIdOnly = await prisma.projectVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectVersionFindManyArgs>(args?: SelectSubset<T, ProjectVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectVersion.
     * @param {ProjectVersionCreateArgs} args - Arguments to create a ProjectVersion.
     * @example
     * // Create one ProjectVersion
     * const ProjectVersion = await prisma.projectVersion.create({
     *   data: {
     *     // ... data to create a ProjectVersion
     *   }
     * })
     * 
     */
    create<T extends ProjectVersionCreateArgs>(args: SelectSubset<T, ProjectVersionCreateArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectVersions.
     * @param {ProjectVersionCreateManyArgs} args - Arguments to create many ProjectVersions.
     * @example
     * // Create many ProjectVersions
     * const projectVersion = await prisma.projectVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectVersionCreateManyArgs>(args?: SelectSubset<T, ProjectVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectVersions and returns the data saved in the database.
     * @param {ProjectVersionCreateManyAndReturnArgs} args - Arguments to create many ProjectVersions.
     * @example
     * // Create many ProjectVersions
     * const projectVersion = await prisma.projectVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectVersions and only return the `id`
     * const projectVersionWithIdOnly = await prisma.projectVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectVersion.
     * @param {ProjectVersionDeleteArgs} args - Arguments to delete one ProjectVersion.
     * @example
     * // Delete one ProjectVersion
     * const ProjectVersion = await prisma.projectVersion.delete({
     *   where: {
     *     // ... filter to delete one ProjectVersion
     *   }
     * })
     * 
     */
    delete<T extends ProjectVersionDeleteArgs>(args: SelectSubset<T, ProjectVersionDeleteArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectVersion.
     * @param {ProjectVersionUpdateArgs} args - Arguments to update one ProjectVersion.
     * @example
     * // Update one ProjectVersion
     * const projectVersion = await prisma.projectVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectVersionUpdateArgs>(args: SelectSubset<T, ProjectVersionUpdateArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectVersions.
     * @param {ProjectVersionDeleteManyArgs} args - Arguments to filter ProjectVersions to delete.
     * @example
     * // Delete a few ProjectVersions
     * const { count } = await prisma.projectVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectVersionDeleteManyArgs>(args?: SelectSubset<T, ProjectVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectVersions
     * const projectVersion = await prisma.projectVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectVersionUpdateManyArgs>(args: SelectSubset<T, ProjectVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectVersions and returns the data updated in the database.
     * @param {ProjectVersionUpdateManyAndReturnArgs} args - Arguments to update many ProjectVersions.
     * @example
     * // Update many ProjectVersions
     * const projectVersion = await prisma.projectVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectVersions and only return the `id`
     * const projectVersionWithIdOnly = await prisma.projectVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectVersion.
     * @param {ProjectVersionUpsertArgs} args - Arguments to update or create a ProjectVersion.
     * @example
     * // Update or create a ProjectVersion
     * const projectVersion = await prisma.projectVersion.upsert({
     *   create: {
     *     // ... data to create a ProjectVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectVersion we want to update
     *   }
     * })
     */
    upsert<T extends ProjectVersionUpsertArgs>(args: SelectSubset<T, ProjectVersionUpsertArgs<ExtArgs>>): Prisma__ProjectVersionClient<$Result.GetResult<Prisma.$ProjectVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionCountArgs} args - Arguments to filter ProjectVersions to count.
     * @example
     * // Count the number of ProjectVersions
     * const count = await prisma.projectVersion.count({
     *   where: {
     *     // ... the filter for the ProjectVersions we want to count
     *   }
     * })
    **/
    count<T extends ProjectVersionCountArgs>(
      args?: Subset<T, ProjectVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectVersionAggregateArgs>(args: Subset<T, ProjectVersionAggregateArgs>): Prisma.PrismaPromise<GetProjectVersionAggregateType<T>>

    /**
     * Group by ProjectVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectVersionGroupByArgs['orderBy'] }
        : { orderBy?: ProjectVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectVersion model
   */
  readonly fields: ProjectVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectVersion model
   */
  interface ProjectVersionFieldRefs {
    readonly id: FieldRef<"ProjectVersion", 'String'>
    readonly projectId: FieldRef<"ProjectVersion", 'String'>
    readonly snapshot: FieldRef<"ProjectVersion", 'Json'>
    readonly label: FieldRef<"ProjectVersion", 'String'>
    readonly createdAt: FieldRef<"ProjectVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectVersion findUnique
   */
  export type ProjectVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectVersion to fetch.
     */
    where: ProjectVersionWhereUniqueInput
  }

  /**
   * ProjectVersion findUniqueOrThrow
   */
  export type ProjectVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectVersion to fetch.
     */
    where: ProjectVersionWhereUniqueInput
  }

  /**
   * ProjectVersion findFirst
   */
  export type ProjectVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectVersion to fetch.
     */
    where?: ProjectVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectVersions to fetch.
     */
    orderBy?: ProjectVersionOrderByWithRelationInput | ProjectVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectVersions.
     */
    cursor?: ProjectVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectVersions.
     */
    distinct?: ProjectVersionScalarFieldEnum | ProjectVersionScalarFieldEnum[]
  }

  /**
   * ProjectVersion findFirstOrThrow
   */
  export type ProjectVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectVersion to fetch.
     */
    where?: ProjectVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectVersions to fetch.
     */
    orderBy?: ProjectVersionOrderByWithRelationInput | ProjectVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectVersions.
     */
    cursor?: ProjectVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectVersions.
     */
    distinct?: ProjectVersionScalarFieldEnum | ProjectVersionScalarFieldEnum[]
  }

  /**
   * ProjectVersion findMany
   */
  export type ProjectVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectVersions to fetch.
     */
    where?: ProjectVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectVersions to fetch.
     */
    orderBy?: ProjectVersionOrderByWithRelationInput | ProjectVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectVersions.
     */
    cursor?: ProjectVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectVersions.
     */
    skip?: number
    distinct?: ProjectVersionScalarFieldEnum | ProjectVersionScalarFieldEnum[]
  }

  /**
   * ProjectVersion create
   */
  export type ProjectVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectVersion.
     */
    data: XOR<ProjectVersionCreateInput, ProjectVersionUncheckedCreateInput>
  }

  /**
   * ProjectVersion createMany
   */
  export type ProjectVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectVersions.
     */
    data: ProjectVersionCreateManyInput | ProjectVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectVersion createManyAndReturn
   */
  export type ProjectVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectVersions.
     */
    data: ProjectVersionCreateManyInput | ProjectVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectVersion update
   */
  export type ProjectVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectVersion.
     */
    data: XOR<ProjectVersionUpdateInput, ProjectVersionUncheckedUpdateInput>
    /**
     * Choose, which ProjectVersion to update.
     */
    where: ProjectVersionWhereUniqueInput
  }

  /**
   * ProjectVersion updateMany
   */
  export type ProjectVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectVersions.
     */
    data: XOR<ProjectVersionUpdateManyMutationInput, ProjectVersionUncheckedUpdateManyInput>
    /**
     * Filter which ProjectVersions to update
     */
    where?: ProjectVersionWhereInput
    /**
     * Limit how many ProjectVersions to update.
     */
    limit?: number
  }

  /**
   * ProjectVersion updateManyAndReturn
   */
  export type ProjectVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * The data used to update ProjectVersions.
     */
    data: XOR<ProjectVersionUpdateManyMutationInput, ProjectVersionUncheckedUpdateManyInput>
    /**
     * Filter which ProjectVersions to update
     */
    where?: ProjectVersionWhereInput
    /**
     * Limit how many ProjectVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectVersion upsert
   */
  export type ProjectVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectVersion to update in case it exists.
     */
    where: ProjectVersionWhereUniqueInput
    /**
     * In case the ProjectVersion found by the `where` argument doesn't exist, create a new ProjectVersion with this data.
     */
    create: XOR<ProjectVersionCreateInput, ProjectVersionUncheckedCreateInput>
    /**
     * In case the ProjectVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectVersionUpdateInput, ProjectVersionUncheckedUpdateInput>
  }

  /**
   * ProjectVersion delete
   */
  export type ProjectVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
    /**
     * Filter which ProjectVersion to delete.
     */
    where: ProjectVersionWhereUniqueInput
  }

  /**
   * ProjectVersion deleteMany
   */
  export type ProjectVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectVersions to delete
     */
    where?: ProjectVersionWhereInput
    /**
     * Limit how many ProjectVersions to delete.
     */
    limit?: number
  }

  /**
   * ProjectVersion without action
   */
  export type ProjectVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectVersion
     */
    select?: ProjectVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectVersion
     */
    omit?: ProjectVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectVersionInclude<ExtArgs> | null
  }


  /**
   * Model AIUsage
   */

  export type AggregateAIUsage = {
    _count: AIUsageCountAggregateOutputType | null
    _avg: AIUsageAvgAggregateOutputType | null
    _sum: AIUsageSumAggregateOutputType | null
    _min: AIUsageMinAggregateOutputType | null
    _max: AIUsageMaxAggregateOutputType | null
  }

  export type AIUsageAvgAggregateOutputType = {
    tokensUsed: number | null
    cost: number | null
  }

  export type AIUsageSumAggregateOutputType = {
    tokensUsed: number | null
    cost: number | null
  }

  export type AIUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    model: string | null
    tokensUsed: number | null
    cost: number | null
    requestId: string | null
    createdAt: Date | null
  }

  export type AIUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    model: string | null
    tokensUsed: number | null
    cost: number | null
    requestId: string | null
    createdAt: Date | null
  }

  export type AIUsageCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    model: number
    tokensUsed: number
    cost: number
    requestId: number
    createdAt: number
    _all: number
  }


  export type AIUsageAvgAggregateInputType = {
    tokensUsed?: true
    cost?: true
  }

  export type AIUsageSumAggregateInputType = {
    tokensUsed?: true
    cost?: true
  }

  export type AIUsageMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    model?: true
    tokensUsed?: true
    cost?: true
    requestId?: true
    createdAt?: true
  }

  export type AIUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    model?: true
    tokensUsed?: true
    cost?: true
    requestId?: true
    createdAt?: true
  }

  export type AIUsageCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    model?: true
    tokensUsed?: true
    cost?: true
    requestId?: true
    createdAt?: true
    _all?: true
  }

  export type AIUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIUsage to aggregate.
     */
    where?: AIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIUsages to fetch.
     */
    orderBy?: AIUsageOrderByWithRelationInput | AIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIUsages
    **/
    _count?: true | AIUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIUsageMaxAggregateInputType
  }

  export type GetAIUsageAggregateType<T extends AIUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateAIUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIUsage[P]>
      : GetScalarType<T[P], AggregateAIUsage[P]>
  }




  export type AIUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIUsageWhereInput
    orderBy?: AIUsageOrderByWithAggregationInput | AIUsageOrderByWithAggregationInput[]
    by: AIUsageScalarFieldEnum[] | AIUsageScalarFieldEnum
    having?: AIUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIUsageCountAggregateInputType | true
    _avg?: AIUsageAvgAggregateInputType
    _sum?: AIUsageSumAggregateInputType
    _min?: AIUsageMinAggregateInputType
    _max?: AIUsageMaxAggregateInputType
  }

  export type AIUsageGroupByOutputType = {
    id: string
    userId: string
    provider: string
    model: string
    tokensUsed: number
    cost: number
    requestId: string | null
    createdAt: Date
    _count: AIUsageCountAggregateOutputType | null
    _avg: AIUsageAvgAggregateOutputType | null
    _sum: AIUsageSumAggregateOutputType | null
    _min: AIUsageMinAggregateOutputType | null
    _max: AIUsageMaxAggregateOutputType | null
  }

  type GetAIUsageGroupByPayload<T extends AIUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIUsageGroupByOutputType[P]>
            : GetScalarType<T[P], AIUsageGroupByOutputType[P]>
        }
      >
    >


  export type AIUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    tokensUsed?: boolean
    cost?: boolean
    requestId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aIUsage"]>

  export type AIUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    tokensUsed?: boolean
    cost?: boolean
    requestId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aIUsage"]>

  export type AIUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    tokensUsed?: boolean
    cost?: boolean
    requestId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aIUsage"]>

  export type AIUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    model?: boolean
    tokensUsed?: boolean
    cost?: boolean
    requestId?: boolean
    createdAt?: boolean
  }

  export type AIUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "model" | "tokensUsed" | "cost" | "requestId" | "createdAt", ExtArgs["result"]["aIUsage"]>

  export type $AIUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIUsage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      model: string
      tokensUsed: number
      cost: number
      requestId: string | null
      createdAt: Date
    }, ExtArgs["result"]["aIUsage"]>
    composites: {}
  }

  type AIUsageGetPayload<S extends boolean | null | undefined | AIUsageDefaultArgs> = $Result.GetResult<Prisma.$AIUsagePayload, S>

  type AIUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIUsageCountAggregateInputType | true
    }

  export interface AIUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIUsage'], meta: { name: 'AIUsage' } }
    /**
     * Find zero or one AIUsage that matches the filter.
     * @param {AIUsageFindUniqueArgs} args - Arguments to find a AIUsage
     * @example
     * // Get one AIUsage
     * const aIUsage = await prisma.aIUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIUsageFindUniqueArgs>(args: SelectSubset<T, AIUsageFindUniqueArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIUsageFindUniqueOrThrowArgs} args - Arguments to find a AIUsage
     * @example
     * // Get one AIUsage
     * const aIUsage = await prisma.aIUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, AIUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageFindFirstArgs} args - Arguments to find a AIUsage
     * @example
     * // Get one AIUsage
     * const aIUsage = await prisma.aIUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIUsageFindFirstArgs>(args?: SelectSubset<T, AIUsageFindFirstArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageFindFirstOrThrowArgs} args - Arguments to find a AIUsage
     * @example
     * // Get one AIUsage
     * const aIUsage = await prisma.aIUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, AIUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIUsages
     * const aIUsages = await prisma.aIUsage.findMany()
     * 
     * // Get first 10 AIUsages
     * const aIUsages = await prisma.aIUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIUsageWithIdOnly = await prisma.aIUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIUsageFindManyArgs>(args?: SelectSubset<T, AIUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIUsage.
     * @param {AIUsageCreateArgs} args - Arguments to create a AIUsage.
     * @example
     * // Create one AIUsage
     * const AIUsage = await prisma.aIUsage.create({
     *   data: {
     *     // ... data to create a AIUsage
     *   }
     * })
     * 
     */
    create<T extends AIUsageCreateArgs>(args: SelectSubset<T, AIUsageCreateArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIUsages.
     * @param {AIUsageCreateManyArgs} args - Arguments to create many AIUsages.
     * @example
     * // Create many AIUsages
     * const aIUsage = await prisma.aIUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIUsageCreateManyArgs>(args?: SelectSubset<T, AIUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIUsages and returns the data saved in the database.
     * @param {AIUsageCreateManyAndReturnArgs} args - Arguments to create many AIUsages.
     * @example
     * // Create many AIUsages
     * const aIUsage = await prisma.aIUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIUsages and only return the `id`
     * const aIUsageWithIdOnly = await prisma.aIUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, AIUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIUsage.
     * @param {AIUsageDeleteArgs} args - Arguments to delete one AIUsage.
     * @example
     * // Delete one AIUsage
     * const AIUsage = await prisma.aIUsage.delete({
     *   where: {
     *     // ... filter to delete one AIUsage
     *   }
     * })
     * 
     */
    delete<T extends AIUsageDeleteArgs>(args: SelectSubset<T, AIUsageDeleteArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIUsage.
     * @param {AIUsageUpdateArgs} args - Arguments to update one AIUsage.
     * @example
     * // Update one AIUsage
     * const aIUsage = await prisma.aIUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIUsageUpdateArgs>(args: SelectSubset<T, AIUsageUpdateArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIUsages.
     * @param {AIUsageDeleteManyArgs} args - Arguments to filter AIUsages to delete.
     * @example
     * // Delete a few AIUsages
     * const { count } = await prisma.aIUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIUsageDeleteManyArgs>(args?: SelectSubset<T, AIUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIUsages
     * const aIUsage = await prisma.aIUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIUsageUpdateManyArgs>(args: SelectSubset<T, AIUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIUsages and returns the data updated in the database.
     * @param {AIUsageUpdateManyAndReturnArgs} args - Arguments to update many AIUsages.
     * @example
     * // Update many AIUsages
     * const aIUsage = await prisma.aIUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIUsages and only return the `id`
     * const aIUsageWithIdOnly = await prisma.aIUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, AIUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIUsage.
     * @param {AIUsageUpsertArgs} args - Arguments to update or create a AIUsage.
     * @example
     * // Update or create a AIUsage
     * const aIUsage = await prisma.aIUsage.upsert({
     *   create: {
     *     // ... data to create a AIUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIUsage we want to update
     *   }
     * })
     */
    upsert<T extends AIUsageUpsertArgs>(args: SelectSubset<T, AIUsageUpsertArgs<ExtArgs>>): Prisma__AIUsageClient<$Result.GetResult<Prisma.$AIUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageCountArgs} args - Arguments to filter AIUsages to count.
     * @example
     * // Count the number of AIUsages
     * const count = await prisma.aIUsage.count({
     *   where: {
     *     // ... the filter for the AIUsages we want to count
     *   }
     * })
    **/
    count<T extends AIUsageCountArgs>(
      args?: Subset<T, AIUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIUsageAggregateArgs>(args: Subset<T, AIUsageAggregateArgs>): Prisma.PrismaPromise<GetAIUsageAggregateType<T>>

    /**
     * Group by AIUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIUsageGroupByArgs['orderBy'] }
        : { orderBy?: AIUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIUsage model
   */
  readonly fields: AIUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIUsage model
   */
  interface AIUsageFieldRefs {
    readonly id: FieldRef<"AIUsage", 'String'>
    readonly userId: FieldRef<"AIUsage", 'String'>
    readonly provider: FieldRef<"AIUsage", 'String'>
    readonly model: FieldRef<"AIUsage", 'String'>
    readonly tokensUsed: FieldRef<"AIUsage", 'Int'>
    readonly cost: FieldRef<"AIUsage", 'Float'>
    readonly requestId: FieldRef<"AIUsage", 'String'>
    readonly createdAt: FieldRef<"AIUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIUsage findUnique
   */
  export type AIUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * Filter, which AIUsage to fetch.
     */
    where: AIUsageWhereUniqueInput
  }

  /**
   * AIUsage findUniqueOrThrow
   */
  export type AIUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * Filter, which AIUsage to fetch.
     */
    where: AIUsageWhereUniqueInput
  }

  /**
   * AIUsage findFirst
   */
  export type AIUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * Filter, which AIUsage to fetch.
     */
    where?: AIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIUsages to fetch.
     */
    orderBy?: AIUsageOrderByWithRelationInput | AIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIUsages.
     */
    cursor?: AIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIUsages.
     */
    distinct?: AIUsageScalarFieldEnum | AIUsageScalarFieldEnum[]
  }

  /**
   * AIUsage findFirstOrThrow
   */
  export type AIUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * Filter, which AIUsage to fetch.
     */
    where?: AIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIUsages to fetch.
     */
    orderBy?: AIUsageOrderByWithRelationInput | AIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIUsages.
     */
    cursor?: AIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIUsages.
     */
    distinct?: AIUsageScalarFieldEnum | AIUsageScalarFieldEnum[]
  }

  /**
   * AIUsage findMany
   */
  export type AIUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * Filter, which AIUsages to fetch.
     */
    where?: AIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIUsages to fetch.
     */
    orderBy?: AIUsageOrderByWithRelationInput | AIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIUsages.
     */
    cursor?: AIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIUsages.
     */
    skip?: number
    distinct?: AIUsageScalarFieldEnum | AIUsageScalarFieldEnum[]
  }

  /**
   * AIUsage create
   */
  export type AIUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * The data needed to create a AIUsage.
     */
    data: XOR<AIUsageCreateInput, AIUsageUncheckedCreateInput>
  }

  /**
   * AIUsage createMany
   */
  export type AIUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIUsages.
     */
    data: AIUsageCreateManyInput | AIUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIUsage createManyAndReturn
   */
  export type AIUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * The data used to create many AIUsages.
     */
    data: AIUsageCreateManyInput | AIUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIUsage update
   */
  export type AIUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * The data needed to update a AIUsage.
     */
    data: XOR<AIUsageUpdateInput, AIUsageUncheckedUpdateInput>
    /**
     * Choose, which AIUsage to update.
     */
    where: AIUsageWhereUniqueInput
  }

  /**
   * AIUsage updateMany
   */
  export type AIUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIUsages.
     */
    data: XOR<AIUsageUpdateManyMutationInput, AIUsageUncheckedUpdateManyInput>
    /**
     * Filter which AIUsages to update
     */
    where?: AIUsageWhereInput
    /**
     * Limit how many AIUsages to update.
     */
    limit?: number
  }

  /**
   * AIUsage updateManyAndReturn
   */
  export type AIUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * The data used to update AIUsages.
     */
    data: XOR<AIUsageUpdateManyMutationInput, AIUsageUncheckedUpdateManyInput>
    /**
     * Filter which AIUsages to update
     */
    where?: AIUsageWhereInput
    /**
     * Limit how many AIUsages to update.
     */
    limit?: number
  }

  /**
   * AIUsage upsert
   */
  export type AIUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * The filter to search for the AIUsage to update in case it exists.
     */
    where: AIUsageWhereUniqueInput
    /**
     * In case the AIUsage found by the `where` argument doesn't exist, create a new AIUsage with this data.
     */
    create: XOR<AIUsageCreateInput, AIUsageUncheckedCreateInput>
    /**
     * In case the AIUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIUsageUpdateInput, AIUsageUncheckedUpdateInput>
  }

  /**
   * AIUsage delete
   */
  export type AIUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
    /**
     * Filter which AIUsage to delete.
     */
    where: AIUsageWhereUniqueInput
  }

  /**
   * AIUsage deleteMany
   */
  export type AIUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIUsages to delete
     */
    where?: AIUsageWhereInput
    /**
     * Limit how many AIUsages to delete.
     */
    limit?: number
  }

  /**
   * AIUsage without action
   */
  export type AIUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIUsage
     */
    select?: AIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIUsage
     */
    omit?: AIUsageOmit<ExtArgs> | null
  }


  /**
   * Model APIKey
   */

  export type AggregateAPIKey = {
    _count: APIKeyCountAggregateOutputType | null
    _min: APIKeyMinAggregateOutputType | null
    _max: APIKeyMaxAggregateOutputType | null
  }

  export type APIKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    encryptedKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastUsed: Date | null
  }

  export type APIKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    encryptedKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastUsed: Date | null
  }

  export type APIKeyCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    encryptedKey: number
    createdAt: number
    updatedAt: number
    lastUsed: number
    _all: number
  }


  export type APIKeyMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    encryptedKey?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
  }

  export type APIKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    encryptedKey?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
  }

  export type APIKeyCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    encryptedKey?: true
    createdAt?: true
    updatedAt?: true
    lastUsed?: true
    _all?: true
  }

  export type APIKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKey to aggregate.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned APIKeys
    **/
    _count?: true | APIKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: APIKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: APIKeyMaxAggregateInputType
  }

  export type GetAPIKeyAggregateType<T extends APIKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateAPIKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAPIKey[P]>
      : GetScalarType<T[P], AggregateAPIKey[P]>
  }




  export type APIKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKeyWhereInput
    orderBy?: APIKeyOrderByWithAggregationInput | APIKeyOrderByWithAggregationInput[]
    by: APIKeyScalarFieldEnum[] | APIKeyScalarFieldEnum
    having?: APIKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: APIKeyCountAggregateInputType | true
    _min?: APIKeyMinAggregateInputType
    _max?: APIKeyMaxAggregateInputType
  }

  export type APIKeyGroupByOutputType = {
    id: string
    userId: string
    provider: string
    encryptedKey: string
    createdAt: Date
    updatedAt: Date
    lastUsed: Date | null
    _count: APIKeyCountAggregateOutputType | null
    _min: APIKeyMinAggregateOutputType | null
    _max: APIKeyMaxAggregateOutputType | null
  }

  type GetAPIKeyGroupByPayload<T extends APIKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<APIKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof APIKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], APIKeyGroupByOutputType[P]>
            : GetScalarType<T[P], APIKeyGroupByOutputType[P]>
        }
      >
    >


  export type APIKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastUsed?: boolean
  }

  export type APIKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "encryptedKey" | "createdAt" | "updatedAt" | "lastUsed", ExtArgs["result"]["aPIKey"]>

  export type $APIKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "APIKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      encryptedKey: string
      createdAt: Date
      updatedAt: Date
      lastUsed: Date | null
    }, ExtArgs["result"]["aPIKey"]>
    composites: {}
  }

  type APIKeyGetPayload<S extends boolean | null | undefined | APIKeyDefaultArgs> = $Result.GetResult<Prisma.$APIKeyPayload, S>

  type APIKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<APIKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: APIKeyCountAggregateInputType | true
    }

  export interface APIKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['APIKey'], meta: { name: 'APIKey' } }
    /**
     * Find zero or one APIKey that matches the filter.
     * @param {APIKeyFindUniqueArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends APIKeyFindUniqueArgs>(args: SelectSubset<T, APIKeyFindUniqueArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one APIKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {APIKeyFindUniqueOrThrowArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends APIKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, APIKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindFirstArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends APIKeyFindFirstArgs>(args?: SelectSubset<T, APIKeyFindFirstArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindFirstOrThrowArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends APIKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, APIKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more APIKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all APIKeys
     * const aPIKeys = await prisma.aPIKey.findMany()
     * 
     * // Get first 10 APIKeys
     * const aPIKeys = await prisma.aPIKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends APIKeyFindManyArgs>(args?: SelectSubset<T, APIKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a APIKey.
     * @param {APIKeyCreateArgs} args - Arguments to create a APIKey.
     * @example
     * // Create one APIKey
     * const APIKey = await prisma.aPIKey.create({
     *   data: {
     *     // ... data to create a APIKey
     *   }
     * })
     * 
     */
    create<T extends APIKeyCreateArgs>(args: SelectSubset<T, APIKeyCreateArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many APIKeys.
     * @param {APIKeyCreateManyArgs} args - Arguments to create many APIKeys.
     * @example
     * // Create many APIKeys
     * const aPIKey = await prisma.aPIKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends APIKeyCreateManyArgs>(args?: SelectSubset<T, APIKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many APIKeys and returns the data saved in the database.
     * @param {APIKeyCreateManyAndReturnArgs} args - Arguments to create many APIKeys.
     * @example
     * // Create many APIKeys
     * const aPIKey = await prisma.aPIKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many APIKeys and only return the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends APIKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, APIKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a APIKey.
     * @param {APIKeyDeleteArgs} args - Arguments to delete one APIKey.
     * @example
     * // Delete one APIKey
     * const APIKey = await prisma.aPIKey.delete({
     *   where: {
     *     // ... filter to delete one APIKey
     *   }
     * })
     * 
     */
    delete<T extends APIKeyDeleteArgs>(args: SelectSubset<T, APIKeyDeleteArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one APIKey.
     * @param {APIKeyUpdateArgs} args - Arguments to update one APIKey.
     * @example
     * // Update one APIKey
     * const aPIKey = await prisma.aPIKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends APIKeyUpdateArgs>(args: SelectSubset<T, APIKeyUpdateArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more APIKeys.
     * @param {APIKeyDeleteManyArgs} args - Arguments to filter APIKeys to delete.
     * @example
     * // Delete a few APIKeys
     * const { count } = await prisma.aPIKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends APIKeyDeleteManyArgs>(args?: SelectSubset<T, APIKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many APIKeys
     * const aPIKey = await prisma.aPIKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends APIKeyUpdateManyArgs>(args: SelectSubset<T, APIKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKeys and returns the data updated in the database.
     * @param {APIKeyUpdateManyAndReturnArgs} args - Arguments to update many APIKeys.
     * @example
     * // Update many APIKeys
     * const aPIKey = await prisma.aPIKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more APIKeys and only return the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends APIKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, APIKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one APIKey.
     * @param {APIKeyUpsertArgs} args - Arguments to update or create a APIKey.
     * @example
     * // Update or create a APIKey
     * const aPIKey = await prisma.aPIKey.upsert({
     *   create: {
     *     // ... data to create a APIKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the APIKey we want to update
     *   }
     * })
     */
    upsert<T extends APIKeyUpsertArgs>(args: SelectSubset<T, APIKeyUpsertArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of APIKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyCountArgs} args - Arguments to filter APIKeys to count.
     * @example
     * // Count the number of APIKeys
     * const count = await prisma.aPIKey.count({
     *   where: {
     *     // ... the filter for the APIKeys we want to count
     *   }
     * })
    **/
    count<T extends APIKeyCountArgs>(
      args?: Subset<T, APIKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], APIKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a APIKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends APIKeyAggregateArgs>(args: Subset<T, APIKeyAggregateArgs>): Prisma.PrismaPromise<GetAPIKeyAggregateType<T>>

    /**
     * Group by APIKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends APIKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: APIKeyGroupByArgs['orderBy'] }
        : { orderBy?: APIKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, APIKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAPIKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the APIKey model
   */
  readonly fields: APIKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for APIKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__APIKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the APIKey model
   */
  interface APIKeyFieldRefs {
    readonly id: FieldRef<"APIKey", 'String'>
    readonly userId: FieldRef<"APIKey", 'String'>
    readonly provider: FieldRef<"APIKey", 'String'>
    readonly encryptedKey: FieldRef<"APIKey", 'String'>
    readonly createdAt: FieldRef<"APIKey", 'DateTime'>
    readonly updatedAt: FieldRef<"APIKey", 'DateTime'>
    readonly lastUsed: FieldRef<"APIKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * APIKey findUnique
   */
  export type APIKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey findUniqueOrThrow
   */
  export type APIKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey findFirst
   */
  export type APIKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKeys.
     */
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey findFirstOrThrow
   */
  export type APIKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKeys.
     */
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey findMany
   */
  export type APIKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Filter, which APIKeys to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey create
   */
  export type APIKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a APIKey.
     */
    data: XOR<APIKeyCreateInput, APIKeyUncheckedCreateInput>
  }

  /**
   * APIKey createMany
   */
  export type APIKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many APIKeys.
     */
    data: APIKeyCreateManyInput | APIKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APIKey createManyAndReturn
   */
  export type APIKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data used to create many APIKeys.
     */
    data: APIKeyCreateManyInput | APIKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APIKey update
   */
  export type APIKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a APIKey.
     */
    data: XOR<APIKeyUpdateInput, APIKeyUncheckedUpdateInput>
    /**
     * Choose, which APIKey to update.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey updateMany
   */
  export type APIKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update APIKeys.
     */
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyInput>
    /**
     * Filter which APIKeys to update
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to update.
     */
    limit?: number
  }

  /**
   * APIKey updateManyAndReturn
   */
  export type APIKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data used to update APIKeys.
     */
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyInput>
    /**
     * Filter which APIKeys to update
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to update.
     */
    limit?: number
  }

  /**
   * APIKey upsert
   */
  export type APIKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the APIKey to update in case it exists.
     */
    where: APIKeyWhereUniqueInput
    /**
     * In case the APIKey found by the `where` argument doesn't exist, create a new APIKey with this data.
     */
    create: XOR<APIKeyCreateInput, APIKeyUncheckedCreateInput>
    /**
     * In case the APIKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<APIKeyUpdateInput, APIKeyUncheckedUpdateInput>
  }

  /**
   * APIKey delete
   */
  export type APIKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Filter which APIKey to delete.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey deleteMany
   */
  export type APIKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKeys to delete
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to delete.
     */
    limit?: number
  }

  /**
   * APIKey without action
   */
  export type APIKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
  }


  /**
   * Model RateLimit
   */

  export type AggregateRateLimit = {
    _count: RateLimitCountAggregateOutputType | null
    _avg: RateLimitAvgAggregateOutputType | null
    _sum: RateLimitSumAggregateOutputType | null
    _min: RateLimitMinAggregateOutputType | null
    _max: RateLimitMaxAggregateOutputType | null
  }

  export type RateLimitAvgAggregateOutputType = {
    count: number | null
  }

  export type RateLimitSumAggregateOutputType = {
    count: number | null
  }

  export type RateLimitMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    count: number | null
    resetTime: Date | null
    createdAt: Date | null
  }

  export type RateLimitMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    count: number | null
    resetTime: Date | null
    createdAt: Date | null
  }

  export type RateLimitCountAggregateOutputType = {
    id: number
    identifier: number
    count: number
    resetTime: number
    createdAt: number
    _all: number
  }


  export type RateLimitAvgAggregateInputType = {
    count?: true
  }

  export type RateLimitSumAggregateInputType = {
    count?: true
  }

  export type RateLimitMinAggregateInputType = {
    id?: true
    identifier?: true
    count?: true
    resetTime?: true
    createdAt?: true
  }

  export type RateLimitMaxAggregateInputType = {
    id?: true
    identifier?: true
    count?: true
    resetTime?: true
    createdAt?: true
  }

  export type RateLimitCountAggregateInputType = {
    id?: true
    identifier?: true
    count?: true
    resetTime?: true
    createdAt?: true
    _all?: true
  }

  export type RateLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimit to aggregate.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimits
    **/
    _count?: true | RateLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitMaxAggregateInputType
  }

  export type GetRateLimitAggregateType<T extends RateLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimit[P]>
      : GetScalarType<T[P], AggregateRateLimit[P]>
  }




  export type RateLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitWhereInput
    orderBy?: RateLimitOrderByWithAggregationInput | RateLimitOrderByWithAggregationInput[]
    by: RateLimitScalarFieldEnum[] | RateLimitScalarFieldEnum
    having?: RateLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitCountAggregateInputType | true
    _avg?: RateLimitAvgAggregateInputType
    _sum?: RateLimitSumAggregateInputType
    _min?: RateLimitMinAggregateInputType
    _max?: RateLimitMaxAggregateInputType
  }

  export type RateLimitGroupByOutputType = {
    id: string
    identifier: string
    count: number
    resetTime: Date
    createdAt: Date
    _count: RateLimitCountAggregateOutputType | null
    _avg: RateLimitAvgAggregateOutputType | null
    _sum: RateLimitSumAggregateOutputType | null
    _min: RateLimitMinAggregateOutputType | null
    _max: RateLimitMaxAggregateOutputType | null
  }

  type GetRateLimitGroupByPayload<T extends RateLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    count?: boolean
    resetTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rateLimit"]>

  export type RateLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    count?: boolean
    resetTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rateLimit"]>

  export type RateLimitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    count?: boolean
    resetTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rateLimit"]>

  export type RateLimitSelectScalar = {
    id?: boolean
    identifier?: boolean
    count?: boolean
    resetTime?: boolean
    createdAt?: boolean
  }

  export type RateLimitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "count" | "resetTime" | "createdAt", ExtArgs["result"]["rateLimit"]>

  export type $RateLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      count: number
      resetTime: Date
      createdAt: Date
    }, ExtArgs["result"]["rateLimit"]>
    composites: {}
  }

  type RateLimitGetPayload<S extends boolean | null | undefined | RateLimitDefaultArgs> = $Result.GetResult<Prisma.$RateLimitPayload, S>

  type RateLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitCountAggregateInputType | true
    }

  export interface RateLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimit'], meta: { name: 'RateLimit' } }
    /**
     * Find zero or one RateLimit that matches the filter.
     * @param {RateLimitFindUniqueArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitFindUniqueArgs>(args: SelectSubset<T, RateLimitFindUniqueArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitFindUniqueOrThrowArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitFindFirstArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitFindFirstArgs>(args?: SelectSubset<T, RateLimitFindFirstArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitFindFirstOrThrowArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimits
     * const rateLimits = await prisma.rateLimit.findMany()
     * 
     * // Get first 10 RateLimits
     * const rateLimits = await prisma.rateLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateLimitWithIdOnly = await prisma.rateLimit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateLimitFindManyArgs>(args?: SelectSubset<T, RateLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimit.
     * @param {RateLimitCreateArgs} args - Arguments to create a RateLimit.
     * @example
     * // Create one RateLimit
     * const RateLimit = await prisma.rateLimit.create({
     *   data: {
     *     // ... data to create a RateLimit
     *   }
     * })
     * 
     */
    create<T extends RateLimitCreateArgs>(args: SelectSubset<T, RateLimitCreateArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimits.
     * @param {RateLimitCreateManyArgs} args - Arguments to create many RateLimits.
     * @example
     * // Create many RateLimits
     * const rateLimit = await prisma.rateLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitCreateManyArgs>(args?: SelectSubset<T, RateLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimits and returns the data saved in the database.
     * @param {RateLimitCreateManyAndReturnArgs} args - Arguments to create many RateLimits.
     * @example
     * // Create many RateLimits
     * const rateLimit = await prisma.rateLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimits and only return the `id`
     * const rateLimitWithIdOnly = await prisma.rateLimit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimit.
     * @param {RateLimitDeleteArgs} args - Arguments to delete one RateLimit.
     * @example
     * // Delete one RateLimit
     * const RateLimit = await prisma.rateLimit.delete({
     *   where: {
     *     // ... filter to delete one RateLimit
     *   }
     * })
     * 
     */
    delete<T extends RateLimitDeleteArgs>(args: SelectSubset<T, RateLimitDeleteArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimit.
     * @param {RateLimitUpdateArgs} args - Arguments to update one RateLimit.
     * @example
     * // Update one RateLimit
     * const rateLimit = await prisma.rateLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitUpdateArgs>(args: SelectSubset<T, RateLimitUpdateArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimits.
     * @param {RateLimitDeleteManyArgs} args - Arguments to filter RateLimits to delete.
     * @example
     * // Delete a few RateLimits
     * const { count } = await prisma.rateLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitDeleteManyArgs>(args?: SelectSubset<T, RateLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimits
     * const rateLimit = await prisma.rateLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitUpdateManyArgs>(args: SelectSubset<T, RateLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimits and returns the data updated in the database.
     * @param {RateLimitUpdateManyAndReturnArgs} args - Arguments to update many RateLimits.
     * @example
     * // Update many RateLimits
     * const rateLimit = await prisma.rateLimit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimits and only return the `id`
     * const rateLimitWithIdOnly = await prisma.rateLimit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateLimitUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimit.
     * @param {RateLimitUpsertArgs} args - Arguments to update or create a RateLimit.
     * @example
     * // Update or create a RateLimit
     * const rateLimit = await prisma.rateLimit.upsert({
     *   create: {
     *     // ... data to create a RateLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimit we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitUpsertArgs>(args: SelectSubset<T, RateLimitUpsertArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCountArgs} args - Arguments to filter RateLimits to count.
     * @example
     * // Count the number of RateLimits
     * const count = await prisma.rateLimit.count({
     *   where: {
     *     // ... the filter for the RateLimits we want to count
     *   }
     * })
    **/
    count<T extends RateLimitCountArgs>(
      args?: Subset<T, RateLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateLimitAggregateArgs>(args: Subset<T, RateLimitAggregateArgs>): Prisma.PrismaPromise<GetRateLimitAggregateType<T>>

    /**
     * Group by RateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimit model
   */
  readonly fields: RateLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateLimit model
   */
  interface RateLimitFieldRefs {
    readonly id: FieldRef<"RateLimit", 'String'>
    readonly identifier: FieldRef<"RateLimit", 'String'>
    readonly count: FieldRef<"RateLimit", 'Int'>
    readonly resetTime: FieldRef<"RateLimit", 'DateTime'>
    readonly createdAt: FieldRef<"RateLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RateLimit findUnique
   */
  export type RateLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit findUniqueOrThrow
   */
  export type RateLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit findFirst
   */
  export type RateLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimits.
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimits.
     */
    distinct?: RateLimitScalarFieldEnum | RateLimitScalarFieldEnum[]
  }

  /**
   * RateLimit findFirstOrThrow
   */
  export type RateLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimits.
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimits.
     */
    distinct?: RateLimitScalarFieldEnum | RateLimitScalarFieldEnum[]
  }

  /**
   * RateLimit findMany
   */
  export type RateLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimits to fetch.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimits.
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    distinct?: RateLimitScalarFieldEnum | RateLimitScalarFieldEnum[]
  }

  /**
   * RateLimit create
   */
  export type RateLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimit.
     */
    data: XOR<RateLimitCreateInput, RateLimitUncheckedCreateInput>
  }

  /**
   * RateLimit createMany
   */
  export type RateLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimits.
     */
    data: RateLimitCreateManyInput | RateLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimit createManyAndReturn
   */
  export type RateLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimits.
     */
    data: RateLimitCreateManyInput | RateLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimit update
   */
  export type RateLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimit.
     */
    data: XOR<RateLimitUpdateInput, RateLimitUncheckedUpdateInput>
    /**
     * Choose, which RateLimit to update.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit updateMany
   */
  export type RateLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimits.
     */
    data: XOR<RateLimitUpdateManyMutationInput, RateLimitUncheckedUpdateManyInput>
    /**
     * Filter which RateLimits to update
     */
    where?: RateLimitWhereInput
    /**
     * Limit how many RateLimits to update.
     */
    limit?: number
  }

  /**
   * RateLimit updateManyAndReturn
   */
  export type RateLimitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data used to update RateLimits.
     */
    data: XOR<RateLimitUpdateManyMutationInput, RateLimitUncheckedUpdateManyInput>
    /**
     * Filter which RateLimits to update
     */
    where?: RateLimitWhereInput
    /**
     * Limit how many RateLimits to update.
     */
    limit?: number
  }

  /**
   * RateLimit upsert
   */
  export type RateLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimit to update in case it exists.
     */
    where: RateLimitWhereUniqueInput
    /**
     * In case the RateLimit found by the `where` argument doesn't exist, create a new RateLimit with this data.
     */
    create: XOR<RateLimitCreateInput, RateLimitUncheckedCreateInput>
    /**
     * In case the RateLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitUpdateInput, RateLimitUncheckedUpdateInput>
  }

  /**
   * RateLimit delete
   */
  export type RateLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter which RateLimit to delete.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit deleteMany
   */
  export type RateLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimits to delete
     */
    where?: RateLimitWhereInput
    /**
     * Limit how many RateLimits to delete.
     */
    limit?: number
  }

  /**
   * RateLimit without action
   */
  export type RateLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    role: 'role',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const FragmentScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    sandboxUrl: 'sandboxUrl',
    sandboxId: 'sandboxId',
    title: 'title',
    content: 'content',
    files: 'files',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FragmentScalarFieldEnum = (typeof FragmentScalarFieldEnum)[keyof typeof FragmentScalarFieldEnum]


  export const ProjectVersionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    snapshot: 'snapshot',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type ProjectVersionScalarFieldEnum = (typeof ProjectVersionScalarFieldEnum)[keyof typeof ProjectVersionScalarFieldEnum]


  export const AIUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    model: 'model',
    tokensUsed: 'tokensUsed',
    cost: 'cost',
    requestId: 'requestId',
    createdAt: 'createdAt'
  };

  export type AIUsageScalarFieldEnum = (typeof AIUsageScalarFieldEnum)[keyof typeof AIUsageScalarFieldEnum]


  export const APIKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    encryptedKey: 'encryptedKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastUsed: 'lastUsed'
  };

  export type APIKeyScalarFieldEnum = (typeof APIKeyScalarFieldEnum)[keyof typeof APIKeyScalarFieldEnum]


  export const RateLimitScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    count: 'count',
    resetTime: 'resetTime',
    createdAt: 'createdAt'
  };

  export type RateLimitScalarFieldEnum = (typeof RateLimitScalarFieldEnum)[keyof typeof RateLimitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MessageRole'
   */
  export type EnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole'>
    


  /**
   * Reference to a field of type 'MessageRole[]'
   */
  export type ListEnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    messages?: MessageListRelationFilter
    fragments?: FragmentListRelationFilter
    versions?: ProjectVersionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    fragments?: FragmentOrderByRelationAggregateInput
    versions?: ProjectVersionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    messages?: MessageListRelationFilter
    fragments?: FragmentListRelationFilter
    versions?: ProjectVersionListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    projectId?: StringFilter<"Message"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    fragment?: XOR<FragmentNullableScalarRelationFilter, FragmentWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    fragment?: FragmentOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    projectId?: StringFilter<"Message"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    fragment?: XOR<FragmentNullableScalarRelationFilter, FragmentWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    role?: EnumMessageRoleWithAggregatesFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    projectId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type FragmentWhereInput = {
    AND?: FragmentWhereInput | FragmentWhereInput[]
    OR?: FragmentWhereInput[]
    NOT?: FragmentWhereInput | FragmentWhereInput[]
    id?: StringFilter<"Fragment"> | string
    messageId?: StringFilter<"Fragment"> | string
    sandboxUrl?: StringFilter<"Fragment"> | string
    sandboxId?: StringNullableFilter<"Fragment"> | string | null
    title?: StringFilter<"Fragment"> | string
    content?: StringFilter<"Fragment"> | string
    files?: JsonNullableFilter<"Fragment">
    projectId?: StringFilter<"Fragment"> | string
    createdAt?: DateTimeFilter<"Fragment"> | Date | string
    updatedAt?: DateTimeFilter<"Fragment"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type FragmentOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    sandboxUrl?: SortOrder
    sandboxId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    files?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    message?: MessageOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type FragmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: FragmentWhereInput | FragmentWhereInput[]
    OR?: FragmentWhereInput[]
    NOT?: FragmentWhereInput | FragmentWhereInput[]
    sandboxUrl?: StringFilter<"Fragment"> | string
    sandboxId?: StringNullableFilter<"Fragment"> | string | null
    title?: StringFilter<"Fragment"> | string
    content?: StringFilter<"Fragment"> | string
    files?: JsonNullableFilter<"Fragment">
    projectId?: StringFilter<"Fragment"> | string
    createdAt?: DateTimeFilter<"Fragment"> | Date | string
    updatedAt?: DateTimeFilter<"Fragment"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "messageId">

  export type FragmentOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    sandboxUrl?: SortOrder
    sandboxId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    files?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FragmentCountOrderByAggregateInput
    _max?: FragmentMaxOrderByAggregateInput
    _min?: FragmentMinOrderByAggregateInput
  }

  export type FragmentScalarWhereWithAggregatesInput = {
    AND?: FragmentScalarWhereWithAggregatesInput | FragmentScalarWhereWithAggregatesInput[]
    OR?: FragmentScalarWhereWithAggregatesInput[]
    NOT?: FragmentScalarWhereWithAggregatesInput | FragmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fragment"> | string
    messageId?: StringWithAggregatesFilter<"Fragment"> | string
    sandboxUrl?: StringWithAggregatesFilter<"Fragment"> | string
    sandboxId?: StringNullableWithAggregatesFilter<"Fragment"> | string | null
    title?: StringWithAggregatesFilter<"Fragment"> | string
    content?: StringWithAggregatesFilter<"Fragment"> | string
    files?: JsonNullableWithAggregatesFilter<"Fragment">
    projectId?: StringWithAggregatesFilter<"Fragment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fragment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fragment"> | Date | string
  }

  export type ProjectVersionWhereInput = {
    AND?: ProjectVersionWhereInput | ProjectVersionWhereInput[]
    OR?: ProjectVersionWhereInput[]
    NOT?: ProjectVersionWhereInput | ProjectVersionWhereInput[]
    id?: StringFilter<"ProjectVersion"> | string
    projectId?: StringFilter<"ProjectVersion"> | string
    snapshot?: JsonFilter<"ProjectVersion">
    label?: StringNullableFilter<"ProjectVersion"> | string | null
    createdAt?: DateTimeFilter<"ProjectVersion"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectVersionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    snapshot?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectVersionWhereInput | ProjectVersionWhereInput[]
    OR?: ProjectVersionWhereInput[]
    NOT?: ProjectVersionWhereInput | ProjectVersionWhereInput[]
    projectId?: StringFilter<"ProjectVersion"> | string
    snapshot?: JsonFilter<"ProjectVersion">
    label?: StringNullableFilter<"ProjectVersion"> | string | null
    createdAt?: DateTimeFilter<"ProjectVersion"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectVersionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    snapshot?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectVersionCountOrderByAggregateInput
    _max?: ProjectVersionMaxOrderByAggregateInput
    _min?: ProjectVersionMinOrderByAggregateInput
  }

  export type ProjectVersionScalarWhereWithAggregatesInput = {
    AND?: ProjectVersionScalarWhereWithAggregatesInput | ProjectVersionScalarWhereWithAggregatesInput[]
    OR?: ProjectVersionScalarWhereWithAggregatesInput[]
    NOT?: ProjectVersionScalarWhereWithAggregatesInput | ProjectVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectVersion"> | string
    projectId?: StringWithAggregatesFilter<"ProjectVersion"> | string
    snapshot?: JsonWithAggregatesFilter<"ProjectVersion">
    label?: StringNullableWithAggregatesFilter<"ProjectVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectVersion"> | Date | string
  }

  export type AIUsageWhereInput = {
    AND?: AIUsageWhereInput | AIUsageWhereInput[]
    OR?: AIUsageWhereInput[]
    NOT?: AIUsageWhereInput | AIUsageWhereInput[]
    id?: StringFilter<"AIUsage"> | string
    userId?: StringFilter<"AIUsage"> | string
    provider?: StringFilter<"AIUsage"> | string
    model?: StringFilter<"AIUsage"> | string
    tokensUsed?: IntFilter<"AIUsage"> | number
    cost?: FloatFilter<"AIUsage"> | number
    requestId?: StringNullableFilter<"AIUsage"> | string | null
    createdAt?: DateTimeFilter<"AIUsage"> | Date | string
  }

  export type AIUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    tokensUsed?: SortOrder
    cost?: SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AIUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIUsageWhereInput | AIUsageWhereInput[]
    OR?: AIUsageWhereInput[]
    NOT?: AIUsageWhereInput | AIUsageWhereInput[]
    userId?: StringFilter<"AIUsage"> | string
    provider?: StringFilter<"AIUsage"> | string
    model?: StringFilter<"AIUsage"> | string
    tokensUsed?: IntFilter<"AIUsage"> | number
    cost?: FloatFilter<"AIUsage"> | number
    requestId?: StringNullableFilter<"AIUsage"> | string | null
    createdAt?: DateTimeFilter<"AIUsage"> | Date | string
  }, "id">

  export type AIUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    tokensUsed?: SortOrder
    cost?: SortOrder
    requestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AIUsageCountOrderByAggregateInput
    _avg?: AIUsageAvgOrderByAggregateInput
    _max?: AIUsageMaxOrderByAggregateInput
    _min?: AIUsageMinOrderByAggregateInput
    _sum?: AIUsageSumOrderByAggregateInput
  }

  export type AIUsageScalarWhereWithAggregatesInput = {
    AND?: AIUsageScalarWhereWithAggregatesInput | AIUsageScalarWhereWithAggregatesInput[]
    OR?: AIUsageScalarWhereWithAggregatesInput[]
    NOT?: AIUsageScalarWhereWithAggregatesInput | AIUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIUsage"> | string
    userId?: StringWithAggregatesFilter<"AIUsage"> | string
    provider?: StringWithAggregatesFilter<"AIUsage"> | string
    model?: StringWithAggregatesFilter<"AIUsage"> | string
    tokensUsed?: IntWithAggregatesFilter<"AIUsage"> | number
    cost?: FloatWithAggregatesFilter<"AIUsage"> | number
    requestId?: StringNullableWithAggregatesFilter<"AIUsage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AIUsage"> | Date | string
  }

  export type APIKeyWhereInput = {
    AND?: APIKeyWhereInput | APIKeyWhereInput[]
    OR?: APIKeyWhereInput[]
    NOT?: APIKeyWhereInput | APIKeyWhereInput[]
    id?: StringFilter<"APIKey"> | string
    userId?: StringFilter<"APIKey"> | string
    provider?: StringFilter<"APIKey"> | string
    encryptedKey?: StringFilter<"APIKey"> | string
    createdAt?: DateTimeFilter<"APIKey"> | Date | string
    updatedAt?: DateTimeFilter<"APIKey"> | Date | string
    lastUsed?: DateTimeNullableFilter<"APIKey"> | Date | string | null
  }

  export type APIKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
  }

  export type APIKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_provider?: APIKeyUserIdProviderCompoundUniqueInput
    AND?: APIKeyWhereInput | APIKeyWhereInput[]
    OR?: APIKeyWhereInput[]
    NOT?: APIKeyWhereInput | APIKeyWhereInput[]
    userId?: StringFilter<"APIKey"> | string
    provider?: StringFilter<"APIKey"> | string
    encryptedKey?: StringFilter<"APIKey"> | string
    createdAt?: DateTimeFilter<"APIKey"> | Date | string
    updatedAt?: DateTimeFilter<"APIKey"> | Date | string
    lastUsed?: DateTimeNullableFilter<"APIKey"> | Date | string | null
  }, "id" | "userId_provider">

  export type APIKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    _count?: APIKeyCountOrderByAggregateInput
    _max?: APIKeyMaxOrderByAggregateInput
    _min?: APIKeyMinOrderByAggregateInput
  }

  export type APIKeyScalarWhereWithAggregatesInput = {
    AND?: APIKeyScalarWhereWithAggregatesInput | APIKeyScalarWhereWithAggregatesInput[]
    OR?: APIKeyScalarWhereWithAggregatesInput[]
    NOT?: APIKeyScalarWhereWithAggregatesInput | APIKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"APIKey"> | string
    userId?: StringWithAggregatesFilter<"APIKey"> | string
    provider?: StringWithAggregatesFilter<"APIKey"> | string
    encryptedKey?: StringWithAggregatesFilter<"APIKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"APIKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"APIKey"> | Date | string
    lastUsed?: DateTimeNullableWithAggregatesFilter<"APIKey"> | Date | string | null
  }

  export type RateLimitWhereInput = {
    AND?: RateLimitWhereInput | RateLimitWhereInput[]
    OR?: RateLimitWhereInput[]
    NOT?: RateLimitWhereInput | RateLimitWhereInput[]
    id?: StringFilter<"RateLimit"> | string
    identifier?: StringFilter<"RateLimit"> | string
    count?: IntFilter<"RateLimit"> | number
    resetTime?: DateTimeFilter<"RateLimit"> | Date | string
    createdAt?: DateTimeFilter<"RateLimit"> | Date | string
  }

  export type RateLimitOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    count?: SortOrder
    resetTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RateLimitWhereInput | RateLimitWhereInput[]
    OR?: RateLimitWhereInput[]
    NOT?: RateLimitWhereInput | RateLimitWhereInput[]
    identifier?: StringFilter<"RateLimit"> | string
    count?: IntFilter<"RateLimit"> | number
    resetTime?: DateTimeFilter<"RateLimit"> | Date | string
    createdAt?: DateTimeFilter<"RateLimit"> | Date | string
  }, "id">

  export type RateLimitOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    count?: SortOrder
    resetTime?: SortOrder
    createdAt?: SortOrder
    _count?: RateLimitCountOrderByAggregateInput
    _avg?: RateLimitAvgOrderByAggregateInput
    _max?: RateLimitMaxOrderByAggregateInput
    _min?: RateLimitMinOrderByAggregateInput
    _sum?: RateLimitSumOrderByAggregateInput
  }

  export type RateLimitScalarWhereWithAggregatesInput = {
    AND?: RateLimitScalarWhereWithAggregatesInput | RateLimitScalarWhereWithAggregatesInput[]
    OR?: RateLimitScalarWhereWithAggregatesInput[]
    NOT?: RateLimitScalarWhereWithAggregatesInput | RateLimitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RateLimit"> | string
    identifier?: StringWithAggregatesFilter<"RateLimit"> | string
    count?: IntWithAggregatesFilter<"RateLimit"> | number
    resetTime?: DateTimeWithAggregatesFilter<"RateLimit"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RateLimit"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutProjectInput
    fragments?: FragmentCreateNestedManyWithoutProjectInput
    versions?: ProjectVersionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    fragments?: FragmentUncheckedCreateNestedManyWithoutProjectInput
    versions?: ProjectVersionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutProjectNestedInput
    fragments?: FragmentUpdateManyWithoutProjectNestedInput
    versions?: ProjectVersionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    fragments?: FragmentUncheckedUpdateManyWithoutProjectNestedInput
    versions?: ProjectVersionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMessagesInput
    fragment?: FragmentCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    fragment?: FragmentUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMessagesNestedInput
    fragment?: FragmentUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    fragment?: FragmentUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type FragmentCreateInput = {
    id?: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutFragmentInput
    project: ProjectCreateNestedOneWithoutFragmentsInput
  }

  export type FragmentUncheckedCreateInput = {
    id?: string
    messageId: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FragmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutFragmentNestedInput
    project?: ProjectUpdateOneRequiredWithoutFragmentsNestedInput
  }

  export type FragmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FragmentCreateManyInput = {
    id?: string
    messageId: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FragmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FragmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectVersionCreateInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    label?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutVersionsInput
  }

  export type ProjectVersionUncheckedCreateInput = {
    id?: string
    projectId: string
    snapshot: JsonNullValueInput | InputJsonValue
    label?: string | null
    createdAt?: Date | string
  }

  export type ProjectVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ProjectVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectVersionCreateManyInput = {
    id?: string
    projectId: string
    snapshot: JsonNullValueInput | InputJsonValue
    label?: string | null
    createdAt?: Date | string
  }

  export type ProjectVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIUsageCreateInput = {
    id?: string
    userId: string
    provider: string
    model: string
    tokensUsed: number
    cost: number
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AIUsageUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    model: string
    tokensUsed: number
    cost: number
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AIUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIUsageCreateManyInput = {
    id?: string
    userId: string
    provider: string
    model: string
    tokensUsed: number
    cost: number
    requestId?: string | null
    createdAt?: Date | string
  }

  export type AIUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tokensUsed?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKeyCreateInput = {
    id?: string
    userId: string
    provider: string
    encryptedKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastUsed?: Date | string | null
  }

  export type APIKeyUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    encryptedKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastUsed?: Date | string | null
  }

  export type APIKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type APIKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type APIKeyCreateManyInput = {
    id?: string
    userId: string
    provider: string
    encryptedKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastUsed?: Date | string | null
  }

  export type APIKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type APIKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RateLimitCreateInput = {
    id?: string
    identifier: string
    count: number
    resetTime: Date | string
    createdAt?: Date | string
  }

  export type RateLimitUncheckedCreateInput = {
    id?: string
    identifier: string
    count: number
    resetTime: Date | string
    createdAt?: Date | string
  }

  export type RateLimitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    resetTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    resetTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCreateManyInput = {
    id?: string
    identifier: string
    count: number
    resetTime: Date | string
    createdAt?: Date | string
  }

  export type RateLimitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    resetTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    resetTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type FragmentListRelationFilter = {
    every?: FragmentWhereInput
    some?: FragmentWhereInput
    none?: FragmentWhereInput
  }

  export type ProjectVersionListRelationFilter = {
    every?: ProjectVersionWhereInput
    some?: ProjectVersionWhereInput
    none?: ProjectVersionWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FragmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type FragmentNullableScalarRelationFilter = {
    is?: FragmentWhereInput | null
    isNot?: FragmentWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type EnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FragmentCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    sandboxUrl?: SortOrder
    sandboxId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    files?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FragmentMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    sandboxUrl?: SortOrder
    sandboxId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FragmentMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    sandboxUrl?: SortOrder
    sandboxId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectVersionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    snapshot?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectVersionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AIUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    tokensUsed?: SortOrder
    cost?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AIUsageAvgOrderByAggregateInput = {
    tokensUsed?: SortOrder
    cost?: SortOrder
  }

  export type AIUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    tokensUsed?: SortOrder
    cost?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AIUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    tokensUsed?: SortOrder
    cost?: SortOrder
    requestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AIUsageSumOrderByAggregateInput = {
    tokensUsed?: SortOrder
    cost?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type APIKeyUserIdProviderCompoundUniqueInput = {
    userId: string
    provider: string
  }

  export type APIKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
  }

  export type APIKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
  }

  export type APIKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastUsed?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RateLimitCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    count?: SortOrder
    resetTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type RateLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    count?: SortOrder
    resetTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    count?: SortOrder
    resetTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type MessageCreateNestedManyWithoutProjectInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type FragmentCreateNestedManyWithoutProjectInput = {
    create?: XOR<FragmentCreateWithoutProjectInput, FragmentUncheckedCreateWithoutProjectInput> | FragmentCreateWithoutProjectInput[] | FragmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FragmentCreateOrConnectWithoutProjectInput | FragmentCreateOrConnectWithoutProjectInput[]
    createMany?: FragmentCreateManyProjectInputEnvelope
    connect?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
  }

  export type ProjectVersionCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectVersionCreateWithoutProjectInput, ProjectVersionUncheckedCreateWithoutProjectInput> | ProjectVersionCreateWithoutProjectInput[] | ProjectVersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectVersionCreateOrConnectWithoutProjectInput | ProjectVersionCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectVersionCreateManyProjectInputEnvelope
    connect?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type FragmentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FragmentCreateWithoutProjectInput, FragmentUncheckedCreateWithoutProjectInput> | FragmentCreateWithoutProjectInput[] | FragmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FragmentCreateOrConnectWithoutProjectInput | FragmentCreateOrConnectWithoutProjectInput[]
    createMany?: FragmentCreateManyProjectInputEnvelope
    connect?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
  }

  export type ProjectVersionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectVersionCreateWithoutProjectInput, ProjectVersionUncheckedCreateWithoutProjectInput> | ProjectVersionCreateWithoutProjectInput[] | ProjectVersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectVersionCreateOrConnectWithoutProjectInput | ProjectVersionCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectVersionCreateManyProjectInputEnvelope
    connect?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutProjectInput | MessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutProjectInput | MessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutProjectInput | MessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type FragmentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FragmentCreateWithoutProjectInput, FragmentUncheckedCreateWithoutProjectInput> | FragmentCreateWithoutProjectInput[] | FragmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FragmentCreateOrConnectWithoutProjectInput | FragmentCreateOrConnectWithoutProjectInput[]
    upsert?: FragmentUpsertWithWhereUniqueWithoutProjectInput | FragmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FragmentCreateManyProjectInputEnvelope
    set?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    disconnect?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    delete?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    connect?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    update?: FragmentUpdateWithWhereUniqueWithoutProjectInput | FragmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FragmentUpdateManyWithWhereWithoutProjectInput | FragmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FragmentScalarWhereInput | FragmentScalarWhereInput[]
  }

  export type ProjectVersionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectVersionCreateWithoutProjectInput, ProjectVersionUncheckedCreateWithoutProjectInput> | ProjectVersionCreateWithoutProjectInput[] | ProjectVersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectVersionCreateOrConnectWithoutProjectInput | ProjectVersionCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectVersionUpsertWithWhereUniqueWithoutProjectInput | ProjectVersionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectVersionCreateManyProjectInputEnvelope
    set?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    disconnect?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    delete?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    connect?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    update?: ProjectVersionUpdateWithWhereUniqueWithoutProjectInput | ProjectVersionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectVersionUpdateManyWithWhereWithoutProjectInput | ProjectVersionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectVersionScalarWhereInput | ProjectVersionScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutProjectInput | MessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutProjectInput | MessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutProjectInput | MessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type FragmentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FragmentCreateWithoutProjectInput, FragmentUncheckedCreateWithoutProjectInput> | FragmentCreateWithoutProjectInput[] | FragmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FragmentCreateOrConnectWithoutProjectInput | FragmentCreateOrConnectWithoutProjectInput[]
    upsert?: FragmentUpsertWithWhereUniqueWithoutProjectInput | FragmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FragmentCreateManyProjectInputEnvelope
    set?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    disconnect?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    delete?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    connect?: FragmentWhereUniqueInput | FragmentWhereUniqueInput[]
    update?: FragmentUpdateWithWhereUniqueWithoutProjectInput | FragmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FragmentUpdateManyWithWhereWithoutProjectInput | FragmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FragmentScalarWhereInput | FragmentScalarWhereInput[]
  }

  export type ProjectVersionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectVersionCreateWithoutProjectInput, ProjectVersionUncheckedCreateWithoutProjectInput> | ProjectVersionCreateWithoutProjectInput[] | ProjectVersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectVersionCreateOrConnectWithoutProjectInput | ProjectVersionCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectVersionUpsertWithWhereUniqueWithoutProjectInput | ProjectVersionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectVersionCreateManyProjectInputEnvelope
    set?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    disconnect?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    delete?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    connect?: ProjectVersionWhereUniqueInput | ProjectVersionWhereUniqueInput[]
    update?: ProjectVersionUpdateWithWhereUniqueWithoutProjectInput | ProjectVersionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectVersionUpdateManyWithWhereWithoutProjectInput | ProjectVersionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectVersionScalarWhereInput | ProjectVersionScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMessagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type FragmentCreateNestedOneWithoutMessageInput = {
    create?: XOR<FragmentCreateWithoutMessageInput, FragmentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: FragmentCreateOrConnectWithoutMessageInput
    connect?: FragmentWhereUniqueInput
  }

  export type FragmentUncheckedCreateNestedOneWithoutMessageInput = {
    create?: XOR<FragmentCreateWithoutMessageInput, FragmentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: FragmentCreateOrConnectWithoutMessageInput
    connect?: FragmentWhereUniqueInput
  }

  export type EnumMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.MessageRole
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ProjectUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMessagesInput
    upsert?: ProjectUpsertWithoutMessagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMessagesInput, ProjectUpdateWithoutMessagesInput>, ProjectUncheckedUpdateWithoutMessagesInput>
  }

  export type FragmentUpdateOneWithoutMessageNestedInput = {
    create?: XOR<FragmentCreateWithoutMessageInput, FragmentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: FragmentCreateOrConnectWithoutMessageInput
    upsert?: FragmentUpsertWithoutMessageInput
    disconnect?: FragmentWhereInput | boolean
    delete?: FragmentWhereInput | boolean
    connect?: FragmentWhereUniqueInput
    update?: XOR<XOR<FragmentUpdateToOneWithWhereWithoutMessageInput, FragmentUpdateWithoutMessageInput>, FragmentUncheckedUpdateWithoutMessageInput>
  }

  export type FragmentUncheckedUpdateOneWithoutMessageNestedInput = {
    create?: XOR<FragmentCreateWithoutMessageInput, FragmentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: FragmentCreateOrConnectWithoutMessageInput
    upsert?: FragmentUpsertWithoutMessageInput
    disconnect?: FragmentWhereInput | boolean
    delete?: FragmentWhereInput | boolean
    connect?: FragmentWhereUniqueInput
    update?: XOR<XOR<FragmentUpdateToOneWithWhereWithoutMessageInput, FragmentUpdateWithoutMessageInput>, FragmentUncheckedUpdateWithoutMessageInput>
  }

  export type MessageCreateNestedOneWithoutFragmentInput = {
    create?: XOR<MessageCreateWithoutFragmentInput, MessageUncheckedCreateWithoutFragmentInput>
    connectOrCreate?: MessageCreateOrConnectWithoutFragmentInput
    connect?: MessageWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutFragmentsInput = {
    create?: XOR<ProjectCreateWithoutFragmentsInput, ProjectUncheckedCreateWithoutFragmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFragmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MessageUpdateOneRequiredWithoutFragmentNestedInput = {
    create?: XOR<MessageCreateWithoutFragmentInput, MessageUncheckedCreateWithoutFragmentInput>
    connectOrCreate?: MessageCreateOrConnectWithoutFragmentInput
    upsert?: MessageUpsertWithoutFragmentInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutFragmentInput, MessageUpdateWithoutFragmentInput>, MessageUncheckedUpdateWithoutFragmentInput>
  }

  export type ProjectUpdateOneRequiredWithoutFragmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutFragmentsInput, ProjectUncheckedCreateWithoutFragmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFragmentsInput
    upsert?: ProjectUpsertWithoutFragmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFragmentsInput, ProjectUpdateWithoutFragmentsInput>, ProjectUncheckedUpdateWithoutFragmentsInput>
  }

  export type ProjectCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutVersionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutVersionsInput
    upsert?: ProjectUpsertWithoutVersionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutVersionsInput, ProjectUpdateWithoutVersionsInput>, ProjectUncheckedUpdateWithoutVersionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MessageCreateWithoutProjectInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    fragment?: FragmentCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutProjectInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    fragment?: FragmentUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutProjectInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput>
  }

  export type MessageCreateManyProjectInputEnvelope = {
    data: MessageCreateManyProjectInput | MessageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type FragmentCreateWithoutProjectInput = {
    id?: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutFragmentInput
  }

  export type FragmentUncheckedCreateWithoutProjectInput = {
    id?: string
    messageId: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FragmentCreateOrConnectWithoutProjectInput = {
    where: FragmentWhereUniqueInput
    create: XOR<FragmentCreateWithoutProjectInput, FragmentUncheckedCreateWithoutProjectInput>
  }

  export type FragmentCreateManyProjectInputEnvelope = {
    data: FragmentCreateManyProjectInput | FragmentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectVersionCreateWithoutProjectInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    label?: string | null
    createdAt?: Date | string
  }

  export type ProjectVersionUncheckedCreateWithoutProjectInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    label?: string | null
    createdAt?: Date | string
  }

  export type ProjectVersionCreateOrConnectWithoutProjectInput = {
    where: ProjectVersionWhereUniqueInput
    create: XOR<ProjectVersionCreateWithoutProjectInput, ProjectVersionUncheckedCreateWithoutProjectInput>
  }

  export type ProjectVersionCreateManyProjectInputEnvelope = {
    data: ProjectVersionCreateManyProjectInput | ProjectVersionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutProjectInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutProjectInput, MessageUncheckedUpdateWithoutProjectInput>
    create: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutProjectInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutProjectInput, MessageUncheckedUpdateWithoutProjectInput>
  }

  export type MessageUpdateManyWithWhereWithoutProjectInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutProjectInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    projectId?: StringFilter<"Message"> | string
  }

  export type FragmentUpsertWithWhereUniqueWithoutProjectInput = {
    where: FragmentWhereUniqueInput
    update: XOR<FragmentUpdateWithoutProjectInput, FragmentUncheckedUpdateWithoutProjectInput>
    create: XOR<FragmentCreateWithoutProjectInput, FragmentUncheckedCreateWithoutProjectInput>
  }

  export type FragmentUpdateWithWhereUniqueWithoutProjectInput = {
    where: FragmentWhereUniqueInput
    data: XOR<FragmentUpdateWithoutProjectInput, FragmentUncheckedUpdateWithoutProjectInput>
  }

  export type FragmentUpdateManyWithWhereWithoutProjectInput = {
    where: FragmentScalarWhereInput
    data: XOR<FragmentUpdateManyMutationInput, FragmentUncheckedUpdateManyWithoutProjectInput>
  }

  export type FragmentScalarWhereInput = {
    AND?: FragmentScalarWhereInput | FragmentScalarWhereInput[]
    OR?: FragmentScalarWhereInput[]
    NOT?: FragmentScalarWhereInput | FragmentScalarWhereInput[]
    id?: StringFilter<"Fragment"> | string
    messageId?: StringFilter<"Fragment"> | string
    sandboxUrl?: StringFilter<"Fragment"> | string
    sandboxId?: StringNullableFilter<"Fragment"> | string | null
    title?: StringFilter<"Fragment"> | string
    content?: StringFilter<"Fragment"> | string
    files?: JsonNullableFilter<"Fragment">
    projectId?: StringFilter<"Fragment"> | string
    createdAt?: DateTimeFilter<"Fragment"> | Date | string
    updatedAt?: DateTimeFilter<"Fragment"> | Date | string
  }

  export type ProjectVersionUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectVersionWhereUniqueInput
    update: XOR<ProjectVersionUpdateWithoutProjectInput, ProjectVersionUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectVersionCreateWithoutProjectInput, ProjectVersionUncheckedCreateWithoutProjectInput>
  }

  export type ProjectVersionUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectVersionWhereUniqueInput
    data: XOR<ProjectVersionUpdateWithoutProjectInput, ProjectVersionUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectVersionUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectVersionScalarWhereInput
    data: XOR<ProjectVersionUpdateManyMutationInput, ProjectVersionUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectVersionScalarWhereInput = {
    AND?: ProjectVersionScalarWhereInput | ProjectVersionScalarWhereInput[]
    OR?: ProjectVersionScalarWhereInput[]
    NOT?: ProjectVersionScalarWhereInput | ProjectVersionScalarWhereInput[]
    id?: StringFilter<"ProjectVersion"> | string
    projectId?: StringFilter<"ProjectVersion"> | string
    snapshot?: JsonFilter<"ProjectVersion">
    label?: StringNullableFilter<"ProjectVersion"> | string | null
    createdAt?: DateTimeFilter<"ProjectVersion"> | Date | string
  }

  export type ProjectCreateWithoutMessagesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fragments?: FragmentCreateNestedManyWithoutProjectInput
    versions?: ProjectVersionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fragments?: FragmentUncheckedCreateNestedManyWithoutProjectInput
    versions?: ProjectVersionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMessagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
  }

  export type FragmentCreateWithoutMessageInput = {
    id?: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFragmentsInput
  }

  export type FragmentUncheckedCreateWithoutMessageInput = {
    id?: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FragmentCreateOrConnectWithoutMessageInput = {
    where: FragmentWhereUniqueInput
    create: XOR<FragmentCreateWithoutMessageInput, FragmentUncheckedCreateWithoutMessageInput>
  }

  export type ProjectUpsertWithoutMessagesInput = {
    update: XOR<ProjectUpdateWithoutMessagesInput, ProjectUncheckedUpdateWithoutMessagesInput>
    create: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMessagesInput, ProjectUncheckedUpdateWithoutMessagesInput>
  }

  export type ProjectUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fragments?: FragmentUpdateManyWithoutProjectNestedInput
    versions?: ProjectVersionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fragments?: FragmentUncheckedUpdateManyWithoutProjectNestedInput
    versions?: ProjectVersionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type FragmentUpsertWithoutMessageInput = {
    update: XOR<FragmentUpdateWithoutMessageInput, FragmentUncheckedUpdateWithoutMessageInput>
    create: XOR<FragmentCreateWithoutMessageInput, FragmentUncheckedCreateWithoutMessageInput>
    where?: FragmentWhereInput
  }

  export type FragmentUpdateToOneWithWhereWithoutMessageInput = {
    where?: FragmentWhereInput
    data: XOR<FragmentUpdateWithoutMessageInput, FragmentUncheckedUpdateWithoutMessageInput>
  }

  export type FragmentUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFragmentsNestedInput
  }

  export type FragmentUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateWithoutFragmentInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutFragmentInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type MessageCreateOrConnectWithoutFragmentInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFragmentInput, MessageUncheckedCreateWithoutFragmentInput>
  }

  export type ProjectCreateWithoutFragmentsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutProjectInput
    versions?: ProjectVersionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFragmentsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    versions?: ProjectVersionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFragmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFragmentsInput, ProjectUncheckedCreateWithoutFragmentsInput>
  }

  export type MessageUpsertWithoutFragmentInput = {
    update: XOR<MessageUpdateWithoutFragmentInput, MessageUncheckedUpdateWithoutFragmentInput>
    create: XOR<MessageCreateWithoutFragmentInput, MessageUncheckedCreateWithoutFragmentInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutFragmentInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutFragmentInput, MessageUncheckedUpdateWithoutFragmentInput>
  }

  export type MessageUpdateWithoutFragmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutFragmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithoutFragmentsInput = {
    update: XOR<ProjectUpdateWithoutFragmentsInput, ProjectUncheckedUpdateWithoutFragmentsInput>
    create: XOR<ProjectCreateWithoutFragmentsInput, ProjectUncheckedCreateWithoutFragmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFragmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFragmentsInput, ProjectUncheckedUpdateWithoutFragmentsInput>
  }

  export type ProjectUpdateWithoutFragmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutProjectNestedInput
    versions?: ProjectVersionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFragmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    versions?: ProjectVersionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutVersionsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutProjectInput
    fragments?: FragmentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    fragments?: FragmentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutVersionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
  }

  export type ProjectUpsertWithoutVersionsInput = {
    update: XOR<ProjectUpdateWithoutVersionsInput, ProjectUncheckedUpdateWithoutVersionsInput>
    create: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutVersionsInput, ProjectUncheckedUpdateWithoutVersionsInput>
  }

  export type ProjectUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutProjectNestedInput
    fragments?: FragmentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    fragments?: FragmentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type MessageCreateManyProjectInput = {
    id?: string
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FragmentCreateManyProjectInput = {
    id?: string
    messageId: string
    sandboxUrl: string
    sandboxId?: string | null
    title?: string
    content: string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectVersionCreateManyProjectInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    label?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fragment?: FragmentUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fragment?: FragmentUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FragmentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutFragmentNestedInput
  }

  export type FragmentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FragmentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    sandboxUrl?: StringFieldUpdateOperationsInput | string
    sandboxId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectVersionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectVersionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectVersionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}