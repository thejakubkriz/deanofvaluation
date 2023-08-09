
/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type DateCondition = {
    readonly and?: ReadonlyArray<DateCondition>;
    readonly or?: ReadonlyArray<DateCondition>;
    readonly not?: DateCondition;
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
}
