import { useContext } from 'react';
import { GameContext } from './GameContext';
import arbol_laser from "./assets/arbol_laser.png";
import canion_turron from "./assets/canion_turron.png";
import multiplicador from "./assets/multiplicador.png";
import reno_lanza_cohetes from "./assets/reno_lanza_cohetes.png";



export function UpgradesBoard({ }) {

    const {state,dispatch } = useContext(GameContext);
    return (<>
        <div>
            <p>Botones de mejora</p>
        </div>
        <div className="row">
        <div className="col-3" onClick={() => dispatch({ type: 'BUY_MULTIPLIER' })}>
            <img className='img-fluid' src={multiplicador} />
            <p>Multiplicador de Disparos</p>
            <p>Multiplicador Actual:{state.autoShotsPerSecond}</p>
            <p>Precio:{state.PrecioMultiplicadorDisparos}</p>
        </div>

        <div className="col-3" onClick={() => dispatch({ type: 'BUY_CANON_EXPLOSIVO' })}>
            <img className='img-fluid' src={canion_turron} />
            <p>Cañon Explosivo</p>
            <p>Daño Extra:{state.daniooexplosion}</p>
            <p>Precio:{state.precioexplosion}</p>
        </div>

        <div className="col-3" onClick={() => dispatch({ type: 'BUY_RENOS' })}>
            <img className='img-fluid' src={reno_lanza_cohetes} />
            <p>Renos-Lanzamisiles</p>
            <p>Daño Extra:{state.daniorenos}</p>
            <p>Precio:{state.preciorenos}</p>
        </div>

        <div className="col-3" onClick={() => dispatch({ type: 'BUY_ARBOL' })}>
            <img className='img-fluid' src={arbol_laser} />
            <p>Arbol Laser</p>
            <p>Daño Extra:{state.danioarbol}</p>
            <p>Precio:{state.precioarbol}</p>
        </div>
        </div>
        </>
    )
}