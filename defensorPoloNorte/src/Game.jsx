import { useState,useReducer,useContext } from 'react'
import { GameProvider } from './GameContext.jsx';
import { GameContext } from './GameContext';

function Game() {
  const {GameReducer} = useContext(GameContext);

  return (
    <>
      <GameProvider>
        <div>Daño de oleada:{state.damageDealt}/{state.waveGoal}</div>   

      </GameProvider>
    </>
  )
}

export default Game
