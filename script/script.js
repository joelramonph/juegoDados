var cwidth = 400;
var cheight = 300;
var dadoEnX = 50;
var dadoEnY = 50;
var anchoDado = 100;
var altoDado = 100;
var radioCirculo = 6;
var ctx;
function init(){
   var ch = 1 + Math.floor(Math.random()*6);
    //ch = 2;
    //ch = 3;
    ch = 4;
   dibujaCara(ch);
}
function dibujaCara(n) {
  ctx = document.getElementById('canvas').getContext('2d');
  ctx.lineWidth = 5;
  ctx.clearRect(dadoEnX,dadoEnY,anchoDado,altoDado);
  ctx.strokeRect(dadoEnX,dadoEnY,anchoDado,altoDado);
  ctx.fillStyle = "#009966";

  switch (n) {
    case 1:
      dibuja1();
      break;
    case 2:
      dibuja2();
      break;
    case 3 :
      dibuja2();
      dibuja1();
      break;
    case 4 :
      dibuja4();
      break;
    case 5:
      dibuja4();
      dibuja1();
      break;
    case 6:
      dibuja4();
      dibuja2mid();
      break;

  }
}

function dibuja1(){
  var puntox;
  var puntoy;
  ctx.beginPath();
  puntox = dadoEnX + .5*anchoDado;
  puntoy = dadoEnY + .5*altoDado;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

function dibuja2() {
  var puntox;
  var puntoy;
  ctx.beginPath();
  puntox = dadoEnX + 3*radioCirculo;
  puntoy = dadoEnY + 3*radioCirculo;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  puntox = dadoEnX + anchoDado - 3*radioCirculo;
  puntoy = dadoEnY + altoDado - 3*radioCirculo;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

function dibuja4() {
  var puntox;
  var puntoy;
  ctx.beginPath();
  puntox = dadoEnX + 3*radioCirculo;
  puntoy = dadoEnY + 3*radioCirculo;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  puntox = dadoEnX + anchoDado - 3*radioCirculo;
  puntoy = dadoEnY + altoDado - 3*radioCirculo;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  puntox = dadoEnX + 3*radioCirculo;
  puntoy = dadoEnY + altoDado - 3*radioCirculo;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  puntox = dadoEnX + anchoDado - 3*radioCirculo;
  puntoy = dadoEnY + 3*radioCirculo;
  ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
  ctx.closePath()
  ctx.fill();
}

function dibuja2mid() {
var puntox;
var puntoy;
ctx.beginPath();
puntox = dadoEnX + 3*radioCirculo;
puntoy = dadoEnY + .5*altoDado;
ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
puntox = dadoEnX + anchoDado - 3 * radioCirculo;
puntoy = dadoEnY + .5*altoDado; //no cambia
ctx.arc(puntox,puntoy,radioCirculo,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();
}
