import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import { _Field$ } from './_FieldFetcher';
import type {_RelationSide} from '../enums';
import type {_OnDeleteBehaviour} from '../enums';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface _RelationFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Relation', T, TVariables> {

    on<XName extends ImplementationType<'_Relation'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): _RelationFetcher<
        XName extends '_Relation' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Relation'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Relation'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _RelationFetcher<T, TVariables>;


    readonly __typename: _RelationFetcher<T & {__typename: ImplementationType<'_Relation'>}, TVariables>;


    readonly name: _RelationFetcher<T & {readonly "name": string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _RelationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": _RelationFetcher<Omit<T, 'name'>, TVariables>;


    readonly type: _RelationFetcher<T & {readonly "type": string}, TVariables>;

    "type+"<
        XAlias extends string = "type", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"type", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _RelationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~type": _RelationFetcher<Omit<T, 'type'>, TVariables>;


    readonly side: _RelationFetcher<T & {readonly "side": _RelationSide}, TVariables>;

    "side+"<
        XAlias extends string = "side", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"side", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _RelationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: _RelationSide} : 
                {readonly [key in XAlias]: _RelationSide}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~side": _RelationFetcher<Omit<T, 'side'>, TVariables>;


    readonly targetEntity: _RelationFetcher<T & {readonly "targetEntity": string}, TVariables>;

    "targetEntity+"<
        XAlias extends string = "targetEntity", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"targetEntity", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): _RelationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~targetEntity": _RelationFetcher<Omit<T, 'targetEntity'>, TVariables>;


    readonly ownedBy: _RelationFetcher<T & {readonly "ownedBy"?: string}, TVariables>;

    "ownedBy+"<
        XAlias extends string = "ownedBy", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"ownedBy", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RelationFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~ownedBy": _RelationFetcher<Omit<T, 'ownedBy'>, TVariables>;


    readonly inversedBy: _RelationFetcher<T & {readonly "inversedBy"?: string}, TVariables>;

    "inversedBy+"<
        XAlias extends string = "inversedBy", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"inversedBy", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RelationFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~inversedBy": _RelationFetcher<Omit<T, 'inversedBy'>, TVariables>;


    readonly nullable: _RelationFetcher<T & {readonly "nullable"?: boolean}, TVariables>;

    "nullable+"<
        XAlias extends string = "nullable", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"nullable", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RelationFetcher<
        T & {readonly [key in XAlias]?: boolean}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~nullable": _RelationFetcher<Omit<T, 'nullable'>, TVariables>;


    readonly onDelete: _RelationFetcher<T & {readonly "onDelete"?: _OnDeleteBehaviour}, TVariables>;

    "onDelete+"<
        XAlias extends string = "onDelete", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"onDelete", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RelationFetcher<
        T & {readonly [key in XAlias]?: _OnDeleteBehaviour}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~onDelete": _RelationFetcher<Omit<T, 'onDelete'>, TVariables>;


    readonly orphanRemoval: _RelationFetcher<T & {readonly "orphanRemoval"?: boolean}, TVariables>;

    "orphanRemoval+"<
        XAlias extends string = "orphanRemoval", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"orphanRemoval", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RelationFetcher<
        T & {readonly [key in XAlias]?: boolean}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~orphanRemoval": _RelationFetcher<Omit<T, 'orphanRemoval'>, TVariables>;


    orderBy<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_OrderBy', X, XVariables>
    ): _RelationFetcher<
        T & {readonly "orderBy"?: ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    orderBy<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "orderBy", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'_OrderBy', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"orderBy", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): _RelationFetcher<
        T & {readonly [key in XAlias]?: ReadonlyArray<X>}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    rules<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'_Rule', X, XVariables>
    ): _RelationFetcher<
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
    ): _RelationFetcher<
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
    ): _RelationFetcher<
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
    ): _RelationFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const _Relation$: _RelationFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Relation", 
            "EMBEDDED", 
            [_Field$.fetchableType], 
            [
                "side", 
                "targetEntity", 
                {
                    category: "SCALAR", 
                    name: "ownedBy", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "inversedBy", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "onDelete", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "orphanRemoval", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "orderBy", 
                    targetTypeName: "_OrderBy", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const _Relation$$ = 
    _Relation$
        .name
        .type
        .side
        .targetEntity
        .ownedBy
        .inversedBy
        .nullable
        .onDelete
        .orphanRemoval
;
