import React, { createContext, useReducer, useEffect, useState } from 'react';

export const GameContext = createContext();

const INITIAL_STATE = {
  damageDealt:0,
  waveGoal:100,
  caramels:20,
  DamagePerShot:1,
  autoShotsPerSecond:1,
  upgrades:[],
}

function GameReducer(){

    
}



export function GameProvider({ children }) {

    const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE)
    return (
        <>
            <GameContext.Provider value={{ GameReducer }}>

            </GameContext.Provider>
        </>
    )
    
}

