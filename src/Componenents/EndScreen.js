import React from 'react';
import { useState, useContext } from 'react';
import {Questions} from "../Helpers/QuestionBank";
import { QuizContext } from '../Helpers/Contexts';

const EndScreen = () => {
    const {  setgameState, score, setscore } = useContext(QuizContext); //display the score without adding plus values (:imp)
    
    const displayMenu = () => {
        setscore(0);
        setgameState("menu");
    }

    return (
        <>
        <div className="Endscreen">
            <h1>Quiz Finished</h1>
            <h3>Score: {score}/{Questions.length}</h3>
            <button onClick={displayMenu}>Restart Quiz</button>
        </div>
        </>
    )
}

export default EndScreen
