//Manipulando Data

var data = new Date();
console.log(data)

// Pegando Hora
var hora = data.getHours();
console.log(hora);

// Pegando Minutos
var minutos = data.getMinutes();
console.log(minutos)

// Pegando segundos
var segundos = data.getSeconds();
console.log(segundos);

// Convertendo data em milessegundos - Passando datas especificas
var dataConvertida = new Date(Date.parse("March 10, 2018"));
console.log(dataConvertida);

//Pegar o dia do mês
var dia = data.getDate();
console.log("dia do mês:", dia);

//Pegar o dia da semana
var diaSemana = data.getDay();
console.log("dia da semana: ", diaSemana);

// Pegar o Ano
var ano = data.getFullYear();
console.log(ano);

// Convertendo data para o padrão brasileiro
var dataBrasileira = data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();
console.log(dataBrasileira);

// Coloar o nome do dia na data Ex: Domingo, Segunda...
var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
console.log('Dia: ' + dias[data.getDay()]);

// Somar datas
var somarData = data.setDate(data.getDate() + 60);
console.log('dataSomada --------------------', somarData)
console.log('Nova Data' + data)

// Somar Horas
var horasSomadas = data.setHours(data.getHours() + 4);
console.log('Horas somadas ----------------------' + horasSomadas)
console.log(data)