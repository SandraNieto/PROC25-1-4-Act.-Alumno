
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

//Declara las variables para todos los ventiladores



var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };

  ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); 

  //Crea el botón (btn2) 
 



  //Crea los ventiladores de la clase Ground usando la palabra clave new
  



  //Crea la pelota y el cuerpo para world
  


    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,750,20);
  
 //Muestra a los ventiladores
 



 
 Engine.update(engine);
}


function vForce()
{
  //Usa la función en Matter.js para aplicarla fuerza al cuerpo
  
}
  


