const pessoa = {nome: "Jailton", sobrenome: "Mendes", idade: 30, cargo: "Desenvolvedor"};

console.log(pessoa);

// Pegando o nome do objeto
let {nome} = pessoa;
console.log(nome);

let {sobrenome, cargo} = pessoa;
console.log(sobrenome, cargo);


// pegar atributo e colocar em uma váriavel
let { cargo:programador } = pessoa;
console.log(programador);


// ARRAY
let nomes = ['Jailton', 'Mendes', 30];
console.log(nomes);

let { 0:primeironome, 2:idade } = nomes;
console.log(primeironome, idade);