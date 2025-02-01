import React from 'react';
import './Question.css';  // Import the CSS

const Question = ({ options, onAnswer }) => {
    // Check if options is defined and is an array
    if (!Array.isArray(options) || options.length === 0) {
        return <div>No options available.</div>; // Fallback UI
    }

    return (
        <div className="question-container">
            {options.map((option) => (
                <button 
                    key={option.id || Math.random()} // Use a fallback if id is missing
                    onClick={() => onAnswer(option.is_correct)} // Pass is_correct to determine correctness
                    className="option-button"
                >
                    {option.description || 'Option'} {/* Fallback to 'Option' if description is missing */}
                </button>
            ))}
        </div>
    );
};

export default Question;
