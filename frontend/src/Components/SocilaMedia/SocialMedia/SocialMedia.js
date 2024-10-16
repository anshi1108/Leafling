import React, { useEffect, useState } from 'react';
import ForumNavbar from '../../Navbar/Navbar';
import SocialMediaSidebar from '../SocialMediaSidebar/SocialMediaSidebar';
// import Footer from '../../Footer/Footer';
import axios from 'axios';
import './SocilaMedia.css'; // Create this file for your styles

const SocialMedia = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts'); // Adjust the URL as needed
        setPosts(response.data);
      } catch (err) {
        setError('Error fetching posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <ForumNavbar />
      <div style={{ display: 'flex', height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
        {/* Sidebar on the left */}
        <div className="sidebarofSocials">
          <SocialMediaSidebar />
        </div>
        {/* Main content on the right */}
        <div className="flex-grow-1" style={{ overflowY: 'auto', padding: '20px' }}>
          {loading ? (
            <p>Loading posts...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="posts-container">
              {posts.map(post => (
                <div className="post-card" key={post._id}>
                  <img src={post.image} className="post-image" alt={post.title} />
                  <div className="post-body">
                    <h5 className="post-title">{post.title}</h5>
                    <p className="post-content">{post.content}</p>
                    <p className="post-author">
                      <small className="text-muted">Posted by {post.author}</small>
                    </p>
                    <div className="post-interactions">
                      <span className="likes">
                        <img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" alt="Like" className="interaction-icon" />
                        {post.likes ? post.likes : 0} Likes
                      </span>
                      <span className="comments">
                        <img src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png" alt="Comment" className="interaction-icon" />
                        {post.comments ? post.comments.length : 0} Comments
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;