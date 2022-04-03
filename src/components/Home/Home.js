import React from 'react';
import logo from '../../images/logo.PNG';
import './Home.css';

const Home = () => {
    return (
        <section className="container mx-auto">
            <div className="d-flex justify-content-between align-items-center my-5 py-3">
                <div className="w-50 pe-3">
                    <h1 className="mb-4">Best android app to <br />
                        <span>learn programming</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam optio libero vero non quos eveniet, voluptate suscipit autem et doloremque facilis a maxime adipisci facere. Dolorem labore consequatur in.</p>
                </div>
                <div>
                    <img className="rounded rounded-5" src={logo} alt="" />
                </div>
            </div>
            <div className="my-4">
                <h1 className="text-center">Customer Reviews</h1>
            </div>
        </section>
    );
};

export default Home;