var movingRect, gO1, gO2, gO3 ,gO4;
var m5,f5; 

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"
  movingRect.debug=true;

  gO1=createSprite(100,100,50,50);
  gO1.shapeColor="green";

  gO2=createSprite(300,100,50,50);
  gO2.shapeColor="green";

  gO3=createSprite(500,100,50,50);
  gO3.shapeColor="green";

  gO4=createSprite(700,100,50,50);
  gO4.shapeColor="green";

  m5=createSprite(1000, 800, 80, 30);
  m5.shapeColor="cyan"
  m5.debug=true;

  f5=createSprite(1000, 100, 50, 90);
  f5.shapeColor="cyan"
  f5.debug=true;

  m5.velocityY=-5;
  f5.velocityY=5

}

function draw() {
  background(0); 
  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

if(isTouching(movingRect, gO2)){

  movingRect.shapeColor="red";
  gO2.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gO2.shapeColor="green";
}

bounceOff(m5,f5);

  drawSprites();
}