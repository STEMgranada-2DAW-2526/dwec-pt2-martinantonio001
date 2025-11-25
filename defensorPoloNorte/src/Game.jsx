import { useContext } from 'react';
import { GameContext } from './GameContext';

export default function Game({ valor }) {

    const { casillas, setCasillaApostada } = useContext(GameContext);

    return (
        <div>
            
        </div>
    )
}