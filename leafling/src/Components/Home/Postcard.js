// PostCard.js
import React from 'react';
import './Postcard.css';

const PostCard = ({ username, image, caption }) => {
    return (
        <div className='post-card'>
            <div className='post-header'>{username}</div>
            <img src={image} alt='Post' className='post-image' />
            <div className='post-actions'>
                <button className='action-button'>
                    <img src='https://cdn-icons-png.flaticon.com/128/1077/1077086.png' alt='Like' />
                </button>
                <button className='action-button'>
                    <img src='https://cdn-icons-png.flaticon.com/128/134/134718.png' alt='Comment' />
                </button>
                <button className='action-button'>
                    <img src='https://cdn-icons-png.flaticon.com/128/10550/10550076.png' alt='Share' />
                </button>
            </div>
            <div className='post-caption'>{caption}</div>
        </div>
    );
}

export default PostCard;
