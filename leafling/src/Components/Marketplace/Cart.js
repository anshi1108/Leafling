import React from 'react';
import './Cart.css';

const Cart = ({ cart, open, onClose, updateQuantity }) => {
  if (!open) return null; // Ensure the cart is not rendered if it's not open

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className='close-button-container'>
        <button className='close-button' onClick={onClose}>Close Cart</button>
      </div>
    </div>
  );
};

export default Cart;
