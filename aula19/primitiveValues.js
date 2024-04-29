// Primitivos (Imutável) -> string, number, boolean, undefined, null (bigint, symbol) -> Valores copiádo
// Referência (Mutável) -> array, object, function -> Valores passados por referência

const a = {
    nome: 'Tiago',
    sobrenome: 'Grebogi'
}

const b = a;

a.nome = 'Vitor';
console.log(b);