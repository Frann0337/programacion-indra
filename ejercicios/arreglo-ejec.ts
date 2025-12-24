export let numeroFavorito: number;

let flores = [];

flores = ['Rosa', 'Margarita', 'Tulipan', 'Girasol'];
//         0          1          2          3


console.log(flores[4]);

for (let index = 0; index < flores.length; index++) {
    console.log(`Flor en posicion ${index} es: ${flores[index]}`);
}

let i = 0;
while ( flores[i] !== undefined ) {
    console.log(`Flor en posicion ${i} es: ${flores[i]}`);
    i++;
}