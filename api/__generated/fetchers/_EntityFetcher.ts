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
export interface _EntityFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Entity', T, TVariables> {

    on<XName extends ImplementationType<'_Entity'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _EntityFetcher<
        XName extends '_Entity' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Entity'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Entity'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _EntityFetcher<T, TVariables>;


    readonly __typename: _EntityFetcher<T & {__typename: ImplementationType<'_Entity'>}, TVariables>;


    readonly name: _EntityFetcher<T & {readonly "name": string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _EntityFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": _EntityFetcher<Omit<T, 'name'>, TVariables>;


    readonly customPrimaryAllowed: _EntityFetcher<T & {readonly "customPrimaryAllowed": boolean}, TVariables>;

    "customPrimaryAllowed+"<
        XAlias extends string = "customPrimaryAllowed", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"customPrimaryAllowed", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _EntityFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: boolean} : 
                {readonly [key in XAlias]: boolean}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~customPrimaryAllowed": _EntityFetcher<Omit<T, 'customPrimaryAllowed'>, TVariables>;


    fields<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Field', X, XVariables>
    ): _EntityFetcher<
        T & {readonly "fields": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    fields<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "fields", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Field', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"fields", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _EntityFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    unique<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_UniqueConstraint', X, XVariables>
    ): _EntityFetcher<
        T & {readonly "unique": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    unique<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "unique", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_UniqueConstraint', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"unique", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _EntityFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const _Entity$: _EntityFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Entity", 
            "EMBEDDED", 
            [], 
            [
                "name", 
                "customPrimaryAllowed", 
                {
                    category: "LIST", 
                    name: "fields", 
                    targetTypeName: "_Field"
                }, 
                {
                    category: "LIST", 
                    name: "unique", 
                    targetTypeName: "_UniqueConstraint"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Entity$$ = 
    _Entity$
        .name
        .customPrimaryAllowed
;
