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
export interface _RuleMessageFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_RuleMessage', T, TVariables> {

    on<XName extends ImplementationType<'_RuleMessage'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _RuleMessageFetcher<
        XName extends '_RuleMessage' ?
        T & X :
        WithTypeName<T, ImplementationType<'_RuleMessage'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_RuleMessage'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _RuleMessageFetcher<T, TVariables>;


    readonly __typename: _RuleMessageFetcher<T & {__typename: ImplementationType<'_RuleMessage'>}, TVariables>;


    readonly text: _RuleMessageFetcher<T & {readonly "text"?: string}, TVariables>;

    "text+"<
        XAlias extends string = "text", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"text", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RuleMessageFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~text": _RuleMessageFetcher<Omit<T, 'text'>, TVariables>;
}

export const _RuleMessage$: _RuleMessageFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_RuleMessage", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "text", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _RuleMessage$$ = 
    _RuleMessage$
        .text
;
