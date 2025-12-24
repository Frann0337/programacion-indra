export let carro = {
    ruedas: 4,
    color: 'rojo',
    marca: 'Toyota',
    puertas: 4,
    traccion: '4x2',
    encender: function() {
        console.log('El carro esta encendido');
    }
}


// console.log(carro.color);
// console.log(carro.marca);

carro.color = 'Azul';

carro.encender();


let galleta = {
    sabor: 'chocolate',
    tamaño: 'grande',
    tipos: ['chispas de chocolate', 'avena', 'azucar' ]
}


console.log(galleta.tipos[1]);
