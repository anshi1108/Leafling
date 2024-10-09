import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListProduct.css';
import cross_icon from '../../../images/Assets/cross_icon.svg';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../../Footer/Footer';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(10); // Default display limit set to 10

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/getproducts');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:5000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      fetchInfo(); // Refresh the product list after removal
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  // Handler for changing the display limit
  const handleLimitChange = (event) => {
    setDisplayLimit(Number(event.target.value));
  };

  return (
    <>
      <Navbar />
      <div className="list-product-page">
        <Sidebar />
        <div className="list-product-content">
          <h1 className="my-4">All Products List</h1>
          {/* Dropdown for selecting the number of entries */}
          <div className="mb-3">
            <label htmlFor="productLimit" className="form-label">
              Show:
            </label>
            <select
              id="productLimit"
              className="form-select"
              value={displayLimit}
              onChange={handleLimitChange}
            >
              <option value={10}>Top 10 Entries</option>
              <option value={20}>Top 20 Entries</option>
              <option value={50}>Top 50 Entries</option>
              <option value={allProducts.length}>All Entries</option>
            </select>
          </div>

          <div className="listproduct-format-main">
            <div className="listproduct-format"><strong>Product</strong></div>
            <div className="listproduct-format"><strong>Title</strong></div>
            <div className="listproduct-format"><strong>Old Price</strong></div>
            <div className="listproduct-format"><strong>New Price</strong></div>
            <div className="listproduct-format"><strong>Category</strong></div>
            <div className="listproduct-format"><strong>Remove</strong></div>
          </div>
          <div className="listproduct-allproducts">
            {allProducts.length > 0 ? (
              allProducts.slice(0, displayLimit).map((product, index) => (
                <div key={index} className='listproduct-format-main align-items-center my-2'>
                  <div className="listproduct-format">
                    <img src={product.image} className='listproduct-product-icon' alt={product.name} />
                  </div>
                  <div className="listproduct-format">{product.name}</div>
                  <div className="listproduct-format">${product.old_price}</div>
                  <div className="listproduct-format">${product.new_price}</div>
                  <div className="listproduct-format">{product.category}</div>
                  <div className="listproduct-format">
                    <img onClick={() => removeProduct(product.id)} src={cross_icon} alt="Remove" className="listproduct-remove-icon" />
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ListProduct;
