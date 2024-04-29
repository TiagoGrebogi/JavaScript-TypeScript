const pessoa1 = {
    nome: 'Tiago',
    sobrenome: 'Grebogi',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrimentoIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
