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
export interface _LiteralArgumentFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_LiteralArgument', T, TVariables> {

    on<XName extends ImplementationType<'_LiteralArgument'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _LiteralArgumentFetcher<
        XName extends '_LiteralArgument' ?
        T & X :
        WithTypeName<T, ImplementationType<'_LiteralArgument'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_LiteralArgument'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _LiteralArgumentFetcher<T, TVariables>;


    readonly __typename: _LiteralArgumentFetcher<T & {__typename: ImplementationType<'_LiteralArgument'>}, TVariables>;


    readonly value: _LiteralArgumentFetcher<T & {readonly "value"?: any}, TVariables>;

    "value+"<
        XAlias extends string = "value", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"value", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _LiteralArgumentFetcher<
        T & {readonly [key in XAlias]?: any}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~value": _LiteralArgumentFetcher<Omit<T, 'value'>, TVariables>;
}

export const _LiteralArgument$: _LiteralArgumentFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_LiteralArgument", 
            "EMBEDDED", 
            [_Argument$.fetchableType], 
            [
                {
                    category: "SCALAR", 
                    name: "value", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _LiteralArgument$$ = 
    _LiteralArgument$
        .value
;
