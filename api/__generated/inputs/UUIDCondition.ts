
/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type UUIDCondition = {
    readonly and?: ReadonlyArray<UUIDCondition>;
    readonly or?: ReadonlyArray<UUIDCondition>;
    readonly not?: UUIDCondition;
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
