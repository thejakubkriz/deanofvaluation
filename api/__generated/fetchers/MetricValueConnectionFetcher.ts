import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ConnectionFetcher, ObjectFetcher, EdgeFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface MetricValueConnectionFetcher<T extends object, TVariables extends object> extends ConnectionFetcher<'MetricValueConnection', T, TVariables> {

    on<XName extends ImplementationType<'MetricValueConnection'>, X extends object, XVariables extends object>(
        child: ConnectionFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): MetricValueConnectionFetcher<
        XName extends 'MetricValueConnection' ?
        T & X :
        WithTypeName<T, ImplementationType<'MetricValueConnection'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'MetricValueConnection'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): MetricValueConnectionFetcher<T, TVariables>;


    readonly __typename: MetricValueConnectionFetcher<T & {__typename: ImplementationType<'MetricValueConnection'>}, TVariables>;


    pageInfo<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'PageInfo', X, XVariables>
    ): MetricValueConnectionFetcher<
        T & {readonly "pageInfo": X}, 
        TVariables & XVariables
    >;

    pageInfo<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "pageInfo", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'PageInfo', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"pageInfo", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricValueConnectionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    edges<
        X extends object, 
        XVariables extends object
    >(
        child: EdgeFetcher<'MetricValueEdge', X, XVariables>
    ): MetricValueConnectionFetcher<
        T & {readonly "edges": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    edges<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "edges", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: EdgeFetcher<'MetricValueEdge', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"edges", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricValueConnectionFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const metricValueConnection$: MetricValueConnectionFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "MetricValueConnection", 
            "CONNECTION", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "pageInfo", 
                    targetTypeName: "PageInfo"
                }, 
                {
                    category: "LIST", 
                    name: "edges", 
                    targetTypeName: "MetricValueEdge"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;
