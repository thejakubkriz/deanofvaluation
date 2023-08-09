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
export interface PageInfoFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'PageInfo', T, TVariables> {

    on<XName extends ImplementationType<'PageInfo'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): PageInfoFetcher<
        XName extends 'PageInfo' ?
        T & X :
        WithTypeName<T, ImplementationType<'PageInfo'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'PageInfo'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): PageInfoFetcher<T, TVariables>;


    readonly __typename: PageInfoFetcher<T & {__typename: ImplementationType<'PageInfo'>}, TVariables>;


    readonly totalCount: PageInfoFetcher<T & {readonly "totalCount": number}, TVariables>;

    "totalCount+"<
        XAlias extends string = "totalCount", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"totalCount", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): PageInfoFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: number} : 
                {readonly [key in XAlias]: number}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~totalCount": PageInfoFetcher<Omit<T, 'totalCount'>, TVariables>;
}

export const pageInfo$: PageInfoFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "PageInfo", 
            "EMBEDDED", 
            [], 
            [
                "totalCount"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const pageInfo$$ = 
    pageInfo$
        .totalCount
;
