import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <Link className="title" to="/">Code Man</Link>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;