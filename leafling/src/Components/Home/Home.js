import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import open_book from '../../images/open-book.png';
import chatbot from '../../images/chatbot.png';
import plus from '../../images/plus.png';
import PostCard from './Postcard'; // Import the PostCard component
import ForumCard from './Forumcard'; // Import a ForumCard component
import Chatbot from '../ChatBot/Chatbot'; // Import the Chatbot component

function Home() {
    // State for managing chatbot popup visibility
    const [showChatbot, setShowChatbot] = useState(false);

    // Sample post data
    const posts = [
        {
            username: 'user123',
            image: 'https://harddy.com/cdn/shop/articles/Gardening_with_Family_9eced38f-b650-4b68-80e3-6ad9826cf1d0_1200x1200.jpg?v=1576111862',
            caption: 'Gardening with the family! #gardening #family'
        },
        {
            username: 'plantlover',
            image: 'https://hips.hearstapps.com/hmg-prod/images/proud-gardener-royalty-free-image-539829042-1555499812.jpg',
            caption: 'I love gardening! #gardening #plantlover'
        },
        {
            username: 'planter123',
            image: 'https://i.insider.com/626beed9c8c8ac0019410d59?width=1136&format=jpeg',
            caption: 'Garden time is my favorite time! #gardening #plantlife'
        }
    ];

    // Sample forum data
    const forums = [
        {
            name: 'Cactus Care',
            image: 'https://www.juneflowers.com/wp-content/uploads/2022/08/Cactus-Plant.jpg',
            description: 'Learn the best practices for taking care of your cacti!'
        },
        {
            name: 'Succulent Enthusiasts',
            image: 'https://www.bhimtalnursery.com/wp-content/uploads/2022/12/Echeveria-Desmetiana-Succulent-Plant-1.jpg',
            description: 'Join the community of succulent lovers!'
        },
        {
            name: 'Herb Gardeners',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0Jj4oOQd04s-Jrd1HSTzIojBD526bB7JrQ&s',
            description: 'Grow your own herbs and share your experiences.'
        },
        {
            name: 'Flower Power',
            image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg',
            description: 'All about growing and caring for flowers.'
        },
        {
            name: 'Urban Gardening',
            image: 'https://plantly.io/wp-content/uploads/2023/12/3287b5aa-dbdf-4452-9d72-4b395be4cafa.jpg',
            description: 'Tips and tricks for gardening in urban areas.'
        },
        {
            name: 'Vegetable Growers',
            image: 'https://grangettos.com/cdn/shop/articles/shutterstock_590135870_1600x.jpg?v=1617921748',
            description: 'Share your journey of growing vegetables.'
        }
    ];

    return (
        <div className='home-1'>
            <div className='topbar-1'>
                <div className="logo">
                    <img src="https://static-00.iconduck.com/assets.00/leaf-icon-1394x2048-ij4dulk2.png" alt="Logo" />
                </div>
                <Link to='/'><strong>Leafling</strong></Link>
                <div className='icons-1'>
                    <div className="icon-item">
                        <img src="https://pngimg.com/d/shopping_cart_PNG4.png" alt="Marketplace" />
                        <Link to='/marketplace'></Link>
                    </div>
                    <div className="icon-item">
                        <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="Profile" />
                        <Link to='/profile'></Link>
                    </div>
                    <div className="icon-item">
                        <img src="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell" alt="Notification" />
                        <Link to='/notifications'></Link>
                    </div>
                </div>
                <div className="search-bar-1">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="mainpage-1">
                <div className="sidebar-1">
                    <ul>
                        <li><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="Profile" /><Link to="/profile">My profile</Link></li>
                        <li><img src={shopping_cart} alt="Marketplace" /><Link to="/marketplace">Marketplace</Link></li>
                        <li><img src={open_book} alt="Guide" /><Link to="#">Learner's guide</Link></li>
                        <li><img src={notification} alt="Notifications" /><Link to="/notifications">Notifications</Link></li>
                        <li>
                            <div className="chatbot-trigger" onClick={() => setShowChatbot(true)}>
                                <img src={chatbot} alt="Chatbot" />
                                <span>AI Chatbot</span>
                            </div>
                        </li>
                        <li><img src={plus} alt="Post" /><Link to="#">Post</Link></li>
                    </ul>
                </div>

                <div className="content-1">
                    <div className="posts-1">
                        {posts.map((post, index) => (
                            <PostCard
                                key={index}
                                username={post.username}
                                image={post.image}
                                caption={post.caption}
                            />
                        ))}
                    </div>
                    <div className="rightbar-1">
                        <h2>Find your community!</h2>
                        {forums.map((forum, index) => (
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
