export let contador = 0;
export let esCompleto = false;

while ( esCompleto === false ) {
    console.log(`Contador es: ${contador}`);
    if ( contador === 100 ) {
        esCompleto = true;
    }
    contador++;
}