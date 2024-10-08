// src/components/ChatbotIcon.js

import React from 'react';
import chaticon from "../../images/chaticon.png"; // Ensure the path is correct
import './ChatIcon.css'; // Create a separate CSS file for styling

const ChatbotIcon = ({ toggleChatbot }) => {
  return (
    <div className="chatbot-icon" onClick={toggleChatbot}>
      <img src={chaticon} alt="Chatbot" />
    </div>
  );
};

export default ChatbotIcon;
