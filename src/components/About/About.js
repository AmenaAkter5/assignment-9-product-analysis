import React from 'react';
import question from '../../images/question.jpg';

const About = () => {
    return (
        <div className="container mx-auto my-5">
            <div className="text-center">
                <img width={350} src={question} alt="" />
                <h2 className="mt-5">Wanna know About us?</h2>
                <h3>Okay, lets make call at 999.</h3>
            </div>
        </div>
    );
};

export default About;