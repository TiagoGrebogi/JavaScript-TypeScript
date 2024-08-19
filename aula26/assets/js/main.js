// Capturar evento de submit do formulário
const form = document.querySelector('#form-id');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  console.log(peso, altura);
});


function criaP () {
  const p = document.createElement('p');
  return p;
}
function setResult (msg) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = criaP();
  
}