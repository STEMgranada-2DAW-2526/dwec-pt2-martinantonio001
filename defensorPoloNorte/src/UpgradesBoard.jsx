import { useContext } from 'react';
import { GameContext } from './GameContext';



export function UpgradesBoard({ }) {

    const {state,dispatch } = useContext(GameContext);
    return (<>
        <div>
            <p>Botones de mejora</p>
        </div>

        <div onClick={() => dispatch({ type: 'BUY_MULTIPLIER' })}>
            <p>Multiplicador de Disparos</p>
            <p>Multiplicador Actual:{state.autoShotsPerSecond}</p>
            <p>Precio:{state.PrecioMultiplicadorDisparos}</p>
        </div>

        <div onClick={() => dispatch({ type: 'BUY_CANON_EXPLOSIVO' })}>
            <p>Cañon Explosivo</p>
            <p>Daño Extra:{state.daniooexplosion}</p>
            <p>Precio:{state.precioexplosion}</p>
        </div>

        <div onClick={() => dispatch({ type: 'BUY_RENOS' })}>
            <p>Renos-Lanzamisiles</p>
            <p>Daño Extra:{state.daniorenos}</p>
            <p>Precio:{state.preciorenos}</p>
        </div>
        </>
    )
}