// src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import './Home.css';
import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import open_book from '../../images/open-book.png';
import chatbot from '../../images/chatbot.png';
import plus from '../../images/plus.png';
import PostCard from './Postcard';
import ForumCard from './Forumcard';
import Chatbot from '../ChatBot/Chatbot';
import Header from '../Header/Header';
import axios from 'axios';

function Home() {
    const [showChatbot, setShowChatbot] = useState(false);
    const [posts, setPosts] = useState([]);
    const [forums, setForums] = useState([]); // Add this line to define forums state

    // Fetch posts and forums when the component mounts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        const fetchForums = async () => { // Add a function to fetch forums
            try {
                const response = await axios.get('http://localhost:5000/api/forums'); // Adjust the URL to your API endpoint
                setForums(response.data);
            } catch (error) {
                console.error('Error fetching forums:', error);
            }
        };

        fetchPosts();
        fetchForums(); // Call the forums fetching function
    }, []);

    return (
        <div className='home-1'>
            <Header />
            <div className="mainpage-1">
                <div className="sidebar-1">
                    <ul>
                        <li><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="Profile" /><Link to="/profile">My profile</Link></li>
                        <li><img src={shopping_cart} alt="Marketplace" /><Link to="/marketplace">Marketplace</Link></li>
                        <li><img src={open_book} alt="Guide" /><Link to="/guide">Learner's guide</Link></li>
                        <li><img src={notification} alt="Notifications" /><Link to="/notifications">Notifications</Link></li>
                        <li>
                            <div className="chatbot-trigger" onClick={() => setShowChatbot(true)}>
                                <img src={chatbot} alt="Chatbot" />
                                <span>AI Chatbot</span>
                            </div>
                        </li>
                        <li><img src={plus} alt="Create Post" /><Link to="/create-post">Create Post</Link></li>
                    </ul>
                </div>

                <div className="content-1">
                    {/* Displaying the posts */}
                    <div className="posts-1">
                        {posts.map((post, index) => (
                            <PostCard
                                key={index}
                                username={post.author}
                                image={post.image}
                                caption={post.content}
                            />
                        ))}
                    </div>

                    <div className="rightbar-1">
                        <h2>Find your community!</h2>
                        {forums.map((forum, index) => ( // Use the forums state here
                            <ForumCard
                                key={index}
                                name={forum.name}
                                image={forum.image}
                                description={forum.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Chatbot Popup */}
            {showChatbot && (
                <div className="chatbot-popup">
                    <div className="chatbot-popup-content">
                        <button className="chatbot-close-button" onClick={() => setShowChatbot(false)}>X</button>
                        <Chatbot />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
