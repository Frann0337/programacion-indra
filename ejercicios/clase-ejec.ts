export class Carro {
    ruedas: number;
    color: string;
    marca: string;

    constructor(ruedas: number, color: string, marca: string) {
        this.ruedas = ruedas;
        this.color = color;
        this.marca = marca;
    }

    encender() {
        console.log(`El carro esta encendido y es de la marca ${this.marca}`);
    }
}


let miCarro = new Carro(4, 'Rojo', 'Toyota');

miCarro.encender();