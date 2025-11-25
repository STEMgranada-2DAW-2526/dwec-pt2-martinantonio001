import { useState,useReducer,useContext } from 'react'
import { GameProvider } from './GameContext.jsx';
import { GameContext } from './GameContext.jsx';

function App() {
  // const {GameReducer} = useContext(GameContext);

  return (
    <>
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  )
}

export default App
