function setup() {
  createCanvas(800,400);
  bullet  = createSprite(200, 200, 50, 10);
  speed= random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet.velocityX = 10;
  wall= createSprite(700,200,thickness,200);
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}
function draw() {
  background(0); 
  wall.shapeColor = 200,80,80;
  dm(bullet,wall);
  drawSprites();
}

function dm(ob1,ob2){
  if(ob2.x - ob1.x < ob1.width/2 + ob2.width/2 ){
    ob1.velocityX = 0;
  if(damage>10){
    ob2.shapeColor = "red";
    text("Wall not effective",400,200);
    }
    if(damage<10){
    ob2.shapeColor = "green";
    text("Wall is effective",400,200);
    }
}
}