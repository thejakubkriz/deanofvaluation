import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher, ConnectionFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import type {MetricUniqueWhere} from '../inputs';
import type {MetricWhere} from '../inputs';
import type {MetricOrderBy} from '../inputs';
import type {MetricValueUniqueWhere} from '../inputs';
import type {MetricValueWhere} from '../inputs';
import type {MetricValueOrderBy} from '../inputs';
import type {YearUniqueWhere} from '../inputs';
import type {YearWhere} from '../inputs';
import type {YearOrderBy} from '../inputs';
import type {RegionUniqueWhere} from '../inputs';
import type {RegionWhere} from '../inputs';
import type {RegionOrderBy} from '../inputs';
import type {IndustryUniqueWhere} from '../inputs';
import type {IndustryWhere} from '../inputs';
import type {IndustryOrderBy} from '../inputs';
import type {CategoryUniqueWhere} from '../inputs';
import type {CategoryWhere} from '../inputs';
import type {CategoryOrderBy} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface QueryTransactionFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'QueryTransaction', T, TVariables> {

    on<XName extends ImplementationType<'QueryTransaction'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): QueryTransactionFetcher<
        XName extends 'QueryTransaction' ?
        T & X :
        WithTypeName<T, ImplementationType<'QueryTransaction'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'QueryTransaction'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): QueryTransactionFetcher<T, TVariables>;


    readonly __typename: QueryTransactionFetcher<T & {__typename: ImplementationType<'QueryTransaction'>}, TVariables>;


    getMetric<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getMetric"?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getMetric"]
    >;

    getMetric<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getMetric']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getMetric"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getMetric']>
    >;

    getMetric<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getMetric", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getMetric", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getMetric"] & XDirectiveVariables
    >;

    getMetric<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getMetric']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getMetric", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getMetric", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getMetric']> & XDirectiveVariables
    >;


    listMetric<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listMetric": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryTransactionArgs["listMetric"]
    >;

    listMetric<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listMetric']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listMetric": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listMetric']>
    >;

    listMetric<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listMetric", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listMetric", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryTransactionArgs["listMetric"] & XDirectiveVariables
    >;

    listMetric<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listMetric']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listMetric", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listMetric", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listMetric']> & XDirectiveVariables
    >;


    paginateMetric<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateMetric": X}, 
        TVariables & XVariables & QueryTransactionArgs["paginateMetric"]
    >;

    paginateMetric<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateMetric']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateMetric": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateMetric']>
    >;

    paginateMetric<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetric", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'MetricConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetric", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryTransactionArgs["paginateMetric"] & XDirectiveVariables
    >;

    paginateMetric<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateMetric']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetric", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetric", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateMetric']> & XDirectiveVariables
    >;


    getMetricValue<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getMetricValue"?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getMetricValue"]
    >;

    getMetricValue<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getMetricValue']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getMetricValue"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getMetricValue']>
    >;

    getMetricValue<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getMetricValue", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getMetricValue", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getMetricValue"] & XDirectiveVariables
    >;

    getMetricValue<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getMetricValue']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getMetricValue", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getMetricValue", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getMetricValue']> & XDirectiveVariables
    >;


    listMetricValue<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listMetricValue": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryTransactionArgs["listMetricValue"]
    >;

    listMetricValue<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listMetricValue']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listMetricValue": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listMetricValue']>
    >;

    listMetricValue<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listMetricValue", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listMetricValue", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryTransactionArgs["listMetricValue"] & XDirectiveVariables
    >;

    listMetricValue<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listMetricValue']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listMetricValue", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listMetricValue", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listMetricValue']> & XDirectiveVariables
    >;


    paginateMetricValue<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateMetricValue": X}, 
        TVariables & XVariables & QueryTransactionArgs["paginateMetricValue"]
    >;

    paginateMetricValue<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateMetricValue']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateMetricValue": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateMetricValue']>
    >;

    paginateMetricValue<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetricValue", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetricValue", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryTransactionArgs["paginateMetricValue"] & XDirectiveVariables
    >;

    paginateMetricValue<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateMetricValue']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateMetricValue", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateMetricValue", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateMetricValue']> & XDirectiveVariables
    >;


    getYear<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getYear"?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getYear"]
    >;

    getYear<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getYear']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getYear"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getYear']>
    >;

    getYear<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getYear", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Year', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getYear", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getYear"] & XDirectiveVariables
    >;

    getYear<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getYear']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getYear", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Year', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getYear", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getYear']> & XDirectiveVariables
    >;


    listYear<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listYear": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryTransactionArgs["listYear"]
    >;

    listYear<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listYear']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listYear": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listYear']>
    >;

    listYear<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listYear", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Year', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listYear", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryTransactionArgs["listYear"] & XDirectiveVariables
    >;

    listYear<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listYear']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listYear", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Year', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listYear", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listYear']> & XDirectiveVariables
    >;


    paginateYear<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'YearConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateYear": X}, 
        TVariables & XVariables & QueryTransactionArgs["paginateYear"]
    >;

    paginateYear<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateYear']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'YearConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateYear": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateYear']>
    >;

    paginateYear<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateYear", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'YearConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateYear", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryTransactionArgs["paginateYear"] & XDirectiveVariables
    >;

    paginateYear<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateYear']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateYear", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'YearConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateYear", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateYear']> & XDirectiveVariables
    >;


    getRegion<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getRegion"?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getRegion"]
    >;

    getRegion<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getRegion']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getRegion"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getRegion']>
    >;

    getRegion<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getRegion", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Region', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getRegion", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getRegion"] & XDirectiveVariables
    >;

    getRegion<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getRegion']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getRegion", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Region', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getRegion", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getRegion']> & XDirectiveVariables
    >;


    listRegion<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listRegion": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryTransactionArgs["listRegion"]
    >;

    listRegion<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listRegion']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listRegion": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listRegion']>
    >;

    listRegion<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listRegion", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Region', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listRegion", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryTransactionArgs["listRegion"] & XDirectiveVariables
    >;

    listRegion<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listRegion']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listRegion", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Region', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listRegion", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listRegion']> & XDirectiveVariables
    >;


    paginateRegion<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'RegionConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateRegion": X}, 
        TVariables & XVariables & QueryTransactionArgs["paginateRegion"]
    >;

    paginateRegion<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateRegion']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'RegionConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateRegion": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateRegion']>
    >;

    paginateRegion<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateRegion", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'RegionConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateRegion", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryTransactionArgs["paginateRegion"] & XDirectiveVariables
    >;

    paginateRegion<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateRegion']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateRegion", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'RegionConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateRegion", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateRegion']> & XDirectiveVariables
    >;


    getIndustry<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getIndustry"?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getIndustry"]
    >;

    getIndustry<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getIndustry']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getIndustry"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getIndustry']>
    >;

    getIndustry<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getIndustry", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Industry', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getIndustry", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getIndustry"] & XDirectiveVariables
    >;

    getIndustry<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getIndustry']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getIndustry", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Industry', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getIndustry", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getIndustry']> & XDirectiveVariables
    >;


    listIndustry<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listIndustry": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryTransactionArgs["listIndustry"]
    >;

    listIndustry<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listIndustry']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listIndustry": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listIndustry']>
    >;

    listIndustry<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listIndustry", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Industry', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listIndustry", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryTransactionArgs["listIndustry"] & XDirectiveVariables
    >;

    listIndustry<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listIndustry']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listIndustry", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Industry', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listIndustry", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listIndustry']> & XDirectiveVariables
    >;


    paginateIndustry<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'IndustryConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateIndustry": X}, 
        TVariables & XVariables & QueryTransactionArgs["paginateIndustry"]
    >;

    paginateIndustry<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateIndustry']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'IndustryConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateIndustry": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateIndustry']>
    >;

    paginateIndustry<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateIndustry", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'IndustryConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateIndustry", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryTransactionArgs["paginateIndustry"] & XDirectiveVariables
    >;

    paginateIndustry<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateIndustry']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "paginateIndustry", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ConnectionFetcher<'IndustryConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"paginateIndustry", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateIndustry']> & XDirectiveVariables
    >;


    getCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getCategory"?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getCategory"]
    >;

    getCategory<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "getCategory"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getCategory']>
    >;

    getCategory<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getCategory", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Category', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getCategory", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryTransactionArgs["getCategory"] & XDirectiveVariables
    >;

    getCategory<
        XArgs extends AcceptableVariables<QueryTransactionArgs['getCategory']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "getCategory", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"getCategory", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['getCategory']> & XDirectiveVariables
    >;


    listCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listCategory": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryTransactionArgs["listCategory"]
    >;

    listCategory<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "listCategory": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listCategory']>
    >;

    listCategory<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listCategory", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Category', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listCategory", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryTransactionArgs["listCategory"] & XDirectiveVariables
    >;

    listCategory<
        XArgs extends AcceptableVariables<QueryTransactionArgs['listCategory']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "listCategory", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"listCategory", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['listCategory']> & XDirectiveVariables
    >;


    paginateCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateCategory": X}, 
        TVariables & XVariables & QueryTransactionArgs["paginateCategory"]
    >;

    paginateCategory<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>
    ): QueryTransactionFetcher<
        T & {readonly "paginateCategory": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateCategory']>
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
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryTransactionArgs["paginateCategory"] & XDirectiveVariables
    >;

    paginateCategory<
        XArgs extends AcceptableVariables<QueryTransactionArgs['paginateCategory']>, 
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
    ): QueryTransactionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryTransactionArgs['paginateCategory']> & XDirectiveVariables
    >;
}

