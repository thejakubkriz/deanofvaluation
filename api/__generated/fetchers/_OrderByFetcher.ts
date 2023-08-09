import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import type {_OrderByDirection} from '../enums';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface _OrderByFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_OrderBy', T, TVariables> {

    on<XName extends ImplementationType<'_OrderBy'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _OrderByFetcher<
        XName extends '_OrderBy' ?
        T & X :
        WithTypeName<T, ImplementationType<'_OrderBy'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_OrderBy'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _OrderByFetcher<T, TVariables>;


    readonly __typename: _OrderByFetcher<T & {__typename: ImplementationType<'_OrderBy'>}, TVariables>;


    readonly path: _OrderByFetcher<T & {readonly "path": ReadonlyArray<string>}, TVariables>;

    "path+"<
        XAlias extends string = "path", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"path", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _OrderByFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<string>} : 
                {readonly [key in XAlias]: ReadonlyArray<string>}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~path": _OrderByFetcher<Omit<T, 'path'>, TVariables>;


    readonly direction: _OrderByFetcher<T & {readonly "direction": _OrderByDirection}, TVariables>;

    "direction+"<
        XAlias extends string = "direction", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"direction", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _OrderByFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: _OrderByDirection} : 
                {readonly [key in XAlias]: _OrderByDirection}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~direction": _OrderByFetcher<Omit<T, 'direction'>, TVariables>;
}

export const _OrderBy$: _OrderByFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_OrderBy", 
            "EMBEDDED", 
            [], 
            [
                "path", 
                "direction"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _OrderBy$$ = 
    _OrderBy$
        .path
        .direction
;
