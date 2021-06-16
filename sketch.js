//Variables:
var ship
var ship_image
var sea
var sea_image

function preload(){
  ship_image= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea= createSprite(400,180,400,20);
  sea.addImage("sea",sea_image);
  sea.scale=0.3;

  ship= createSprite(75,250,50,50);
  ship.addAnimation("sailing",ship_image);
  ship.scale=0.175;
  
 

}

function draw() {
  background("blue");
  drawSprites();
  sea.velocityX=-5

  if (sea.x<0){
    sea.x=240;
  }
}