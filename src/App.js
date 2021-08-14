import React, { useState } from 'react';
import './App.css';
import MainMenu from './Componenents/MainMenu';
import Quiz from './Componenents/Quiz';
import EndScreen from './Componenents/EndScreen';
import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setgameState] = useState("menu"); //for changing menu to quiz and endscreen
  const [score, setscore] = useState(0);  //global score for showing results
  

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setgameState, score, setscore}}>  {/* for use context purpose*/}
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endscreen" && <EndScreen />}
     </QuizContext.Provider>

    </div>
  );
}

export default App;
