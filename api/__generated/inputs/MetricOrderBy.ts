import type {OrderDirection} from '../enums';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type MetricOrderBy = {
    readonly _random?: boolean;
    readonly _randomSeeded?: number;
    readonly id?: OrderDirection;
    readonly name?: OrderDirection;
    readonly description?: OrderDirection;
}
