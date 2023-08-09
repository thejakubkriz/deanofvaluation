import { gql } from 'graphql-request'; // Import the correct gql function

// GraphQL queries for searchForm.tsx
export const GET_YEARS_QUERY = gql`
  query GetYears {
    listYear {
      id
      dateUpdated
    }
  }
`;

export const GET_REGIONS_QUERY = gql`
  query GetRegions {
    listRegion {
      id
      region
    }
  }
`;

export const GET_INDUSTRIES_QUERY = gql`
  query GetIndustries {
    listIndustry {
      id
      name
    }
  }
`;

export const GET_METRICS_QUERY = gql`
  query GetMetrics {
    listMetric {
      id
      name
    }
  }
`;

export const GET_METRIC_VALUE_QUERY = gql`
  query GetMetricValue($yearIds: [UUID!], $regionIds: [UUID!], $industryIds: [UUID!], $metricIds: [UUID!]) {
    listMetricValue(filter: {
        year: { id: { in: $yearIds } }
        region: { id: { in: $regionIds } }
        industry: { id: { in: $industryIds } }
        metric: { id: { in: $metricIds } }
    }) {
      year {
        dateUpdated
      }
      region {
        region
      }
      industry {
        name
      }
      metric {
        name
      }
      value
    }
  }
`;

export const GET_METRIC_CATEGORY_QUERY = gql`
  query GetCategoriesWithMetrics {
    listCategory(orderBy: {name: asc}) {
      id
      name
      metrics {
        id
        name
      }
    }
  }
`;
