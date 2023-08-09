import type {UUIDCondition} from '.';
import type {DateCondition} from '.';
import type {MetricValueWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type YearWhere = {
    readonly id?: UUIDCondition;
    readonly dateUpdated?: DateCondition;
    readonly metricValues?: MetricValueWhere;
    readonly and?: ReadonlyArray<YearWhere | undefined>;
    readonly or?: ReadonlyArray<YearWhere | undefined>;
    readonly not?: YearWhere;
}
