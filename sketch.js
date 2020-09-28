var Slingshot,tree,ground,Stone,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boy=loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=new Tree(550,350,600,50);
	Stone=new stone(200,100,30,30);
	ground=new Ground(400,690,800,20);
	mango1=new mango(100,350,10,10);
	mango2=new mango(110,340,10,10);
	mango3=new mango(90,360,10,10);
	mango4=new mango(105,345,10,10);
	mango5=new mango(105,345,10,10);
	mango6=new mango(120,370,10,10);
	mango7=new mango(125,375,10,10);
	mango8=new mango(130,345,10,10);
	mango9=new mango(135,380,10,10);
	mango10=new mango(95,365,10,10);
	Slingshot=new SlingShot(Stone.body,{x:200,y:360});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  strokeWeight(4);
  tree.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
  drawSprites();
 
}
function mouseDragged(){
    if(gameState=="onsling"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});    
    }
    
    
}


function mouseReleased(){
    boy.fly();
    gameState= "launched";
}


