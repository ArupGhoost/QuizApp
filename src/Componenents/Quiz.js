import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

const Quiz = () => {
    
    const [currQuestion, setcurrQuestion] = useState(0);  //for array index value 
    const [optionChosen, setoptionChosen] = useState(""); // to show write or wrong answers
    const { score, setscore, setgameState } = useContext( QuizContext ); //stroring scores and updating it

    const nextQuestion = () => {
           if (Questions[currQuestion].answer == optionChosen){
               setscore(score + 1);
           }
          
           setcurrQuestion(currQuestion + 1); // to show slide to next questions
    };
    const finishQuiz = () =>{          //function to end and not moving forward or it will show an error
        if (Questions[currQuestion].answer == optionChosen){
            setscore(score + 1);
        }
        setgameState("endscreen");
    };
     
    useEffect(() => {
         alert('click on your answers')
    }, [])
    

    return (
        <>
        <div className="Quiz">
        <h1>{Questions[currQuestion].prompt}</h1>
         <div className="options">
            <button 
            onClick={() => {
                setoptionChosen("A")
            }}>{Questions[currQuestion].optionA}</button>
            <button onClick={() => {
                setoptionChosen("B")
            }}
            >{Questions[currQuestion].optionB}</button>
            <button onClick={() => {
                setoptionChosen("C")
            }}
            >{Questions[currQuestion].optionC}</button>
            <button onClick={() => {
                  setoptionChosen("D")
            }}
            >{Questions[currQuestion].optionD}</button>
         </div>
         {currQuestion == Questions.length - 1 ? (<button className="buttons" onClick={finishQuiz}>Finish Quiz</button>)
          : 
          ( <button className="buttons" onClick={nextQuestion}>Next Question</button>)}
        </div>
        </>
    )
}

export default Quiz
