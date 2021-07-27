var ship_running;
var backImage;
var ship;
var backG;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
  backImage=loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);
  
  backG=createSprite(50,160,20,50);
  backG.addImage("BG",backImage);
  backG.scale=0.2;
  ship=createSprite(200,180,400,20);
  ship.addAnimation("running",ship_running);
  ship.scale=0.3;
  ship.x=50;
  backG.velocityX=-5;
  backG.x=backG.width/2;
}


function draw(){

  background("white");
  
  
  console.log(ship.y);
  
  
 // ship.collide(backG);
  drawSprites();
}