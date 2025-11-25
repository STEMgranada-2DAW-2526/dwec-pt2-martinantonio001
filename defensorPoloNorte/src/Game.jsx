import { useContext } from 'react';
import { GameContext } from './GameContext';
import canion_turron from "./assets/canion_turron.png";


export function Game({ }) {

    const {state,dispatch } = useContext(GameContext);
    return (
        <div>
            <div>Daño de oleada:{state.damageDealt}/{state.waveGoal}</div>
            <div>Numero de Caramelos:{state.caramels}</div>
            <div>Oleada:{state.numberWave}</div>

            <br />

            <button  onClick={() => dispatch({ type: 'CLICK_SHOOT' })}>
                <img className='img-fluid' src={canion_turron} />
            </button>
        </div>
    )
}