var bullet,wall;
var speed, weight,thickness;



function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,93)


 bullet= createSprite(50, 200, 70, 10);
 bullet.velocityX=speed;
 
 wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=rgb(80,80,80);



}

function draw() {
//make the bullet collide and check the

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
   bullet.shapeColor="green";
    }

    if(damage>10){
      bullet.shapeColor="red";
       }


      }
  background(0);  
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true
}
return false
}