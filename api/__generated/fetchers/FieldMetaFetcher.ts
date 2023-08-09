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
export interface FieldMetaFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'FieldMeta', T, TVariables> {

    on<XName extends ImplementationType<'FieldMeta'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): FieldMetaFetcher<
        XName extends 'FieldMeta' ?
        T & X :
        WithTypeName<T, ImplementationType<'FieldMeta'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'FieldMeta'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): FieldMetaFetcher<T, TVariables>;


    readonly __typename: FieldMetaFetcher<T & {__typename: ImplementationType<'FieldMeta'>}, TVariables>;


    readonly readable: FieldMetaFetcher<T & {readonly "readable"?: boolean}, TVariables>;

    "readable+"<
        XAlias extends string = "readable", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"readable", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): FieldMetaFetcher<
        T & {readonly [key in XAlias]?: boolean}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~readable": FieldMetaFetcher<Omit<T, 'readable'>, TVariables>;


    readonly updatable: FieldMetaFetcher<T & {readonly "updatable"?: boolean}, TVariables>;

    "updatable+"<
        XAlias extends string = "updatable", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"updatable", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): FieldMetaFetcher<
        T & {readonly [key in XAlias]?: boolean}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~updatable": FieldMetaFetcher<Omit<T, 'updatable'>, TVariables>;
}

export const fieldMeta$: FieldMetaFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "FieldMeta", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "readable", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "updatable", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const fieldMeta$$ = 
    fieldMeta$
        .readable
        .updatable
;
