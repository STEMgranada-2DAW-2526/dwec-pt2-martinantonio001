import { useState,useReducer,useContext } from 'react'

export const GameContext = createContext();

const INITIAL_STATE = {
  
}


function GameProvider() {

    const [state, dispatch] = useReducer(cookieReducer, INITIAL_STATE)
    return (
        <>
        <GameContext.Provider value={{  }}>
                {children}
            </GameContext.Provider>
        </>
    )
    
}