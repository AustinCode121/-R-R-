const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld,ground;
var box1, box2,box3,box4,box5;
var bird, sound;
var line1,line2,line3,line4,line5;
var ballObject;

function preload(){
  sound = loadSound("ls1.mp3");
  blip = loadSound("blip.wav");
 


}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  console.log("hello world")
  sound.loop();
 
  

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);

  
 
  
 
  bird = new Bird(50,150);

  line1 = new Log(210,200,10,10);
  line2 = new Log(220,200,10,10);
  line3 = new Log(230,200,10,10);
  line4 = new Log(240,200,10,10);
  line5 = new Log(250,200,10,10);

  line6 = new Box(310,200,70,70);
  line7 = new Box(200,200,70,70);
  line8 = new Box(270,200,70,70);
  line9 = new Box(220,200,70,70);
  line10 = new Box(4000,200,70,70);

  line11 = new Box(10,200,70,70);
  line12 = new Box(20,200,70,70);
  line13 = new Box(30,200,70,70);
  line14 = new Box(40,200,70,70);
  line15 = new Box(220,200,70,70); 
 

  Line100 = new Pig(220,200,70,70);
  bird = new Bird(50,150);
  
  ground = new Ground(600,height,1200,10);  
  wall1 = new Ground(600,0,1200,1);
  wall2 = new Ground(0,200,1,400);
  wall3 = new Ground(1200,200,1,400);


  


  //PI = 180 degrees. unit of measurement of  PI is  radians
}

function draw() {
  background(0,0,0); 
  Engine.update(myEngine);
  
  strokeWeight(3);
	stroke(20);
	fill("Pink");
    text(' Music by zeeky beats  ', 285, 22);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();



  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  
   line6.display();
  line7.display();
  line8.display();
  line9.display();
  line10.display();

  line11.display();
  line12.display();
  line13.display();
  line14.display();
  line15.display(); 


  
  
  

  ground.display();

  wall1.display();
  wall2.display();
  collision(bird,box1);
  collision(bird,box2);
  collision(bird,box3);
  collision(bird,box4);
  collision(bird,box5);
  
  
 Line100.display(); 


  

  bird.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(box1.body,box1.body.position,{x:0,y:-150});
    Matter.Body.applyForce(box2.body,box2.body.position,{x:0,y:-150});
    Matter.Body.applyForce(box3.body,box3.body.position,{x:0,y:-150});
    Matter.Body.applyForce(box4.body,box4.body.position,{x:0,y:-150});
    Matter.Body.applyForce(box5.body,box5.body.position,{x:0,y:-150});

    Matter.Body.applyForce(Line100.body,Line100.body.position,{x:0,y:-150});
  
  }
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 70){
		blip.play();
	} 
}

async function getbackgroundimage(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json()
  console.log(responseJSON.datetime)
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  //console.log(hour)
  if(hour >= 06 && hour <= 19){
      bg = ("sprites/devroomBG.png")

  }else{
      bg = ("sprites/officeBG.jpg")
      
  }
  backgroundImg = loadImage(bg)




}