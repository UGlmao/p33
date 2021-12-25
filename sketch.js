const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;
var score = 0;

function preload() {
  bg = loadImage("bg.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 700, 3000, 20);

  hero = new Hero(400,500,200,200);
  monster = new Monster(2300,680,300,300);
  rope = new Rope(hero.body,{x: 400, y: 50});
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  
  hero.display();
  rope.display();
  monster.display();
  ground.display();



  textSize(50);
  text("Score : " + score,500,50);
  text("Espacio para una segunda oportunidad",1000,50);

  if(hero.body.position.y > 400 && hero.body.position.x < monster.body.position.x + 200 && hero.body.position.x > monster.body.position.x - 200){

    score = score + 100;
    rope.attach(hero.body);
  }

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(hero.body);
  }
}