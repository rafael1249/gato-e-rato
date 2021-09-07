var jardim, imgjardim;
var imgGato1,imgGato2,imgGato4,gato;
var imgrato1,imgrato2,imgrato4,rato;

function preload() {
    //carregue as imagens aqui
    imgjardim = loadImage("garden.png");

    imgGato1 = loadImage("cat1.png");
    imgGato2 = loadAnimation("cat2.png","cat3.png");
    imgGato4 = loadImage("cat4.png");

    imgrato1 = loadImage("mouse1.png");
    imgrato2 = loadAnimation("mouse2.png","mouse3.png");
    imgrato4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    jardim = createSprite(500,400);
    jardim.addImage(imgjardim);

    gato = createSprite(870,600);
    gato.addImage(imgGato1);
    gato.scale = 0.2
    
    rato = createSprite(150,600);
    rato.addImage(imgrato1);
    rato.scale = 0.2
   

  
}

function draw() {

    background(0);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    keyPressed();   

    if(gato.x - rato.x < (gato.width - rato.width)/2){
       gato.velocityX = 0
       gato.addAnimation("cat4.png", imgGato4);
       gato.changeAnimation("cat4.png");
       gato.x =300
       gato.scale = 0.2

      rato.addAnimation("mouse4.png",imgrato4);
      rato.changeAnimation("mouse4.png");

    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyDown("LEFT_ARROW")){

  rato.addAnimation("ratoProvocando",imgrato2);
  rato.changeAnimation("ratoProvocando");
  rato.frameDelay = 15;

  gato.velocityX = -5
  gato.addAnimation("andando",imgGato2);
  gato.changeAnimation("andando"); 
 

}

}
