import type {OrderDirection} from '../enums';
import type {YearOrderBy} from '.';
import type {RegionOrderBy} from '.';
import type {IndustryOrderBy} from '.';
import type {MetricOrderBy} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type MetricValueOrderBy = {
    readonly _random?: boolean;
    readonly _randomSeeded?: number;
    readonly id?: OrderDirection;
    readonly value?: OrderDirection;
    readonly year?: YearOrderBy;
    readonly region?: RegionOrderBy;
    readonly industry?: IndustryOrderBy;
    readonly metric?: MetricOrderBy;
}
