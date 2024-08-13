import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import profile_photo from '../../images/profile_photo.png';
import open_book from '../../images/open-book.png';
import chatbot from '../../images/chatbot.png';
import plus from '../../images/plus.png';
import logo from '../../images/logo.jpg';

function Home() {
    return (
        <div className='home-1'>
            <div className='topbar-1'>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="search-bar-1">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="icons-1">
                    <img src={shopping_cart} alt="Marketplace"/>
                    <img src={notification} alt="Notifications"/>
                    <img src={profile_photo} alt="Profile"/>
                </div>
            </div>
            <div className="content-1">
                <div className="sidebar-1">
                    <ul>
                        <li><img src={profile_photo} alt="Profile"/><Link to="#">My profile</Link></li>
                        <li><img src={shopping_cart} alt="Marketplace"/><Link to="/marketplace">Marketplace</Link></li>
                        <li><img src={open_book} alt="Guide"/><Link to="#">Learner's guide</Link></li>
                        <li><img src={notification} alt="Notifications"/><Link to="#">Notifications</Link></li>
                        <li><img src={chatbot} alt="Chatbot"/><Link to="#">AI chatbot</Link></li>
                        <li><img src={plus} alt="Post"/><Link to="#">Post</Link></li>
                    </ul>
                </div>
                <div className="posts-1">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div className="post" key={index}>
                            <h3>Post Title</h3>
                            <p>This is the content of the post.</p>
                        </div>
                    ))}
                </div>
                <div className="rightbar-1">
                    <h2>Forums</h2>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="forum" key={index}>
                            <h3>Forum Title</h3>
                            <p>This is the content of the forum.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
