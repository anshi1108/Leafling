import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chatbot from "../ChatBot/Chatbot";
import ChatbotIcon from '../ChatBot/ChatbotIcon';
import Guide from "../Learner_guide/Guide_home";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <Navbar />

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../images/linkedin-sales-solutions-IjkIOe-2fF4-unsplash.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Join Our Plant Forum</h5>
            <p>Connect with fellow plant enthusiasts to share tips, experiences, and advice.</p>
            <Link to="/home/forum" className="btn btn-connect">Connect</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../images/medium-shot-smiley-man-holding-plant.jpg')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Business Opportunities in Plants</h5>
            <p>Discover the thriving business landscape in the plant industry and how you can get involved.</p>
            <Link to="/home/business" className="btn btn-connect">Connect</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../images/happy-girl-shopping-plants-greenery-store-planning-redesign-her-backyard.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Explore Our Marketplace</h5>
            <p>Find a wide range of plants and gardening supplies to enhance your green space.</p>
            <Link to="/home/marketplace" className="btn btn-connect">Connect</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ChatbotIcon toggleChatbot={toggleChatbot} />

      {/* Render the Chatbot as a popup */}
      {isChatbotOpen && (
        <div className="chatbot-popup">
          <Chatbot />
          <button onClick={toggleChatbot} className="close-chatbot-button">
            Close
          </button>
        </div>
      )}
      <div className="homehr">
        <hr />
      </div>
      <Guide />
      <Footer />
    </>
  );
};

export default Home;
