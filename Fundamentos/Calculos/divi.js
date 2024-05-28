function divi (a , b){
    if (b === 0) {
        return 'Error: no se puede dividir entre 0'
    }
    return a / b
}
module.exports = divi