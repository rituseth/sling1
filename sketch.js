
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var ground ;
var stone1;
var boy,boyImg;
var tree;
var sling1;
var mango1,mango2,mango3,mango4
var gameState = "onSling";
function preload()
{
boyImg=loadImage("boy.png")
}
	

function setup() {
	createCanvas(1200,400);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone1=new Stone(235,460 ,30 );
	 boy=createSprite(450,330,50,50);
	 sling1 = new Sling(stone1.body,{x:400,y:250});
	
	mango1=new mangoes(990,100,25);
	mango2=new mangoes(897,150,25);
	mango3=new mangoes(1080,200,25);
	mango4=new mangoes(1000,250,25);
	tree=new Tree(1000,200,20,50)
	Engine.run(engine);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
 Render.run(render); 
  
}


function draw() {
 background("white")
 Engine.update(engine)

 ground.display();

 boy.addImage(boyImg);
boy.scale=0.1;

 stone1.display();
sling1.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
tree.display();

detectCollission(stone1,mango1)
detectCollission(stone1,mango2)
detectCollission(stone1,mango3)
detectCollission(stone1,mango4 )

drawSprites();



  
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	sling1.fly();
	
}
 function detectCollission( lstone1,lmangoes ){
	mangoesBodyPosition= lmangoes.body.position
	stone1BodyPosition= lstone1.body.position
	
	var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoesBodyPosition.x,mangoesBodyPosition.y)


	if(distance<=lmangoes.r+lstone1.r ){

	Matter.Body.setStatic( lmangoes.body,false);
	}
}
	
function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x: 50, y: 200});
       sling1.attach(stone1.body)
    }
}

