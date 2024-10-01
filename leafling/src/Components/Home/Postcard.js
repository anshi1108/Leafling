// src/components/Postcard.jsx
import React from 'react';
import './Postcard.css';

const PostCard = ({ username, image, caption }) => {
    return (
        <div className="post-card">
            <div className="post-header">
                <strong>{username}</strong>
            </div>
            <div className="post-image">
                <img src={image} alt="Post" />
            </div>
            <div className="post-caption">
                <p>{caption}</p>
            </div>
        </div>
    );
};

export default PostCard;
