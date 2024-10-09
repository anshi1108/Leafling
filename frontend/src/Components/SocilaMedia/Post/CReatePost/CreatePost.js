// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        formData.append('author', newPostData.username); // Change from 'username' to 'author'
        formData.append('title', newPostData.title);
        formData.append('image', newPostData.image);
        formData.append('content', newPostData.caption); // Change from 'caption' to 'content'

        // Log FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Post created successfully:', response.data);
            // navigate('/'); // Redirect to the home page after successful post creation
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.username && newPost.title && newPost.image && newPost.caption) {
            addPost(newPost); // Call addPost to send data to the backend
            setNewPost({ username: '', title: '', image: null, caption: '' }); // Clear form inputs
        }
    };

    return (
        <div className="create-post">
            <h3>Create a Post</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={newPost.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                    required
                />
                <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    placeholder="Enter post title"
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
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
                />
                <button type="submit">Submit Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
