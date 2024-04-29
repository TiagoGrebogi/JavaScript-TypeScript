/*
Tiago Nogueira tem 17 anos, pesa 62 Kg
tem 1.72 de altura e seu IMC é de ...
Tiago nasceu em 2005
*/


const name = 'Tiago';
const surname = 'Nogueira';
const age = 17;
const weight = 62;
const hightInM = 1.72;
let imc;
let anoNascimento;

// Template Strings

imc = weight / (hightInM ** 2);
anoNascimento = 2023 - age;
console.log(name, surname, 'tem', age, 'anos, pesa', weight, 'KG');
console.log(`Tem ${hightInM} de altura, e seu IMC é de ${imc}`);
console.log(`${name} nasceu em ${anoNascimento}`);