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
export interface _ValidatorFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Validator', T, TVariables> {

    on<XName extends ImplementationType<'_Validator'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _ValidatorFetcher<
        XName extends '_Validator' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Validator'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Validator'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _ValidatorFetcher<T, TVariables>;


    readonly __typename: _ValidatorFetcher<T & {__typename: ImplementationType<'_Validator'>}, TVariables>;


    readonly operation: _ValidatorFetcher<T & {readonly "operation": string}, TVariables>;

    "operation+"<
        XAlias extends string = "operation", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"operation", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _ValidatorFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~operation": _ValidatorFetcher<Omit<T, 'operation'>, TVariables>;


    arguments<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Argument', X, XVariables>
    ): _ValidatorFetcher<
        T & {readonly "arguments": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    arguments<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "arguments", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Argument', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"arguments", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _ValidatorFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const _Validator$: _ValidatorFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Validator", 
            "EMBEDDED", 
            [], 
            [
                "operation", 
                {
                    category: "LIST", 
                    name: "arguments", 
                    targetTypeName: "_Argument"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Validator$$ = 
    _Validator$
        .operation
;
