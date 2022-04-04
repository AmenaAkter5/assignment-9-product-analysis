import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container mx-auto">
            <div className="blog-container">
                <article className="article">
                    <h3 className="fw-bold blog-title">Context API</h3>
                    <p><b>Context</b> allows us to transfer data down the component tree without having to explicitly pass props at each level. Context API helps to share props within child components from parent component without 'prop drilling' process.</p>
                    <p>A React app can use the React <b>Context API</b> to generate global variables that can be passed around. So, this is the alternative of "prop drilling" which entails passing props from grandparent to child to parent and so on.
                        Context is also marketed as a simpler, lighter way to Redux state management. </p>
                </article>
                <article className="article">
                    <h3 className="blog-title fw-bold">HTML Semantic Elements</h3>
                    <p>According to w3 school, <b>Semantic elements = elements with a meaning.</b> Semantic elements are introduced in HTML5 version.</p>
                    <p>A semantic element is the meaningful element which is understandable to the browser and developer. It clearly describes its meaning. By this element we can understand what will be the content of this element.</p>
                    <p><b>non-semantic elements</b> like div and span - Tells nothing about its content. On the other hand <b>semantic elements</b> form, table, and article - Clearly defines its content.</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;