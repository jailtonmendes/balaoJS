
// Operador spread [...]
let primeiros = [1,2,3];
console.log(primeiros);

let numeros = [...primeiros,4,5,6];
console.log(numeros);


function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '6525412'
    }
    return novosDados;

}

console.log(cadastroPessoa({nome: 'Jailton', sobrenome: 'Mendes', anoInicio: 2023}));





//Juntando Arrays ----------------------------------------------------
// REST Operations (...numeros)
function minhaLista(...numeros){
    console.log(numeros)
}

minhaLista(1,2,3,4,5);


function cadastrar(usuarios, ...novosUsuarios){

    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalusuarios);

}

let usuarios = ["Matheus", "Lucas"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Joao");