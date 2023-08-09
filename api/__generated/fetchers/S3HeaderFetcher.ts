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
export interface S3HeaderFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'S3Header', T, TVariables> {

    on<XName extends ImplementationType<'S3Header'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): S3HeaderFetcher<
        XName extends 'S3Header' ?
        T & X :
        WithTypeName<T, ImplementationType<'S3Header'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'S3Header'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): S3HeaderFetcher<T, TVariables>;


    readonly __typename: S3HeaderFetcher<T & {__typename: ImplementationType<'S3Header'>}, TVariables>;


    readonly key: S3HeaderFetcher<T & {readonly "key": string}, TVariables>;

    "key+"<
        XAlias extends string = "key", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"key", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3HeaderFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~key": S3HeaderFetcher<Omit<T, 'key'>, TVariables>;


    readonly value: S3HeaderFetcher<T & {readonly "value": string}, TVariables>;

    "value+"<
        XAlias extends string = "value", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"value", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3HeaderFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~value": S3HeaderFetcher<Omit<T, 'value'>, TVariables>;
}

export const s3Header$: S3HeaderFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "S3Header", 
            "EMBEDDED", 
            [], 
            [
                "key", 
                "value"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const s3Header$$ = 
    s3Header$
        .key
        .value
;
