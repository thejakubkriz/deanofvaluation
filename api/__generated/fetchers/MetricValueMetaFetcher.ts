import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface MetricValueMetaFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'MetricValueMeta', T, TVariables> {

    on<XName extends ImplementationType<'MetricValueMeta'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): MetricValueMetaFetcher<
        XName extends 'MetricValueMeta' ?
        T & X :
        WithTypeName<T, ImplementationType<'MetricValueMeta'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'MetricValueMeta'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): MetricValueMetaFetcher<T, TVariables>;


    readonly __typename: MetricValueMetaFetcher<T & {__typename: ImplementationType<'MetricValueMeta'>}, TVariables>;


    id<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): MetricValueMetaFetcher<
        T & {readonly "id"?: X}, 
        TVariables & XVariables
    >;

    id<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "id", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    value<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): MetricValueMetaFetcher<
        T & {readonly "value"?: X}, 
        TVariables & XVariables
    >;

    value<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "value", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"value", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    year<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): MetricValueMetaFetcher<
        T & {readonly "year"?: X}, 
        TVariables & XVariables
    >;

    year<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "year", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"year", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    region<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): MetricValueMetaFetcher<
        T & {readonly "region"?: X}, 
        TVariables & XVariables
    >;

    region<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "region", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"region", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    industry<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): MetricValueMetaFetcher<
        T & {readonly "industry"?: X}, 
        TVariables & XVariables
    >;

    industry<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "industry", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"industry", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    metric<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): MetricValueMetaFetcher<
        T & {readonly "metric"?: X}, 
        TVariables & XVariables
    >;

    metric<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "metric", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"metric", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MetricValueMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const metricValueMeta$: MetricValueMetaFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "MetricValueMeta", 
            "OBJECT", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "id", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "value", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "year", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "region", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "industry", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "metric", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;
