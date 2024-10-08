// models/post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }, // Path to the image
    postId: { type: String, unique: true }, // Custom unique field (optional)
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
