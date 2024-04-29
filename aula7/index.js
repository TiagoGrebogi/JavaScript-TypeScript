// Não podemos modificar o valor de uma "const"

const nome = 'João';
console.log(nome)

const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultado, resultadoDuplicado, resultadoTriplicado);

console.log(typeof primeiroNumero)