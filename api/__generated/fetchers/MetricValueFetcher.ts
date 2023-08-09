import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import type {YearWhere} from '../inputs';
import type {RegionWhere} from '../inputs';
import type {IndustryWhere} from '../inputs';
import type {MetricWhere} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 *
 * So any instance of this interface is reuseable.
 */
export interface MetricValueFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'MetricValue', T, TVariables> {

    on<XName extends ImplementationType<'MetricValue'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>,
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): MetricValueFetcher<
        XName extends 'MetricValue' ?
        T & X :
        WithTypeName<T, ImplementationType<'MetricValue'>> & (
            WithTypeName<X, ImplementationType<XName>> |
            {__typename: Exclude<ImplementationType<'MetricValue'>, ImplementationType<XName>>}
        ),
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): MetricValueFetcher<T, TVariables>;


    readonly __typename: MetricValueFetcher<T & {__typename: ImplementationType<'MetricValue'>}, TVariables>;


    _meta<
        X extends object,
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValueMeta', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "_meta"?: X},
        TVariables & XVariables
    >;

    _meta<
        X extends object,
        XVariables extends object,
        XAlias extends string = "_meta",
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'MetricValueMeta', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"_meta", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly id: MetricValueFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id",
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {},
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricValueFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ?
                {readonly [key in XAlias]?: string} :
                {readonly [key in XAlias]: string}
        ),
        TVariables & XDirectiveVariables
    >;

    readonly "~id": MetricValueFetcher<Omit<T, 'id'>, TVariables>;


    readonly value: MetricValueFetcher<T & {readonly "value"?: string}, TVariables>;

    "value+"<
        XAlias extends string = "value",
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"value", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: string},
        TVariables & XDirectiveVariables
    >;

    readonly "~value": MetricValueFetcher<Omit<T, 'value'>, TVariables>;


    year<
        X extends object,
        XVariables extends object
    >(
        child: ObjectFetcher<'Year', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "year"?: X},
        TVariables & XVariables & MetricValueArgs["year"]
    >;

    year<
        XArgs extends AcceptableVariables<MetricValueArgs['year']>,
        X extends object,
        XVariables extends object
    >(
        args: XArgs,
        child: ObjectFetcher<'Year', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "year"?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['year']>
    >;

    year<
        X extends object,
        XVariables extends object,
        XAlias extends string = "year",
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Year', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"year", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & MetricValueArgs["year"] & XDirectiveVariables
    >;

    year<
        XArgs extends AcceptableVariables<MetricValueArgs['year']>,
        X extends object,
        XVariables extends object,
        XAlias extends string = "year",
        XDirectiveVariables extends object = {}
    >(
        args: XArgs,
        child: ObjectFetcher<'Year', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"year", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['year']> & XDirectiveVariables
    >;


    region<
        X extends object,
        XVariables extends object
    >(
        child: ObjectFetcher<'Region', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "region"?: X},
        TVariables & XVariables & MetricValueArgs["region"]
    >;

    region<
        XArgs extends AcceptableVariables<MetricValueArgs['region']>,
        X extends object,
        XVariables extends object
    >(
        args: XArgs,
        child: ObjectFetcher<'Region', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "region"?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['region']>
    >;

    region<
        X extends object,
        XVariables extends object,
        XAlias extends string = "region",
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Region', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"region", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & MetricValueArgs["region"] & XDirectiveVariables
    >;

    region<
        XArgs extends AcceptableVariables<MetricValueArgs['region']>,
        X extends object,
        XVariables extends object,
        XAlias extends string = "region",
        XDirectiveVariables extends object = {}
    >(
        args: XArgs,
        child: ObjectFetcher<'Region', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"region", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['region']> & XDirectiveVariables
    >;


    industry<
        X extends object,
        XVariables extends object
    >(
        child: ObjectFetcher<'Industry', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "industry"?: X},
        TVariables & XVariables & MetricValueArgs["industry"]
    >;

    industry<
        XArgs extends AcceptableVariables<MetricValueArgs['industry']>,
        X extends object,
        XVariables extends object
    >(
        args: XArgs,
        child: ObjectFetcher<'Industry', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "industry"?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['industry']>
    >;

    industry<
        X extends object,
        XVariables extends object,
        XAlias extends string = "industry",
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Industry', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"industry", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & MetricValueArgs["industry"] & XDirectiveVariables
    >;

    industry<
        XArgs extends AcceptableVariables<MetricValueArgs['industry']>,
        X extends object,
        XVariables extends object,
        XAlias extends string = "industry",
        XDirectiveVariables extends object = {}
    >(
        args: XArgs,
        child: ObjectFetcher<'Industry', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"industry", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['industry']> & XDirectiveVariables
    >;


    metric<
        X extends object,
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "metric"?: X},
        TVariables & XVariables & MetricValueArgs["metric"]
    >;

    metric<
        XArgs extends AcceptableVariables<MetricValueArgs['metric']>,
        X extends object,
        XVariables extends object
    >(
        args: XArgs,
        child: ObjectFetcher<'Metric', X, XVariables>
    ): MetricValueFetcher<
        T & {readonly "metric"?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['metric']>
    >;

    metric<
        X extends object,
        XVariables extends object,
        XAlias extends string = "metric",
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Metric', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"metric", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & MetricValueArgs["metric"] & XDirectiveVariables
    >;

    metric<
        XArgs extends AcceptableVariables<MetricValueArgs['metric']>,
        X extends object,
        XVariables extends object,
        XAlias extends string = "metric",
        XDirectiveVariables extends object = {}
    >(
        args: XArgs,
        child: ObjectFetcher<'Metric', X, XVariables>,
        optionsConfigurer: (
            options: FieldOptions<"metric", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueFetcher<
        T & {readonly [key in XAlias]?: X},
        TVariables & XVariables & UnresolvedVariables<XArgs, MetricValueArgs['metric']> & XDirectiveVariables
    >;
}

export const metricValue$: MetricValueFetcher<{}, {}> =
    createFetcher(
        createFetchableType(
            "MetricValue",
            "OBJECT",
            [],
            [
                {
                    category: "REFERENCE",
                    name: "_meta",
                    targetTypeName: "MetricValueMeta",
                    undefinable: true
                },
                {
                    category: "ID",
                    name: "id"
                },
                {
                    category: "SCALAR",
                    name: "value",
                    undefinable: true
                },
                {
                    category: "REFERENCE",
                    name: "year",
                    argGraphQLTypeMap: {filter: 'YearWhere'},
                    targetTypeName: "Year",
                    undefinable: true
                },
                {
                    category: "REFERENCE",
                    name: "region",
                    argGraphQLTypeMap: {filter: 'RegionWhere'},
                    targetTypeName: "Region",
                    undefinable: true
                },
                {
                    category: "REFERENCE",
                    name: "industry",
                    argGraphQLTypeMap: {filter: 'IndustryWhere'},
                    targetTypeName: "Industry",
                    undefinable: true
                },
                {
                    category: "REFERENCE",
                    name: "metric",
                    argGraphQLTypeMap: {filter: 'MetricWhere'},
                    targetTypeName: "Metric",
                    undefinable: true
                }
            ]
        ),
        ENUM_INPUT_METADATA,
        undefined
    )
;

export const metricValue$$ =
    metricValue$
        .id
        .value
;

export interface MetricValueArgs {

    readonly year: {
        readonly filter?: YearWhere
    },

    readonly region: {
        readonly filter?: RegionWhere
    },

    readonly industry: {
        readonly filter?: IndustryWhere
    },

    readonly metric: {
        readonly filter?: MetricWhere
    }
}
