const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var backgroundImg
var bg
var snow1,snow2,snow3,snow4

function preload(){
  backroundImg = loadImage("snow1.jpg")
  backroundImg .scale=0.001
}

function setup() {
 var canvas= createCanvas(1400,800);
 // createSprite(400, 200, 50, 50);
engine=Engine.create()
world=engine.world
snow1=new Snow(120,200,10)
snow2=new Snow(160,200,10)
snow3=new Snow(200,200,10)
snow4=new Snow(240,200,10)
  }
function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine); 

    snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();

}