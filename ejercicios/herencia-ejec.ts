export class Poligono {
    nombre: string;
    cantidadLados: number;

    constructor(nombre: string, cantidadLados: number) {
        this.nombre = nombre;
        this.cantidadLados = cantidadLados;
    }
}


export class Pentagono extends Poligono {
    lado: number;

    constructor(lado: number) {
        super("Pentágono", 5);
        this.lado = lado;
    }

    calcularPerimetro(): number {
        return this.lado * this.cantidadLados;
    }
}

// Ejemplo de uso
const pentagono = new Pentagono(6);
console.log(`Nombre: ${pentagono.nombre}`);
console.log(`Cantidad de Lados: ${pentagono.cantidadLados}`);
console.log(`Perímetro: ${pentagono.calcularPerimetro()}`);