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
export interface _FieldFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Field', T, TVariables> {

    on<XName extends ImplementationType<'_Field'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _FieldFetcher<
        XName extends '_Field' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Field'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Field'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _FieldFetcher<T, TVariables>;


    readonly __typename: _FieldFetcher<T & {__typename: ImplementationType<'_Field'>}, TVariables>;


    readonly name: _FieldFetcher<T & {readonly "name": string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _FieldFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": _FieldFetcher<Omit<T, 'name'>, TVariables>;


    readonly type: _FieldFetcher<T & {readonly "type": string}, TVariables>;

    "type+"<
        XAlias extends string = "type", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"type", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _FieldFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~type": _FieldFetcher<Omit<T, 'type'>, TVariables>;


    readonly nullable: _FieldFetcher<T & {readonly "nullable"?: boolean}, TVariables>;

    "nullable+"<
        XAlias extends string = "nullable", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"nullable", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _FieldFetcher<
        T & {readonly [key in XAlias]?: boolean}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~nullable": _FieldFetcher<Omit<T, 'nullable'>, TVariables>;


    rules<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Rule', X, XVariables>
    ): _FieldFetcher<
        T & {readonly "rules": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    rules<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "rules", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Rule', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"rules", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _FieldFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    validators<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Validator', X, XVariables>
    ): _FieldFetcher<
        T & {readonly "validators": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    validators<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "validators", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_Validator', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"validators", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _FieldFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const _Field$: _FieldFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Field", 
            "EMBEDDED", 
            [], 
            [
                "name", 
                "type", 
                {
                    category: "SCALAR", 
                    name: "nullable", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "rules", 
                    targetTypeName: "_Rule"
                }, 
                {
                    category: "LIST", 
                    name: "validators", 
                    targetTypeName: "_Validator"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Field$$ = 
    _Field$
        .name
        .type
        .nullable
;
