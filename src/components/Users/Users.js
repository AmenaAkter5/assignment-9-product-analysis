import React from 'react';
import './Users.css';

const Users = ({ user }) => {

    const { name, img, ratings, review } = user

    return (
        <div className="user-reviews px-3">
            <div className="d-flex justify-content-center pt-3 mb-3">
                <img src={img} alt="" />
            </div>
            <h5 className="text-center fw-bold ratings">{ratings}</h5>
            <h3 className="text-center fw-bold mb-3">{name}</h3>
            <p>{review}</p>
        </div>
    );
};

export default Users;