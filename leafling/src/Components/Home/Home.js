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

    // Sample forums data
    const forums = [
        { name: 'Cactus Care', image: 'https://www.juneflowers.com/wp-content/uploads/2022/08/Cactus-Plant.jpg', description: 'Learn the best practices for taking care of your cacti!', route: '/forum/cactus-care' },
        { name: 'Succulent Enthusiasts', image: 'https://www.bhimtalnursery.com/wp-content/uploads/2022/12/Echeveria-Desmetiana-Succulent-Plant-1.jpg', description: 'Join the community of succulent lovers!', route: '/forum/succulent-enthusiasts' },
        { name: 'Herb Gardeners', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0Jj4oOQd04s-Jrd1HSTzIojBD526bB7JrQ&s', description: 'Grow your own herbs and share your experiences.', route: '/forum/herb-gardeners' },
        { name: 'Flower Power', image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg', description: 'All about growing and caring for flowers.', route: '/forum/flower-power' },
        { name: 'Urban Gardening', image: 'https://plantly.io/wp-content/uploads/2023/12/3287b5aa-dbdf-4452-9d72-4b395be4cafa.jpg', description: 'Tips and tricks for gardening in urban areas.', route: '/forum/urban-gardening' },
        { name: 'Vegetable Growers', image: 'https://grangettos.com/cdn/shop/articles/shutterstock_590135870_1600x.jpg?v=1617921748', description: 'Share your journey of growing vegetables.', route: '/forum/vegetable-growers' }
    ];

    // Fetch posts when the component mounts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
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
                                <span style={{ color: 'black' }}>AI Chatbot</span> {/* Change text color to black */}
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
