import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";
import chaticon from "../../images/chaticon.png";

const plantKeywords = [
  // Plant names
  "rose",
  "tulip",
  "sunflower",
  "cactus",
  "succulent",
  "fern",
  "basil",
  "mint",
  "bamboo",
  "orchid",
  "lily",
  "daisy",
  "pothos",
  "snake plant",
  "spider plant",
  "geranium",
  "herbs",
  "vegetables",
  "fruits",

  // Related keywords
  "plant care",
  "gardening",
  "watering",
  "fertilizer",
  "soil",
  "sunlight",
  "indoor plants",
  "outdoor plants",
  "plant diseases",
  "plant growing tips",
  "plant care tips",
  "plant weather",
  "soil type",
  "soil pH",
  "soil nutrients",
  "compost",
  "mulch",

  // Additional terms
  "pruning",
  "planting",
  "plant propagation",
  "houseplants",
  "gardening tips",
  "climate",
  "humidity",
  "temperature",
];

const isPlantRelatedMessage = (message) => {
  return plantKeywords.some((keyword) =>
    message.toLowerCase().includes(keyword.toLowerCase())
  );
};

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const initialGreeting = {
      user: "",
      bot: "Hello! My name is Leafy. How can I help you?",
    };
    setResponses([initialGreeting]);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (input.trim() === "") return;

    const userMessage = { user: input };

    if (!isPlantRelatedMessage(input)) {
      setResponses((prev) => [
        ...prev,
        { ...userMessage, bot: "Sorry, I could not understand your question." },
      ]);
      setInput("");
      return;
    }

    try {
      const response = await axios.post(
        "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2",
        { messages: [{ role: "user", content: input }] },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-rapidapi-ua": "RapidAPI-Playground",
            "x-rapidapi-key": "68ff9939c8msh2c3041494ed290dp148805jsn89dbb091c75b",
            "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
          },
        }
      );

      console.log("API Response:", response.data);
      const botResponse = response.data.result;

      // Check if the response is too long and needs truncation
      const maxLength = 143; // Set your maximum length here
      const displayResponse =
        botResponse.length > maxLength
          ? `${botResponse.substring(0, maxLength)}...` // Truncate and add ellipsis
          : botResponse;

      setResponses((prev) => [
        ...prev,
        { ...userMessage, bot: displayResponse, fullResponse: botResponse },
      ]);

      setInput("");
      setError("");
    } catch (err) {
      console.error("Error fetching response:", err);
      setError("Error: Unable to connect to the bot.");
    }
  };

  const handleExpand = (fullResponse) => {
    // Handle displaying the full response when user clicks "Read more"
    setResponses((prev) => {
      const newResponses = [...prev];
      const lastResponse = newResponses.pop();
      const expandedResponse = { ...lastResponse, bot: fullResponse }; // Replace truncated response with full response
      newResponses.push(expandedResponse);
      return newResponses;
    });
  };

  return (
    <> 
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chatbot-header">
          <div className="user-icon">
            <img src={chaticon} alt="Chat Icon" />
          </div>
          <div>Leafy</div>
        </div>
        <div className="chatbot-response">
          {responses.map((resp, index) => (
            <div key={index} className="chatbot-message">
              {resp.user && (
                <div className="user-message">
                  <strong>You:</strong> {resp.user}
                </div>
              )}
              {resp.bot && (
                <div className="bot-message">
                  <div className="bot-box">
                    <strong>Bot:</strong> {resp.bot}
                    {resp.fullResponse && resp.fullResponse.length > 143 && (
                      <span
                        className="read-more"
                        onClick={() => handleExpand(resp.fullResponse)}
                      >
                        Read more...
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chatbot-input-group">
          <input
            type="text"
            className="chatbot-input"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button className="chatbot-button" onClick={handleSubmit}>
            Send
          </button>
        </div>
        {error && <div className="chatbot-error">{error}</div>}
      </div>
    </div>
  </>
  );
};

export default Chatbot;
