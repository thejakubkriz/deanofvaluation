import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import { _Field$ } from './_FieldFetcher';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface _ColumnFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Column', T, TVariables> {

    on<XName extends ImplementationType<'_Column'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _ColumnFetcher<
        XName extends '_Column' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Column'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Column'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _ColumnFetcher<T, TVariables>;


    readonly __typename: _ColumnFetcher<T & {__typename: ImplementationType<'_Column'>}, TVariables>;


    readonly name: _ColumnFetcher<T & {readonly "name": string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _ColumnFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": _ColumnFetcher<Omit<T, 'name'>, TVariables>;


    readonly type: _ColumnFetcher<T & {readonly "type": string}, TVariables>;

    "type+"<
        XAlias extends string = "type", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"type", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _ColumnFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~type": _ColumnFetcher<Omit<T, 'type'>, TVariables>;


    readonly enumName: _ColumnFetcher<T & {readonly "enumName"?: string}, TVariables>;

    "enumName+"<
        XAlias extends string = "enumName", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"enumName", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _ColumnFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~enumName": _ColumnFetcher<Omit<T, 'enumName'>, TVariables>;


    readonly defaultValue: _ColumnFetcher<T & {readonly "defaultValue"?: any}, TVariables>;

    "defaultValue+"<
        XAlias extends string = "defaultValue", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"defaultValue", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _ColumnFetcher<
        T & {readonly [key in XAlias]?: any}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~defaultValue": _ColumnFetcher<Omit<T, 'defaultValue'>, TVariables>;


    readonly nullable: _ColumnFetcher<T & {readonly "nullable": boolean}, TVariables>;

    "nullable+"<
        XAlias extends string = "nullable", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"nullable", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _ColumnFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: boolean} : 
                {readonly [key in XAlias]: boolean}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~nullable": _ColumnFetcher<Omit<T, 'nullable'>, TVariables>;


    rules<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Rule', X, XVariables>
    ): _ColumnFetcher<
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
    ): _ColumnFetcher<
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
    ): _ColumnFetcher<
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
    ): _ColumnFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const _Column$: _ColumnFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Column", 
            "EMBEDDED", 
            [_Field$.fetchableType], 
            [
                {
                    category: "SCALAR", 
                    name: "enumName", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "defaultValue", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Column$$ = 
    _Column$
        .name
        .type
        .enumName
        .defaultValue
        .nullable
;
