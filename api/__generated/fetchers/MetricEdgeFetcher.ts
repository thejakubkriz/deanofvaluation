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
export interface MetricEdgeFetcher<T extends object, TVariables extends object> extends EdgeFetcher<'MetricEdge', T, TVariables> {

    on<XName extends ImplementationType<'MetricEdge'>, X extends object, XVariables extends object>(
        child: EdgeFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): MetricEdgeFetcher<
        XName extends 'MetricEdge' ?
        T & X :
        WithTypeName<T, ImplementationType<'MetricEdge'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'MetricEdge'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): MetricEdgeFetcher<T, TVariables>;


    readonly __typename: MetricEdgeFetcher<T & {__typename: ImplementationType<'MetricEdge'>}, TVariables>;


    node<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Metric', X, XVariables>
    ): MetricEdgeFetcher<
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
        child: ObjectFetcher<'Metric', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"node", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MetricEdgeFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const metricEdge$: MetricEdgeFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "MetricEdge", 
            "EDGE", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "node", 
                    targetTypeName: "Metric"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;
