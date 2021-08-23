
function preload(){

seaImg = loadImage("sea.png");
shipImg = loadImage("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 200, 400, 400)
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale = 0.4;

  ship = createSprite(200, 200, 100, 100)
  ship.addImage(shipImg);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
 
  if (sea.x < 0) {
    sea.x = sea.width / 8;
  }

  drawSprites();
}