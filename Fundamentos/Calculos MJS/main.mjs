import { suma,resta,divi,multi,parOimpar } from './funciones.mjs'
import readlineSync from 'readline-sync';
// Añadimos para poder hacer inputs


// copiamos las condiciones anteriormente creadas para CommonJS
const a = parseFloat(readlineSync.question('Introduce el primer numero: '));
const b = parseFloat(readlineSync.question('Introduce el segundo numero: '));
const decision = readlineSync.question('Introduce la operacion (suma, resta, divi, multi): ');

let result

if (decision === 'suma' || decision === 'Suma') {
    result = suma(a,b)
}else if (decision === 'resta' || decision === 'Resta') {
    result = resta(a,b)
}else if (decision === 'divi' || decision === 'Divi'){
    result = divi(a,b)
}else if (decision === 'Multi' || decision === 'multi'){
    result = multi(a,b)
}else {
    console.log('Operación no valida')
}
// Verificacion de par o impar
const verificacion = parOimpar(result)
if (verificacion === true){
    console.log("El resultado es par", result)
}else
console.log("El resultado es impar", result)