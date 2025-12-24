// class Triangulo {
//     base: number 
//     altura: number 
//     lado1: undefined | any 
//     lado2: any 
//     lado3: any 
//     constructor(base: number, altura: number, lado1: any , lado2 :any, lado3 :any) {
//         this.base = base;
//         this.altura = altura;
//         this.lado1 = lado1;
//         this.lado2 = lado2;
//         this.lado3 = lado3;
//     }
 
//    calcularArea() {
//         return (this.base * this.altura) / 2;
//     }
// }
// // como usarlo //
// const triangulo = new Triangulo(10, 5, 8, 6, 7 );
 
// console.log("=== Datos del Triángulo ===");
// console.log("Base:", triangulo.base);
// console.log("Altura:", triangulo.altura);
// console.log("Lados:", triangulo.lado1, triangulo.lado2, triangulo.lado3);
// console.log("Área del triángulo:", triangulo.calcularArea());


//----------
export class Triangulo { 
  base: number 
  altura: number 
  lado1: number 
  lado2: number 
  lado3: number 
  
  constructor(base: number, altura: number, lado1: number = 0, lado2: number = 0, lado3: number = 0) { 
    this.base = base 
    this.altura = altura 
    this.lado1 = lado1 
    this.lado2 = lado2 
    this.lado3 = lado3 
  } 
  
  calcularArea() { 
    return (this.base * this.altura) / 2 
  } 
} 
  
// let t1 = new Triangulo(10, 5) 
// let t2 = new Triangulo(8, 4, 5, 5, 6) 
  
// console.log(t1.calcularArea()) 
// console.log(t2.calcularArea()) 
// console.log(t2.lado3)

export class Cuadrado { 
  lado: number 
  
  constructor(lado: number) { 
    this.lado = lado 
  } 
}