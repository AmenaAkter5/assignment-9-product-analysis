import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import './Home.css';

const Home = () => {

    // data load state
    const [products, setProducts] = useState([]);
    console.log(products);

    // products data fetch
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // see all reviews button navigation
    const navigate = useNavigate();

    const seeAllReviews = () => {
        const path = `/reviews`;
        navigate(path);
    }

    return (
        <section className="container mx-auto">
            <div className="d-flex justify-content-between align-items-center my-5 py-3">
                <div className="w-50">
                    <h1 className="mb-4">Best android app to <br />
                        <span>learn programming</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam optio libero vero non quos eveniet, voluptate suscipit autem et doloremque facilis a maxime adipisci facere. Dolorem labore consequatur in.</p>
                    <button>Live Demo</button>
                </div>
                <div>
                    <img className="rounded rounded-5" src={logo} alt="" />
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-center">User Reviews</h2>
                <button onClick={seeAllReviews}>See All Reviews</button>
            </div>
        </section>
    );
};

export default Home;