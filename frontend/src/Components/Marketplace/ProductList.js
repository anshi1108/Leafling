import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApprovedProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/getproducts');
      const data = await response.json();

      // Filter to display only approved products
      const approvedProducts = data.filter((product) => product.approved);

      // Add quantity and description to each approved product
      const updatedProducts = approvedProducts.map((product) => ({
        ...product,
        quantity: 0,
        description: "This is a beautiful plant that brings life and freshness to any space.",
      }));

      setAllProducts(updatedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApprovedProducts();
  }, []);

  const increaseQuantity = (productId) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Generates a random star rating between 1 and 5
  const getStarRating = () => 4;

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading products...</p>
      ) : allProducts.length > 0 ? (
        allProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">Price: ${product.new_price}</p>
            </div>

            {/* Rating */}
            <div className="product-rating">
              {[...Array(getStarRating())].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>

            {/* Quantity controls */}
            <div className="product-actions">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span className="product-quantity">{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
