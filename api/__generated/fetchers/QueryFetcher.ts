import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher, ConnectionFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
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
export interface QueryFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Query', T, TVariables> {


    directive(name: string, args?: DirectiveArgs): QueryFetcher<T, TVariables>;


    getMetric<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getMetric"?: X}, 
        TVariables & XVariables & QueryArgs["getMetric"]
    >;

    getMetric<
        XArgs extends AcceptableVariables<QueryArgs['getMetric']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getMetric"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getMetric']>
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["getMetric"] & XDirectiveVariables
    >;

    getMetric<
        XArgs extends AcceptableVariables<QueryArgs['getMetric']>, 
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getMetric']> & XDirectiveVariables
    >;


    listMetric<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listMetric": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryArgs["listMetric"]
    >;

    listMetric<
        XArgs extends AcceptableVariables<QueryArgs['listMetric']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Metric', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listMetric": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listMetric']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryArgs["listMetric"] & XDirectiveVariables
    >;

    listMetric<
        XArgs extends AcceptableVariables<QueryArgs['listMetric']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listMetric']> & XDirectiveVariables
    >;


    paginateMetric<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateMetric": X}, 
        TVariables & XVariables & QueryArgs["paginateMetric"]
    >;

    paginateMetric<
        XArgs extends AcceptableVariables<QueryArgs['paginateMetric']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateMetric": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateMetric']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryArgs["paginateMetric"] & XDirectiveVariables
    >;

    paginateMetric<
        XArgs extends AcceptableVariables<QueryArgs['paginateMetric']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateMetric']> & XDirectiveVariables
    >;


    getMetricValue<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getMetricValue"?: X}, 
        TVariables & XVariables & QueryArgs["getMetricValue"]
    >;

    getMetricValue<
        XArgs extends AcceptableVariables<QueryArgs['getMetricValue']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getMetricValue"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getMetricValue']>
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["getMetricValue"] & XDirectiveVariables
    >;

    getMetricValue<
        XArgs extends AcceptableVariables<QueryArgs['getMetricValue']>, 
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getMetricValue']> & XDirectiveVariables
    >;


    listMetricValue<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listMetricValue": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryArgs["listMetricValue"]
    >;

    listMetricValue<
        XArgs extends AcceptableVariables<QueryArgs['listMetricValue']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'MetricValue', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listMetricValue": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listMetricValue']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryArgs["listMetricValue"] & XDirectiveVariables
    >;

    listMetricValue<
        XArgs extends AcceptableVariables<QueryArgs['listMetricValue']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listMetricValue']> & XDirectiveVariables
    >;


    paginateMetricValue<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateMetricValue": X}, 
        TVariables & XVariables & QueryArgs["paginateMetricValue"]
    >;

    paginateMetricValue<
        XArgs extends AcceptableVariables<QueryArgs['paginateMetricValue']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'MetricValueConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateMetricValue": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateMetricValue']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryArgs["paginateMetricValue"] & XDirectiveVariables
    >;

    paginateMetricValue<
        XArgs extends AcceptableVariables<QueryArgs['paginateMetricValue']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateMetricValue']> & XDirectiveVariables
    >;


    getYear<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getYear"?: X}, 
        TVariables & XVariables & QueryArgs["getYear"]
    >;

    getYear<
        XArgs extends AcceptableVariables<QueryArgs['getYear']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getYear"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getYear']>
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["getYear"] & XDirectiveVariables
    >;

    getYear<
        XArgs extends AcceptableVariables<QueryArgs['getYear']>, 
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getYear']> & XDirectiveVariables
    >;


    listYear<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listYear": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryArgs["listYear"]
    >;

    listYear<
        XArgs extends AcceptableVariables<QueryArgs['listYear']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Year', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listYear": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listYear']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryArgs["listYear"] & XDirectiveVariables
    >;

    listYear<
        XArgs extends AcceptableVariables<QueryArgs['listYear']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listYear']> & XDirectiveVariables
    >;


    paginateYear<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'YearConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateYear": X}, 
        TVariables & XVariables & QueryArgs["paginateYear"]
    >;

    paginateYear<
        XArgs extends AcceptableVariables<QueryArgs['paginateYear']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'YearConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateYear": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateYear']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryArgs["paginateYear"] & XDirectiveVariables
    >;

    paginateYear<
        XArgs extends AcceptableVariables<QueryArgs['paginateYear']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateYear']> & XDirectiveVariables
    >;


    getRegion<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getRegion"?: X}, 
        TVariables & XVariables & QueryArgs["getRegion"]
    >;

    getRegion<
        XArgs extends AcceptableVariables<QueryArgs['getRegion']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getRegion"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getRegion']>
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["getRegion"] & XDirectiveVariables
    >;

    getRegion<
        XArgs extends AcceptableVariables<QueryArgs['getRegion']>, 
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getRegion']> & XDirectiveVariables
    >;


    listRegion<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listRegion": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryArgs["listRegion"]
    >;

    listRegion<
        XArgs extends AcceptableVariables<QueryArgs['listRegion']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Region', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listRegion": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listRegion']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryArgs["listRegion"] & XDirectiveVariables
    >;

    listRegion<
        XArgs extends AcceptableVariables<QueryArgs['listRegion']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listRegion']> & XDirectiveVariables
    >;


    paginateRegion<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'RegionConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateRegion": X}, 
        TVariables & XVariables & QueryArgs["paginateRegion"]
    >;

    paginateRegion<
        XArgs extends AcceptableVariables<QueryArgs['paginateRegion']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'RegionConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateRegion": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateRegion']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryArgs["paginateRegion"] & XDirectiveVariables
    >;

    paginateRegion<
        XArgs extends AcceptableVariables<QueryArgs['paginateRegion']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateRegion']> & XDirectiveVariables
    >;


    getIndustry<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getIndustry"?: X}, 
        TVariables & XVariables & QueryArgs["getIndustry"]
    >;

    getIndustry<
        XArgs extends AcceptableVariables<QueryArgs['getIndustry']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getIndustry"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getIndustry']>
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["getIndustry"] & XDirectiveVariables
    >;

    getIndustry<
        XArgs extends AcceptableVariables<QueryArgs['getIndustry']>, 
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getIndustry']> & XDirectiveVariables
    >;


    listIndustry<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listIndustry": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryArgs["listIndustry"]
    >;

    listIndustry<
        XArgs extends AcceptableVariables<QueryArgs['listIndustry']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Industry', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listIndustry": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listIndustry']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryArgs["listIndustry"] & XDirectiveVariables
    >;

    listIndustry<
        XArgs extends AcceptableVariables<QueryArgs['listIndustry']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listIndustry']> & XDirectiveVariables
    >;


    paginateIndustry<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'IndustryConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateIndustry": X}, 
        TVariables & XVariables & QueryArgs["paginateIndustry"]
    >;

    paginateIndustry<
        XArgs extends AcceptableVariables<QueryArgs['paginateIndustry']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'IndustryConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateIndustry": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateIndustry']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryArgs["paginateIndustry"] & XDirectiveVariables
    >;

    paginateIndustry<
        XArgs extends AcceptableVariables<QueryArgs['paginateIndustry']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateIndustry']> & XDirectiveVariables
    >;


    getCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getCategory"?: X}, 
        TVariables & XVariables & QueryArgs["getCategory"]
    >;

    getCategory<
        XArgs extends AcceptableVariables<QueryArgs['getCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryFetcher<
        T & {readonly "getCategory"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getCategory']>
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["getCategory"] & XDirectiveVariables
    >;

    getCategory<
        XArgs extends AcceptableVariables<QueryArgs['getCategory']>, 
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
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['getCategory']> & XDirectiveVariables
    >;


    listCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listCategory": ReadonlyArray<X>}, 
        TVariables & XVariables & QueryArgs["listCategory"]
    >;

    listCategory<
        XArgs extends AcceptableVariables<QueryArgs['listCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Category', X, XVariables>
    ): QueryFetcher<
        T & {readonly "listCategory": ReadonlyArray<X>}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listCategory']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & QueryArgs["listCategory"] & XDirectiveVariables
    >;

    listCategory<
        XArgs extends AcceptableVariables<QueryArgs['listCategory']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['listCategory']> & XDirectiveVariables
    >;


    paginateCategory<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateCategory": X}, 
        TVariables & XVariables & QueryArgs["paginateCategory"]
    >;

    paginateCategory<
        XArgs extends AcceptableVariables<QueryArgs['paginateCategory']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ConnectionFetcher<'CategoryConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "paginateCategory": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateCategory']>
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & QueryArgs["paginateCategory"] & XDirectiveVariables
    >;

    paginateCategory<
        XArgs extends AcceptableVariables<QueryArgs['paginateCategory']>, 
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
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['paginateCategory']> & XDirectiveVariables
    >;


    transaction<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'QueryTransaction', X, XVariables>
    ): QueryFetcher<
        T & {readonly "transaction"?: X}, 
        TVariables & XVariables
    >;

    transaction<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "transaction", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'QueryTransaction', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"transaction", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    _info<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Info', X, XVariables>
    ): QueryFetcher<
        T & {readonly "_info"?: X}, 
        TVariables & XVariables
    >;

    _info<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "_info", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Info', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"_info", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    schema<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Schema', X, XVariables>
    ): QueryFetcher<
        T & {readonly "schema"?: X}, 
        TVariables & XVariables
    >;

    schema<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "schema", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Schema', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"schema", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly s3DummyQuery: QueryFetcher<T & {readonly "s3DummyQuery"?: string}, TVariables>;

    "s3DummyQuery+"<
        XAlias extends string = "s3DummyQuery", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"s3DummyQuery", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~s3DummyQuery": QueryFetcher<Omit<T, 's3DummyQuery'>, TVariables>;
}

export const query$: QueryFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Query", 
            "OBJECT", 
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
                }, 
                {
                    category: "SCALAR", 
                    name: "transaction", 
                    targetTypeName: "QueryTransaction", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "_info", 
                    targetTypeName: "Info", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "schema", 
                    targetTypeName: "_Schema", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "s3DummyQuery", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export interface QueryArgs {

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
