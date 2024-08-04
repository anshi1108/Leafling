import React, { useState, useEffect } from 'react';
import './Marketplace.css'; 
import logo from '../../images/logo.jpg'; 
import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import profile_photo from '../../images/profile_photo.png';
import offers from '../../images/discount.png';
import gardening from '../../images/succulent.png';
import seeds from '../../images/seed.png';
import pots from '../../images/pots.png';
import fertilizers from '../../images/fertilizer.png';
import accessories from '../../images/farming-tools.png';

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Define static products here for testing
    const defaultProducts = [
      {
        id: 1,
        name: 'Succulent Plant',
        image: 'https://via.placeholder.com/200',
        price: 25.00,
        rating: 4.5,
        description: 'A beautiful and low-maintenance succulent plant.'
      },
      {
        id: 2,
        name: 'Garden Pot',
        image: 'https://via.placeholder.com/200',
        price: 15.00,
        rating: 4.0,
        description: 'A stylish pot for your garden plants.'
      },
      {
        id: 3,
        name: 'Seed Pack',
        image: 'https://via.placeholder.com/200',
        price: 5.00,
        rating: 4.8,
        description: 'A pack of high-quality seeds for your garden.'
      },
      {
        id: 4,
        name: 'Fertilizer',
        image: 'https://via.placeholder.com/200',
        price: 10.00,
        rating: 4.2,
        description: 'Nutrient-rich fertilizer for your plants.'
      }
    ];

    setProducts(defaultProducts);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="marketplace">
      <div className="topbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icons">
          <img src={shopping_cart} alt="Marketplace" title="Marketplace" />
          <img src={notification} alt="Notifications" title="Notifications" />
          <img src={profile_photo} alt="Profile" title="Profile" />
        </div>
      </div>

      <div className="content">
        <div className="sidebar">
          <ul>
            <li><img src={offers} alt="Offers" title="Offers" /><a href="#">Offers</a></li>
            <li><img src={gardening} alt="Gardening" title="Gardening" /><a href="#">Gardening</a></li>
            <li><img src={seeds} alt="Seeds" title="Seeds" /><a href="#">Seeds</a></li>
            <li><img src={pots} alt="Pots" title="Pots" /><a href="#">Pots</a></li>
            <li><img src={fertilizers} alt="Fertilizers" title="Fertilizers" /><a href="#">Fertilizers</a></li>
            <li><img src={accessories} alt="Accessories" title="Accessories" /><a href="#">Accessories</a></li>
          </ul>
        </div>

        <div className="main">
          <h1>Marketplace</h1>
          <div className="product-list">
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p className="product-rating">Rating: {product.rating}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div className="product-detail">
          <button className="close-button" onClick={handleCloseDetail}>X</button>
          <div className="product-detail-content">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-detail-image" />
            <div className="product-detail-info">
              <h2 className="product-detail-name">{selectedProduct.name}</h2>
              <p className="product-detail-price">${selectedProduct.price.toFixed(2)}</p>
              <p className="product-detail-rating">Rating: {selectedProduct.rating}</p>
              <p className="product-detail-description">{selectedProduct.description}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Marketplace;
