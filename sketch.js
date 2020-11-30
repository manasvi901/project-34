const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,580,1200,40);
    platform = new Ground(250, 500, 120, 60);
    wheel1 = new Ball(225,540,20);
    wheel2 = new Ball(275,540,20);

    box1 = new Box(700,100,70,70);
    box2 = new Box(700,100,70,70);
    

    box3 = new Box(700,100,70,70);
    box4 = new Box(700,100,70,70);
   
log1 = new  Log(360,270,10,420,PI/8);
    
    box5 = new Box(700,100,70,70);
ball = new Ball(600,500,40);    

    
    slingshot = new SlingShot(ball.body,{x:600, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    log1.display();

    box5.display();
    ball.display();
    wheel2.display();
    wheel1.display();
    
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


