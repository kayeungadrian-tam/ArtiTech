import React, { useState } from 'react';

import '../assets/css/blog.css';
import { Header } from '../components/header';

const BlogPost = () => {
    const [likes, setLikes] = useState(0);
    const [unlikes, setUnlikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleUnlike = () => {
        setUnlikes(unlikes + 1);
    };

    return (
        <div className="blog-post">
            <Header />
            <div className="header-section">
                <h2 className="title">Title of the Blog Post</h2>
                <h3 className="subtitle">Subtitle of the Blog Post</h3>
            </div>

            <div className="social-section">
                <button className="like-button" onClick={handleLike}>
                    Like ({likes})
                </button>
                <button className="unlike-button" onClick={handleUnlike}>
                    Unlike ({unlikes})
                </button>
            </div>

            <div className="thumbnail">
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" /></div>

            <div className="blog-content">
                {/* Your blog post content goes here */}
            </div>
        </div>
    );
};

export default BlogPost;