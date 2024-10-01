// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const postsRouter = require('./routes/posts');
// const stripe = require('stripe')('your_stripe_secret_key');

const fetch = require('node-fetch');

// Import routes
// const postRoutes = require('./routes/posts.js');

// Constants
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'loginme'; // Change this to a secure secret in production

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app URL
  methods: ['GET', 'POST'],
  credentials: true
}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://sadneyasam05:root@cluster0.7gxwyxh.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  seller: Boolean,
  experience: String,
  interests: [String],
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
});

const User = mongoose.model('User', userSchema);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sadneyasam05@gmail.com', // Replace with your email
    pass: 'qqjq hwfv ingo wdkk', // Replace with your email password or app-specific password
  }
});

// Registration Route
app.post('/api/users/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a verification token
    const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await newUser.save();

    // Send verification email
    const verificationUrl = `http://localhost:5000/api/users/verify/${verificationToken}`;
    await transporter.sendMail({
      to: email,
      subject: 'Email Verification',
      text: `Please verify your email by clicking on the following link: ${verificationUrl}`,
    });

    res.status(201).json({ message: 'User registered successfully. Please check your email for verification.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

// Email Verification Route
app.get('/api/users/verify/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { email } = decoded;

    const user = await User.findOne({ email, verificationToken: token });
    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();

    res.sendFile(path.join(__dirname, 'public', 'verification-success.html'));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email verification failed' });
  }
});

// Info Submission Route
app.post('/api/users/info', async (req, res) => {
  const { email, phone, seller, experience, interests } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.phone = phone;
    user.seller = seller;
    user.experience = experience;
    user.interests = interests;
    await user.save();

    res.json({ message: 'Information updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating information' });
  }
});

// Login Route
app.post('/api/users/login', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user || !user.isVerified) {
          return res.status(401).json({ error: 'Invalid credentials or email not verified' });
      }

      const isMatch = await bcrypt.compare(password, user.password); // Compare plain password with hashed password
      if (!isMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while logging in' });
  }
});


// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the posts router
app.use('/api/posts', postsRouter);

// app.get('/proxy', (req, res) => {
//   const url = req.query.url;
//   request({ url, headers: { 'User-Agent': 'Mozilla/5.0' } }, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       res.send(body);
//     } else {
//       res.status(response.statusCode).send(error);
//     }
//   });
// });


// app.get('/api/plants', async (req, res) => {
//   const plantName = req.query.name;
//   const apiUrl = `https://trefle.io/api/v1/plants?token=YOUR_TOKEN&q=${plantName}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Error fetching data' });
//   }
// });
// Use post routes
// app.use('/api/posts', postRoutes);
// Payment Intent Route
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});




// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
