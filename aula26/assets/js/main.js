// Capturar evento de submit do formulário
const form = document.querySelector('#form-id');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Event prevented')
  setResult('Hello World!')
});

function setResult (msg) {
  const result = document.querySelector('#result');
  result.innerHTML = msg;
}