export const queryTransaction$: QueryTransactionFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "QueryTransaction", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "getMetric", 
                    argGraphQLTypeMap: {
                        by: 'MetricUniqueWhere!', 
                        filter: 'MetricWhere'
                    }, 
                    targetTypeName: "Metric", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "listMetric", 
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
                    name: "paginateMetric", 
                    argGraphQLTypeMap: {
                        filter: 'MetricWhere', 
                        orderBy: '[MetricOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "MetricConnection", 
                    edgeTypeName: "MetricEdge", 
                    targetTypeName: "Metric"
                }, 
                {
                    category: "REFERENCE", 
                    name: "getMetricValue", 
                    argGraphQLTypeMap: {
                        by: 'MetricValueUniqueWhere!', 
                        filter: 'MetricValueWhere'
                    }, 
                    targetTypeName: "MetricValue", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "listMetricValue", 
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
                    name: "paginateMetricValue", 
                    argGraphQLTypeMap: {
                        filter: 'MetricValueWhere', 
                        orderBy: '[MetricValueOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "MetricValueConnection", 
                    edgeTypeName: "MetricValueEdge", 
                    targetTypeName: "MetricValue"
                }, 
                {
                    category: "REFERENCE", 
                    name: "getYear", 
                    argGraphQLTypeMap: {
                        by: 'YearUniqueWhere!', 
                        filter: 'YearWhere'
                    }, 
                    targetTypeName: "Year", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "listYear", 
                    argGraphQLTypeMap: {
                        filter: 'YearWhere', 
                        orderBy: '[YearOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "Year"
                }, 
                {
                    category: "CONNECTION", 
                    name: "paginateYear", 
                    argGraphQLTypeMap: {
                        filter: 'YearWhere', 
                        orderBy: '[YearOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "YearConnection", 
                    edgeTypeName: "YearEdge", 
                    targetTypeName: "Year"
                }, 
                {
                    category: "REFERENCE", 
                    name: "getRegion", 
                    argGraphQLTypeMap: {
                        by: 'RegionUniqueWhere!', 
                        filter: 'RegionWhere'
                    }, 
                    targetTypeName: "Region", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "listRegion", 
                    argGraphQLTypeMap: {
                        filter: 'RegionWhere', 
                        orderBy: '[RegionOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "Region"
                }, 
                {
                    category: "CONNECTION", 
                    name: "paginateRegion", 
                    argGraphQLTypeMap: {
                        filter: 'RegionWhere', 
                        orderBy: '[RegionOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "RegionConnection", 
                    edgeTypeName: "RegionEdge", 
                    targetTypeName: "Region"
                }, 
                {
                    category: "REFERENCE", 
                    name: "getIndustry", 
                    argGraphQLTypeMap: {
                        by: 'IndustryUniqueWhere!', 
                        filter: 'IndustryWhere'
                    }, 
                    targetTypeName: "Industry", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "listIndustry", 
                    argGraphQLTypeMap: {
                        filter: 'IndustryWhere', 
                        orderBy: '[IndustryOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "Industry"
                }, 
                {
                    category: "CONNECTION", 
                    name: "paginateIndustry", 
                    argGraphQLTypeMap: {
                        filter: 'IndustryWhere', 
                        orderBy: '[IndustryOrderBy!]', 
                        skip: 'Int', 
                        first: 'Int'
                    }, 
                    connectionTypeName: "IndustryConnection", 
                    edgeTypeName: "IndustryEdge", 
                    targetTypeName: "Industry"
                }, 
                {
                    category: "REFERENCE", 
                    name: "getCategory", 
                    argGraphQLTypeMap: {
                        by: 'CategoryUniqueWhere!', 
                        filter: 'CategoryWhere'
                    }, 
                    targetTypeName: "Category", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "listCategory", 
                    argGraphQLTypeMap: {
                        filter: 'CategoryWhere', 
                        orderBy: '[CategoryOrderBy!]', 
                        offset: 'Int', 
                        limit: 'Int'
                    }, 
                    targetTypeName: "Category"
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
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export interface QueryTransactionArgs {

    readonly getMetric: {
        readonly by: MetricUniqueWhere, 
        readonly filter?: MetricWhere
    }, 

    readonly listMetric: {
        readonly filter?: MetricWhere, 
        readonly orderBy?: ReadonlyArray<MetricOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateMetric: {
        readonly filter?: MetricWhere, 
        readonly orderBy?: ReadonlyArray<MetricOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }, 

    readonly getMetricValue: {
        readonly by: MetricValueUniqueWhere, 
        readonly filter?: MetricValueWhere
    }, 

    readonly listMetricValue: {
        readonly filter?: MetricValueWhere, 
        readonly orderBy?: ReadonlyArray<MetricValueOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateMetricValue: {
        readonly filter?: MetricValueWhere, 
        readonly orderBy?: ReadonlyArray<MetricValueOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }, 

    readonly getYear: {
        readonly by: YearUniqueWhere, 
        readonly filter?: YearWhere
    }, 

    readonly listYear: {
        readonly filter?: YearWhere, 
        readonly orderBy?: ReadonlyArray<YearOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateYear: {
        readonly filter?: YearWhere, 
        readonly orderBy?: ReadonlyArray<YearOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }, 

    readonly getRegion: {
        readonly by: RegionUniqueWhere, 
        readonly filter?: RegionWhere
    }, 

    readonly listRegion: {
        readonly filter?: RegionWhere, 
        readonly orderBy?: ReadonlyArray<RegionOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateRegion: {
        readonly filter?: RegionWhere, 
        readonly orderBy?: ReadonlyArray<RegionOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }, 

    readonly getIndustry: {
        readonly by: IndustryUniqueWhere, 
        readonly filter?: IndustryWhere
    }, 

    readonly listIndustry: {
        readonly filter?: IndustryWhere, 
        readonly orderBy?: ReadonlyArray<IndustryOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateIndustry: {
        readonly filter?: IndustryWhere, 
        readonly orderBy?: ReadonlyArray<IndustryOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }, 

    readonly getCategory: {
        readonly by: CategoryUniqueWhere, 
        readonly filter?: CategoryWhere
    }, 

    readonly listCategory: {
        readonly filter?: CategoryWhere, 
        readonly orderBy?: ReadonlyArray<CategoryOrderBy>, 
        readonly offset?: number, 
        readonly limit?: number
    }, 

    readonly paginateCategory: {
        readonly filter?: CategoryWhere, 
        readonly orderBy?: ReadonlyArray<CategoryOrderBy>, 
        readonly skip?: number, 
        readonly first?: number
    }
}
