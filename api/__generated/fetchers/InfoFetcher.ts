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
export interface InfoFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Info', T, TVariables> {

    on<XName extends ImplementationType<'Info'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): InfoFetcher<
        XName extends 'Info' ?
        T & X :
        WithTypeName<T, ImplementationType<'Info'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Info'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): InfoFetcher<T, TVariables>;


    readonly __typename: InfoFetcher<T & {__typename: ImplementationType<'Info'>}, TVariables>;


    readonly description: InfoFetcher<T & {readonly "description"?: string}, TVariables>;

    "description+"<
        XAlias extends string = "description", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"description", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): InfoFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~description": InfoFetcher<Omit<T, 'description'>, TVariables>;
}

export const info$: InfoFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Info", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "description", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const info$$ = 
    info$
        .description
;
