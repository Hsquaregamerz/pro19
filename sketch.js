var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var ender,enderi;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("ROCKET (1).png");
  cashImg = loadImage("A2.png");
  diamondsImg = loadImage("A2.png");
  jwelleryImg = loadImage("A2.png");
  swordImg = loadImage("sword.png");
  enderi =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  background(255);
// Moving background
// path=createSprite(width/2,200);
// path.addImage(pathImg);
// path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.2;
  
    var ender=createSprite(windowWidth/2,windowHeight/2,50,50);
     ender.addImage(enderi);
     ender.scale=0.8
  ender.visible=false;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
}

function draw() {

  if(gameState===PLAY){
    
      background(245);
    
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  // if(path.y > height){
  //   path.y = height/2;
  // }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+1;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
treasureCollection=treasureCollection+1;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
treasureCollection=treasureCollection+1;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END
    }
  }
    
    
    if(gameState===END){
      
      boy.destroy();
       cashG.destroyEach();
     diamondsG.destroyEach();
     jwelleryG.destroyEach();
     swordGroup.destroyEach();
      tex();
      
    }
  
  drawSprites();
  textSize(20);
  fill("blue");
  text("Astronuts: "+ treasureCollection,150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50,width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = windowHeight;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50,width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.13;
  diamonds.velocityY = 3;
  diamonds.lifetime = windowHeight;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(100,width-100),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = windowHeight;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50,width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = windowHeight;
  swordGroup.add(sword);
  }
}

function tex(){
      textSize(40);
      fill("blue");
      text("GameOver",windowWidth/2-50,windowHeight/2);
}






