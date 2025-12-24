// Definir clase de vehiculo
export abstract class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    abstract describir(): string;
}

export class Coche extends Vehiculo {
    kilometraje: number; 

    constructor(marca: string, modelo: string, kilometraje: number) {
        super(marca, modelo);
        this.kilometraje = kilometraje;
    }
    describir(): string {
        return `Este coche es un ${this.marca} ${this.modelo} con ${this.kilometraje} km.`;
    }
   
    actualizarKilometraje(kms: number): void {
        this.kilometraje += kms;
        console.log(`Nuevo kilometraje: ${this.kilometraje}`);
    }
}

const miCoche = new Coche("Toyota", "Corolla", 50000); 
console.log(miCoche.describir());
miCoche.actualizarKilometraje(250);