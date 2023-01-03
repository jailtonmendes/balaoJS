
const lista = [1,2,3,4,5,6];

// MAP - CRIA UM NOVO ARRAY
const novaLista = lista.map(function(item){
    return item * 5;
});

console.log(novaLista);

//REDUCE - SOMA ITEM DOS ARRAYS


// ENCONTRAR ITENS NO ARRAY
const find = lista.find(function(item){
    return item === 6;
});

console.log(find)
