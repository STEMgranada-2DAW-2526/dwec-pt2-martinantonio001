import { useState,useReducer,useContext } from 'react'
import { GameProvider } from './GameContext.jsx';
import { Game } from './Game.jsx';


function App() {

  return (
    <>
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  )
}

export default App
