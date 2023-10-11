import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * Funcion para crear un deck
 * @param {Array<String>} tiposDeCarta 
 * @param {ArraySstring>}} tiposEspeciales 
 * @returns {Array}
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {


    if ( !tiposDeCarta || tiposEspeciales.lencth === 0) 
    throw new Error('TiposDeCarta es obligatorio');
    
    if ( !tiposEspeciales || tiposDeCarta.length === 0 ) 
    throw new Error ('TipoEspeciales es obligatorio como un arreglo de string')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

export default crearDeck; 