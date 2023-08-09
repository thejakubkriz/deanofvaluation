'use client'

import React, { useState, useEffect, useRef } from 'react';
import { graphQLExecutor } from 'api/graphQLExecutor';
import {
  GET_YEARS_QUERY,
  GET_REGIONS_QUERY,
  GET_INDUSTRIES_QUERY,
  GET_METRICS_QUERY,
  GET_METRIC_VALUE_QUERY,
  GET_METRIC_CATEGORY_QUERY
} from 'api/custom/searchQueries';
import Select from 'react-tailwindcss-select';
import MetricValueTable from 'components/metricValueTable'


const SearchForm = () => {
  const tableRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState([]);
  const [loadingYears, setLoadingYears] = useState(true);
  const [loadingRegions, setLoadingRegions] = useState(true);
  const [loadingIndustries, setLoadingIndustries] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);

  const [yearsData, setYearsData] = useState([]);
  const [regionsData, setRegionsData] = useState([]);
  const [industriesData, setIndustriesData] = useState([]);
  const [metricsData, setMetricsData] = useState([]);
  const [tableData, setTableData] = useState([]);

  // Fetch data for select fields using graphQLExecutor
  useEffect(() => {
    const fetchSelectData = async () => {
      try {
        const yearsResponse = await graphQLExecutor()(GET_YEARS_QUERY, {});
        const regionsResponse = await graphQLExecutor()(GET_REGIONS_QUERY, {});
        const industriesResponse = await graphQLExecutor()(GET_INDUSTRIES_QUERY, {});
        const metricsResponse = await graphQLExecutor()(GET_METRICS_QUERY, {});
        const categoriesResponse = await graphQLExecutor()(GET_METRIC_CATEGORY_QUERY, {});

        const categoriesWithMetricsData = categoriesResponse?.data?.listCategory || [];

        const metricOptions = categoriesWithMetricsData.map(category => ({
          label: category.name,
          options: category.metrics.map(metric => ({
            value: metric.id,
            label: metric.name,
          })),
        }));

        setYearsData(yearsResponse?.data?.listYear || []);
        setRegionsData(regionsResponse?.data?.listRegion || []);
        setIndustriesData(industriesResponse?.data?.listIndustry || []);
        setMetricsData(metricOptions);

        setSelectedYear(null);
        setSelectedRegion(null);
        setSelectedIndustry(null);
        setSelectedMetric(null);

        setLoadingYears(false);
        setLoadingRegions(false);
        setLoadingIndustries(false);
        setLoadingMetrics(false);
      } catch (error) {
        console.error('Error fetching select data:', error);
        setLoadingYears(false);
        setLoadingRegions(false);
        setLoadingIndustries(false);
        setLoadingMetrics(false);
      }
    };

    fetchSelectData();
  }, []);

  const processData = (data) => {
  const groupedData = {};

  data.forEach(item => {
    const key = `${item.year.dateUpdated}-${item.region.region}-${item.industry.name}`;
    if (!groupedData[key]) {
      groupedData[key] = {
        year: item.year.dateUpdated,
        region: item.region.region,
        industry: item.industry.name,
      };
    }
    groupedData[key][item.metric.name] = item.value;
  });

  return Object.values(groupedData);
  };

  const handleSearch = async () => {
    try {
      // Ensure that metrics are selected
      if (!selectedMetric || selectedMetric.length === 0) {
        alert("Please select at least one metric before searching.");
        return;
      }

      // Extract the IDs from the selected values
      const yearIds = selectedYear ? selectedYear.map(item => item.value) : yearsData.map(item => item.id);
      const regionIds = selectedRegion ? selectedRegion.map(item => item.value) : regionsData.map(item => item.id);
      const industryIds = selectedIndustry ? selectedIndustry.map(item => item.value) : industriesData.map(item => item.id);
      const metricIds = [...selectedMetric.map(item => item.value), '65853a44-d0e0-4894-b245-67ca85ac976c'];

      const executor = graphQLExecutor();
      const response = await executor(GET_METRIC_VALUE_QUERY, {
        yearIds,
        regionIds,
        industryIds,
        metricIds
      });

      if (response && response.data && response.data.listMetricValue) {
        const processedData = processData(response.data.listMetricValue); // Process the data
        setTableData(processedData); // Set the processed data to state
      } else {
        console.error('GraphQL Response:', response); // Log any GraphQL errors
      }
    } catch (error) {
      console.error('Error fetching metric values:', error);
      if (error.response) {
        console.error('Server Response:', error.response.data);
      }
    }
  };

  const handleClear = () => {
    setSelectedYear(null);
    setSelectedRegion(null);
    setSelectedIndustry(null);
    setSelectedMetric(null);
    setTableData([]);
  };

  return (
    <div className="mb-12">
      <section className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

          {/* Select Year */}
          <div className="flex-col">
            <label htmlFor="year" className="mb-2 text-sm font-medium text-gray-700"></label>
            <Select
              isMultiple={true}
              isClearable={true}
              isSearchable={true}
              placeholder={"Date updated"}
              options={yearsData.map(item => {
                const date = new Date(item.dateUpdated);
                const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                return { value: item.id, label: formattedDate };
              })}
              onChange={values => setSelectedYear(values)}
              value={selectedYear}
              className="border rounded-md p-2"
            />
          </div>

          {/* Select Region */}
          <div className="flex-col">
            <label htmlFor="region" className="mb-2 text-sm font-medium text-gray-700"></label>
            <Select
              isMultiple={true}
              isClearable={true}
              isSearchable={true}
              placeholder={"Region"}
              options={regionsData.map(item => ({ value: item.id, label: item.region }))}
              onChange={value => setSelectedRegion(value)}
              value={selectedRegion}
              className="border rounded-md p-2"
            />
          </div>

          {/* Select Industry */}
          <div className="flex-col">
            <label htmlFor="industry" className="mb-2 text-sm font-medium text-gray-700"></label>
            <Select
              isMultiple={true}
              isClearable={true}
              isSearchable={true}
              placeholder={"Industry"}
              options={industriesData.map(item => ({ value: item.id, label: item.name }))}
              onChange={values => setSelectedIndustry(values)}
              value={selectedIndustry}
              className="border rounded-md p-2"
            />
          </div>

          {/* Select Metric */}
          <div className="flex-col">
            <label htmlFor="metric" className="mb-2 text-sm font-medium text-gray-700"></label>
            <Select
              isMultiple={true}
              isClearable={true}
              isSearchable={true}
              placeholder={"Metrics"}
              options={metricsData}
              onChange={values => setSelectedMetric(values)}
              value={selectedMetric}
              className="border rounded-md p-2"
            />
          </div>

        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Buttons */}
        <div className="flex justify-between w-full gap-4 mt-4">
          <button
            onClick={handleSearch}
            className="flex items-center justify-center px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 dark:bg-blue-600"
          >
            {tableData.length > 0 ? 'Update search' : 'Search'}
          </button>
          <button
            onClick={handleClear}
            className="flex items-center justify-center px-5 py-2 text-sm tracking-wide text-red-500 transition-colors duration-200 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"
          >
            Clear
          </button>
        </div>

        <div className="mt-14">
            {tableData.length > 0 && <MetricValueTable data={tableData} ref={tableRef} />}
        </div>
      </section>
    </div>
  );
};

export default SearchForm;
