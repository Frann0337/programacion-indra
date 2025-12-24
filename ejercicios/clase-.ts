export class PersonaLA {  
  nombre: string;  
  edad: number;  
  ciudad: string = "Lima";
  esResiente: boolean = true;
  constructor(nombre :string, edad :number, ciudad?: string) {  
    this.nombre = nombre;  
    this.edad = edad;
    if(ciudad){
      this.ciudad = ciudad;
    }  
  }
  
  presentarse() {  
 	console.log("Hola, me llamo " + this.nombre + ", tengo " + this.edad + " años y soy de " + this.ciudad); }  
}

let p = new PersonaLA("Lucas", 3);  
p.presentarse(); 

let n = new PersonaLA("Matias", 10,'Santiago');  
n.presentarse(); 



let variableNumero = 42;

console.log( variableNumero < 40 ? "Es menor que 40" : "No es menor que 40" );


