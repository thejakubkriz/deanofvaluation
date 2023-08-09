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
export interface _EnumFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Enum', T, TVariables> {

    on<XName extends ImplementationType<'_Enum'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _EnumFetcher<
        XName extends '_Enum' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Enum'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Enum'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _EnumFetcher<T, TVariables>;


    readonly __typename: _EnumFetcher<T & {__typename: ImplementationType<'_Enum'>}, TVariables>;


    readonly name: _EnumFetcher<T & {readonly "name": string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _EnumFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": _EnumFetcher<Omit<T, 'name'>, TVariables>;


    readonly values: _EnumFetcher<T & {readonly "values": ReadonlyArray<string>}, TVariables>;

    "values+"<
        XAlias extends string = "values", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"values", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _EnumFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<string>} : 
                {readonly [key in XAlias]: ReadonlyArray<string>}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~values": _EnumFetcher<Omit<T, 'values'>, TVariables>;
}

export const _Enum$: _EnumFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Enum", 
            "EMBEDDED", 
            [], 
            [
                "name", 
                "values"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Enum$$ = 
    _Enum$
        .name
        .values
;
