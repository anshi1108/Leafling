import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import shopping_cart from '../../images/shopping-cart.png'
import notification from '../../images/notification.png'
import profile_photo from '../../images/profile_photo.png'
import open_book from '../../images/open-book.png'
import chatbot from '../../images/chatbot.png'
import plus from '../../images/plus.png'
import logo from '../../images/logo.jpg'

function Home() {
  return (
    <div className='home'>
    <div className='topbar'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div classname="search-bar">
            <input type="text" placeholder="Search..."/>
      </div>
      <div class="icons">
            <img src={shopping_cart} alt="Marketplace" title="Marketplace"/>
            <img src={notification} alt="Notifications" title="Notifications"/>
            <img src={profile_photo} alt="Profile" title="Profile"/>
      </div>
    </div>
    <div className="content">
    <div className="sidebar">
        <ul>
        <li><img src={profile_photo} alt="Profile" title="Profile" /><Link to="#">My profile</Link></li>
            <li><img src={shopping_cart} alt="Marketplace" title="Marketplace" /><Link to="/marketplace">Marketplace</Link></li>
            <li><img src={open_book} alt="Learner's guide" title="Learner's guide" /><Link to="#">Learner's guide</Link></li>
            <li><img src={notification} alt="Notifications" title="Notifications" /><Link to="#">Notifications</Link></li>
            <li><img src={chatbot} alt="AI chatbot" title="AI chatbot" /><Link to="#">AI chatbot</Link></li>
            <li><img src={plus} alt="Post" title="Post" /><Link to="#">Post</Link></li>
        </ul>
    </div>
    <div className="main">
            <div className="post">
                <div className="post-title">Post Title</div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title </div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title</div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title </div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title </div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title </div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title </div>
                <div className="post-content">This is the content of the post.</div>
            </div>
            <div className="post">
                <div className="post-title">Post Title </div>
                <div className="post-content">This is the content of the post.</div>
            </div>
          </div>
          <div className="rightbar">
            <h2>Forums</h2>
            <div className="forum">
                <div className="forum-title">Forum Title</div>
                <div className="forum-content">This is the content of the forum.</div>
            </div>
            <div className="forum">
                <div className="forum-title">Forum Title</div>
                <div className="forum-content">This is the content of the forum.</div>
            </div>
            <div className="forum">
                <div className="forum-title">Forum Title</div>
                <div className="forum-content">This is the content of the forum.</div>
            </div>
            <div className="forum">
                <div className="forum-title">Forum Title</div>
                <div className="forum-content">This is the content of the forum.</div>
            </div>
            <div className="forum">
                <div className="forum-title">Forum Title</div>
                <div className="forum-content">This is the content of the forum.</div>
            </div>
            <div className="forum">
                <div className="forum-title">Forum Title</div>
                <div className="forum-content">This is the content of the forum.</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home