const express = require('express');
const multer = require('multer');
const Post = require('../models/post.js'); // Adjust the path as necessary
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});
const upload = multer({ storage });

// POST route to add a new post
router.post('/', upload.single('image'), async (req, res) => {
    const { author, content, title } = req.body;
    const image = req.file ? req.file.path : null;

    console.log('Incoming post data:', {
        author,
        content,
        title,
        image,
    });

    // Validate input
    if (!author || !content || !title || !image) {
        console.error('Validation failed: Missing fields', {
            author,
            content,
            title,
            image,
        });
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Generate a unique postId
        const uniquePostId = Date.now() + '-' + Math.random().toString(36).substr(2, 9); // Custom unique ID

        const newPost = new Post({ author, image, content, title, postId: uniquePostId });
        await newPost.save();
        console.log('Post saved successfully:', newPost);
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error saving post:', error);
        res.status(500).json({
            error: 'An error occurred while adding the post.',
            details: error.message,
            stack: error.stack,
        });
    }
});


// GET route to fetch all posts or posts by a specific user
// GET route to fetch all posts or a specific post by unique postId
router.get('/', async (req, res) => {
    const { username, postId } = req.query; // Get username and postId from query params

    try {
        let posts;
        
        if (postId) {
            // Fetch post by the specified unique postId
            posts = await Post.findOne({ postId }); // Use findOne to get a single post
            if (!posts) {
                return res.status(404).json({ error: 'Post not found.' });
            }
        } else if (username) {
            // Fetch posts only for the specified user
            posts = await Post.find({ author: username });
        } else {
            // Fetch all posts
            posts = await Post.find();
        }

        // If posts is an array, map over it; if it's a single post, wrap it in an array
        const postsWithImages = Array.isArray(posts)
            ? posts.map(post => ({
                ...post.toObject(),
                image: `http://localhost:5000/${post.image}` // Construct the full URL for the image
            }))
            : {
                ...posts.toObject(),
                image: `http://localhost:5000/${posts.image}` // Construct the full URL for the single post's image
            };

        res.json(postsWithImages);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'An error occurred while fetching posts.', details: error.message });
    }
});


module.exports = router;
