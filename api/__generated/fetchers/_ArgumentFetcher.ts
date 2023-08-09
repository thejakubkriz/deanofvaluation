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
export interface _ArgumentFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'_Argument', T, TVariables> {

    on<XName extends ImplementationType<'_Argument'>, X extends object, XVariables extends object>(child: ObjectFetcher<XName, X, XVariables>): _ArgumentFetcher<
        XName extends '_Argument' ?
        T & X :
        WithTypeName<T, ImplementationType<'_Argument'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'_Argument'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): _ArgumentFetcher<T, TVariables>;


    readonly __typename: _ArgumentFetcher<T & {__typename: ImplementationType<'_Argument'>}, TVariables>;
}

export const _Argument$: _ArgumentFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "_Argument", 
            "OBJECT", 
            [], 
            [
            ]
        ), 
        ENUM_INPUT_METADATA, 
        [
            '_ValidatorArgument', 
            '_PathArgument', 
            '_LiteralArgument'
        ]
    )
;
