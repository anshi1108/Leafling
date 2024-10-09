import React from "react";
import "./Cart.css"; // Add your styles

const Cart = ({ cart, handleCheckout, onClose }) => {
  return (
    <div className="cart">
      <button onClick={onClose}>Close Cart</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
