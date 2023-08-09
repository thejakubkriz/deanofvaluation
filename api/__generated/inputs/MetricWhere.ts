import type {UUIDCondition} from '.';
import type {StringCondition} from '.';
import type {CategoryWhere} from '.';
import type {MetricValueWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type MetricWhere = {
    readonly id?: UUIDCondition;
    readonly name?: StringCondition;
    readonly description?: StringCondition;
    readonly category?: CategoryWhere;
    readonly metricValues?: MetricValueWhere;
    readonly and?: ReadonlyArray<MetricWhere | undefined>;
    readonly or?: ReadonlyArray<MetricWhere | undefined>;
    readonly not?: MetricWhere;
}
