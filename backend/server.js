// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const postsRouter = require('./routes/posts');
const { error } = require('console');
const { type } = require('os');
const multer = require("multer")
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
mongoose.connect('mongodb+srv://sadneyasam05:root@cluster1.zxxgt.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000
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
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
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

    let cart ={};
  for(let i=0;i<300;i++){
    cart[i]=0;
  }
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      cartData:cart,
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


const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload =multer({storage:storage})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})

// Schema for creating products
const Product= mongoose.model("product",{
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number,
      required: true,
    },
    old_price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    available: {
      type: Boolean,
      default: true,
    },
  });
  
  
  app.post('/addproduct', async (req, res) => {
    const product = new Product({
      id:req.body.id,
      name:req.body.name,
      image:req.body.image,
      category:req.body.category,
      old_price:req.body.old_price,
      new_price:req.body.new_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      succes:true,
      name:req.body.name,
    })
  });

//craeting API for deleting products

app.post('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating API for getting alll products
app.get('/getproducts', async (req, res) => {
  try {
      const products = await Product.find(); // Assuming you're using a Product model
      res.json(products);
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/newcollection',async(req,res)=>{
  let products = await Product.find({});
  let newcollection =products.slice(1).slice(-8);
  console.log("Newcollection Fetched Successfully!")
  res.send(newcollection);
})

app.get('/popularwomen',async (req,res)=>{
  let products = await Product.find({category:"women"});
  let popular_in_women =products.slice(0,4);
  console.log("Popular in women fetched successfully!")
  res.send(popular_in_women)
})

// fetch user
const fetchuser =async(req,res,next)=>{
  const token =req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"Please authenticate"})
  }
  else{
    try{
      const data =jwt.verify(token,'secret_ecom')
      req.user =data.user;
      next()
    }catch(error){
      req.status(401).send({errors:"please authenticate"})
    }
  }
}
//add products
app.post('/addtocart',fetchuser,async(req,res)=>{
  // console.log(req.body);
  console.log("added");
  let userData =await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Added")
})


//remove product
app.post('/removefromcart',fetchuser,async(req,res)=>{
  console.log("removed");
  let userData =await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId]>0){
  userData.cartData[req.body.itemId]-=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
 
  }
})

app.post('/getcart',fetchuser,async(req,res)=>{
 console.log("Getcart");
 let userData= await Users.findOne({_id:req.user.id})
 res.json(userData.cartData)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
