import type {UUIDCondition} from '.';
import type {StringCondition} from '.';
import type {YearWhere} from '.';
import type {RegionWhere} from '.';
import type {IndustryWhere} from '.';
import type {MetricWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type MetricValueWhere = {
    readonly id?: UUIDCondition;
    readonly value?: StringCondition;
    readonly year?: YearWhere;
    readonly region?: RegionWhere;
    readonly industry?: IndustryWhere;
    readonly metric?: MetricWhere;
    readonly and?: ReadonlyArray<MetricValueWhere | undefined>;
    readonly or?: ReadonlyArray<MetricValueWhere | undefined>;
    readonly not?: MetricValueWhere;
}
