import React from 'react';
import CARD_TYPES from '../Marketplace/CardType';
// import chip from '../assets/images/chip.png';

const Card = ({ values }) => {
  const { cardNumber, cardType, rotateCard } = values;

  const cardColor = CARD_TYPES[cardType].color;
  const cardName = CARD_TYPES[cardType].name;

  return (
    <div className={`card ${rotateCard ? 'rotate' : ''}`} style={{ backgroundImage: `url(${cardColor})` }}>
      <img src={cardName} alt="Card Chip" className="card-chip" />
      <div className="card-number">{cardNumber || '**** **** **** ****'}</div>
      {/* Add more card details here if needed */}
    </div>
  );
};

export default Card;
