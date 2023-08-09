import type {UUIDCondition} from '.';
import type {StringCondition} from '.';
import type {MetricValueWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type IndustryWhere = {
    readonly id?: UUIDCondition;
    readonly name?: StringCondition;
    readonly metricValues?: MetricValueWhere;
    readonly and?: ReadonlyArray<IndustryWhere | undefined>;
    readonly or?: ReadonlyArray<IndustryWhere | undefined>;
    readonly not?: IndustryWhere;
}
