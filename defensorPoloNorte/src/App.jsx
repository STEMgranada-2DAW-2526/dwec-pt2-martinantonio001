import { useState,useReducer,useContext } from 'react'
import { GameProvider } from './GameContext.jsx';
import { Game } from './Game.jsx';
import { UpgradesBoard } from './UpgradesBoard.jsx';


function App() {

  return (
    <>
      <GameProvider>
        <Game />
        <UpgradesBoard/>
      </GameProvider>
    </>
  )
}

export default App
