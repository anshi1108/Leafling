import React from 'react';
import './FilterSort.css';

const FilterSort = ({ setSort, setFilter }) => {
  return (
    <div className="filter-sort">
      <div className="sort">
        <label>Sort By:</label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="filter">
        <label>Filter By Price:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="under-100">Under  &#8377; 100</option>
          <option value="100-200"> &#8377; 100 -  &#8377;200</option>
          <option value="100-200"> &#8377; 100 -  &#8377;200</option>
          <option value="100-200"> &#8377; 200 -  &#8377;300</option>
          <option value="100-200"> &#8377; 300 -  &#8377;400</option>
          <option value="100-200"> &#8377; 400 -  &#8377;500</option>
          <option value="100-200"> &#8377; 500 -  &#8377;600</option>
          <option value="100-200"> &#8377; 600 -  &#8377;700</option>
          <option value="100-200"> &#8377; 700 -  &#8377;800</option>
          <option value="100-200"> &#8377; 900 -  &#8377;1000</option>
          <option value="100-200"> greter than &#8377; 1000</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
