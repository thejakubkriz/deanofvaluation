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
export interface _PathArgumentFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_PathArgument', T, TVariables> {

    on<XName extends ImplementationType<'_PathArgument'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _PathArgumentFetcher<
        XName extends '_PathArgument' ?
        T & X :
        WithTypeName<T, ImplementationType<'_PathArgument'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_PathArgument'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _PathArgumentFetcher<T, TVariables>;


    readonly __typename: _PathArgumentFetcher<T & {__typename: ImplementationType<'_PathArgument'>}, TVariables>;


    readonly path: _PathArgumentFetcher<T & {readonly "path": ReadonlyArray<string>}, TVariables>;

    "path+"<
        XAlias extends string = "path", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"path", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _PathArgumentFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<string>} : 
                {readonly [key in XAlias]: ReadonlyArray<string>}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~path": _PathArgumentFetcher<Omit<T, 'path'>, TVariables>;
}

export const _PathArgument$: _PathArgumentFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_PathArgument", 
            "EMBEDDED", 
            [_Argument$.fetchableType], 
            [
                "path"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _PathArgument$$ = 
    _PathArgument$
        .path
;
