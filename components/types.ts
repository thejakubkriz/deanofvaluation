export type UUID = string;

export interface BaseEntity {
  id: UUID;
}

export interface Year extends BaseEntity {
  dateUpdated: Date;
}

export interface Region extends BaseEntity {
  region: string;
}

export interface MetricValue extends BaseEntity {
  year: Year;
  region: Region;
  industry: Industry;
  metric: Metric;
  value: string;
}

export interface Metric extends BaseEntity {
  name: string;
  description: string;
}

export interface Industry extends BaseEntity {
  name: string;
}

export interface Category extends BaseEntity {
  name: string;
}


export interface CategoryWithMetrics {
  name: string;
  metrics: Metric[];
}

export interface DataItem {
  year: {
    dateUpdated: Date;
  };
  region: {
    region: string;
  };
  industry: {
    name: string;
  };
  metric: {
    name: string;
  };
  value: string;
}

export interface GroupedDataItem {
  year: string | Date;
  region: string;
  industry: string;
  [metricName: string]: string | Date;
}

export interface Option {
  value: string;
  label: string;
}

export interface GroupOption {
  label: string;
  options: Option[];
}

export type SelectOption = Option | GroupOption;

export type ProcessedDataItem = {
  year: string | Date;
  region: string;
  industry: string;
  [metric: string]: string | Date;
}

export interface MetricValueTableProps {
  data: ProcessedDataItem[]; // Use the ProcessedDataItem type
}
