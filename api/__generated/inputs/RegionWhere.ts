import type {UUIDCondition} from '.';
import type {StringCondition} from '.';
import type {MetricValueWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type RegionWhere = {
    readonly id?: UUIDCondition;
    readonly region?: StringCondition;
    readonly metricValues?: MetricValueWhere;
    readonly and?: ReadonlyArray<RegionWhere | undefined>;
    readonly or?: ReadonlyArray<RegionWhere | undefined>;
    readonly not?: RegionWhere;
}
