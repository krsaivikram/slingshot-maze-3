const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg;
var ball, slingshot;
var releases = 0;
//var score = 0;
function preload() {
    backgroundImg = loadImage("sprites/blueblack.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-110);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(displayWidth,displayHeight+300,displayWidth,displayHeight);
    ground2 = new Ground(displayWidth/3-100,900,displayWidth/3+300,200);

    box1 = new Box(800,600+130,20,20);
    box2 = new Box(823,600+130,20,20);
    box3 = new Box(850,600+130,20,20);
    box4 = new Box(869,600+130,20,20);
    box5 = new Box(812,600+110,20,20);
    box6 = new Box(837,600+110,20,20);
    box7 = new Box(862,600+110,20,20);
    box8 = new Box(824,600+90,20,20);
    box9 = new Box(849,600+90,20,20);
    box10 = new Box(836,600+70,20,20);
    box11 = new Box(900+50,380,20,20);
    box12 = new Box(923+50,380,20,20);
    box13 = new Box(950+50,380,20,20);
    box14 = new Box(969+50,380,20,20);
    box15 = new Box(912+50,360,20,20);
    box16 = new Box(937+50,360,20,20);
    box17 = new Box(962+50,360,20,20);
    box18 = new Box(924+50,340,20,20);
    box19 = new Box(949+50,340,20,20);
    box20 = new Box(936+50,320,20,20);
    ground3 = new Ground(displayWidth,displayHeight/2,10,displayHeight);
aeroground = new Ground(1200,400,600,20);
    
    ball = new Ball(240,570);

   
    slingshot = new Slingshot(ball.body,{x:240,y:550});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box5.display();
    box6.display();
    box3.display();
    box4.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box15.display();
    box16.display();
    box13.display();
    box14.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ground.display();
    ground3.display();
    ball.display();
    aeroground.display();
    ground2.display();
    slingshot.display(); 
    
    fill("orange");
    stroke(10);
    text("no.of releases ="+ releases,1200,40);

    text("destroy the boxes!!!",displayWidth/2,40);
    //text("score = "+score,900,40);
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball.body);
    }
}