import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClipboardList } from "@fortawesome/free-solid-svg-icons"; // Importing icons
import "./ProfileSidebar.css";

const ProfileSidebar = () => {
  const [activeTab, setActiveTab] = useState("my-info");

  return (
    <div className="sidebars d-flex flex-column p-3">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-3">
          <Link
            to="/profile/my-info"
            className={`nav-link ${
              activeTab === "my-info" ? "active-tab" : "text-dark"
            }`}
            onClick={() => setActiveTab("my-info")}
          >
            <FontAwesomeIcon icon={faUser} className="icon" />
            My Info
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link
            to="/profile/my-orders"
            className={`nav-link ${
              activeTab === "my-orders" ? "active-tab" : "text-dark"
            }`}
            onClick={() => setActiveTab("my-orders")}
          >
            <FontAwesomeIcon icon={faClipboardList} className="icon" />
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
