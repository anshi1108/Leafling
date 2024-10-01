// src/components/ForumCard.jsx
import React from 'react';
import './Forumcard.css';

const ForumCard = ({ name, image, description }) => {
    return (
        <div className="forum-card">
            <div className="forum-image">
                <img src={image} alt="Forum" />
            </div>
            <div className="forum-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ForumCard;
