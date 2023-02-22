/*---------------------------------------------------------------

Cassic Games - Pong

Created by Filipe Oliveira

First code created on Javascript, following the class Classic Games Part 1: Starting on Javascript with Pong, created by Alura, with some adjustments

-----------------------------------------------------------------

- Click on the play button above to start

- Click on the game screen to control the rackets


   - Player 1 -       |   - Player 2 -       
                      |
Press W to move up    | Press up_arrow to move up
Press S to move down  | Press down_arrow to move down

------------------------------------------------------------------

** The game has some bugs that can disrupt the experience, but they will be fixed soon **

----------------------------------------------------------------*/



//atributos da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 30
let raio = diametro/2
let velocidadeX = 6
let velocidadeY = 6 

//atributos da raquete
let xRaquete = 5
let yRaquete = 150
let wRaquete = 10
let hRaquete = 90

//atributos da raquete do oponente
let xRaqueteO = 585
let yRaqueteO = 150
let velocidadeYO 

let colidiu = false

//placar
let pontos = 0
let pontosO = 0

// sons

let raquetada
let ponto
let trilha


function preload (){
  
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
}


function setup() {
  createCanvas(600, 400);
  
  trilha.loop()
}

function draw() {
  background(0);
  
  
  imprimirBolinha()
  imprimirRaquete(xRaquete, yRaquete)
  imprimirRaquete(xRaqueteO, yRaqueteO)
  imprimirPlacar()
  
  moverBolinha()
  moverRaquete()
  moverRaqueteO()
  verificaColisaoB()
  bolinhaNaoFicaPresa()
 // verificaColisaoR()
 // verificaColisaoRo() 
  
  colisaoRaqueteBib(xRaquete, yRaquete)
  colisaoRaqueteBib(xRaqueteO, yRaqueteO)
  
}


function imprimirBolinha(){
  
  circle(xBolinha,yBolinha,diametro);
  
}

function moverBolinha(){
  
  xBolinha += velocidadeX
  yBolinha += velocidadeY
  
}

function verificaColisaoB(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeX *= -1
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeY *= -1
  }
     
}

function imprimirRaquete(x,y){
  
    rect(x, y, wRaquete, hRaquete)
  
}

function verificaColisaoR(){
  
  if(xBolinha - raio < xRaquete + wRaquete*1.5 && 
     yBolinha - raio < yRaquete + hRaquete && 
     yBolinha + raio > yRaquete){

    raquetada.play()
    velocidadeX *= -1
    
  }   
}

function moverRaquete(){
  
  if(keyIsDown(87) && yRaquete >= 1){
    yRaquete -= 6
  }
  if(keyIsDown(83) && yRaquete <= 305){
    yRaquete += 6
  } 
  
}


function moverRaqueteO(){

    if(keyIsDown(UP_ARROW) && yRaqueteO >= 1){
    yRaqueteO -= 6
  }
  if(keyIsDown(DOWN_ARROW) && yRaqueteO <= 305){
    yRaqueteO += 6
  } 
  
  
}


function verificaColisaoRo(){
   
  if (xBolinha + raio > xRaqueteO - wRaquete*0.5 && 
     yBolinha - raio < yRaqueteO + hRaquete  && 
     yBolinha + raio > yRaqueteO ){
    
    velocidadeX *= -1
    
    raquetada.play()
  }   
}

function colisaoRaqueteBib(x, y){
  
  colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio)
  
  if(colidiu){
    
  velocidadeX *= -1
  raquetada.play()    
  }
}  

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio <= 10){
      xBolinha = 30
    }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio >= 588){
      xBolinha = 570
    }
}

function imprimirPlacar(){
  
  stroke(255)
  fill(color(42,132,135))

  if(pontos < 10){
    stroke(255)
    rect(185, 10, 40, 25)
  }
  
  if(pontosO < 10){
    stroke(255)
    rect(385, 10, 40, 25)
  }
    
  if(pontos >= 10){
     stroke(255)
     rect(185, 10, 55, 25)
  }  
  
  if(pontosO >= 10){
     stroke(255)
     rect(385, 10, 55, 25)
  }
  
  if(pontos >= 100){
     stroke(255)
     rect(185, 10, 70, 25)
  }  
  
  if(pontosO >= 100){
     stroke(255)
     rect(385, 10, 70, 25)
  }  
  
  stroke(0)
  textSize(20)
  fill(255)
  text(pontos, 200, 30)
  text(pontosO, 400, 30)
  
  if(xBolinha > 587){
    pontos++
    ponto.play()
  }
  
  if(xBolinha < 13){
    pontosO++
    ponto.play()
  } 

  
}