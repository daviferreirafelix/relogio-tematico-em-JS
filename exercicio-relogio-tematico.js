// função para o RELÓGIO AUTOMÁTICO
function relogio() {
  var data = new Date();
  var horas = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();
  var relogio = document.getElementById("relogio");

  relogio.innerHTML = horas + ":" + minutos + ":" + segundos;
}

window.setInterval("relogio()", 1000); // método que REPETE a função do relógio, ou seja, o atualiza a cada 1s.

//fução para atualizar o DIA DA SEMANA
function diaSemana() {
  var data = new Date();
  var diaSemana = data.getDay();
  var dia = document.getElementById("dia");

  switch (diaSemana) {
    case 0:
      dia.innerHTML = "Hoje é Domingo!";
      break;

    case 1:
      dia.innerHTML = "Hoje é Segunda-feira!";
      break;

    case 2:
      dia.innerHTML = "Hoje é Terça-feira!";
      break;

    case 3:
      dia.innerHTML = "Hoje é Quarta-feira!";
      break;

    case 4:
      dia.innerHTML = "Hoje é Quinta-feira!";
      break;

    case 5:
      dia.innerHTML = "Hoje é Sexta-feira!";
      break;

    case 6:
      dia.innerHTML = "Hoje é Sábado!";
      break;
  }
}

// algaritimo para SAUDAR o usuário
let data = new Date();
let hora = data.getHours();
let saudacao = document.getElementById("saudacao");

if (hora > 00 && hora < 5) {
  saudacao.innerHTML = "Boa madrugada!";
} else if (hora > 5 && hora < 12) {
  saudacao.innerHTML = "Bom dia!";
} else if (hora > 12 && hora < 18) {
  saudacao.innerHTML = "Boa tarde!";
} else if (hora > 18) {
  saudacao.innerHTML = "Boa noite!";
}

// função para definir a cor TEMA do site baseado no horário dá maquina.
function tema() {
  var data = new Date();
  var hora = data.getHours();
  var tema = document.getElementById("tema");

  if (hora > 23 && hora < 5) {
    tema.style.backgroundColor = "black";
    tema.style.color = "white";
  } else if (hora > 5 && hora < 12) {
    tema.style.backgroundColor = "#f7f7a0";
    tema.style.color = "black";
  } else if (hora > 12 && hora < 18) {
    tema.style.backgroundColor = "#ffc400";
    tema.style.color = "black";
  } else if (hora > 18) {
    tema.style.backgroundColor = "#000";
    tema.style.color = "white";
  }
}
