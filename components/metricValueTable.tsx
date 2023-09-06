import React, { useState, forwardRef, useEffect } from 'react';
import { Workbook } from 'exceljs';
import Select from 'react-tailwindcss-select';
import {
  DataItem,
  GroupedDataItem,
  SelectOption,
  ProcessedDataItem,
  MetricValueTableProps,
  Option
} from '../components/types';

const MetricValueTable = forwardRef(({ data }: MetricValueTableProps, ref: React.Ref<HTMLDivElement>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30); // New state for items per page

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const metricNamesSet = new Set<string>();
  data.forEach(item => {
    Object.keys(item).forEach(key => {
      if (!['year', 'region', 'industry'].includes(key)) {
        metricNamesSet.add(key);
      }
    });
  });
  const metricNames = Array.from(metricNamesSet);

  useEffect(() => {
    if ((ref as React.MutableRefObject<unknown>).current) {
      ((ref as React.MutableRefObject<unknown>).current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, [ref]);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const exportToExcel = async () => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('dean_of_valuation_values');

    // Add header row
    const header = ['Year', 'Region', 'Industry', ...metricNames];
    worksheet.addRow(header);

    // Add data rows
    data.forEach(item => {
      const date = new Date(item.year);
      const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      const rowData = [formattedDate, item.region, item.industry, ...metricNames.map(metric => item[metric] || 'N/A')];
      worksheet.addRow(rowData);
    });

    // Trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dean_of_valuation_values.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToCSV = () => {
    // Prepare header
    const header = ['Year', 'Region', 'Industry', ...metricNames];
    let csvContent = header.join(",") + "\n";

    // Prepare data rows
    data.forEach(item => {
      const date = new Date(item.year);
      const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      const rowData = [formattedDate, item.region, item.industry, ...metricNames.map(metric => item[metric] || 'N/A')];
      csvContent += rowData.join(",") + "\n";
    });

    // Trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dean_of_valuation_values.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const options = [
    { value: '10', label: '10' },
    { value: '30', label: '30' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '500', label: '500' }
  ];

  return (
    <div className="mb-12" ref={ref}>
      <section className="container mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Search results
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {data.length}{' '}rows
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Here are your search results. Modify your search for different outcomes or download as .xlsx.
            </p>
          </div>
          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <button onClick={exportToExcel} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-md sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>.xlsx</span>
            </button>
            <button onClick={exportToCSV} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-md sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>.csv</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-6 w-full">
          <div className="py-2 w-full">
            <div className="block w-full border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-y-auto max-h-[75vh]">
              <table className="min-w-full w-full divide-y divide-gray-200 dark:divide-gray-700 border-collapse">
                <thead className="top-0 bg-gray-50 dark:bg-gray-800 z-10">
                    <tr>
                      <th className="sticky top-0 py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-2 bg-gradient-to-b from-white to-slate-100 dark:to-gray-600">Year</th>
                      <th className="sticky top-0 py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-2 bg-gradient-to-b from-white to-slate-100 dark:to-gray-600">Region</th>
                      <th className="sticky top-0 py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-2 bg-gradient-to-b from-white to-slate-100 to-slate-100 dark:to-gray-600">Industry</th>
                      {metricNames.map(metric => (
                        <th key={metric} className="sticky top-0 py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-2 bg-gradient-to-b from-white to-slate-100 dark:to-gray-600">{metric}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {currentData.map((item, index) => {
                      const isoDate = new Date(item.year);
                      const formattedDate = `${isoDate.getDate()}.${isoDate.getMonth() + 1}.${isoDate.getFullYear()}`;

                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">{formattedDate}</div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">{item.region}</div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">{item.industry}</div>
                          </td>
                          {metricNames.map(metric => (
                            <td key={metric} className="px-4 py-4 text-sm whitespace-nowrap">{(item[metric] as string) || 'N/A'}</td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:flex sm:items-start sm:justify-between flex-col sm:flex-row">
          <div className="flex items-center justify-center mt-4 gap-x-4 w-1/4 mx-auto sm:w-auto sm:mt-0 sm:mx-0">
            <Select
              value={options.find(option => option.value === itemsPerPage.toString()) || options[1]}
              onChange={(selectedOption) => {
                if (selectedOption && !Array.isArray(selectedOption)) {
                  setItemsPerPage(Number((selectedOption as Option).value));
                }
              }}
              options={options}
              isMultiple={false}
              isClearable={false}
              isSearchable={false}
              primaryColor={"gray"}
            />
          </div>
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400 w-full sm:mt-0 sm:w-auto">
            Page{" "}
            <span className="font-medium text-gray-700 dark:text-gray-100">
              {currentPage} of {totalPages}
            </span>
          </div>
          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            {currentPage > 1 && (
              <button onClick={handlePrevious} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>previous</span>
              </button>
            )}
            {currentPage < totalPages && (
              <button onClick={handleNext} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
});

MetricValueTable.displayName = 'MetricValueTable';

export default MetricValueTable;
