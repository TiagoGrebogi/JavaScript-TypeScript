const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número +2 é ${numero + 2}<p>`;
texto.innerHTML +=  `<p>Raiz quadrada: ${(numero ** (1/2))}<p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}<p>`;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}<p>`;