import React from 'react';
import { useState } from 'react';
import Chart from '@common/Chart';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

const PRODUCT_LIMIT = 10;

export default function Dashboard() {
  const [offsetProducts, setOffsetProducts] = useState(0);
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts));
  const allProducts = useFetch(endPoints.products.getProducts(0, 0));

  const categoryName = allProducts?.map((product) => product.category.name);

  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryName),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#F3BA2F', '#2A71D0'],
      },
    ],
  };

  return (
    <>
      <Chart chartData={data} className="mb-8 mt-2" />
    </>
  );
}
