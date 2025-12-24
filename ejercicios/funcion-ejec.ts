export let suma: number;

suma = sumar(10, 10);

console.log(suma);

saludar();


function saludar(){
    console.log("Hola Diego");
}

function sumar(a : number, b : number) {
    return a + b;
    //console.log(a + b);
}