const prompt = require('prompt-sync')({ sigint: true });
const suma = require('./suma')
const resta = require('./resta')
const divi = require('./divi')
const multi = require('./multi')
/* Prueba de funciones OK
console.log(suma(6,6))
console.log(resta(7,6))
console.log(divi(20,2))
console.log(multi(6,6))
Queremos que el propio programa pida numeros y la decisión*/
const a = parseFloat(prompt('Introduce el primer número: '));
const b = parseFloat(prompt('Introduce el segundo número: '));
const decision = prompt('Introduce la operación (suma, resta, divi, multi): ');

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
console.log(result)