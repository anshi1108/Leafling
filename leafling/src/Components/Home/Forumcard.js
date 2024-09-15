import React from 'react';
import './Forumcard.css';

const ForumCard = ({ name, image, description }) => {
    return (
        <div className="forum-card">
            <img src={image} alt={name} className="forum-image" />
            <div className="forum-details">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ForumCard;
