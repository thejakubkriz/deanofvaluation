import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import { _Argument$ } from './_ArgumentFetcher';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface _ValidatorArgumentFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_ValidatorArgument', T, TVariables> {

    on<XName extends ImplementationType<'_ValidatorArgument'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _ValidatorArgumentFetcher<
        XName extends '_ValidatorArgument' ?
        T & X :
        WithTypeName<T, ImplementationType<'_ValidatorArgument'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_ValidatorArgument'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _ValidatorArgumentFetcher<T, TVariables>;


    readonly __typename: _ValidatorArgumentFetcher<T & {__typename: ImplementationType<'_ValidatorArgument'>}, TVariables>;


    readonly validator: _ValidatorArgumentFetcher<T & {readonly "validator": number}, TVariables>;

    "validator+"<
        XAlias extends string = "validator", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"validator", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _ValidatorArgumentFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: number} : 
                {readonly [key in XAlias]: number}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~validator": _ValidatorArgumentFetcher<Omit<T, 'validator'>, TVariables>;
}

export const _ValidatorArgument$: _ValidatorArgumentFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_ValidatorArgument", 
            "EMBEDDED", 
            [_Argument$.fetchableType], 
            [
                "validator"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _ValidatorArgument$$ = 
    _ValidatorArgument$
        .validator
;
