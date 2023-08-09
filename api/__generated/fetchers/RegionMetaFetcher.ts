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
export interface RegionMetaFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'RegionMeta', T, TVariables> {

    on<XName extends ImplementationType<'RegionMeta'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): RegionMetaFetcher<
        XName extends 'RegionMeta' ?
        T & X :
        WithTypeName<T, ImplementationType<'RegionMeta'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'RegionMeta'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): RegionMetaFetcher<T, TVariables>;


    readonly __typename: RegionMetaFetcher<T & {__typename: ImplementationType<'RegionMeta'>}, TVariables>;


    id<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): RegionMetaFetcher<
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
    ): RegionMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    region<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): RegionMetaFetcher<
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
    ): RegionMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): RegionMetaFetcher<
        T & {readonly "metricValues"?: X}, 
        TVariables & XVariables
    >;

    metricValues<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "metricValues", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"metricValues", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): RegionMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const regionMeta$: RegionMetaFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "RegionMeta", 
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
                    name: "region", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "metricValues", 
                    targetTypeName: "FieldMeta", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;
