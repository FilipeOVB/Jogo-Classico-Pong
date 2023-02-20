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



function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  
  imprimirBolinha()
  imprimirRaquete(xRaquete, yRaquete)
  imprimirRaquete(xRaqueteO, yRaqueteO)
  
  moverBolinha()
  moverRaquete()
  moverRaqueteO()
  verificaColisaoB()
  verificaColisaoR()
  verificaColisaoRo()  
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
  
  if(xBolinha - raio < xRaquete + wRaquete && 
     yBolinha - raio < yRaquete + hRaquete && 
     yBolinha + raio > yRaquete){
    
    velocidadeX *= -1
  }   
}

function moverRaquete(){
  
  if(keyIsDown(UP_ARROW) && yRaquete >= 1){
    yRaquete -= 5
  }
  if(keyIsDown(DOWN_ARROW) && yRaquete <= 305){
    yRaquete += 5
  } 
  
}


function moverRaqueteO(){
  velocidadeYO = yBolinha - yRaqueteO - wRaquete/2 - 30
  yRaqueteO += velocidadeYO
  
}

function verificaColisaoRo(){
   
  if (xBolinha - raio > xRaqueteO - wRaquete && 
     yBolinha - raio > yRaqueteO + hRaquete && 
     yBolinha + raio > yRaqueteO){
    
    velocidadeX *= -1
  }   
}
