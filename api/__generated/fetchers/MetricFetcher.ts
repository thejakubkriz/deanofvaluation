import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher, ConnectionFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import type {CategoryWhere} from '../inputs';
import type {CategoryOrderBy} from '../inputs';
import type {MetricValueWhere} from '../inputs';
import type {MetricValueOrderBy} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface MetricFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Metric', T, TVariables> {

    on<XName extends ImplementationType<'Metric'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): MetricFetcher<
        XName extends 'Metric' ?
        T & X :
        WithTypeName<T, ImplementationType<'Metric'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Metric'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): MetricFetcher<T, TVariables>;


    readonly __typename: MetricFetcher<T & {__typename: ImplementationType<'Metric'>}, TVariables>;


    _meta<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricMeta', X, XVariables>
    ): MetricFetcher<
        T & {readonly "_meta"?: X}, 
        TVariables & XVariables
    >;

    _meta<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "_meta", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'MetricMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"_meta", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly id: MetricFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": MetricFetcher<Omit<T, 'id'>, TVariables>;


    readonly name: MetricFetcher<T & {readonly "name"?: string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": MetricFetcher<Omit<T, 'name'>, TVariables>;


    readonly description: MetricFetcher<T & {readonly "description"?: string}, TVariables>;

    "description+"<
        XAlias extends string = "description", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"description", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~description": MetricFetcher<Omit<T, 'description'>, TVariables>;


    category<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Category', X, XVariables>
    ): MetricFetcher<
        T & {readonly "category": ReadonlyArray<X>}, 
        TVariables & XVariables & MetricArgs["category"]
    >;

    category<
        XArgs extends AcceptableVariables<MetricArgs['category']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>
    ): MetricFetcher<
        T & {readonly "category": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['category']>
    >;

    category<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "category", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Category', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"category", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & MetricArgs["category"] & XDirectiveVariables
    >;

    category<
        XArgs extends AcceptableVariables<MetricArgs['category']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "category", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"category", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['category']> & XDirectiveVariables
    >;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): MetricFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & MetricArgs["metricValues"]
    >;

    metricValues<
        XArgs extends AcceptableVariables<MetricArgs['metricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): MetricFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['metricValues']>
    >;

    metricValues<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "metricValues", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"metricValues", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & MetricArgs["metricValues"] & XDirectiveVariables
    >;

    metricValues<
        XArgs extends AcceptableVariables<MetricArgs['metricValues']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "metricValues", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"metricValues", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['metricValues']> & XDirectiveVariables
    >;


    paginateCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>
    ): MetricFetcher<
        T & {readonly "paginateCategory": X}, 
        TVariables & XVariables & MetricArgs["paginateCategory"]
    >;

    paginateCategory<
        XArgs extends AcceptableVariables<MetricArgs['paginateCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>
    ): MetricFetcher<
        T & {readonly "paginateCategory": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['paginateCategory']>
    >;

    paginateCategory<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateCategory", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateCategory", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & MetricArgs["paginateCategory"] & XDirectiveVariables
    >;

    paginateCategory<
        XArgs extends AcceptableVariables<MetricArgs['paginateCategory']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateCategory", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateCategory", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['paginateCategory']> & XDirectiveVariables
    >;


    paginateMetricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): MetricFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & MetricArgs["paginateMetricValues"]
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<MetricArgs['paginateMetricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): MetricFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['paginateMetricValues']>
    >;

    paginateMetricValues<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetricValues", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetricValues", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & MetricArgs["paginateMetricValues"] & XDirectiveVariables
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<MetricArgs['paginateMetricValues']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetricValues", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetricValues", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricArgs['paginateMetricValues']> & XDirectiveVariables
    >;
}

export const metric$: MetricFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Metric", 
            "OBJECT", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "_meta", 
                    targetTypeName: "MetricMeta", 
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
                    category: "SCALAR", 
                    name: "description", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "category", 
                    argGraphQLTypeMap: {
                        filter: 'CategoryWhere', 
                        orderBy: '[CategoryOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "Category"
                }, 
                {
                    category: "LIST", 
                    name: "metricValues", 
                    argGraphQLTypeMap: {
                        filter: 'MetricValueWhere', 
                        orderBy: '[MetricValueOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "MetricValue"
                }, 
                {
                    category: "CONNECTION", 
                    name: "paginateCategory", 
                    argGraphQLTypeMap: {
                        filter: 'CategoryWhere', 
                        orderBy: '[CategoryOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "CategoryConnection", 
                    edgeTypeName: "CategoryEdge", 
                    targetTypeName: "Category"
                }, 
                {
                    category: "CONNECTION", 
                    name: "paginateMetricValues", 
                    argGraphQLTypeMap: {
                        filter: 'MetricValueWhere', 
                        orderBy: '[MetricValueOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "MetricValueConnection", 
                    edgeTypeName: "MetricValueEdge", 
                    targetTypeName: "MetricValue"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const metric$$ = 
    metric$
        .id
        .name
        .description
;

export interface MetricArgs {

    readonly category: {
        readonly filter?: CategoryWhere, 
        readonly orderBy?: ReadonlyArray<CategoryOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly metricValues: {
        readonly filter?: MetricValueWhere, 
        readonly orderBy?: ReadonlyArray<MetricValueOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateCategory: {
        readonly filter?: CategoryWhere, 
        readonly orderBy?: ReadonlyArray<CategoryOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }, 

    readonly paginateMetricValues: {
        readonly filter?: MetricValueWhere, 
        readonly orderBy?: ReadonlyArray<MetricValueOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }
}
