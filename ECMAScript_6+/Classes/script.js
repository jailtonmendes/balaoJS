class ListaTarefas{
    constructor(){
        this.tarefas = [];
    }

    addTarefas(){
        this.tarefas.push("Nova Tarefa");
        console.log(this.tarefas);
    }
};

const minhasTarefas = new ListaTarefas();
const novo =

document.getElementById('novo').onclick = function(){

    minhasTarefas.addTarefas();
}