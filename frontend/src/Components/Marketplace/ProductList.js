import React from "react";
import "./ProductList.css";

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} height={300} width={300} />
          <h3>{product.name}</h3>
          {/* Display new price */}
          <p>Price: ${product.new_price.toFixed(2)}</p>
          <div className="button-container">
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
