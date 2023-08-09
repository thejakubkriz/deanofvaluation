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
export interface YearMetaFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'YearMeta', T, TVariables> {

    on<XName extends ImplementationType<'YearMeta'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): YearMetaFetcher<
        XName extends 'YearMeta' ?
        T & X :
        WithTypeName<T, ImplementationType<'YearMeta'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'YearMeta'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): YearMetaFetcher<T, TVariables>;


    readonly __typename: YearMetaFetcher<T & {__typename: ImplementationType<'YearMeta'>}, TVariables>;


    id<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): YearMetaFetcher<
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
    ): YearMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    dateUpdated<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): YearMetaFetcher<
        T & {readonly "dateUpdated"?: X}, 
        TVariables & XVariables
    >;

    dateUpdated<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "dateUpdated", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"dateUpdated", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): YearMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    metricValues<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'FieldMeta', X, XVariables>
    ): YearMetaFetcher<
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
    ): YearMetaFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const yearMeta$: YearMetaFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "YearMeta", 
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
                    name: "dateUpdated", 
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
