import React, { useState, useEffect } from 'react';
import { fetchQuizData } from '../api/quizApi';
import Question from './Question';
import Result from './Result';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component
import "./Quiz.css"

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const getQuizData = async () => {
            const data = await fetchQuizData();
            if (data) {
                console.log('Fetched Quiz Data:', data); // Log the entire data
                setQuizData(data.questions);
            }
        };
        getQuizData();
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    if (quizCompleted) {
        return <Result score={score} totalQuestions={quizData.length} />;
    }

    if (!quizData.length) {
        return <div>Loading...</div>;
    }

    // Log the current question and its options
    const currentQuestion = quizData[currentQuestionIndex];
    console.log('Current Question:', currentQuestion);
    console.log('Options:', currentQuestion.options); // Log the options

    return (
        <div>
            <ProgressBar 
                currentQuestionIndex={currentQuestionIndex} 
                totalQuestions={quizData.length} 
            />
            <h2>{currentQuestion.description}</h2>
            <Question 
                options={currentQuestion.options} // Use options instead of answers
                onAnswer={handleAnswer} 
            />
        </div>
    );
};

export default Quiz;