import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { EdgeFetcher, ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface IndustryEdgeFetcher<T extends object, TVariables extends object> extends EdgeFetcher<'IndustryEdge', T, TVariables> {

    on<XName extends ImplementationType<'IndustryEdge'>, X extends object, XVariables extends object>(
        child: EdgeFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): IndustryEdgeFetcher<
        XName extends 'IndustryEdge' ?
        T & X :
        WithTypeName<T, ImplementationType<'IndustryEdge'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'IndustryEdge'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): IndustryEdgeFetcher<T, TVariables>;


    readonly __typename: IndustryEdgeFetcher<T & {__typename: ImplementationType<'IndustryEdge'>}, TVariables>;


    node<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Industry', X, XVariables>
    ): IndustryEdgeFetcher<
        T & {readonly "node": X}, 
        TVariables & XVariables
    >;

    node<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "node", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Industry', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"node", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): IndustryEdgeFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const industryEdge$: IndustryEdgeFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "IndustryEdge", 
            "EDGE", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "node", 
                    targetTypeName: "Industry"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;
