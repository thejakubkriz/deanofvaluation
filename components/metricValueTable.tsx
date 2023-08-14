import React, { useState, forwardRef, useEffect } from 'react';
import { Workbook } from 'exceljs';
import {
  DataItem,
  GroupedDataItem,
  SelectOption,
  ProcessedDataItem,
  MetricValueTableProps
} from '../components/types';

const MetricValueTable = forwardRef(({ data }: MetricValueTableProps, ref: React.Ref<HTMLDivElement>) => {
  const ITEMS_PER_PAGE = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

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

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="mb-12" ref={ref}>
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Search results
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                values
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Here are your search results. Modify your search for different outcomes or download as .xls.
            </p>
          </div>
          <div className="flex items-center mt-4 gap-x-3">
            <button onClick={exportToExcel} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
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
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 md:rounded-lg scroll-container">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400">Year</th>
                      <th className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400">Region</th>
                      <th className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400">Industry</th>
                      {metricNames.map(metric => (
                        <th key={metric} className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400">{metric}</th>
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
        </div>
        <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
          <div className="text-sm text-gray-500 dark:text-gray-400">
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
