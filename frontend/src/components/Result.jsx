import React from 'react';
import './Result.css';  // Make sure to import the CSS
import Dog from "../assets/gif.gif"
const Result = ({ score, totalQuestions }) => {
    return (
        <div className="result-container">
            <h2 className="result-title">Quiz Completed!</h2>
            <p className="result-score">
                Your score: <span>{score}</span> out of {totalQuestions}
            </p>
            <div className="happy-dog-container">
                <img src={Dog} alt="Happy Dog" className="happy-dog" />
            </div>
        </div>
    );
};

export default Result;
