
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin12 = new Dustbin(713,555,25,200);
	dustbin2 = new Dustbin(600,640,200,25);
	dustbin3 = new Dustbin(505,555,25,200);
  bin1 = new Bin(610,515,190,160);
	ground = new Ground(400,650,800,10);
	paper1= new Paper(50,550);

  // paper1.debug=false;
  // paper1.setCollider("circle",0,0,55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin12.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper1.display();
  bin1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50})
    }
}

