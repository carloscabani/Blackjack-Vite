import { pedirCarta, valorCarta } from "./";

/**
 * Función que controla el turno de la computadora.
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar. 
 * @param {HTMLElement} puntosHTML elementos HTML donde se muestran los puntos de la computadora.
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se muestran las cartas de la computadora.
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, deck, divCartasComputadora,  puntosHTML ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !deck || deck.length === 0 ) throw new Error('El deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

