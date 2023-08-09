import type {UUIDCondition} from '.';
import type {StringCondition} from '.';
import type {MetricWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type CategoryWhere = {
    readonly id?: UUIDCondition;
    readonly name?: StringCondition;
    readonly metrics?: MetricWhere;
    readonly and?: ReadonlyArray<CategoryWhere | undefined>;
    readonly or?: ReadonlyArray<CategoryWhere | undefined>;
    readonly not?: CategoryWhere;
}
