
var total = 0;
var acumulada = 0

//Criar o balao
function criarBalao() {
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.random() * 600;
    var y = Math.random() * 400;

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    //<div class="balao" style="left:30px; top:60px"></div>

    // Estourar balões
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);

    acumulada++;
    console.log('acumulada' + acumulada)

    encerrarJogo();
}

//Estourar o balao
function estourar(objeto){
    document.body.removeChild(objeto);

    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Balões estourados: " + total;
    acumulada--;
}

//Carregar o jogo
function carregarJogo() {
    setInterval(criarBalao, 1000);

}

//Encerrar Jogo
function encerrarJogo() {
    if(acumulada  == 10) {
        alert('Fim do Jogo!');
        window.location.href = window.location.href;
    }
}


