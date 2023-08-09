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
export interface _SchemaFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Schema', T, TVariables> {

    on<XName extends ImplementationType<'_Schema'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _SchemaFetcher<
        XName extends '_Schema' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Schema'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Schema'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _SchemaFetcher<T, TVariables>;


    readonly __typename: _SchemaFetcher<T & {__typename: ImplementationType<'_Schema'>}, TVariables>;


    enums<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Enum', X, XVariables>
    ): _SchemaFetcher<
        T & {readonly "enums": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    enums<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "enums", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Enum', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"enums", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _SchemaFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    entities<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Entity', X, XVariables>
    ): _SchemaFetcher<
        T & {readonly "entities": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    entities<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "entities", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Entity', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"entities", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _SchemaFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const _Schema$: _SchemaFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Schema", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "LIST", 
                    name: "enums", 
                    targetTypeName: "_Enum"
                }, 
                {
                    category: "LIST", 
                    name: "entities", 
                    targetTypeName: "_Entity"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;
