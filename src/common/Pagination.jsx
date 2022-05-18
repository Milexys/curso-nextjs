import React from 'react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Pagination = ({ limit, setOffset, allProducts, neighbours }) => {
  const items = [];
  const [current, setCurrent] = useState(1);
  const totalPage = Math.ceil(allProducts / limit);
  const end = Math.min(Math.max(neighbours * 2 + 2, neighbours + current + 1), totalPage + 1);
  const start = Math.min(Math.max(end - (neighbours * 2 + 1), 1), Math.max(current - neighbours, 1));

  for (let i = start; i < end; i++) {
    items.push(
      <a
        key={`Paginador-${i}`}
        onClick={() => {
          setCurrent(i);
          setOffset((i - 1) * limit);
        }}
        href="#"
        aria-current="page"
        className={`${getClassActive(i)} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
      >
        {i}
      </a>
    );
  }

  function getClassActive(i) {
    return i === current ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
  }

  function prevPage() {
    if (current > 1) {
      setCurrent(current - 1);
      setOffset((current - 2) * limit);
    }
  }

  function nextPage() {
    if (current < totalPage) {
      setCurrent(current + 1);
      setOffset(current * limit);
    }
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </a>
        <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{limit * (current - 1) + 1}</span> to <span className="font-medium">{current * limit < allProducts ? current * limit : allProducts}</span> of{' '}
            <span className="font-medium">{allProducts}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              onClick={() => prevPage()}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {items}
            <a
              onClick={() => nextPage()}
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
