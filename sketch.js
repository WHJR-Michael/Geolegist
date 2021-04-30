const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var dogImg;

function preload(){
    dogImg = loadImage("Dog.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,600,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(100, 200, 50);
    rubber2 = new Rubber(1100, 200, 50);
    wood = new Wood(1000, 300, 50, 50);
    dog = new Dog(900, 400, 100, 100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    rubber2.display();

    plane.display();
    hammer.display();
    dog.display();
    wood.display();
 
}