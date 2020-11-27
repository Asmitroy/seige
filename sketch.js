const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[2,2,2];
function setup() {
  createCanvas(800,800);
  stroke(255);
  engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,height,1200,20);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

  block1 = new Box(600-20,100,30,30);
  block2 = new Box(600-60,100,30,30);
  block3 = new Box(600-100,100,30,30);
  block4 = new Box(600-45,10,30,30);
  block5 = new Box(600-75,10,30,30);
  block6 = new Box(100,30,20,20);
  rope = new Chain(block6.body,{x:400,y:400});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  ground1.display();
  rope.display();
  Engine.update(engine);
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 