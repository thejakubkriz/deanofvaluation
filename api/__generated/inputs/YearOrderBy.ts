import type {OrderDirection} from '../enums';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type YearOrderBy = {
    readonly _random?: boolean;
    readonly _randomSeeded?: number;
    readonly id?: OrderDirection;
    readonly dateUpdated?: OrderDirection;
}
