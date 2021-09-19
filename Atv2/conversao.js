//Montar um conversor de temperatura C, K e F
const C = 0
const F = 0
const K = 0

var temperatura = 36
var resultado
var opc = 1
console.log("DIGITE: 1-celsius=>Fahrenheit")
console.log("DIGITE: 2-celsius=>Kelvin")
console.log("DIGITE: 3-kelvin=>Celsius")
console.log("DIGITE: 4-kelvin=>Fahrenheit")
console.log("DIGITE: 5-Fahrenheit=>Celsius")
console.log("DIGITE: 6-Fahrenheit=>Celsius")

opc=prompt("DIGITE UMA OPCAO PARA CALCULAR")

switch (opc) {
    case 1://celsius=>Fahrenheit
        resultado = temperatura * 9 / 5 + 32
        console.log(resultado);
        break;
    case 2://celsius=>Kelvin
        resultado = temperatura + 273
        console.log(resultado);
        break;
    case 3://kelvin=>Celsius
        resultado = temperatura - 273
        console.log(resultado);
        break;
    case 4://kelvin=>Fahrenheit
        resultado = (temperatura - 273) * 9 / 5 + 32
        console.log(resultado);
        break;
    case 5://Fahrenheit=>Celsius
        resultado = (temperatura - 32) * 5 / 9
        console.log(resultado);
        break;
    case 6://Fahrenheit=>Kelvin
        resultado = (temperatura - 32) * 5 / 9 + 273
        console.log(resultado);
        break;
}