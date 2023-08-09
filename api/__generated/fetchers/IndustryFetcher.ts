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
export interface IndustryFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Industry', T, TVariables> {

    on<XName extends ImplementationType<'Industry'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): IndustryFetcher<
        XName extends 'Industry' ?
        T & X :
        WithTypeName<T, ImplementationType<'Industry'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Industry'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): IndustryFetcher<T, TVariables>;


    readonly __typename: IndustryFetcher<T & {__typename: ImplementationType<'Industry'>}, TVariables>;


    _meta<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'IndustryMeta', X, XVariables>
    ): IndustryFetcher<
        T & {readonly "_meta"?: X}, 
        TVariables & XVariables
    >;

    _meta<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "_meta", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'IndustryMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"_meta", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): IndustryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly id: IndustryFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): IndustryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": IndustryFetcher<Omit<T, 'id'>, TVariables>;


    readonly name: IndustryFetcher<T & {readonly "name"?: string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): IndustryFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": IndustryFetcher<Omit<T, 'name'>, TVariables>;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): IndustryFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & IndustryArgs["metricValues"]
    >;

    metricValues<
        XArgs extends AcceptableVariables<IndustryArgs['metricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): IndustryFetcher<
        T & {readonly "metricValues": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, IndustryArgs['metricValues']>
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
    ): IndustryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & IndustryArgs["metricValues"] & XDirectiveVariables
    >;

    metricValues<
        XArgs extends AcceptableVariables<IndustryArgs['metricValues']>, 
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
    ): IndustryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, IndustryArgs['metricValues']> & XDirectiveVariables
    >;


    paginateMetricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): IndustryFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & IndustryArgs["paginateMetricValues"]
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<IndustryArgs['paginateMetricValues']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): IndustryFetcher<
        T & {readonly "paginateMetricValues": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, IndustryArgs['paginateMetricValues']>
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
    ): IndustryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & IndustryArgs["paginateMetricValues"] & XDirectiveVariables
    >;

    paginateMetricValues<
        XArgs extends AcceptableVariables<IndustryArgs['paginateMetricValues']>, 
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
    ): IndustryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, IndustryArgs['paginateMetricValues']> & XDirectiveVariables
    >;
}

export const industry$: IndustryFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Industry", 
            "OBJECT", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "_meta", 
                    targetTypeName: "IndustryMeta", 
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

export const industry$$ = 
    industry$
        .id
        .name
;

export interface IndustryArgs {

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
