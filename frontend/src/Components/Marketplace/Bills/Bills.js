import React, { useState } from 'react';
import Card from '../Card'; // Import the Card component
import CardForm from '../CardForm';
import './Bills.css';
// import CARD_TYPES from '../CardType'; // Ensure this is the correct path to your CARD_TYPES

const Bills = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('visa'); // Default card type
  const [rotateCard, setRotateCard] = useState(false); // For flipping the card effect

  const handlePay = (order) => {
    setSelectedOrder(order);
  };

  const handleCardSubmit = (cardDetails) => {
    console.log('Processing payment for order:', selectedOrder);
    console.log('Card details:', cardDetails);

    // Set card number and type based on the input
    setCardNumber(cardDetails.cardNumber);
    setCardType(cardDetails.cardNumber ? determineCardType(cardDetails.cardNumber) : 'visa');

    // Implement your payment processing logic here

    // Reset the selected order
    setSelectedOrder(null);
  };

  const determineCardType = (number) => {
    // Implement logic to determine card type based on number
    // For example:
    if (number.startsWith('4')) return 'visa';
    if (number.startsWith('5')) return 'mastercard';
    if (number.startsWith('3')) return 'amex';
    // Add more card type conditions as needed
    return 'visa'; // Default
  };

  return (
    <div className="bills">
      <h2>Your Bills</h2>
      {orders.length === 0 ? (
        <p>No bills available.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order.id || index} className="bill-card">
            <h3>Bill #{index + 1}</h3>
            <p>Date: {new Date(order.date).toLocaleString()}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePay(order)}>Pay Now</button>
          </div>
        ))
      )}
      {selectedOrder && (
        <div className="payment-section">
          <h3>Pay for Bill #{orders.indexOf(selectedOrder) + 1}</h3>
          {/* Display the card preview */}
          <Card values={{ cardNumber, cardType, rotateCard }} />
          <CardForm onSubmit={handleCardSubmit} />
        </div>
      )}
    </div>
  );
};

export default Bills;
