import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher, ConnectionFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import type {MetricValueWhere} from '../inputs';
import type {MetricValueOrderBy} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface YearFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Year', T, TVariables> {

    on<XName extends ImplementationType<'Year'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): YearFetcher<
        XName extends 'Year' ?
        T & X :
        WithTypeName<T, ImplementationType<'Year'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Year'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): YearFetcher<T, TVariables>;


    readonly __typename: YearFetcher<T & {__typename: ImplementationType<'Year'>}, TVariables>;


    _meta<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'YearMeta', X, XVariables>
    ): YearFetcher<
        T & {readonly "_meta"?: X}, 
        TVariables & XVariables
    >;

    _meta<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "_meta", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'YearMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"_meta", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): YearFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly id: YearFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): YearFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": YearFetcher<Omit<T, 'id'>, TVariables>;


    readonly dateUpdated: YearFetcher<T & {readonly "dateUpdated"?: string}, TVariables>;

    "dateUpdated+"<
        XAlias extends string = "dateUpdated", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"dateUpdated", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): YearFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~dateUpdated": YearFetcher<Omit<T, 'dateUpdated'>, TVariables>;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): YearFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & YearArgs["metricValues"]
    >;

    metricValues<
        XArgs extends AcceptableVariables<YearArgs['metricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): YearFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, YearArgs['metricValues']>
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
    ): YearFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & YearArgs["metricValues"] & XDirectiveVariables
    >;

    metricValues<
        XArgs extends AcceptableVariables<YearArgs['metricValues']>, 
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
    ): YearFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, YearArgs['metricValues']> & XDirectiveVariables
    >;


    paginateMetricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): YearFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & YearArgs["paginateMetricValues"]
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<YearArgs['paginateMetricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): YearFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, YearArgs['paginateMetricValues']>
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
    ): YearFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & YearArgs["paginateMetricValues"] & XDirectiveVariables
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<YearArgs['paginateMetricValues']>, 
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
    ): YearFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, YearArgs['paginateMetricValues']> & XDirectiveVariables
    >;
}

export const year$: YearFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Year", 
            "OBJECT", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "_meta", 
                    targetTypeName: "YearMeta", 
                    undefinable: true
                }, 
                {
                    category: "ID", 
                    name: "id"
                }, 
                {
                    category: "SCALAR", 
                    name: "dateUpdated", 
                    undefinable: true
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

export const year$$ = 
    year$
        .id
        .dateUpdated
;

export interface YearArgs {

    readonly metricValues: {
        readonly filter?: MetricValueWhere, 
        readonly orderBy?: ReadonlyArray<MetricValueOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateMetricValues: {
        readonly filter?: MetricValueWhere, 
        readonly orderBy?: ReadonlyArray<MetricValueOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }
}
