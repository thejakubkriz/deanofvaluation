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
export interface S3SignedReadFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'S3SignedRead', T, TVariables> {

    on<XName extends ImplementationType<'S3SignedRead'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): S3SignedReadFetcher<
        XName extends 'S3SignedRead' ?
        T & X :
        WithTypeName<T, ImplementationType<'S3SignedRead'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'S3SignedRead'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): S3SignedReadFetcher<T, TVariables>;


    readonly __typename: S3SignedReadFetcher<T & {__typename: ImplementationType<'S3SignedRead'>}, TVariables>;


    readonly url: S3SignedReadFetcher<T & {readonly "url": string}, TVariables>;

    "url+"<
        XAlias extends string = "url", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"url", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedReadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~url": S3SignedReadFetcher<Omit<T, 'url'>, TVariables>;


    headers<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'S3Header', X, XVariables>
    ): S3SignedReadFetcher<
        T & {readonly "headers": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    headers<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "headers", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'S3Header', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"headers", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedReadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly method: S3SignedReadFetcher<T & {readonly "method": string}, TVariables>;

    "method+"<
        XAlias extends string = "method", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"method", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedReadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~method": S3SignedReadFetcher<Omit<T, 'method'>, TVariables>;


    readonly objectKey: S3SignedReadFetcher<T & {readonly "objectKey": string}, TVariables>;

    "objectKey+"<
        XAlias extends string = "objectKey", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"objectKey", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedReadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~objectKey": S3SignedReadFetcher<Omit<T, 'objectKey'>, TVariables>;


    readonly bucket: S3SignedReadFetcher<T & {readonly "bucket": string}, TVariables>;

    "bucket+"<
        XAlias extends string = "bucket", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"bucket", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedReadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~bucket": S3SignedReadFetcher<Omit<T, 'bucket'>, TVariables>;
}

export const s3SignedRead$: S3SignedReadFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "S3SignedRead", 
            "EMBEDDED", 
            [], 
            [
                "url", 
                {
                    category: "LIST", 
                    name: "headers", 
                    targetTypeName: "S3Header"
                }, 
                "method", 
                "objectKey", 
                "bucket"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const s3SignedRead$$ = 
    s3SignedRead$
        .url
        .method
        .objectKey
        .bucket
;
