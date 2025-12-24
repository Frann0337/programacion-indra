// automovil//
 
export class Motor {
    tipo: string;
    caballos: number;
    constructor(tipo :string, caballos :number) {
        this.tipo = tipo;
        this.caballos = caballos;
    }
}
 
export class Vehiculo {
    marca: string;
    modelo: string;
    motor: Motor;
    constructor(marca :string, modelo :string, motor :Motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor; // composición
    }
 
    infoCompleta() {
        return `${this.marca} ${this.modelo} - Motor: ${this.motor.tipo}, ${this.motor.caballos} HP`;
    }
}
 
