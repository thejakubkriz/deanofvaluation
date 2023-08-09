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
export interface RegionFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Region', T, TVariables> {

    on<XName extends ImplementationType<'Region'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): RegionFetcher<
        XName extends 'Region' ?
        T & X :
        WithTypeName<T, ImplementationType<'Region'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Region'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): RegionFetcher<T, TVariables>;


    readonly __typename: RegionFetcher<T & {__typename: ImplementationType<'Region'>}, TVariables>;


    _meta<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'RegionMeta', X, XVariables>
    ): RegionFetcher<
        T & {readonly "_meta"?: X}, 
        TVariables & XVariables
    >;

    _meta<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "_meta", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'RegionMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"_meta", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): RegionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly id: RegionFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): RegionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": RegionFetcher<Omit<T, 'id'>, TVariables>;


    readonly region: RegionFetcher<T & {readonly "region"?: string}, TVariables>;

    "region+"<
        XAlias extends string = "region", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"region", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): RegionFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~region": RegionFetcher<Omit<T, 'region'>, TVariables>;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): RegionFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & RegionArgs["metricValues"]
    >;

    metricValues<
        XArgs extends AcceptableVariables<RegionArgs['metricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): RegionFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, RegionArgs['metricValues']>
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
    ): RegionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & RegionArgs["metricValues"] & XDirectiveVariables
    >;

    metricValues<
        XArgs extends AcceptableVariables<RegionArgs['metricValues']>, 
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
    ): RegionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, RegionArgs['metricValues']> & XDirectiveVariables
    >;


    paginateMetricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): RegionFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & RegionArgs["paginateMetricValues"]
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<RegionArgs['paginateMetricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): RegionFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, RegionArgs['paginateMetricValues']>
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
    ): RegionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & RegionArgs["paginateMetricValues"] & XDirectiveVariables
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<RegionArgs['paginateMetricValues']>, 
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
    ): RegionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, RegionArgs['paginateMetricValues']> & XDirectiveVariables
    >;
}

export const region$: RegionFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Region", 
            "OBJECT", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "_meta", 
                    targetTypeName: "RegionMeta", 
                    undefinable: true
                }, 
                {
                    category: "ID", 
                    name: "id"
                }, 
                {
                    category: "SCALAR", 
                    name: "region", 
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

export const region$$ = 
    region$
        .id
        .region
;

export interface RegionArgs {

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
