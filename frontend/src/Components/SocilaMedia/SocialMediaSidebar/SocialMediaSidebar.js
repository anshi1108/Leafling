import React from "react";
import { Link } from "react-router-dom";
import "./SocialMediaSidebar.css";

const SocialMediaSidebar = () => {
  return (
    <div className="sidebarofSocials d-flex flex-column bg-white p-3">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <Link to="/home" className="nav-link text-dark sidebar-link">
            <img
              src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000"
              alt="Home"
              width="45"
              height="45"
              className="me-2"
            />
            Home
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/home/chatbot" className="nav-link text-dark sidebar-link">
            <img
              src="https://img.icons8.com/?size=100&id=1ZUKmWM8yiKw&format=png&color=000000"
              alt="AI Chatbot"
              width="45"
              height="45"
              className="me-2"
            />
            AI Chatbot
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/home/guide" className="nav-link text-dark sidebar-link">
            <img
              src="https://img.icons8.com/?size=100&id=46820&format=png&color=000000"
              alt="Learner's Guide"
              width="45"
              height="45"
              className="me-2"
            />
            Learner's Guide
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/home/marketplace"
            className="nav-link text-dark sidebar-link"
          >
            <img
              src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000"
              alt="Marketplace"
              width="45"
              height="45"
              className="me-2"
            />
            Marketplace
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/home/create-post"
            className="nav-link text-dark sidebar-link"
          >
            <img
              src="https://img.icons8.com/?size=100&id=3739&format=png&color=000000"
              alt="Create Post"
              width="45"
              height="45"
              className="me-2"
            />
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaSidebar;
