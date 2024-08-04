const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sadneyasam05:root@cluster0.7gxwyxh.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String }
});

const User = mongoose.model('User', userSchema);

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sadneyasam05@gmail.com',
        pass: 'qqjq hwfv ingo wdkk' // Replace with your actual app password
    }
});

// Registration Route
app.post('/api/users/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString('hex');

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            verificationToken
        });

        await newUser.save();

        // Send verification email
        const verificationLink = `http://localhost:5000/verify/${verificationToken}`;
        await transporter.sendMail({
            from: 'sadneyasam05@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Please verify your email by clicking the following link: ${verificationLink}`
        });

        res.status(201).json({ message: 'User registered successfully. Please check your email for verification link.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Email Verification Route
app.get('/verify/:token', async (req, res) => {
    const { token } = req.params;
    try {
        const user = await User.findOne({ verificationToken: token });
        if (!user) return res.status(400).json({ error: 'Invalid token' });

        user.isVerified = true;
        user.verificationToken = undefined; // Clear the verification token
        await user.save();

        // Serve success page
        res.sendFile(path.join(__dirname, 'public', 'verification-success.html'));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login Route
app.post('/api/users/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        if (!user.isVerified) return res.status(400).json({ error: 'Please verify your email before logging in' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
