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
export interface S3SignedUploadFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'S3SignedUpload', T, TVariables> {

    on<XName extends ImplementationType<'S3SignedUpload'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): S3SignedUploadFetcher<
        XName extends 'S3SignedUpload' ?
        T & X :
        WithTypeName<T, ImplementationType<'S3SignedUpload'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'S3SignedUpload'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): S3SignedUploadFetcher<T, TVariables>;


    readonly __typename: S3SignedUploadFetcher<T & {__typename: ImplementationType<'S3SignedUpload'>}, TVariables>;


    readonly url: S3SignedUploadFetcher<T & {readonly "url": string}, TVariables>;

    "url+"<
        XAlias extends string = "url", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"url", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedUploadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~url": S3SignedUploadFetcher<Omit<T, 'url'>, TVariables>;


    headers<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'S3Header', X, XVariables>
    ): S3SignedUploadFetcher<
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
    ): S3SignedUploadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    readonly method: S3SignedUploadFetcher<T & {readonly "method": string}, TVariables>;

    "method+"<
        XAlias extends string = "method", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"method", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedUploadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~method": S3SignedUploadFetcher<Omit<T, 'method'>, TVariables>;


    readonly objectKey: S3SignedUploadFetcher<T & {readonly "objectKey": string}, TVariables>;

    "objectKey+"<
        XAlias extends string = "objectKey", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"objectKey", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedUploadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~objectKey": S3SignedUploadFetcher<Omit<T, 'objectKey'>, TVariables>;


    readonly bucket: S3SignedUploadFetcher<T & {readonly "bucket": string}, TVariables>;

    "bucket+"<
        XAlias extends string = "bucket", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"bucket", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedUploadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~bucket": S3SignedUploadFetcher<Omit<T, 'bucket'>, TVariables>;


    readonly publicUrl: S3SignedUploadFetcher<T & {readonly "publicUrl": string}, TVariables>;

    "publicUrl+"<
        XAlias extends string = "publicUrl", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"publicUrl", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): S3SignedUploadFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~publicUrl": S3SignedUploadFetcher<Omit<T, 'publicUrl'>, TVariables>;
}

export const s3SignedUpload$: S3SignedUploadFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "S3SignedUpload", 
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
                "bucket", 
                "publicUrl"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const s3SignedUpload$$ = 
    s3SignedUpload$
        .url
        .method
        .objectKey
        .bucket
        .publicUrl
;
