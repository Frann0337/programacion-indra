export class Poligono {
    nombre: string;
    readonly cantidadLados: number;

    constructor(nombre: string, cantidadLados: number) {
        this.nombre = nombre;
        this.cantidadLados = cantidadLados;
    }

    private metodoPrivado() {
        console.log("Este es un método privado");
    }

    protected metodoProtegido() {
        this.metodoPrivado();
        console.log("Este es un método protegido");
    }       
    

}

class Cuadrado extends Poligono {
    lado: number;

    constructor(lado: number) {
        super("Cuadrado", 4);
        this.lado = lado;
    }

    calcularArea(): number {
        super.metodoProtegido();    
        return this.lado * this.lado;
    }


}

// Ejemplo de uso           


let p1 = new Poligono("Triángulo", 3);

p1.nombre = "Cuadrado";
//p1.cantidadLados = 4;

console.log(p1.nombre);
console.log(p1.cantidadLados);
//p1.metodoPrivado();

// uso de la clase derivada y el metodo protegido
const cuadrado = new Cuadrado(5);
console.log(`Nombre: ${cuadrado.nombre}`);
console.log(`Cantidad de Lados: ${cuadrado.cantidadLados}`);
console.log(`Área: ${cuadrado.calcularArea()}`);
// cuadrado.metodoPrivado();
// cuadrado.metodoProtegido();

