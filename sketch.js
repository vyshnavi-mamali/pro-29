const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1;
var engine,world;
var launcher;
var ball;
var polygon_img;

//polygone = Bodies.circle(50,200,20);
//World.add(world,polygone);




function preload(){

    polygon_img=loadImage("polygon.png");

}

function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(860,600,320,10);

   
    //first row
    box1 = new Box(720,570,30,40);
    box2 = new Box(760,570,30,40);
    box3 = new Box(800,570,30,40);
    box4 = new Box(840,570,30,40);
    box5 = new Box(880,570,30,40);
    box6 = new Box(920,570,30,40);
    box7 = new Box(960,570,30,40);
    box8 = new Box(1000,570,30,40);

    //second row
    box9 = new Box(740,530,30,40);
    box10 = new Box(780,530,30,40);
    box11 = new Box(820,530,30,40);
    box12 = new Box(860,530,30,40);
    box13 = new Box(900,530,30,40);
    box14 = new Box(940,530,30,40);
    box15 = new Box(980,530,30,40);

    //Third row
    box16 = new Box(760,490,30,40);
    box17 = new Box(+800,490,30,40);
    box18 = new Box(840,490,30,40);
    box19 = new Box(880,490,30,40);
    box20 = new Box(920,490,30,40);
    box21 = new Box(960,490,30,40);

    
    //fourth row
    box22 = new Box(780,450,30,40);
    box23 = new Box(820,450,30,40);
    box24 = new Box(860,450,30,40);
    box25 = new Box(900,450,30,40);
    box26 = new Box(940,450,30,40);

    //fifth row
    box27 = new Box(800,410,30,40);
    box28 = new Box(840,410,30,40);
    box29 = new Box(880,410,30,40);
    box30 = new Box(920,410,30,40);

    //third row
    box31 = new Box(820,370,30,40);
    box32 = new Box(860,370,30,40);
    box33 = new Box(900,370,30,40);

    //second row'
    box34 = new Box(840,330,30,40);
    box35 = new Box(880,330,30,40);
 
    //first row
    box36 = new Box(860,290,30,40);
    
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);


   launcher = new Slingshot(this.ball,{x:400,y:400});
   
}

function draw(){
    background("black");

    stand1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    box27.display();
    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();

    box34.display();
    box35.display();

    box36.display();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);


    launcher.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    launcher.fly();
  }