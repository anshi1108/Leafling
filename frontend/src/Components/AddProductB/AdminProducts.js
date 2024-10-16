import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './AdminProduct.css';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/getproducts');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const approveProduct = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/approveproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        setProducts(products.map(product =>
          product.id === id ? { ...product, approved: true } : product
        ));
      }
    } catch (error) {
      console.error('Error approving product:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-products">
        <h1 className="admin-title">Admin Products</h1>
        <div className="products-list">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p><strong>Uploaded by:</strong> {product.uploader || 'Unknown'}</p>
                <p><strong>Price:</strong> ${product.new_price}</p>
                <p><strong>Offer:</strong> {product.offer || 'No offer available'}</p>
                <p>
                  <strong>Status:</strong> {product.approved ? 'Approved' : 'Pending'}
                </p>
              </div>
              {!product.approved && (
                <button 
                  className="approve-button" 
                  onClick={() => approveProduct(product.id)}
                >
                  Approve
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProducts;
