// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.new_price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
