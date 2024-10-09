import React from "react";
import { Link } from "react-router-dom";
import "./SecondNavbar.css";

const SecondaryNavbar = ({ onCategorySelect }) => {
  return (
    <nav className="secondary-navbar">
      <ul>
        <li>
          <Link to="#" onClick={() => onCategorySelect('Plants')} className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/128/628/628324.png" alt="Plants" className="nav-icon" />
            Plants
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => onCategorySelect('Gardening Tools')} className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/128/2917/2917734.png" alt="Gardening Tools" className="nav-icon" />
            Gardening Tools
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => onCategorySelect('Seeds')} className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/128/10912/10912867.png" alt="Seeds" className="nav-icon" />
            Seeds
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => onCategorySelect('Soil')} className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/128/10415/10415565.png" alt="Soil" className="nav-icon" />
            Soil
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => onCategorySelect('Fertilizers')} className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/128/3072/3072498.png" alt="Fertilizers" className="nav-icon" />
            Fertilizers
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => onCategorySelect('Planters')} className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/128/4837/4837957.png" alt="Planters" className="nav-icon" />
            Planters
          </Link>
        </li>
        <li>
          <Link to="" onClick={() => onCategorySelect('Bills')} className="nav-link">
            <img src="https://img.icons8.com/?size=100&id=XuZp7DMf97ko&format=png&color=000000" alt="Bills" className="nav-icon" />
            Bills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;
