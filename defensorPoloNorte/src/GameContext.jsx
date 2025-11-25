import React, { createContext, useReducer, useEffect, useState } from 'react';

export const GameContext = createContext();
const INITIAL_STATE = {
    damageDealt: 100,
    waveGoal: 100,
    caramels: 20,
    DamagePerShot: 1,
    numberWave: 1,
    autoShotsPerSecond: 1,
    PrecioMultiplicadorDisparos:10,
    daniooexplosion:0,
    precioexplosion:15,
    daniorenos:0,
    preciorenos:30,
    danioarbol:0,
    precioarbol:50,
}




export function GameProvider({ children }) {



    function GameReducer(state, action) {
        let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
            outputState = { ...state, damageDealt: state.damageDealt + state.DamagePerShot +state.daniooexplosion+state.daniorenos+state.danioarbol}
        } else if (action.type == 'AUTO_SHOOT') {
            outputState =
            {
                ...state,
                damageDealt: state.damageDealt + (state.autoShotsPerSecond * state.DamagePerShot)+state.daniooexplosion+state.daniorenos+state.danioarbol
            }
            if(state.damageDealt>=state.waveGoal){
                outputState={
                    ...state,
                    damageDealt:0,
                    waveGoal:Math.round(state.waveGoal*1.1),
                    caramels:state.caramels+10,
                    numberWave:state.numberWave+1
                }

            }



        }else if(action.type == 'BUY_MULTIPLIER'){

            if(state.caramels>=state.precioexplosion){

                outputState={
                    ...state,
                    autoShotsPerSecond:state.autoShotsPerSecond+1,
                    caramels:state.caramels-state.PrecioMultiplicadorDisparos
                }


            }

        }
        else if(action.type == 'BUY_CANON_EXPLOSIVO'){

            if(state.caramels>=state.PrecioMultiplicadorDisparos){

                outputState={
                    ...state,
                    daniooexplosion:state.daniooexplosion+1,
                    caramels:state.caramels-state.daniooexplosion
                }


            }

        }else if(action.type == 'BUY_RENOS'){

            if(state.caramels>=state.preciorenos){

                outputState={
                    ...state,
                    daniorenos:state.daniorenos+5,
                    caramels:state.caramels-state.preciorenos
                }


            }

        }
        else if(action.type == 'BUY_ARBOL'){

            if(state.caramels>=state.precioarbol){

                outputState={
                    ...state,
                    danioarbol:state.danioarbol+10,
                    caramels:state.caramels-state.precioarbol
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

