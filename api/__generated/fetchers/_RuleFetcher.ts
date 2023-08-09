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
export interface _RuleFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Rule', T, TVariables> {

    on<XName extends ImplementationType<'_Rule'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _RuleFetcher<
        XName extends '_Rule' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Rule'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Rule'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _RuleFetcher<T, TVariables>;


    readonly __typename: _RuleFetcher<T & {__typename: ImplementationType<'_Rule'>}, TVariables>;


    message<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_RuleMessage', X, XVariables>
    ): _RuleFetcher<
        T & {readonly "message"?: X}, 
        TVariables & XVariables
    >;

    message<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "message", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_RuleMessage', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"message", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RuleFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly validator: _RuleFetcher<T & {readonly "validator": number}, TVariables>;

    "validator+"<
        XAlias extends string = "validator", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"validator", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _RuleFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: number} : 
                {readonly [key in XAlias]: number}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~validator": _RuleFetcher<Omit<T, 'validator'>, TVariables>;
}

export const _Rule$: _RuleFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Rule", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "message", 
                    targetTypeName: "_RuleMessage", 
                    undefinable: true
                }, 
                "validator"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Rule$$ = 
    _Rule$
        .validator
;
