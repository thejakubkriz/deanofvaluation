import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher, ConnectionFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import type {MetricWhere} from '../inputs';
import type {MetricOrderBy} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface CategoryFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Category', T, TVariables> {

    on<XName extends ImplementationType<'Category'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): CategoryFetcher<
        XName extends 'Category' ?
        T & X :
        WithTypeName<T, ImplementationType<'Category'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Category'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): CategoryFetcher<T, TVariables>;


    readonly __typename: CategoryFetcher<T & {__typename: ImplementationType<'Category'>}, TVariables>;


    _meta<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'CategoryMeta', X, XVariables>
    ): CategoryFetcher<
        T & {readonly "_meta"?: X}, 
        TVariables & XVariables
    >;

    _meta<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "_meta", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'CategoryMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"_meta", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): CategoryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly id: CategoryFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): CategoryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": CategoryFetcher<Omit<T, 'id'>, TVariables>;


    readonly name: CategoryFetcher<T & {readonly "name"?: string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): CategoryFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": CategoryFetcher<Omit<T, 'name'>, TVariables>;


    metrics<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): CategoryFetcher<
        T & {readonly "metrics": ReadonlyArray<X>}, 
        TVariables & XVariables & CategoryArgs["metrics"]
    >;

    metrics<
        XArgs extends AcceptableVariables<CategoryArgs['metrics']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>
    ): CategoryFetcher<
        T & {readonly "metrics": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, CategoryArgs['metrics']>
    >;

    metrics<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "metrics", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"metrics", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): CategoryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & CategoryArgs["metrics"] & XDirectiveVariables
    >;

    metrics<
        XArgs extends AcceptableVariables<CategoryArgs['metrics']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "metrics", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"metrics", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): CategoryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, CategoryArgs['metrics']> & XDirectiveVariables
    >;


    paginateMetrics<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricConnection', X, XVariables>
    ): CategoryFetcher<
        T & {readonly "paginateMetrics": X}, 
        TVariables & XVariables & CategoryArgs["paginateMetrics"]
    >;

    paginateMetrics<
        XArgs extends AcceptableVariables<CategoryArgs['paginateMetrics']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricConnection', X, XVariables>
    ): CategoryFetcher<
        T & {readonly "paginateMetrics": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, CategoryArgs['paginateMetrics']>
    >;

    paginateMetrics<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetrics", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'MetricConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetrics", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): CategoryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & CategoryArgs["paginateMetrics"] & XDirectiveVariables
    >;

    paginateMetrics<
        XArgs extends AcceptableVariables<CategoryArgs['paginateMetrics']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetrics", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetrics", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): CategoryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, CategoryArgs['paginateMetrics']> & XDirectiveVariables
    >;
}

export const category$: CategoryFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Category", 
            "OBJECT", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "_meta", 
                    targetTypeName: "CategoryMeta", 
                    undefinable: true
                }, 
                {
                    category: "ID", 
                    name: "id"
                }, 
                {
                    category: "SCALAR", 
                    name: "name", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "metrics", 
                    argGraphQLTypeMap: {
                        filter: 'MetricWhere', 
                        orderBy: '[MetricOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "Metric"
                }, 
                {
                    category: "CONNECTION", 
                    name: "paginateMetrics", 
                    argGraphQLTypeMap: {
                        filter: 'MetricWhere', 
                        orderBy: '[MetricOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "MetricConnection", 
                    edgeTypeName: "MetricEdge", 
                    targetTypeName: "Metric"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const category$$ = 
    category$
        .id
        .name
;

export interface CategoryArgs {

    readonly metrics: {
        readonly filter?: MetricWhere, 
        readonly orderBy?: ReadonlyArray<MetricOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateMetrics: {
        readonly filter?: MetricWhere, 
        readonly orderBy?: ReadonlyArray<MetricOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }
}
