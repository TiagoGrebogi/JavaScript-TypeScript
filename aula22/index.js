/*
Operadores Lógicos
&& -> AND: Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR: Pelo menos uma das expressões precisam ser verdadeiras para retormar true
! -> NOT
*/
// const expressaoAnd = true && true && false && true;
// const expressaoOr =  false || true

const usuario = 'Luiz';
const senha = '1234567';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar)

console.log(!true)