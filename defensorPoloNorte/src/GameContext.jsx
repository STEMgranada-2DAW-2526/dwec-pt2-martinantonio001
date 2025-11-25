import React, { createContext, useReducer, useEffect, useState } from 'react';

export const GameContext = createContext();
const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    caramels: 20,
    DamagePerShot: 1,
    numberWave: 1,
    autoShotsPerSecond: 1,
    upgrades: [],
}




export function GameProvider({ children }) {



    function GameReducer(state, action) {
        let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
            outputState = { ...state, damageDealt: state.damageDealt + state.DamagePerShot }
        } else if (action.type == 'AUTO_SHOOT') {
            outputState =
            {
                ...state,
                damageDealt: state.damageDealt + (state.autoShotsPerSecond * state.DamagePerShot)
            }
            if(state.damageDealt>=waveGoal){
                outputState={
                    ...state,
                    damageDealt:0,



                }

            }



        }
        return outputState;

    }
    useEffect(() => {
        let timer = setInterval(() => {
            dispatch({ type: 'AUTO_SHOOT' })
        }, 1000);

        return () => clearInterval(timer)
    }, []);

    
    const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE)

    return (
        <>
            <GameContext.Provider value={{ state, dispatch }}>
                {children}
            </GameContext.Provider>
        </>
    )

}

