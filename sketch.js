const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2;
var backgroundImg,platform;
var bird, slingShot;
var polygon;

function preload() {
  polygonImg= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(480,350,300,20);
    platform = new Ground(840, 155, 200, 20);
box1= new Box(400,310,30,40);
box2= new Box(430,310,30,40);
box3= new Box(460,310,30,40);
box4= new Box(490,310,30,40);
box5= new Box(520,310,30,40);
box6= new Box(550,310,30,40);


//set2

box10= new Box(430,270,30,40);
box11= new Box(460,270,30,40);
box12= new Box(490,270,30,40);
box13= new Box(520,270,30,40);
//set3

box14= new Box(460,230,30,40);
box15= new Box(490,230,30,40);

//set4
box16= new Box(475,190,30,40);


// next 

box17= new Box(790,115,30,40);
box18= new Box(820,115,30,40);
box19= new Box(850,115,30,40);
box20= new Box(880,115,30,40);

//set2
box21= new Box(820,75,30,40);
box22= new Box(850,75,30,40);

//set3
box23= new Box(835,35,30,40);

polygon= Bodies.circle(30,180,20);
World.add(world,polygon);

    slingShot = new SlingShot(polygon,{x:100, y:200});
}

function draw(){
    background(25);
// circle(polygon.position.x,polygon.position.y,20,20);

    Engine.update(engine);

    strokeWeight(4);

platform.display();

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    

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

    slingShot.display();    
    image(polygonImg,polygon.position.x,polygon.position.y,50,50);


    drawSprites();
    text("DRAG THE HEXAGONAL STONE AND RELEASE IT,TO LAUNCH IT TOWARDS THE BLOCKS",100,10);
    text("Press Space to get a second Chance to Play!!",650 ,350);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon);
    }
  }