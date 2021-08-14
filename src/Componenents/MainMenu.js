import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

const MainMenu = () => {
    const {gameState, setgameState} = useContext(QuizContext);
     
    return (
        <>
        <div className='Menu'>
        <button onClick={() => {
            setgameState("quiz")
        }}>Start Quiz</button>
        </div>
        </>
    )
}

export default MainMenu
