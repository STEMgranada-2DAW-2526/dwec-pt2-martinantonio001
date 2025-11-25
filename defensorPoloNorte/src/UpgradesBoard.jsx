import { useContext } from 'react';
import { GameContext } from './GameContext';



export function UpgradesBoard({ }) {

    const {state,dispatch } = useContext(GameContext);
    return (<>
        <div>
            <p>Botones de mejora</p>
        </div>

        <div>
            <p>Multiplicador de Disparos</p>
            
        </div>
        </>
    )
}