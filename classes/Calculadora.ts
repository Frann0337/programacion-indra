// Clase Calculadora
export class Calculadora {
    private num1: number;
    private num2: number;
 
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }
 
    // Suma
    sumar(): number {
        return this.num1 + this.num2;
    }
 
    // Multiplicación
    multiplicar(): number {
        return this.num1 * this.num2;
    }
 
    // División
    dividir(): number | string {
        if (this.num2 === 0) {
            return "Error: División por cero";
        }
        return this.num1 / this.num2;
    }
 
    // Potencia: num1 elevado a num2
   potencia(): number {
        let resultado = 1;
        for (let i = 0; i < this.num2; i++) {
            resultado *= this.num1;
        }
        return resultado;
    }
}
 
 
