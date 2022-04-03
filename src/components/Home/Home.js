import React from 'react';
import logo from '../../images/logo.PNG';
import './Home.css';

const Home = () => {
    return (
        <div className="d-flex justify-content-between align-items-center container mx-auto my-5 py-3">
            <div className="w-50">
                <h1>Best android app to <br />
                    learn programming</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam optio libero vero non quos eveniet, voluptate suscipit autem et doloremque facilis a maxime adipisci facere. Dolorem labore consequatur in.</p>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Home;