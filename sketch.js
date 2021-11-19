var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

  red_balloonImage = loadImage("red_balloon0.png");

}

function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
}

function draw() {
 background(0);
  // movendo chão
    scene.velocityX = -4 ;

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

  //movendo flecha
  bow.y = World.mouseY;
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //ARIANA: INTERVALO DO RANDON ERRADO
  //var select_balloon = Math.round(random(1,4,2));

  var select_balloon = Math.round(random(1,4)); //INTERVALO CORRETO SERIA ESSE
  if (World.frameCount % 100 == 0) {
   if (select_balloon == 1) {
     //ARIANA: FALTOU CARREGAR O FUNCTION QUE GERA O BALÃO VERMELHO
     redBalloon();
     //ARIANA: ERRO DE DIGITAÇÃO AQUI
       //();
    } else if (select_balloon == 2) {
      greenBalloon();
  } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}


// Criando flechas para arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


 function redBalloon() {
   //ARIANA: erro de digitação faltou um 10 para o tamanho do sprite
   //var red = createSprite(0, 10, Math.round(random(20, 370)) , 10);
   var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
 }
//ARIANA: erro na hora de copiar e colar o código, aqui você precisava fazer o balão azul 
//e fez o red de novo! 
/*function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(blue_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}*/

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

//ARIANA: erro na hora de copiar e colar o código, aqui você precisava fazer o balão azul 
//e fez o red de novo! 
/*function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(green_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}*/
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}
//ARIANA: erro na hora de copiar e colar o código, aqui você precisava fazer o balão azul 
//e fez o red de novo! 
/*function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(pink_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 1;
}*/

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}


//ARIANA: ATENÇÃO, NO SEU ROTEIRO DE PROJETO NÃO PEDIA PARA USAR SWITCH
/*function spawnBallons(){
  if(frameCount % 60 == 0){
    var ballons = createSprite(400,165,10,40);
    ballons.velocityX = -4;
    ballons.scale = 1; 

    var rand = Math.round(random(1,6));

    switch(rand){
 
   case 1: ballons.addImage(blue_balloon0.png);
   break;

   case 2: ballons.addImage(green_balloon0.png);
   break;

   case 3: ballons.addImage(pink_balloon0.png);
   break;

   case 4: ballons.addImage(red_balloon0.png);
   break;

   default:break;

    }
    ballons.lifetime = 150;
   }            
} */