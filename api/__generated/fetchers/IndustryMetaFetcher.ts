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
export interface IndustryMetaFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'IndustryMeta', T, TVariables> {

    on<XName extends ImplementationType<'IndustryMeta'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): IndustryMetaFetcher<
        XName extends 'IndustryMeta' ?
        T & X :
        WithTypeName<T, ImplementationType<'IndustryMeta'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'IndustryMeta'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): IndustryMetaFetcher<T, TVariables>;


    readonly __typename: IndustryMetaFetcher<T & {__typename: ImplementationType<'IndustryMeta'>}, TVariables>;


    id<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): IndustryMetaFetcher<
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
    ): IndustryMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    name<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): IndustryMetaFetcher<
        T & {readonly "name"?: X}, 
        TVariables & XVariables
    >;

    name<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "name", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): IndustryMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): IndustryMetaFetcher<
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
    ): IndustryMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const industryMeta$: IndustryMetaFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "IndustryMeta", 
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
                    name: "name", 
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
