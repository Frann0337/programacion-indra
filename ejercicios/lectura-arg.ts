var argumentos = process.argv.slice(2);
console.log("Argumentos de la línea de comandos:", argumentos);

let v1 = Number( argumentos[0] );
let v2 = Number( argumentos[1] );

console.log( v1 + v2 );