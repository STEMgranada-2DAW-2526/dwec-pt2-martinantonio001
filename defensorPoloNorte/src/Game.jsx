import { useContext } from 'react';
import { GameContext } from './GameContext';
import canion_turron from "./assets/canion_turron.png";
import cursorImg from "./assets/cursor.png";
import grandmaImg from "./assets/abuela.png";
import multiplierImg from "./assets/corre.png";

export function Game({ }) {

    const {GameReducer,state } = useContext(GameContext);
    return (
        <div>
            <div>Daño de oleada:{state.damageDealt}/{state.waveGoal}</div>
            <div>Numero de Caramelos:{state.caramels}</div>
            <div>Oleada:{state.numberWave}</div>

            <br />

            <button >
                <img className='img-fluid' src={canion_turron} />
            </button>
        </div>
    )
}