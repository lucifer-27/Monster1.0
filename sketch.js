const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var rope;
var ball;

function preload() {
//preload the images here

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(3000, 800);
 
  // create sprites here
  ball = new hero(200,200,300,200);
  rope = new Rope(ball.body,{x:500,y:50});

}

function draw() {
  background(255);
  Engine.update(engine);
  ball.display();
  rope.display();
}

