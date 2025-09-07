
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model AppFinancials
 * 
 */
export type AppFinancials = $Result.DefaultSelection<Prisma.$AppFinancialsPayload>
/**
 * Model Decision
 * 
 */
export type Decision = $Result.DefaultSelection<Prisma.$DecisionPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appFinancials`: Exposes CRUD operations for the **AppFinancials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppFinancials
    * const appFinancials = await prisma.appFinancials.findMany()
    * ```
    */
  get appFinancials(): Prisma.AppFinancialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decision`: Exposes CRUD operations for the **Decision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decisions
    * const decisions = await prisma.decision.findMany()
    * ```
    */
  get decision(): Prisma.DecisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Application: 'Application',
    AppFinancials: 'AppFinancials',
    Decision: 'Decision',
    Offer: 'Offer'
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
      modelProps: "user" | "application" | "appFinancials" | "decision" | "offer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      AppFinancials: {
        payload: Prisma.$AppFinancialsPayload<ExtArgs>
        fields: Prisma.AppFinancialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppFinancialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppFinancialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>
          }
          findFirst: {
            args: Prisma.AppFinancialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppFinancialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>
          }
          findMany: {
            args: Prisma.AppFinancialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>[]
          }
          create: {
            args: Prisma.AppFinancialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>
          }
          createMany: {
            args: Prisma.AppFinancialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppFinancialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>[]
          }
          delete: {
            args: Prisma.AppFinancialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>
          }
          update: {
            args: Prisma.AppFinancialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>
          }
          deleteMany: {
            args: Prisma.AppFinancialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppFinancialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppFinancialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>[]
          }
          upsert: {
            args: Prisma.AppFinancialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppFinancialsPayload>
          }
          aggregate: {
            args: Prisma.AppFinancialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppFinancials>
          }
          groupBy: {
            args: Prisma.AppFinancialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppFinancialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppFinancialsCountArgs<ExtArgs>
            result: $Utils.Optional<AppFinancialsCountAggregateOutputType> | number
          }
        }
      }
      Decision: {
        payload: Prisma.$DecisionPayload<ExtArgs>
        fields: Prisma.DecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findFirst: {
            args: Prisma.DecisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findMany: {
            args: Prisma.DecisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          create: {
            args: Prisma.DecisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          createMany: {
            args: Prisma.DecisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          delete: {
            args: Prisma.DecisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          update: {
            args: Prisma.DecisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          deleteMany: {
            args: Prisma.DecisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DecisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          upsert: {
            args: Prisma.DecisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          aggregate: {
            args: Prisma.DecisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecision>
          }
          groupBy: {
            args: Prisma.DecisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionCountArgs<ExtArgs>
            result: $Utils.Optional<DecisionCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
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
    user?: UserOmit
    application?: ApplicationOmit
    appFinancials?: AppFinancialsOmit
    decision?: DecisionOmit
    offer?: OfferOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    decisions: number
    offers: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decisions?: boolean | ApplicationCountOutputTypeCountDecisionsArgs
    offers?: boolean | ApplicationCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    vehiclePrice: number | null
    downPayment: number | null
    tradeIn: number | null
    fees: number | null
    taxRate: number | null
    termMonths: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    vehiclePrice: number | null
    downPayment: number | null
    tradeIn: number | null
    fees: number | null
    taxRate: number | null
    termMonths: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    vehiclePrice: number | null
    downPayment: number | null
    tradeIn: number | null
    fees: number | null
    taxRate: number | null
    termMonths: number | null
    state: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    vehiclePrice: number | null
    downPayment: number | null
    tradeIn: number | null
    fees: number | null
    taxRate: number | null
    termMonths: number | null
    state: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    userId: number
    vehiclePrice: number
    downPayment: number
    tradeIn: number
    fees: number
    taxRate: number
    termMonths: number
    state: number
    status: number
    createdAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    vehiclePrice?: true
    downPayment?: true
    tradeIn?: true
    fees?: true
    taxRate?: true
    termMonths?: true
  }

  export type ApplicationSumAggregateInputType = {
    vehiclePrice?: true
    downPayment?: true
    tradeIn?: true
    fees?: true
    taxRate?: true
    termMonths?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    vehiclePrice?: true
    downPayment?: true
    tradeIn?: true
    fees?: true
    taxRate?: true
    termMonths?: true
    state?: true
    status?: true
    createdAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    vehiclePrice?: true
    downPayment?: true
    tradeIn?: true
    fees?: true
    taxRate?: true
    termMonths?: true
    state?: true
    status?: true
    createdAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    vehiclePrice?: true
    downPayment?: true
    tradeIn?: true
    fees?: true
    taxRate?: true
    termMonths?: true
    state?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    userId: string
    vehiclePrice: number
    downPayment: number
    tradeIn: number
    fees: number
    taxRate: number
    termMonths: number
    state: string
    status: string
    createdAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehiclePrice?: boolean
    downPayment?: boolean
    tradeIn?: boolean
    fees?: boolean
    taxRate?: boolean
    termMonths?: boolean
    state?: boolean
    status?: boolean
    createdAt?: boolean
    financials?: boolean | Application$financialsArgs<ExtArgs>
    decisions?: boolean | Application$decisionsArgs<ExtArgs>
    offers?: boolean | Application$offersArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehiclePrice?: boolean
    downPayment?: boolean
    tradeIn?: boolean
    fees?: boolean
    taxRate?: boolean
    termMonths?: boolean
    state?: boolean
    status?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehiclePrice?: boolean
    downPayment?: boolean
    tradeIn?: boolean
    fees?: boolean
    taxRate?: boolean
    termMonths?: boolean
    state?: boolean
    status?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    vehiclePrice?: boolean
    downPayment?: boolean
    tradeIn?: boolean
    fees?: boolean
    taxRate?: boolean
    termMonths?: boolean
    state?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vehiclePrice" | "downPayment" | "tradeIn" | "fees" | "taxRate" | "termMonths" | "state" | "status" | "createdAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financials?: boolean | Application$financialsArgs<ExtArgs>
    decisions?: boolean | Application$decisionsArgs<ExtArgs>
    offers?: boolean | Application$offersArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      financials: Prisma.$AppFinancialsPayload<ExtArgs> | null
      decisions: Prisma.$DecisionPayload<ExtArgs>[]
      offers: Prisma.$OfferPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      vehiclePrice: number
      downPayment: number
      tradeIn: number
      fees: number
      taxRate: number
      termMonths: number
      state: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financials<T extends Application$financialsArgs<ExtArgs> = {}>(args?: Subset<T, Application$financialsArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    decisions<T extends Application$decisionsArgs<ExtArgs> = {}>(args?: Subset<T, Application$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offers<T extends Application$offersArgs<ExtArgs> = {}>(args?: Subset<T, Application$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly userId: FieldRef<"Application", 'String'>
    readonly vehiclePrice: FieldRef<"Application", 'Int'>
    readonly downPayment: FieldRef<"Application", 'Int'>
    readonly tradeIn: FieldRef<"Application", 'Int'>
    readonly fees: FieldRef<"Application", 'Int'>
    readonly taxRate: FieldRef<"Application", 'Float'>
    readonly termMonths: FieldRef<"Application", 'Int'>
    readonly state: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.financials
   */
  export type Application$financialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    where?: AppFinancialsWhereInput
  }

  /**
   * Application.decisions
   */
  export type Application$decisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    cursor?: DecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Application.offers
   */
  export type Application$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model AppFinancials
   */

  export type AggregateAppFinancials = {
    _count: AppFinancialsCountAggregateOutputType | null
    _avg: AppFinancialsAvgAggregateOutputType | null
    _sum: AppFinancialsSumAggregateOutputType | null
    _min: AppFinancialsMinAggregateOutputType | null
    _max: AppFinancialsMaxAggregateOutputType | null
  }

  export type AppFinancialsAvgAggregateOutputType = {
    incomeMonthly: number | null
    otherDebt: number | null
    housingCost: number | null
  }

  export type AppFinancialsSumAggregateOutputType = {
    incomeMonthly: number | null
    otherDebt: number | null
    housingCost: number | null
  }

  export type AppFinancialsMinAggregateOutputType = {
    applicationId: string | null
    incomeMonthly: number | null
    otherDebt: number | null
    housingCost: number | null
  }

  export type AppFinancialsMaxAggregateOutputType = {
    applicationId: string | null
    incomeMonthly: number | null
    otherDebt: number | null
    housingCost: number | null
  }

  export type AppFinancialsCountAggregateOutputType = {
    applicationId: number
    incomeMonthly: number
    otherDebt: number
    housingCost: number
    _all: number
  }


  export type AppFinancialsAvgAggregateInputType = {
    incomeMonthly?: true
    otherDebt?: true
    housingCost?: true
  }

  export type AppFinancialsSumAggregateInputType = {
    incomeMonthly?: true
    otherDebt?: true
    housingCost?: true
  }

  export type AppFinancialsMinAggregateInputType = {
    applicationId?: true
    incomeMonthly?: true
    otherDebt?: true
    housingCost?: true
  }

  export type AppFinancialsMaxAggregateInputType = {
    applicationId?: true
    incomeMonthly?: true
    otherDebt?: true
    housingCost?: true
  }

  export type AppFinancialsCountAggregateInputType = {
    applicationId?: true
    incomeMonthly?: true
    otherDebt?: true
    housingCost?: true
    _all?: true
  }

  export type AppFinancialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppFinancials to aggregate.
     */
    where?: AppFinancialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppFinancials to fetch.
     */
    orderBy?: AppFinancialsOrderByWithRelationInput | AppFinancialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppFinancialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppFinancials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppFinancials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppFinancials
    **/
    _count?: true | AppFinancialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppFinancialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppFinancialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppFinancialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppFinancialsMaxAggregateInputType
  }

  export type GetAppFinancialsAggregateType<T extends AppFinancialsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppFinancials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppFinancials[P]>
      : GetScalarType<T[P], AggregateAppFinancials[P]>
  }




  export type AppFinancialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppFinancialsWhereInput
    orderBy?: AppFinancialsOrderByWithAggregationInput | AppFinancialsOrderByWithAggregationInput[]
    by: AppFinancialsScalarFieldEnum[] | AppFinancialsScalarFieldEnum
    having?: AppFinancialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppFinancialsCountAggregateInputType | true
    _avg?: AppFinancialsAvgAggregateInputType
    _sum?: AppFinancialsSumAggregateInputType
    _min?: AppFinancialsMinAggregateInputType
    _max?: AppFinancialsMaxAggregateInputType
  }

  export type AppFinancialsGroupByOutputType = {
    applicationId: string
    incomeMonthly: number
    otherDebt: number
    housingCost: number
    _count: AppFinancialsCountAggregateOutputType | null
    _avg: AppFinancialsAvgAggregateOutputType | null
    _sum: AppFinancialsSumAggregateOutputType | null
    _min: AppFinancialsMinAggregateOutputType | null
    _max: AppFinancialsMaxAggregateOutputType | null
  }

  type GetAppFinancialsGroupByPayload<T extends AppFinancialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppFinancialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppFinancialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppFinancialsGroupByOutputType[P]>
            : GetScalarType<T[P], AppFinancialsGroupByOutputType[P]>
        }
      >
    >


  export type AppFinancialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applicationId?: boolean
    incomeMonthly?: boolean
    otherDebt?: boolean
    housingCost?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appFinancials"]>

  export type AppFinancialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applicationId?: boolean
    incomeMonthly?: boolean
    otherDebt?: boolean
    housingCost?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appFinancials"]>

  export type AppFinancialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applicationId?: boolean
    incomeMonthly?: boolean
    otherDebt?: boolean
    housingCost?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appFinancials"]>

  export type AppFinancialsSelectScalar = {
    applicationId?: boolean
    incomeMonthly?: boolean
    otherDebt?: boolean
    housingCost?: boolean
  }

  export type AppFinancialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"applicationId" | "incomeMonthly" | "otherDebt" | "housingCost", ExtArgs["result"]["appFinancials"]>
  export type AppFinancialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type AppFinancialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type AppFinancialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $AppFinancialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppFinancials"
    objects: {
      Application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      applicationId: string
      incomeMonthly: number
      otherDebt: number
      housingCost: number
    }, ExtArgs["result"]["appFinancials"]>
    composites: {}
  }

  type AppFinancialsGetPayload<S extends boolean | null | undefined | AppFinancialsDefaultArgs> = $Result.GetResult<Prisma.$AppFinancialsPayload, S>

  type AppFinancialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppFinancialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppFinancialsCountAggregateInputType | true
    }

  export interface AppFinancialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppFinancials'], meta: { name: 'AppFinancials' } }
    /**
     * Find zero or one AppFinancials that matches the filter.
     * @param {AppFinancialsFindUniqueArgs} args - Arguments to find a AppFinancials
     * @example
     * // Get one AppFinancials
     * const appFinancials = await prisma.appFinancials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppFinancialsFindUniqueArgs>(args: SelectSubset<T, AppFinancialsFindUniqueArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppFinancials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppFinancialsFindUniqueOrThrowArgs} args - Arguments to find a AppFinancials
     * @example
     * // Get one AppFinancials
     * const appFinancials = await prisma.appFinancials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppFinancialsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppFinancialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppFinancials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsFindFirstArgs} args - Arguments to find a AppFinancials
     * @example
     * // Get one AppFinancials
     * const appFinancials = await prisma.appFinancials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppFinancialsFindFirstArgs>(args?: SelectSubset<T, AppFinancialsFindFirstArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppFinancials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsFindFirstOrThrowArgs} args - Arguments to find a AppFinancials
     * @example
     * // Get one AppFinancials
     * const appFinancials = await prisma.appFinancials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppFinancialsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppFinancialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppFinancials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppFinancials
     * const appFinancials = await prisma.appFinancials.findMany()
     * 
     * // Get first 10 AppFinancials
     * const appFinancials = await prisma.appFinancials.findMany({ take: 10 })
     * 
     * // Only select the `applicationId`
     * const appFinancialsWithApplicationIdOnly = await prisma.appFinancials.findMany({ select: { applicationId: true } })
     * 
     */
    findMany<T extends AppFinancialsFindManyArgs>(args?: SelectSubset<T, AppFinancialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppFinancials.
     * @param {AppFinancialsCreateArgs} args - Arguments to create a AppFinancials.
     * @example
     * // Create one AppFinancials
     * const AppFinancials = await prisma.appFinancials.create({
     *   data: {
     *     // ... data to create a AppFinancials
     *   }
     * })
     * 
     */
    create<T extends AppFinancialsCreateArgs>(args: SelectSubset<T, AppFinancialsCreateArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppFinancials.
     * @param {AppFinancialsCreateManyArgs} args - Arguments to create many AppFinancials.
     * @example
     * // Create many AppFinancials
     * const appFinancials = await prisma.appFinancials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppFinancialsCreateManyArgs>(args?: SelectSubset<T, AppFinancialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppFinancials and returns the data saved in the database.
     * @param {AppFinancialsCreateManyAndReturnArgs} args - Arguments to create many AppFinancials.
     * @example
     * // Create many AppFinancials
     * const appFinancials = await prisma.appFinancials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppFinancials and only return the `applicationId`
     * const appFinancialsWithApplicationIdOnly = await prisma.appFinancials.createManyAndReturn({
     *   select: { applicationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppFinancialsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppFinancialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppFinancials.
     * @param {AppFinancialsDeleteArgs} args - Arguments to delete one AppFinancials.
     * @example
     * // Delete one AppFinancials
     * const AppFinancials = await prisma.appFinancials.delete({
     *   where: {
     *     // ... filter to delete one AppFinancials
     *   }
     * })
     * 
     */
    delete<T extends AppFinancialsDeleteArgs>(args: SelectSubset<T, AppFinancialsDeleteArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppFinancials.
     * @param {AppFinancialsUpdateArgs} args - Arguments to update one AppFinancials.
     * @example
     * // Update one AppFinancials
     * const appFinancials = await prisma.appFinancials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppFinancialsUpdateArgs>(args: SelectSubset<T, AppFinancialsUpdateArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppFinancials.
     * @param {AppFinancialsDeleteManyArgs} args - Arguments to filter AppFinancials to delete.
     * @example
     * // Delete a few AppFinancials
     * const { count } = await prisma.appFinancials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppFinancialsDeleteManyArgs>(args?: SelectSubset<T, AppFinancialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppFinancials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppFinancials
     * const appFinancials = await prisma.appFinancials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppFinancialsUpdateManyArgs>(args: SelectSubset<T, AppFinancialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppFinancials and returns the data updated in the database.
     * @param {AppFinancialsUpdateManyAndReturnArgs} args - Arguments to update many AppFinancials.
     * @example
     * // Update many AppFinancials
     * const appFinancials = await prisma.appFinancials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppFinancials and only return the `applicationId`
     * const appFinancialsWithApplicationIdOnly = await prisma.appFinancials.updateManyAndReturn({
     *   select: { applicationId: true },
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
    updateManyAndReturn<T extends AppFinancialsUpdateManyAndReturnArgs>(args: SelectSubset<T, AppFinancialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppFinancials.
     * @param {AppFinancialsUpsertArgs} args - Arguments to update or create a AppFinancials.
     * @example
     * // Update or create a AppFinancials
     * const appFinancials = await prisma.appFinancials.upsert({
     *   create: {
     *     // ... data to create a AppFinancials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppFinancials we want to update
     *   }
     * })
     */
    upsert<T extends AppFinancialsUpsertArgs>(args: SelectSubset<T, AppFinancialsUpsertArgs<ExtArgs>>): Prisma__AppFinancialsClient<$Result.GetResult<Prisma.$AppFinancialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppFinancials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsCountArgs} args - Arguments to filter AppFinancials to count.
     * @example
     * // Count the number of AppFinancials
     * const count = await prisma.appFinancials.count({
     *   where: {
     *     // ... the filter for the AppFinancials we want to count
     *   }
     * })
    **/
    count<T extends AppFinancialsCountArgs>(
      args?: Subset<T, AppFinancialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppFinancialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppFinancials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppFinancialsAggregateArgs>(args: Subset<T, AppFinancialsAggregateArgs>): Prisma.PrismaPromise<GetAppFinancialsAggregateType<T>>

    /**
     * Group by AppFinancials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFinancialsGroupByArgs} args - Group by arguments.
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
      T extends AppFinancialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppFinancialsGroupByArgs['orderBy'] }
        : { orderBy?: AppFinancialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppFinancialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppFinancialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppFinancials model
   */
  readonly fields: AppFinancialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppFinancials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppFinancialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppFinancials model
   */
  interface AppFinancialsFieldRefs {
    readonly applicationId: FieldRef<"AppFinancials", 'String'>
    readonly incomeMonthly: FieldRef<"AppFinancials", 'Int'>
    readonly otherDebt: FieldRef<"AppFinancials", 'Int'>
    readonly housingCost: FieldRef<"AppFinancials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AppFinancials findUnique
   */
  export type AppFinancialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * Filter, which AppFinancials to fetch.
     */
    where: AppFinancialsWhereUniqueInput
  }

  /**
   * AppFinancials findUniqueOrThrow
   */
  export type AppFinancialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * Filter, which AppFinancials to fetch.
     */
    where: AppFinancialsWhereUniqueInput
  }

  /**
   * AppFinancials findFirst
   */
  export type AppFinancialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * Filter, which AppFinancials to fetch.
     */
    where?: AppFinancialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppFinancials to fetch.
     */
    orderBy?: AppFinancialsOrderByWithRelationInput | AppFinancialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppFinancials.
     */
    cursor?: AppFinancialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppFinancials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppFinancials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppFinancials.
     */
    distinct?: AppFinancialsScalarFieldEnum | AppFinancialsScalarFieldEnum[]
  }

  /**
   * AppFinancials findFirstOrThrow
   */
  export type AppFinancialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * Filter, which AppFinancials to fetch.
     */
    where?: AppFinancialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppFinancials to fetch.
     */
    orderBy?: AppFinancialsOrderByWithRelationInput | AppFinancialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppFinancials.
     */
    cursor?: AppFinancialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppFinancials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppFinancials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppFinancials.
     */
    distinct?: AppFinancialsScalarFieldEnum | AppFinancialsScalarFieldEnum[]
  }

  /**
   * AppFinancials findMany
   */
  export type AppFinancialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * Filter, which AppFinancials to fetch.
     */
    where?: AppFinancialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppFinancials to fetch.
     */
    orderBy?: AppFinancialsOrderByWithRelationInput | AppFinancialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppFinancials.
     */
    cursor?: AppFinancialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppFinancials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppFinancials.
     */
    skip?: number
    distinct?: AppFinancialsScalarFieldEnum | AppFinancialsScalarFieldEnum[]
  }

  /**
   * AppFinancials create
   */
  export type AppFinancialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * The data needed to create a AppFinancials.
     */
    data: XOR<AppFinancialsCreateInput, AppFinancialsUncheckedCreateInput>
  }

  /**
   * AppFinancials createMany
   */
  export type AppFinancialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppFinancials.
     */
    data: AppFinancialsCreateManyInput | AppFinancialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppFinancials createManyAndReturn
   */
  export type AppFinancialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * The data used to create many AppFinancials.
     */
    data: AppFinancialsCreateManyInput | AppFinancialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppFinancials update
   */
  export type AppFinancialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * The data needed to update a AppFinancials.
     */
    data: XOR<AppFinancialsUpdateInput, AppFinancialsUncheckedUpdateInput>
    /**
     * Choose, which AppFinancials to update.
     */
    where: AppFinancialsWhereUniqueInput
  }

  /**
   * AppFinancials updateMany
   */
  export type AppFinancialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppFinancials.
     */
    data: XOR<AppFinancialsUpdateManyMutationInput, AppFinancialsUncheckedUpdateManyInput>
    /**
     * Filter which AppFinancials to update
     */
    where?: AppFinancialsWhereInput
    /**
     * Limit how many AppFinancials to update.
     */
    limit?: number
  }

  /**
   * AppFinancials updateManyAndReturn
   */
  export type AppFinancialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * The data used to update AppFinancials.
     */
    data: XOR<AppFinancialsUpdateManyMutationInput, AppFinancialsUncheckedUpdateManyInput>
    /**
     * Filter which AppFinancials to update
     */
    where?: AppFinancialsWhereInput
    /**
     * Limit how many AppFinancials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppFinancials upsert
   */
  export type AppFinancialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * The filter to search for the AppFinancials to update in case it exists.
     */
    where: AppFinancialsWhereUniqueInput
    /**
     * In case the AppFinancials found by the `where` argument doesn't exist, create a new AppFinancials with this data.
     */
    create: XOR<AppFinancialsCreateInput, AppFinancialsUncheckedCreateInput>
    /**
     * In case the AppFinancials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppFinancialsUpdateInput, AppFinancialsUncheckedUpdateInput>
  }

  /**
   * AppFinancials delete
   */
  export type AppFinancialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
    /**
     * Filter which AppFinancials to delete.
     */
    where: AppFinancialsWhereUniqueInput
  }

  /**
   * AppFinancials deleteMany
   */
  export type AppFinancialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppFinancials to delete
     */
    where?: AppFinancialsWhereInput
    /**
     * Limit how many AppFinancials to delete.
     */
    limit?: number
  }

  /**
   * AppFinancials without action
   */
  export type AppFinancialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppFinancials
     */
    select?: AppFinancialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppFinancials
     */
    omit?: AppFinancialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppFinancialsInclude<ExtArgs> | null
  }


  /**
   * Model Decision
   */

  export type AggregateDecision = {
    _count: DecisionCountAggregateOutputType | null
    _avg: DecisionAvgAggregateOutputType | null
    _sum: DecisionSumAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  export type DecisionAvgAggregateOutputType = {
    pd: number | null
    dti: number | null
    ltv: number | null
  }

  export type DecisionSumAggregateOutputType = {
    pd: number | null
    dti: number | null
    ltv: number | null
  }

  export type DecisionMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    decision: string | null
    pd: number | null
    modelVersion: string | null
    dti: number | null
    ltv: number | null
    createdAt: Date | null
  }

  export type DecisionMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    decision: string | null
    pd: number | null
    modelVersion: string | null
    dti: number | null
    ltv: number | null
    createdAt: Date | null
  }

  export type DecisionCountAggregateOutputType = {
    id: number
    applicationId: number
    decision: number
    reasonCodes: number
    pd: number
    modelVersion: number
    dti: number
    ltv: number
    createdAt: number
    _all: number
  }


  export type DecisionAvgAggregateInputType = {
    pd?: true
    dti?: true
    ltv?: true
  }

  export type DecisionSumAggregateInputType = {
    pd?: true
    dti?: true
    ltv?: true
  }

  export type DecisionMinAggregateInputType = {
    id?: true
    applicationId?: true
    decision?: true
    pd?: true
    modelVersion?: true
    dti?: true
    ltv?: true
    createdAt?: true
  }

  export type DecisionMaxAggregateInputType = {
    id?: true
    applicationId?: true
    decision?: true
    pd?: true
    modelVersion?: true
    dti?: true
    ltv?: true
    createdAt?: true
  }

  export type DecisionCountAggregateInputType = {
    id?: true
    applicationId?: true
    decision?: true
    reasonCodes?: true
    pd?: true
    modelVersion?: true
    dti?: true
    ltv?: true
    createdAt?: true
    _all?: true
  }

  export type DecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decision to aggregate.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decisions
    **/
    _count?: true | DecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DecisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DecisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionMaxAggregateInputType
  }

  export type GetDecisionAggregateType<T extends DecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecision[P]>
      : GetScalarType<T[P], AggregateDecision[P]>
  }




  export type DecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithAggregationInput | DecisionOrderByWithAggregationInput[]
    by: DecisionScalarFieldEnum[] | DecisionScalarFieldEnum
    having?: DecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionCountAggregateInputType | true
    _avg?: DecisionAvgAggregateInputType
    _sum?: DecisionSumAggregateInputType
    _min?: DecisionMinAggregateInputType
    _max?: DecisionMaxAggregateInputType
  }

  export type DecisionGroupByOutputType = {
    id: string
    applicationId: string
    decision: string
    reasonCodes: string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt: Date
    _count: DecisionCountAggregateOutputType | null
    _avg: DecisionAvgAggregateOutputType | null
    _sum: DecisionSumAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  type GetDecisionGroupByPayload<T extends DecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionGroupByOutputType[P]>
        }
      >
    >


  export type DecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    decision?: boolean
    reasonCodes?: boolean
    pd?: boolean
    modelVersion?: boolean
    dti?: boolean
    ltv?: boolean
    createdAt?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    decision?: boolean
    reasonCodes?: boolean
    pd?: boolean
    modelVersion?: boolean
    dti?: boolean
    ltv?: boolean
    createdAt?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    decision?: boolean
    reasonCodes?: boolean
    pd?: boolean
    modelVersion?: boolean
    dti?: boolean
    ltv?: boolean
    createdAt?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectScalar = {
    id?: boolean
    applicationId?: boolean
    decision?: boolean
    reasonCodes?: boolean
    pd?: boolean
    modelVersion?: boolean
    dti?: boolean
    ltv?: boolean
    createdAt?: boolean
  }

  export type DecisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "decision" | "reasonCodes" | "pd" | "modelVersion" | "dti" | "ltv" | "createdAt", ExtArgs["result"]["decision"]>
  export type DecisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type DecisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type DecisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $DecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Decision"
    objects: {
      Application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      decision: string
      reasonCodes: string[]
      pd: number
      modelVersion: string
      dti: number
      ltv: number
      createdAt: Date
    }, ExtArgs["result"]["decision"]>
    composites: {}
  }

  type DecisionGetPayload<S extends boolean | null | undefined | DecisionDefaultArgs> = $Result.GetResult<Prisma.$DecisionPayload, S>

  type DecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecisionCountAggregateInputType | true
    }

  export interface DecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Decision'], meta: { name: 'Decision' } }
    /**
     * Find zero or one Decision that matches the filter.
     * @param {DecisionFindUniqueArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecisionFindUniqueArgs>(args: SelectSubset<T, DecisionFindUniqueArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Decision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecisionFindUniqueOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecisionFindFirstArgs>(args?: SelectSubset<T, DecisionFindFirstArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decisions
     * const decisions = await prisma.decision.findMany()
     * 
     * // Get first 10 Decisions
     * const decisions = await prisma.decision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decisionWithIdOnly = await prisma.decision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecisionFindManyArgs>(args?: SelectSubset<T, DecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Decision.
     * @param {DecisionCreateArgs} args - Arguments to create a Decision.
     * @example
     * // Create one Decision
     * const Decision = await prisma.decision.create({
     *   data: {
     *     // ... data to create a Decision
     *   }
     * })
     * 
     */
    create<T extends DecisionCreateArgs>(args: SelectSubset<T, DecisionCreateArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decisions.
     * @param {DecisionCreateManyArgs} args - Arguments to create many Decisions.
     * @example
     * // Create many Decisions
     * const decision = await prisma.decision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecisionCreateManyArgs>(args?: SelectSubset<T, DecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decisions and returns the data saved in the database.
     * @param {DecisionCreateManyAndReturnArgs} args - Arguments to create many Decisions.
     * @example
     * // Create many Decisions
     * const decision = await prisma.decision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decisions and only return the `id`
     * const decisionWithIdOnly = await prisma.decision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecisionCreateManyAndReturnArgs>(args?: SelectSubset<T, DecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Decision.
     * @param {DecisionDeleteArgs} args - Arguments to delete one Decision.
     * @example
     * // Delete one Decision
     * const Decision = await prisma.decision.delete({
     *   where: {
     *     // ... filter to delete one Decision
     *   }
     * })
     * 
     */
    delete<T extends DecisionDeleteArgs>(args: SelectSubset<T, DecisionDeleteArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Decision.
     * @param {DecisionUpdateArgs} args - Arguments to update one Decision.
     * @example
     * // Update one Decision
     * const decision = await prisma.decision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecisionUpdateArgs>(args: SelectSubset<T, DecisionUpdateArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decisions.
     * @param {DecisionDeleteManyArgs} args - Arguments to filter Decisions to delete.
     * @example
     * // Delete a few Decisions
     * const { count } = await prisma.decision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecisionDeleteManyArgs>(args?: SelectSubset<T, DecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecisionUpdateManyArgs>(args: SelectSubset<T, DecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions and returns the data updated in the database.
     * @param {DecisionUpdateManyAndReturnArgs} args - Arguments to update many Decisions.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decisions and only return the `id`
     * const decisionWithIdOnly = await prisma.decision.updateManyAndReturn({
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
    updateManyAndReturn<T extends DecisionUpdateManyAndReturnArgs>(args: SelectSubset<T, DecisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Decision.
     * @param {DecisionUpsertArgs} args - Arguments to update or create a Decision.
     * @example
     * // Update or create a Decision
     * const decision = await prisma.decision.upsert({
     *   create: {
     *     // ... data to create a Decision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decision we want to update
     *   }
     * })
     */
    upsert<T extends DecisionUpsertArgs>(args: SelectSubset<T, DecisionUpsertArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionCountArgs} args - Arguments to filter Decisions to count.
     * @example
     * // Count the number of Decisions
     * const count = await prisma.decision.count({
     *   where: {
     *     // ... the filter for the Decisions we want to count
     *   }
     * })
    **/
    count<T extends DecisionCountArgs>(
      args?: Subset<T, DecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DecisionAggregateArgs>(args: Subset<T, DecisionAggregateArgs>): Prisma.PrismaPromise<GetDecisionAggregateType<T>>

    /**
     * Group by Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionGroupByArgs} args - Group by arguments.
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
      T extends DecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionGroupByArgs['orderBy'] }
        : { orderBy?: DecisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Decision model
   */
  readonly fields: DecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Decision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Decision model
   */
  interface DecisionFieldRefs {
    readonly id: FieldRef<"Decision", 'String'>
    readonly applicationId: FieldRef<"Decision", 'String'>
    readonly decision: FieldRef<"Decision", 'String'>
    readonly reasonCodes: FieldRef<"Decision", 'String[]'>
    readonly pd: FieldRef<"Decision", 'Float'>
    readonly modelVersion: FieldRef<"Decision", 'String'>
    readonly dti: FieldRef<"Decision", 'Float'>
    readonly ltv: FieldRef<"Decision", 'Float'>
    readonly createdAt: FieldRef<"Decision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Decision findUnique
   */
  export type DecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision findUniqueOrThrow
   */
  export type DecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision findFirst
   */
  export type DecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision findFirstOrThrow
   */
  export type DecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision findMany
   */
  export type DecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decisions to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision create
   */
  export type DecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Decision.
     */
    data: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
  }

  /**
   * Decision createMany
   */
  export type DecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Decision createManyAndReturn
   */
  export type DecisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decision update
   */
  export type DecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Decision.
     */
    data: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
    /**
     * Choose, which Decision to update.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision updateMany
   */
  export type DecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to update.
     */
    limit?: number
  }

  /**
   * Decision updateManyAndReturn
   */
  export type DecisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decision upsert
   */
  export type DecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Decision to update in case it exists.
     */
    where: DecisionWhereUniqueInput
    /**
     * In case the Decision found by the `where` argument doesn't exist, create a new Decision with this data.
     */
    create: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
    /**
     * In case the Decision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
  }

  /**
   * Decision delete
   */
  export type DecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter which Decision to delete.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision deleteMany
   */
  export type DecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decisions to delete
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to delete.
     */
    limit?: number
  }

  /**
   * Decision without action
   */
  export type DecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    apr: number | null
    termMonths: number | null
    monthlyPayment: number | null
    totalCost: number | null
  }

  export type OfferSumAggregateOutputType = {
    apr: number | null
    termMonths: number | null
    monthlyPayment: number | null
    totalCost: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    lenderId: string | null
    lenderName: string | null
    apr: number | null
    termMonths: number | null
    monthlyPayment: number | null
    totalCost: number | null
    status: string | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    lenderId: string | null
    lenderName: string | null
    apr: number | null
    termMonths: number | null
    monthlyPayment: number | null
    totalCost: number | null
    status: string | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    applicationId: number
    lenderId: number
    lenderName: number
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: number
    status: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    apr?: true
    termMonths?: true
    monthlyPayment?: true
    totalCost?: true
  }

  export type OfferSumAggregateInputType = {
    apr?: true
    termMonths?: true
    monthlyPayment?: true
    totalCost?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    applicationId?: true
    lenderId?: true
    lenderName?: true
    apr?: true
    termMonths?: true
    monthlyPayment?: true
    totalCost?: true
    status?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    applicationId?: true
    lenderId?: true
    lenderName?: true
    apr?: true
    termMonths?: true
    monthlyPayment?: true
    totalCost?: true
    status?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    applicationId?: true
    lenderId?: true
    lenderName?: true
    apr?: true
    termMonths?: true
    monthlyPayment?: true
    totalCost?: true
    constraints?: true
    status?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    applicationId: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonValue
    status: string
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    lenderId?: boolean
    lenderName?: boolean
    apr?: boolean
    termMonths?: boolean
    monthlyPayment?: boolean
    totalCost?: boolean
    constraints?: boolean
    status?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    lenderId?: boolean
    lenderName?: boolean
    apr?: boolean
    termMonths?: boolean
    monthlyPayment?: boolean
    totalCost?: boolean
    constraints?: boolean
    status?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    lenderId?: boolean
    lenderName?: boolean
    apr?: boolean
    termMonths?: boolean
    monthlyPayment?: boolean
    totalCost?: boolean
    constraints?: boolean
    status?: boolean
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    applicationId?: boolean
    lenderId?: boolean
    lenderName?: boolean
    apr?: boolean
    termMonths?: boolean
    monthlyPayment?: boolean
    totalCost?: boolean
    constraints?: boolean
    status?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "lenderId" | "lenderName" | "apr" | "termMonths" | "monthlyPayment" | "totalCost" | "constraints" | "status", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      Application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      lenderId: string
      lenderName: string
      apr: number
      termMonths: number
      monthlyPayment: number
      totalCost: number
      constraints: Prisma.JsonValue
      status: string
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
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
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly applicationId: FieldRef<"Offer", 'String'>
    readonly lenderId: FieldRef<"Offer", 'String'>
    readonly lenderName: FieldRef<"Offer", 'String'>
    readonly apr: FieldRef<"Offer", 'Float'>
    readonly termMonths: FieldRef<"Offer", 'Int'>
    readonly monthlyPayment: FieldRef<"Offer", 'Int'>
    readonly totalCost: FieldRef<"Offer", 'Int'>
    readonly constraints: FieldRef<"Offer", 'Json'>
    readonly status: FieldRef<"Offer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vehiclePrice: 'vehiclePrice',
    downPayment: 'downPayment',
    tradeIn: 'tradeIn',
    fees: 'fees',
    taxRate: 'taxRate',
    termMonths: 'termMonths',
    state: 'state',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const AppFinancialsScalarFieldEnum: {
    applicationId: 'applicationId',
    incomeMonthly: 'incomeMonthly',
    otherDebt: 'otherDebt',
    housingCost: 'housingCost'
  };

  export type AppFinancialsScalarFieldEnum = (typeof AppFinancialsScalarFieldEnum)[keyof typeof AppFinancialsScalarFieldEnum]


  export const DecisionScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    decision: 'decision',
    reasonCodes: 'reasonCodes',
    pd: 'pd',
    modelVersion: 'modelVersion',
    dti: 'dti',
    ltv: 'ltv',
    createdAt: 'createdAt'
  };

  export type DecisionScalarFieldEnum = (typeof DecisionScalarFieldEnum)[keyof typeof DecisionScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    lenderId: 'lenderId',
    lenderName: 'lenderName',
    apr: 'apr',
    termMonths: 'termMonths',
    monthlyPayment: 'monthlyPayment',
    totalCost: 'totalCost',
    constraints: 'constraints',
    status: 'status'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    vehiclePrice?: IntFilter<"Application"> | number
    downPayment?: IntFilter<"Application"> | number
    tradeIn?: IntFilter<"Application"> | number
    fees?: IntFilter<"Application"> | number
    taxRate?: FloatFilter<"Application"> | number
    termMonths?: IntFilter<"Application"> | number
    state?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    financials?: XOR<AppFinancialsNullableScalarRelationFilter, AppFinancialsWhereInput> | null
    decisions?: DecisionListRelationFilter
    offers?: OfferListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
    state?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    financials?: AppFinancialsOrderByWithRelationInput
    decisions?: DecisionOrderByRelationAggregateInput
    offers?: OfferOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    userId?: StringFilter<"Application"> | string
    vehiclePrice?: IntFilter<"Application"> | number
    downPayment?: IntFilter<"Application"> | number
    tradeIn?: IntFilter<"Application"> | number
    fees?: IntFilter<"Application"> | number
    taxRate?: FloatFilter<"Application"> | number
    termMonths?: IntFilter<"Application"> | number
    state?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    financials?: XOR<AppFinancialsNullableScalarRelationFilter, AppFinancialsWhereInput> | null
    decisions?: DecisionListRelationFilter
    offers?: OfferListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
    state?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    userId?: StringWithAggregatesFilter<"Application"> | string
    vehiclePrice?: IntWithAggregatesFilter<"Application"> | number
    downPayment?: IntWithAggregatesFilter<"Application"> | number
    tradeIn?: IntWithAggregatesFilter<"Application"> | number
    fees?: IntWithAggregatesFilter<"Application"> | number
    taxRate?: FloatWithAggregatesFilter<"Application"> | number
    termMonths?: IntWithAggregatesFilter<"Application"> | number
    state?: StringWithAggregatesFilter<"Application"> | string
    status?: StringWithAggregatesFilter<"Application"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type AppFinancialsWhereInput = {
    AND?: AppFinancialsWhereInput | AppFinancialsWhereInput[]
    OR?: AppFinancialsWhereInput[]
    NOT?: AppFinancialsWhereInput | AppFinancialsWhereInput[]
    applicationId?: StringFilter<"AppFinancials"> | string
    incomeMonthly?: IntFilter<"AppFinancials"> | number
    otherDebt?: IntFilter<"AppFinancials"> | number
    housingCost?: IntFilter<"AppFinancials"> | number
    Application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type AppFinancialsOrderByWithRelationInput = {
    applicationId?: SortOrder
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
    Application?: ApplicationOrderByWithRelationInput
  }

  export type AppFinancialsWhereUniqueInput = Prisma.AtLeast<{
    applicationId?: string
    AND?: AppFinancialsWhereInput | AppFinancialsWhereInput[]
    OR?: AppFinancialsWhereInput[]
    NOT?: AppFinancialsWhereInput | AppFinancialsWhereInput[]
    incomeMonthly?: IntFilter<"AppFinancials"> | number
    otherDebt?: IntFilter<"AppFinancials"> | number
    housingCost?: IntFilter<"AppFinancials"> | number
    Application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "applicationId">

  export type AppFinancialsOrderByWithAggregationInput = {
    applicationId?: SortOrder
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
    _count?: AppFinancialsCountOrderByAggregateInput
    _avg?: AppFinancialsAvgOrderByAggregateInput
    _max?: AppFinancialsMaxOrderByAggregateInput
    _min?: AppFinancialsMinOrderByAggregateInput
    _sum?: AppFinancialsSumOrderByAggregateInput
  }

  export type AppFinancialsScalarWhereWithAggregatesInput = {
    AND?: AppFinancialsScalarWhereWithAggregatesInput | AppFinancialsScalarWhereWithAggregatesInput[]
    OR?: AppFinancialsScalarWhereWithAggregatesInput[]
    NOT?: AppFinancialsScalarWhereWithAggregatesInput | AppFinancialsScalarWhereWithAggregatesInput[]
    applicationId?: StringWithAggregatesFilter<"AppFinancials"> | string
    incomeMonthly?: IntWithAggregatesFilter<"AppFinancials"> | number
    otherDebt?: IntWithAggregatesFilter<"AppFinancials"> | number
    housingCost?: IntWithAggregatesFilter<"AppFinancials"> | number
  }

  export type DecisionWhereInput = {
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    id?: StringFilter<"Decision"> | string
    applicationId?: StringFilter<"Decision"> | string
    decision?: StringFilter<"Decision"> | string
    reasonCodes?: StringNullableListFilter<"Decision">
    pd?: FloatFilter<"Decision"> | number
    modelVersion?: StringFilter<"Decision"> | string
    dti?: FloatFilter<"Decision"> | number
    ltv?: FloatFilter<"Decision"> | number
    createdAt?: DateTimeFilter<"Decision"> | Date | string
    Application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type DecisionOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    decision?: SortOrder
    reasonCodes?: SortOrder
    pd?: SortOrder
    modelVersion?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
    createdAt?: SortOrder
    Application?: ApplicationOrderByWithRelationInput
  }

  export type DecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    applicationId?: StringFilter<"Decision"> | string
    decision?: StringFilter<"Decision"> | string
    reasonCodes?: StringNullableListFilter<"Decision">
    pd?: FloatFilter<"Decision"> | number
    modelVersion?: StringFilter<"Decision"> | string
    dti?: FloatFilter<"Decision"> | number
    ltv?: FloatFilter<"Decision"> | number
    createdAt?: DateTimeFilter<"Decision"> | Date | string
    Application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id">

  export type DecisionOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    decision?: SortOrder
    reasonCodes?: SortOrder
    pd?: SortOrder
    modelVersion?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
    createdAt?: SortOrder
    _count?: DecisionCountOrderByAggregateInput
    _avg?: DecisionAvgOrderByAggregateInput
    _max?: DecisionMaxOrderByAggregateInput
    _min?: DecisionMinOrderByAggregateInput
    _sum?: DecisionSumOrderByAggregateInput
  }

  export type DecisionScalarWhereWithAggregatesInput = {
    AND?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    OR?: DecisionScalarWhereWithAggregatesInput[]
    NOT?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Decision"> | string
    applicationId?: StringWithAggregatesFilter<"Decision"> | string
    decision?: StringWithAggregatesFilter<"Decision"> | string
    reasonCodes?: StringNullableListFilter<"Decision">
    pd?: FloatWithAggregatesFilter<"Decision"> | number
    modelVersion?: StringWithAggregatesFilter<"Decision"> | string
    dti?: FloatWithAggregatesFilter<"Decision"> | number
    ltv?: FloatWithAggregatesFilter<"Decision"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Decision"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    applicationId?: StringFilter<"Offer"> | string
    lenderId?: StringFilter<"Offer"> | string
    lenderName?: StringFilter<"Offer"> | string
    apr?: FloatFilter<"Offer"> | number
    termMonths?: IntFilter<"Offer"> | number
    monthlyPayment?: IntFilter<"Offer"> | number
    totalCost?: IntFilter<"Offer"> | number
    constraints?: JsonFilter<"Offer">
    status?: StringFilter<"Offer"> | string
    Application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    lenderId?: SortOrder
    lenderName?: SortOrder
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
    constraints?: SortOrder
    status?: SortOrder
    Application?: ApplicationOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    applicationId?: StringFilter<"Offer"> | string
    lenderId?: StringFilter<"Offer"> | string
    lenderName?: StringFilter<"Offer"> | string
    apr?: FloatFilter<"Offer"> | number
    termMonths?: IntFilter<"Offer"> | number
    monthlyPayment?: IntFilter<"Offer"> | number
    totalCost?: IntFilter<"Offer"> | number
    constraints?: JsonFilter<"Offer">
    status?: StringFilter<"Offer"> | string
    Application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    lenderId?: SortOrder
    lenderName?: SortOrder
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
    constraints?: SortOrder
    status?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    applicationId?: StringWithAggregatesFilter<"Offer"> | string
    lenderId?: StringWithAggregatesFilter<"Offer"> | string
    lenderName?: StringWithAggregatesFilter<"Offer"> | string
    apr?: FloatWithAggregatesFilter<"Offer"> | number
    termMonths?: IntWithAggregatesFilter<"Offer"> | number
    monthlyPayment?: IntWithAggregatesFilter<"Offer"> | number
    totalCost?: IntWithAggregatesFilter<"Offer"> | number
    constraints?: JsonWithAggregatesFilter<"Offer">
    status?: StringWithAggregatesFilter<"Offer"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsCreateNestedOneWithoutApplicationInput
    decisions?: DecisionCreateNestedManyWithoutApplicationInput
    offers?: OfferCreateNestedManyWithoutApplicationInput
    User: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsUncheckedCreateNestedOneWithoutApplicationInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutApplicationInput
    offers?: OfferUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUpdateOneWithoutApplicationNestedInput
    decisions?: DecisionUpdateManyWithoutApplicationNestedInput
    offers?: OfferUpdateManyWithoutApplicationNestedInput
    User?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUncheckedUpdateOneWithoutApplicationNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutApplicationNestedInput
    offers?: OfferUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    userId: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppFinancialsCreateInput = {
    incomeMonthly: number
    otherDebt?: number
    housingCost?: number
    Application: ApplicationCreateNestedOneWithoutFinancialsInput
  }

  export type AppFinancialsUncheckedCreateInput = {
    applicationId: string
    incomeMonthly: number
    otherDebt?: number
    housingCost?: number
  }

  export type AppFinancialsUpdateInput = {
    incomeMonthly?: IntFieldUpdateOperationsInput | number
    otherDebt?: IntFieldUpdateOperationsInput | number
    housingCost?: IntFieldUpdateOperationsInput | number
    Application?: ApplicationUpdateOneRequiredWithoutFinancialsNestedInput
  }

  export type AppFinancialsUncheckedUpdateInput = {
    applicationId?: StringFieldUpdateOperationsInput | string
    incomeMonthly?: IntFieldUpdateOperationsInput | number
    otherDebt?: IntFieldUpdateOperationsInput | number
    housingCost?: IntFieldUpdateOperationsInput | number
  }

  export type AppFinancialsCreateManyInput = {
    applicationId: string
    incomeMonthly: number
    otherDebt?: number
    housingCost?: number
  }

  export type AppFinancialsUpdateManyMutationInput = {
    incomeMonthly?: IntFieldUpdateOperationsInput | number
    otherDebt?: IntFieldUpdateOperationsInput | number
    housingCost?: IntFieldUpdateOperationsInput | number
  }

  export type AppFinancialsUncheckedUpdateManyInput = {
    applicationId?: StringFieldUpdateOperationsInput | string
    incomeMonthly?: IntFieldUpdateOperationsInput | number
    otherDebt?: IntFieldUpdateOperationsInput | number
    housingCost?: IntFieldUpdateOperationsInput | number
  }

  export type DecisionCreateInput = {
    id?: string
    decision: string
    reasonCodes?: DecisionCreatereasonCodesInput | string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt?: Date | string
    Application: ApplicationCreateNestedOneWithoutDecisionsInput
  }

  export type DecisionUncheckedCreateInput = {
    id?: string
    applicationId: string
    decision: string
    reasonCodes?: DecisionCreatereasonCodesInput | string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt?: Date | string
  }

  export type DecisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Application?: ApplicationUpdateOneRequiredWithoutDecisionsNestedInput
  }

  export type DecisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionCreateManyInput = {
    id?: string
    applicationId: string
    decision: string
    reasonCodes?: DecisionCreatereasonCodesInput | string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt?: Date | string
  }

  export type DecisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    id?: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonNullValueInput | InputJsonValue
    status?: string
    Application: ApplicationCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    applicationId: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    Application?: ApplicationUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCreateManyInput = {
    id?: string
    applicationId: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
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

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type AppFinancialsNullableScalarRelationFilter = {
    is?: AppFinancialsWhereInput | null
    isNot?: AppFinancialsWhereInput | null
  }

  export type DecisionListRelationFilter = {
    every?: DecisionWhereInput
    some?: DecisionWhereInput
    none?: DecisionWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DecisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
    state?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
    state?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
    state?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    vehiclePrice?: SortOrder
    downPayment?: SortOrder
    tradeIn?: SortOrder
    fees?: SortOrder
    taxRate?: SortOrder
    termMonths?: SortOrder
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

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type AppFinancialsCountOrderByAggregateInput = {
    applicationId?: SortOrder
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
  }

  export type AppFinancialsAvgOrderByAggregateInput = {
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
  }

  export type AppFinancialsMaxOrderByAggregateInput = {
    applicationId?: SortOrder
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
  }

  export type AppFinancialsMinOrderByAggregateInput = {
    applicationId?: SortOrder
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
  }

  export type AppFinancialsSumOrderByAggregateInput = {
    incomeMonthly?: SortOrder
    otherDebt?: SortOrder
    housingCost?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecisionCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    decision?: SortOrder
    reasonCodes?: SortOrder
    pd?: SortOrder
    modelVersion?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionAvgOrderByAggregateInput = {
    pd?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
  }

  export type DecisionMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    decision?: SortOrder
    pd?: SortOrder
    modelVersion?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    decision?: SortOrder
    pd?: SortOrder
    modelVersion?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionSumOrderByAggregateInput = {
    pd?: SortOrder
    dti?: SortOrder
    ltv?: SortOrder
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

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    lenderId?: SortOrder
    lenderName?: SortOrder
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
    constraints?: SortOrder
    status?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    lenderId?: SortOrder
    lenderName?: SortOrder
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    lenderId?: SortOrder
    lenderName?: SortOrder
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    apr?: SortOrder
    termMonths?: SortOrder
    monthlyPayment?: SortOrder
    totalCost?: SortOrder
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

  export type ApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AppFinancialsCreateNestedOneWithoutApplicationInput = {
    create?: XOR<AppFinancialsCreateWithoutApplicationInput, AppFinancialsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AppFinancialsCreateOrConnectWithoutApplicationInput
    connect?: AppFinancialsWhereUniqueInput
  }

  export type DecisionCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DecisionCreateWithoutApplicationInput, DecisionUncheckedCreateWithoutApplicationInput> | DecisionCreateWithoutApplicationInput[] | DecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutApplicationInput | DecisionCreateOrConnectWithoutApplicationInput[]
    createMany?: DecisionCreateManyApplicationInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutApplicationInput = {
    create?: XOR<OfferCreateWithoutApplicationInput, OfferUncheckedCreateWithoutApplicationInput> | OfferCreateWithoutApplicationInput[] | OfferUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutApplicationInput | OfferCreateOrConnectWithoutApplicationInput[]
    createMany?: OfferCreateManyApplicationInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type AppFinancialsUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<AppFinancialsCreateWithoutApplicationInput, AppFinancialsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AppFinancialsCreateOrConnectWithoutApplicationInput
    connect?: AppFinancialsWhereUniqueInput
  }

  export type DecisionUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DecisionCreateWithoutApplicationInput, DecisionUncheckedCreateWithoutApplicationInput> | DecisionCreateWithoutApplicationInput[] | DecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutApplicationInput | DecisionCreateOrConnectWithoutApplicationInput[]
    createMany?: DecisionCreateManyApplicationInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<OfferCreateWithoutApplicationInput, OfferUncheckedCreateWithoutApplicationInput> | OfferCreateWithoutApplicationInput[] | OfferUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutApplicationInput | OfferCreateOrConnectWithoutApplicationInput[]
    createMany?: OfferCreateManyApplicationInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
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

  export type AppFinancialsUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<AppFinancialsCreateWithoutApplicationInput, AppFinancialsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AppFinancialsCreateOrConnectWithoutApplicationInput
    upsert?: AppFinancialsUpsertWithoutApplicationInput
    disconnect?: AppFinancialsWhereInput | boolean
    delete?: AppFinancialsWhereInput | boolean
    connect?: AppFinancialsWhereUniqueInput
    update?: XOR<XOR<AppFinancialsUpdateToOneWithWhereWithoutApplicationInput, AppFinancialsUpdateWithoutApplicationInput>, AppFinancialsUncheckedUpdateWithoutApplicationInput>
  }

  export type DecisionUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DecisionCreateWithoutApplicationInput, DecisionUncheckedCreateWithoutApplicationInput> | DecisionCreateWithoutApplicationInput[] | DecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutApplicationInput | DecisionCreateOrConnectWithoutApplicationInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutApplicationInput | DecisionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DecisionCreateManyApplicationInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutApplicationInput | DecisionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutApplicationInput | DecisionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<OfferCreateWithoutApplicationInput, OfferUncheckedCreateWithoutApplicationInput> | OfferCreateWithoutApplicationInput[] | OfferUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutApplicationInput | OfferCreateOrConnectWithoutApplicationInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutApplicationInput | OfferUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: OfferCreateManyApplicationInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutApplicationInput | OfferUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutApplicationInput | OfferUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type AppFinancialsUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<AppFinancialsCreateWithoutApplicationInput, AppFinancialsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AppFinancialsCreateOrConnectWithoutApplicationInput
    upsert?: AppFinancialsUpsertWithoutApplicationInput
    disconnect?: AppFinancialsWhereInput | boolean
    delete?: AppFinancialsWhereInput | boolean
    connect?: AppFinancialsWhereUniqueInput
    update?: XOR<XOR<AppFinancialsUpdateToOneWithWhereWithoutApplicationInput, AppFinancialsUpdateWithoutApplicationInput>, AppFinancialsUncheckedUpdateWithoutApplicationInput>
  }

  export type DecisionUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DecisionCreateWithoutApplicationInput, DecisionUncheckedCreateWithoutApplicationInput> | DecisionCreateWithoutApplicationInput[] | DecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutApplicationInput | DecisionCreateOrConnectWithoutApplicationInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutApplicationInput | DecisionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DecisionCreateManyApplicationInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutApplicationInput | DecisionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutApplicationInput | DecisionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<OfferCreateWithoutApplicationInput, OfferUncheckedCreateWithoutApplicationInput> | OfferCreateWithoutApplicationInput[] | OfferUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutApplicationInput | OfferCreateOrConnectWithoutApplicationInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutApplicationInput | OfferUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: OfferCreateManyApplicationInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutApplicationInput | OfferUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutApplicationInput | OfferUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutFinancialsInput = {
    create?: XOR<ApplicationCreateWithoutFinancialsInput, ApplicationUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutFinancialsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutFinancialsNestedInput = {
    create?: XOR<ApplicationCreateWithoutFinancialsInput, ApplicationUncheckedCreateWithoutFinancialsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutFinancialsInput
    upsert?: ApplicationUpsertWithoutFinancialsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutFinancialsInput, ApplicationUpdateWithoutFinancialsInput>, ApplicationUncheckedUpdateWithoutFinancialsInput>
  }

  export type DecisionCreatereasonCodesInput = {
    set: string[]
  }

  export type ApplicationCreateNestedOneWithoutDecisionsInput = {
    create?: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDecisionsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type DecisionUpdatereasonCodesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApplicationUpdateOneRequiredWithoutDecisionsNestedInput = {
    create?: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDecisionsInput
    upsert?: ApplicationUpsertWithoutDecisionsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDecisionsInput, ApplicationUpdateWithoutDecisionsInput>, ApplicationUncheckedUpdateWithoutDecisionsInput>
  }

  export type ApplicationCreateNestedOneWithoutOffersInput = {
    create?: XOR<ApplicationCreateWithoutOffersInput, ApplicationUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutOffersInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<ApplicationCreateWithoutOffersInput, ApplicationUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutOffersInput
    upsert?: ApplicationUpsertWithoutOffersInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutOffersInput, ApplicationUpdateWithoutOffersInput>, ApplicationUncheckedUpdateWithoutOffersInput>
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

  export type ApplicationCreateWithoutUserInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsCreateNestedOneWithoutApplicationInput
    decisions?: DecisionCreateNestedManyWithoutApplicationInput
    offers?: OfferCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsUncheckedCreateNestedOneWithoutApplicationInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutApplicationInput
    offers?: OfferUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateManyUserInputEnvelope = {
    data: ApplicationCreateManyUserInput | ApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    vehiclePrice?: IntFilter<"Application"> | number
    downPayment?: IntFilter<"Application"> | number
    tradeIn?: IntFilter<"Application"> | number
    fees?: IntFilter<"Application"> | number
    taxRate?: FloatFilter<"Application"> | number
    termMonths?: IntFilter<"Application"> | number
    state?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type AppFinancialsCreateWithoutApplicationInput = {
    incomeMonthly: number
    otherDebt?: number
    housingCost?: number
  }

  export type AppFinancialsUncheckedCreateWithoutApplicationInput = {
    incomeMonthly: number
    otherDebt?: number
    housingCost?: number
  }

  export type AppFinancialsCreateOrConnectWithoutApplicationInput = {
    where: AppFinancialsWhereUniqueInput
    create: XOR<AppFinancialsCreateWithoutApplicationInput, AppFinancialsUncheckedCreateWithoutApplicationInput>
  }

  export type DecisionCreateWithoutApplicationInput = {
    id?: string
    decision: string
    reasonCodes?: DecisionCreatereasonCodesInput | string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt?: Date | string
  }

  export type DecisionUncheckedCreateWithoutApplicationInput = {
    id?: string
    decision: string
    reasonCodes?: DecisionCreatereasonCodesInput | string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt?: Date | string
  }

  export type DecisionCreateOrConnectWithoutApplicationInput = {
    where: DecisionWhereUniqueInput
    create: XOR<DecisionCreateWithoutApplicationInput, DecisionUncheckedCreateWithoutApplicationInput>
  }

  export type DecisionCreateManyApplicationInputEnvelope = {
    data: DecisionCreateManyApplicationInput | DecisionCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutApplicationInput = {
    id?: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type OfferUncheckedCreateWithoutApplicationInput = {
    id?: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type OfferCreateOrConnectWithoutApplicationInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutApplicationInput, OfferUncheckedCreateWithoutApplicationInput>
  }

  export type OfferCreateManyApplicationInputEnvelope = {
    data: OfferCreateManyApplicationInput | OfferCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type AppFinancialsUpsertWithoutApplicationInput = {
    update: XOR<AppFinancialsUpdateWithoutApplicationInput, AppFinancialsUncheckedUpdateWithoutApplicationInput>
    create: XOR<AppFinancialsCreateWithoutApplicationInput, AppFinancialsUncheckedCreateWithoutApplicationInput>
    where?: AppFinancialsWhereInput
  }

  export type AppFinancialsUpdateToOneWithWhereWithoutApplicationInput = {
    where?: AppFinancialsWhereInput
    data: XOR<AppFinancialsUpdateWithoutApplicationInput, AppFinancialsUncheckedUpdateWithoutApplicationInput>
  }

  export type AppFinancialsUpdateWithoutApplicationInput = {
    incomeMonthly?: IntFieldUpdateOperationsInput | number
    otherDebt?: IntFieldUpdateOperationsInput | number
    housingCost?: IntFieldUpdateOperationsInput | number
  }

  export type AppFinancialsUncheckedUpdateWithoutApplicationInput = {
    incomeMonthly?: IntFieldUpdateOperationsInput | number
    otherDebt?: IntFieldUpdateOperationsInput | number
    housingCost?: IntFieldUpdateOperationsInput | number
  }

  export type DecisionUpsertWithWhereUniqueWithoutApplicationInput = {
    where: DecisionWhereUniqueInput
    update: XOR<DecisionUpdateWithoutApplicationInput, DecisionUncheckedUpdateWithoutApplicationInput>
    create: XOR<DecisionCreateWithoutApplicationInput, DecisionUncheckedCreateWithoutApplicationInput>
  }

  export type DecisionUpdateWithWhereUniqueWithoutApplicationInput = {
    where: DecisionWhereUniqueInput
    data: XOR<DecisionUpdateWithoutApplicationInput, DecisionUncheckedUpdateWithoutApplicationInput>
  }

  export type DecisionUpdateManyWithWhereWithoutApplicationInput = {
    where: DecisionScalarWhereInput
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyWithoutApplicationInput>
  }

  export type DecisionScalarWhereInput = {
    AND?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    OR?: DecisionScalarWhereInput[]
    NOT?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    id?: StringFilter<"Decision"> | string
    applicationId?: StringFilter<"Decision"> | string
    decision?: StringFilter<"Decision"> | string
    reasonCodes?: StringNullableListFilter<"Decision">
    pd?: FloatFilter<"Decision"> | number
    modelVersion?: StringFilter<"Decision"> | string
    dti?: FloatFilter<"Decision"> | number
    ltv?: FloatFilter<"Decision"> | number
    createdAt?: DateTimeFilter<"Decision"> | Date | string
  }

  export type OfferUpsertWithWhereUniqueWithoutApplicationInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutApplicationInput, OfferUncheckedUpdateWithoutApplicationInput>
    create: XOR<OfferCreateWithoutApplicationInput, OfferUncheckedCreateWithoutApplicationInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutApplicationInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutApplicationInput, OfferUncheckedUpdateWithoutApplicationInput>
  }

  export type OfferUpdateManyWithWhereWithoutApplicationInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutApplicationInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    applicationId?: StringFilter<"Offer"> | string
    lenderId?: StringFilter<"Offer"> | string
    lenderName?: StringFilter<"Offer"> | string
    apr?: FloatFilter<"Offer"> | number
    termMonths?: IntFilter<"Offer"> | number
    monthlyPayment?: IntFilter<"Offer"> | number
    totalCost?: IntFilter<"Offer"> | number
    constraints?: JsonFilter<"Offer">
    status?: StringFilter<"Offer"> | string
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateWithoutFinancialsInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    decisions?: DecisionCreateNestedManyWithoutApplicationInput
    offers?: OfferCreateNestedManyWithoutApplicationInput
    User: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutFinancialsInput = {
    id?: string
    userId: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    decisions?: DecisionUncheckedCreateNestedManyWithoutApplicationInput
    offers?: OfferUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutFinancialsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutFinancialsInput, ApplicationUncheckedCreateWithoutFinancialsInput>
  }

  export type ApplicationUpsertWithoutFinancialsInput = {
    update: XOR<ApplicationUpdateWithoutFinancialsInput, ApplicationUncheckedUpdateWithoutFinancialsInput>
    create: XOR<ApplicationCreateWithoutFinancialsInput, ApplicationUncheckedCreateWithoutFinancialsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutFinancialsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutFinancialsInput, ApplicationUncheckedUpdateWithoutFinancialsInput>
  }

  export type ApplicationUpdateWithoutFinancialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: DecisionUpdateManyWithoutApplicationNestedInput
    offers?: OfferUpdateManyWithoutApplicationNestedInput
    User?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutFinancialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: DecisionUncheckedUpdateManyWithoutApplicationNestedInput
    offers?: OfferUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutDecisionsInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsCreateNestedOneWithoutApplicationInput
    offers?: OfferCreateNestedManyWithoutApplicationInput
    User: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutDecisionsInput = {
    id?: string
    userId: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsUncheckedCreateNestedOneWithoutApplicationInput
    offers?: OfferUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutDecisionsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
  }

  export type ApplicationUpsertWithoutDecisionsInput = {
    update: XOR<ApplicationUpdateWithoutDecisionsInput, ApplicationUncheckedUpdateWithoutDecisionsInput>
    create: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDecisionsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDecisionsInput, ApplicationUncheckedUpdateWithoutDecisionsInput>
  }

  export type ApplicationUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUpdateOneWithoutApplicationNestedInput
    offers?: OfferUpdateManyWithoutApplicationNestedInput
    User?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUncheckedUpdateOneWithoutApplicationNestedInput
    offers?: OfferUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutOffersInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsCreateNestedOneWithoutApplicationInput
    decisions?: DecisionCreateNestedManyWithoutApplicationInput
    User: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutOffersInput = {
    id?: string
    userId: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
    financials?: AppFinancialsUncheckedCreateNestedOneWithoutApplicationInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutOffersInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutOffersInput, ApplicationUncheckedCreateWithoutOffersInput>
  }

  export type ApplicationUpsertWithoutOffersInput = {
    update: XOR<ApplicationUpdateWithoutOffersInput, ApplicationUncheckedUpdateWithoutOffersInput>
    create: XOR<ApplicationCreateWithoutOffersInput, ApplicationUncheckedCreateWithoutOffersInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutOffersInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutOffersInput, ApplicationUncheckedUpdateWithoutOffersInput>
  }

  export type ApplicationUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUpdateOneWithoutApplicationNestedInput
    decisions?: DecisionUpdateManyWithoutApplicationNestedInput
    User?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUncheckedUpdateOneWithoutApplicationNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyUserInput = {
    id?: string
    vehiclePrice: number
    downPayment: number
    tradeIn?: number
    fees?: number
    taxRate?: number
    termMonths: number
    state: string
    status?: string
    createdAt?: Date | string
  }

  export type ApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUpdateOneWithoutApplicationNestedInput
    decisions?: DecisionUpdateManyWithoutApplicationNestedInput
    offers?: OfferUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financials?: AppFinancialsUncheckedUpdateOneWithoutApplicationNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutApplicationNestedInput
    offers?: OfferUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePrice?: IntFieldUpdateOperationsInput | number
    downPayment?: IntFieldUpdateOperationsInput | number
    tradeIn?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionCreateManyApplicationInput = {
    id?: string
    decision: string
    reasonCodes?: DecisionCreatereasonCodesInput | string[]
    pd: number
    modelVersion: string
    dti: number
    ltv: number
    createdAt?: Date | string
  }

  export type OfferCreateManyApplicationInput = {
    id?: string
    lenderId: string
    lenderName: string
    apr: number
    termMonths: number
    monthlyPayment: number
    totalCost: number
    constraints: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type DecisionUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reasonCodes?: DecisionUpdatereasonCodesInput | string[]
    pd?: FloatFieldUpdateOperationsInput | number
    modelVersion?: StringFieldUpdateOperationsInput | string
    dti?: FloatFieldUpdateOperationsInput | number
    ltv?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lenderId?: StringFieldUpdateOperationsInput | string
    lenderName?: StringFieldUpdateOperationsInput | string
    apr?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    monthlyPayment?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    constraints?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
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