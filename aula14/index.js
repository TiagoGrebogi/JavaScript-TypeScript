// IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = Number(num1.toFixed(2))

console.log(num1);
console.log(Number.isInteger(num1))
// console.log(num1.toString() + num2);
// console.log(typeof num1);

// console.log(num1.toFixed(4)); // -> toFixed() para mudar a quantia que será exibida

// console.log(Number.isInteger(num1)) // -> testa se a variável é um número inteiro

// let temp = num1 * '5';
// console.log(Number.isNaN(temp));
// console.log(temp)