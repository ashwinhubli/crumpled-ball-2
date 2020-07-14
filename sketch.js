const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var wall1,wall2,wall3;

function preload(){
 wallimg = loadImage("dustbingreen.png");
ballimg  = loadImage("paper.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   var ground_options ={
        isStatic: true
    }

    ground = new Ground(600,400,1200,50);
    
    World.add(world,ground);
   var ball_options ={
        isStatic:false,
       friction:0.5,
        density:1.2
    }
   ball = Bodies.circle(100,350,30,ball_options);
   
   World.add(world,ball)
   //push();
   wall1 = new DustbinWall(950,320,10,100);
   wall2 = new DustbinWall(1050,320,10,100);
   wall3 = new DustbinWall(1000,375,90,10);
   //fill();
   //pop();
    console.log(ball);
}

function draw(){
     background(255,0,255);
    Engine.update(engine);
    rectMode(CENTER);
    
    image(wallimg,950,275,100,100);
    //rect(ground.position.x,ground.position.y,1200,20);
   // ellipse(ball.position.x,ball.position.y,20);

    image(ballimg,ball.position.x,ball.position.y,40,40);
    ground.display();
    //wall1.display();
    //wall2.display();
    //wall3.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:180,y:-185});
  }




}