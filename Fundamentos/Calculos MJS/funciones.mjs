export function suma (a, b) {
    return a + b
}
export function divi (a , b){
    if (b === 0) {
        return 'Error: no se puede dividir entre 0'
    }
    return a / b
}
export function resta ( a, b ){
    return a - b 
}
export function multi (a,b) {
    return a * b
}
export function parOimpar (a){
    if ( a % 2 === 0)
        return true
    else
    return false
}