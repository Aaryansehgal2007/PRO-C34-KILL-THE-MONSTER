const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  ground1 = new Ground(1300, 650, 200,20);

  hero = new Hero(200,300,250);
  rope = new Rope(hero.body, { x: 200, y: 300 });
  monster = new Monster(1300,550,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800,100,70,70);

  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  

  hero.display();
  rope.display();
  monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  rope.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(hero.body, {x:200, y:400})
		rope.attach(hero.body);
	}
}

async function bgchange() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "gamingbackground2.png";
    }
    else{
        bg = "th (1).jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
