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
export interface _UniqueConstraintFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_UniqueConstraint', T, TVariables> {

    on<XName extends ImplementationType<'_UniqueConstraint'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _UniqueConstraintFetcher<
        XName extends '_UniqueConstraint' ?
        T & X :
        WithTypeName<T, ImplementationType<'_UniqueConstraint'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_UniqueConstraint'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _UniqueConstraintFetcher<T, TVariables>;


    readonly __typename: _UniqueConstraintFetcher<T & {__typename: ImplementationType<'_UniqueConstraint'>}, TVariables>;


    readonly fields: _UniqueConstraintFetcher<T & {readonly "fields": ReadonlyArray<string>}, TVariables>;

    "fields+"<
        XAlias extends string = "fields", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"fields", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _UniqueConstraintFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<string>} : 
                {readonly [key in XAlias]: ReadonlyArray<string>}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~fields": _UniqueConstraintFetcher<Omit<T, 'fields'>, TVariables>;
}

export const _UniqueConstraint$: _UniqueConstraintFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_UniqueConstraint", 
            "EMBEDDED", 
            [], 
            [
                "fields"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _UniqueConstraint$$ = 
    _UniqueConstraint$
        .fields
;
