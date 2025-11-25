import React, { createContext, useReducer, useEffect, useState } from 'react';

export const GameContext = createContext();





export function GameProvider({ children }) {

    const INITIAL_STATE = {
    damageDealt:0,
    waveGoal:100,
    caramels:20,
    DamagePerShot:1,
    numberWave:1,
    autoShotsPerSecond:1,
    upgrades:[],
    }

    function GameReducer(){
        let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
        outputState = { ...state, damageDealt: state.damageDealt + state.DamagePerShot }
        }
        

        return outputState;
        
    }




    const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE)
    return (
        <>
            <GameContext.Provider value={{ GameReducer,state,dispatch }}>
                {children}
            </GameContext.Provider>
        </>
    )
    
}

