import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="topbar-1">
    <div className="logo">
      <img
        src="https://static-00.iconduck.com/assets.00/leaf-icon-1394x2048-ij4dulk2.png"
        alt="Logo"
      />
    </div>
    <Link to="/">
      <strong>Leafling</strong>
    </Link>
    <div className="icons-1">
      <div className="icon-item">
        <img
          src="https://pngimg.com/d/shopping_cart_PNG4.png"
          alt="Marketplace"
        />
        <Link to="/marketplace"></Link>
      </div>
      <div className="icon-item">
        <img
          src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
          alt="Profile"
        />
        <Link to="/profile"></Link>
      </div>
      <div className="icon-item">
        <img
          src="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell"
          alt="Notification"
        />
        <Link to="/notifications"></Link>
      </div>
    </div>
    <div className="search-bar-1">
      <input type="text" placeholder="Search..." />
    </div>
  </div>
  )
}

export default Header
