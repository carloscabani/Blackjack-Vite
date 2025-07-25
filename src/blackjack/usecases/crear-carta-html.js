
/**
 * @param {String} carta
 * returns {HTMLImageElement} imagen en formato HTML.
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('La carta es necesaria');
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}