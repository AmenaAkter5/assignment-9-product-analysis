import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container mx-auto">
            <div className="blog-container">
                <article className="article">
                    <h2>This is Blog page</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque explicabo voluptate ipsum perferendis porro ratione, deleniti rem reprehenderit minus. Voluptates tempore vero libero quia at nisi animi consectetur voluptas labore.</p>
                </article>
                <article className="article">
                    <h2>This is Blog page</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque explicabo voluptate ipsum perferendis porro ratione, deleniti rem reprehenderit minus. Voluptates tempore vero libero quia at nisi animi consectetur voluptas labore.</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;