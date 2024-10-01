// CardForm.js
import React, { useState } from 'react';
// import './CardForm.css'; // Add styles if necessary

const CardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cardNumber, expiry, cvc, name });
  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <div>
        <label>Cardholder Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Expiry Date (MM/YY)</label>
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
      </div>
      <div>
        <label>CVC</label>
        <input
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
        />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

export default CardForm;
