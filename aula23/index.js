/*
&& -> false && true -> fallse "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);