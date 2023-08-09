import type {MetricValueUniqueWhere} from '.';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type MetricUniqueWhere = {
    readonly id?: string;
    readonly metricValues?: MetricValueUniqueWhere;
}
