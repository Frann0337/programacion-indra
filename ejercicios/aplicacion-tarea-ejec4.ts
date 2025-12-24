import { Motor, Vehiculo } from "./tarea-ejec4";

// Función externa para comparar potencia
function motorMasPotente(v1 : Vehiculo, v2 : Vehiculo) {
    if (v1.motor.caballos > v2.motor.caballos) {
        return `${v1.marca} ${v1.modelo} tiene el motor más potente.`;
    } else if (v2.motor.caballos > v1.motor.caballos) {
        return `${v2.marca} ${v2.modelo} tiene el motor más potente.`;
    }
    return "Ambos vehículos tienen la misma potencia.";
}
 
// Ejemplo
const m1 = new Motor("Gasolina", 150);
const m2 = new Motor("Eléctrico", 200);
 
const v1 = new Vehiculo("Toyota", "Corolla", m1);
const v2 = new Vehiculo("Tesla", "Model 3", m2);
 
console.log(v1.infoCompleta());
console.log(v2.infoCompleta());
console.log(motorMasPotente(v1, v2));