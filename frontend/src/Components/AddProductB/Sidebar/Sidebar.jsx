// src/Components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import add_product_icon from '../../../images/Assets/cart.svg';
import list_product_icon from '../../../images/Assets/list.svg';

const Sidebar = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className='sidebarofBussiness'>
      {/* <Link to={'/myinfo'} style={{ textDecoration: 'none' }}>
        <div className={`sidebar-item ${location.pathname === '/myinfo' ? 'active' : ''}`}>
          <img src={add_product_icon} alt="" />
          <p>My Info</p>
        </div>
      </Link> */}
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className={`sidebar-item ${location.pathname === '/addproduct' ? 'active' : ''}`}>
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className={`sidebar-item ${location.pathname === '/listproduct' ? 'active' : ''}`}>
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
