
/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type StringCondition = {
    readonly and?: ReadonlyArray<StringCondition>;
    readonly or?: ReadonlyArray<StringCondition>;
    readonly not?: StringCondition;
    readonly null?: boolean;
    readonly isNull?: boolean;
    readonly eq?: string;
    readonly notEq?: string;
    readonly in?: ReadonlyArray<string>;
    readonly notIn?: ReadonlyArray<string>;
    readonly lt?: string;
    readonly lte?: string;
    readonly gt?: string;
    readonly gte?: string;
    readonly contains?: string;
    readonly startsWith?: string;
    readonly endsWith?: string;
    readonly containsCI?: string;
    readonly startsWithCI?: string;
    readonly endsWithCI?: string;
}
