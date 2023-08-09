import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type {S3GenerateSignedUploadInput} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface MutationFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Mutation', T, TVariables> {


    directive(name: string, args?: DirectiveArgs): MutationFetcher<T, TVariables>;


    generateUploadUrl<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'S3SignedUpload', X, XVariables>
    ): MutationFetcher<
        T & {readonly "generateUploadUrl": X}, 
        TVariables & XVariables & MutationArgs["generateUploadUrl"]
    >;

    generateUploadUrl<
        XArgs extends AcceptableVariables<MutationArgs['generateUploadUrl']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'S3SignedUpload', X, XVariables>
    ): MutationFetcher<
        T & {readonly "generateUploadUrl": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['generateUploadUrl']>
    >;

    generateUploadUrl<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "generateUploadUrl", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'S3SignedUpload', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"generateUploadUrl", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MutationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & MutationArgs["generateUploadUrl"] & XDirectiveVariables
    >;

    generateUploadUrl<
        XArgs extends AcceptableVariables<MutationArgs['generateUploadUrl']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "generateUploadUrl", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'S3SignedUpload', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"generateUploadUrl", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MutationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['generateUploadUrl']> & XDirectiveVariables
    >;


    generateReadUrl<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'S3SignedRead', X, XVariables>
    ): MutationFetcher<
        T & {readonly "generateReadUrl": X}, 
        TVariables & XVariables & MutationArgs["generateReadUrl"]
    >;

    generateReadUrl<
        XArgs extends AcceptableVariables<MutationArgs['generateReadUrl']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'S3SignedRead', X, XVariables>
    ): MutationFetcher<
        T & {readonly "generateReadUrl": X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['generateReadUrl']>
    >;

    generateReadUrl<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "generateReadUrl", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'S3SignedRead', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"generateReadUrl", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MutationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & MutationArgs["generateReadUrl"] & XDirectiveVariables
    >;

    generateReadUrl<
        XArgs extends AcceptableVariables<MutationArgs['generateReadUrl']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "generateReadUrl", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'S3SignedRead', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"generateReadUrl", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): MutationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['generateReadUrl']> & XDirectiveVariables
    >;
}

export const mutation$: MutationFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Mutation", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "generateUploadUrl", 
                    argGraphQLTypeMap: {input: 'S3GenerateSignedUploadInput'}, 
                    targetTypeName: "S3SignedUpload"
                }, 
                {
                    category: "SCALAR", 
                    name: "generateReadUrl", 
                    argGraphQLTypeMap: {
                        objectKey: 'String!', 
                        expiration: 'Int'
                    }, 
                    targetTypeName: "S3SignedRead"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export interface MutationArgs {

    readonly generateUploadUrl: {
        readonly input?: S3GenerateSignedUploadInput
    }, 

    readonly generateReadUrl: {
        readonly objectKey: string, 
        readonly expiration?: number
    }
}
