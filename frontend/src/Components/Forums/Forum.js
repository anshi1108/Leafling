import React from "react";
import Navbar from "../Navbar/Navbar";
import Chatbot from "../ChatBot/Chatbot";
import { useState } from "react";
import "./Forum.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Forum = () => {
    const [isChatbotOpen, setChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setChatbotOpen(!isChatbotOpen);
    };

    const posts = [
        {
            id: 1,
            title: "How to care for cactuses?",
            content: "Cactuses require very little water and thrive in bright sunlight. Make sure to let the soil dry out completely between watering.",
            author: "CactusLover",
            profilePic: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcb60d23-fd08-4eba-aa07-a4985ca65474_1024x1024.jpeg",
            likes: 15,
            comments: [
                { user: "GreenThumb", text: "I've noticed my cactus blooms beautifully with the right light!" },
                { user: "SpikyFan", text: "Remember, less is more when it comes to watering!" }
            ]
        },
        {
            id: 2,
            title: "Best indoor cactuses for beginners",
            content: "Consider getting a bunny ear cactus or a Christmas cactus. They're perfect for beginners and add a unique touch to your home!",
            author: "CactusExplorer",
            profilePic: "https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg",
            likes: 10,
            comments: [
                { user: "NewbieGardener", text: "The bunny ear cactus is so cute!" },
                { user: "PlantNerd", text: "I love my Christmas cactus; it blooms beautifully!" }
            ]
        },
        {
            id: 3,
            title: "Why is my cactus turning yellow?",
            content: "Yellowing could indicate overwatering. Ensure proper drainage and try not to water too frequently.",
            author: "CactusConcerned",
            profilePic: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
            likes: 18,
            comments: [
                { user: "CaringPlant", text: "Check the roots! It might be root rot." },
                { user: "PlantDoctor", text: "Make sure it’s getting enough sunlight!" }
            ],
            adviceImage: "https://m.media-amazon.com/images/I/71A6Vo832nL._AC_UF894,1000_QL80_.jpg" // Image related to advice
        },
        {
            id: 4,
            title: "Fertilizing tips for cactuses",
            content: "Use a cactus fertilizer during the growing season to give them the nutrients they need. A diluted cactus fertilizer works best.",
            author: "FertilizerFanatic",
            profilePic: "https://cdn.pixabay.com/photo/2023/08/08/15/01/flower-8177578_640.jpg",
            likes: 7,
            comments: []
        },
        {
            id: 5,
            title: "Creating a cactus garden",
            content: "Cactus gardens can be a stunning addition to any outdoor space. Group different varieties for a visually appealing display!",
            author: "GardenDesigner",
            profilePic: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcb60d23-fd08-4eba-aa07-a4985ca65474_1024x1024.jpeg",
            likes: 12,
            comments: [
                { user: "GardenLover", text: "I want to create one on my balcony!" }
            ]
        },
        {
            id: 6,
            title: "How to propagate cactuses",
            content: "Propagation can be done using offsets or cuttings. Use a clean knife and let the cut end dry out before planting.",
            author: "PropagationPro",
            profilePic: "https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg",
            likes: 8,
            comments: []
        },
    ];

    const trendyTopics = [
        { text: "🌵 Best Cactus Care Tips", icon: "⭐" },
        { text: "💡 Indoor Cactus Hacks", icon: "🔥" },
        { text: "🌍 Eco-Friendly Cactus Gardening", icon: "🌱" },
        { text: "🥗 Plant-Based Diets with Cactuses", icon: "🥑" },
        { text: "🪴 Popular Cactus Varieties", icon: "🌼" },
    ];

    return (
        <>
            <Navbar />

            {isChatbotOpen && (
                <div className="forum-chatbot-popup">
                    <Chatbot />
                    <button onClick={toggleChatbot} className="forum-close-chatbot-button">
                        Close
                    </button>
                </div>
            )}

            <div className="forum-container mt-5">
                {/* Left Sidebar */}
                <div className="forum-sidebar">
                    <h4>Trendy Topics</h4>
                    <ul className="list-group">
                        {trendyTopics.map((topic, index) => (
                            <li key={index} className="forum-list-group-item">
                                <span>{topic.icon} {topic.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Forum Posts */}
                <div className="forum-content">
                    <h2>
                        <img src="https://www.aravalii.com/cdn/shop/products/plantersbaravaliijan14-16_0058_DSC_1757.jpg" alt="Cactus" className="forum-cactus-img-small me-2" />
                        Cactus Discussions
                    </h2>
                    {posts.map(post => (
                        <div key={post.id} className="forum-card mb-3">
                            <div className="forum-card-body">
                                <div className="d-flex align-items-center">
                                    <img src={post.profilePic} alt="Profile" className="forum-profile-pic-small me-2" />
                                    <div>
                                        <h5 className="forum-card-title">{post.title}</h5>
                                        <p className="forum-card-text">{post.content}</p>
                                        <p className="forum-card-text"><small className="text-muted">Posted by {post.author}</small></p>
                                    </div>
                                </div>
                                {post.adviceImage && (
                                    <img src={post.adviceImage} alt="Advice" className="forum-advice-img-small mt-3" />
                                )}
                                <div className="forum-interaction mt-2">
                                    <span className="me-3">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png" alt="Like" className="forum-icon" /> {post.likes}
                                    </span>
                                    <span>
                                        <img src="https://cdn-icons-png.flaticon.com/128/6460/6460733.png" alt="Comment" className="forum-icon" /> {post.comments.length}
                                    </span>
                                </div>
                                <div className="forum-comments-section mt-3">
                                    {post.comments.length > 0 ? (
                                        post.comments.map((comment, index) => (
                                            <div key={index} className="forum-comment ms-4">
                                                <strong>{comment.user}</strong>: {comment.text}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="forum-no-comments">No comments yet.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Forum;
