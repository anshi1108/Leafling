import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Bussiness from '../../images/Assets/cooperation.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img
            src="https://img.icons8.com/?size=100&id=117418&format=png&color=000000"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center"
          />
          <strong>Leafling</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/home/marketplace">
              <img
                src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000"
                alt="Marketplace"
                width="35"
                height="35"
              />
            </Link>
            <Link className="nav-link" to="/profile">
              <img
                src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
                alt="Profile"
                width="35"
                height="35"
              />
            </Link>
            <Link className="nav-link" to="/notifications">
              <img
                src="https://img.icons8.com/?size=100&id=9RaQIJXn5XR9&format=png&color=000000"
                alt="Notification"
                width="35"
                height="35"
              />
            </Link>
            <Link className="nav-link" to="/home/business">
              <img
                src={Bussiness}
                alt="Business"
                width="35"
                height="35"
              />
            </Link>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;