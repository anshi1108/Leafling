import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'; // Import the CSS file

const CreatePost = () => {
    const [newPost, setNewPost] = useState({
        username: '',
        title: '',
        image: null,
        caption: '',
    });

    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setNewPost({
            ...newPost,
            image: e.target.files[0],
        });
    };

    const addPost = async (newPostData) => {
        const formData = new FormData();
        formData.append('author', newPostData.username);
        formData.append('title', newPostData.title);
        formData.append('image', newPostData.image);
        formData.append('content', newPostData.caption);

        try {
            const response = await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Post created successfully:', response.data);
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.username && newPost.title && newPost.image && newPost.caption) {
            addPost(newPost);
            setNewPost({ username: '', title: '', image: null, caption: '' });
        }
    };

    return (
        <div className="create-post-container">
            <h3>Create a Post</h3>
            <div className='formpost'
            >
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={newPost.username}
                        onChange={handleInputChange}
                        placeholder="Enter your username"
                        required
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="title"
                        value={newPost.title}
                        onChange={handleInputChange}
                        placeholder="Enter post title"
                        required
                        className="input-field"
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                        className="file-input"
                    />
                    {newPost.image && (
                        <div className="preview-image">
                            <img src={URL.createObjectURL(newPost.image)} alt="Preview" />
                        </div>
                    )}
                    <textarea
                        name="caption"
                        value={newPost.caption}
                        onChange={handleInputChange}
                        placeholder="Enter your caption"
                        required
                        className="textarea-field"
                    />
                    <button type="submit" className="submit-button">Submit Post</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
