// MarketplaceSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const MarketSidebar = () => {
  return (
    <div className="sidebar-1">
      <ul>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/628/628324.png" alt="Plants" />
          <Link to="/plants">Plants</Link>
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/2917/2917734.png" alt="Gardening Tools" />
          <Link to="/tools">Gardening Tools</Link>
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/10912/10912867.png" alt="Seeds" />
          <Link to="/seeds">Seeds</Link>
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/10415/10415565.png" alt="Soil" />
          <Link to="/soil">Soil</Link>
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/3072/3072498.png" alt="Fertilizers" />
          <Link to="/fertilizers">Fertilizers</Link>
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/4837/4837957.png" alt="Planters" />
          <Link to="/planters">Planters</Link>
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/128/4837/4837957.png" alt="Bills" />
          <Link to="/bills">Bills</Link>
        </li>
      </ul>
    </div>
  );
};

export default MarketSidebar;
