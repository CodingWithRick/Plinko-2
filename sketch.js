const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particle;
var plinkos = [];
var divisions = [];
var divHeight = 200;
var ground, yl, score = 0, gameState = "play", count = 0;
function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
  for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divHeight / 2, 10, divHeight));
  }
  for (let j = 25; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 50));

  }
  for (let j = 20; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 150));

  }
  for (let j = 30; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 250));

  }
  for (let j = 15; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 350));

  }
  ground = new Ground(650, 600, 1300, 10);
  yl = createSprite(650, 400, 1300, 5);
  yl.shapeColor = "yellow";
}


function draw() {
  background(0, 0, 0);
  Engine.update(engine);
  if (gameState === "play") {


    for (let i = 0; i < divisions.length; i++) {
      divisions[i].display();

    }
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].display();

    }
    ground.display();
    drawSprites();
    fill("#fff");
    textSize(16);
    text("Score: " + score, 50, 20);
    text("500", 30, 500);
    text("500", 100, 500);
    text("500", 170, 500);
    text("500", 250, 500);
    text("500", 340, 500);
    text("500", 420, 500);
    text("100", 520, 500);
    text("100", 600, 500);
    text("100", 680, 500);
    text("100", 760, 500);
    text("200", 830, 500);
    text("200", 900, 500);
    text("200", 980, 500);
    text("200", 1050, 500);
    text("200", 1150, 500);
    text("200", 1230, 500);
    if (particle) {
      particle.display();
    }
    if (particle) {

      if (particle.body.position.y > 580) {
        if (particle.body.position.x < 475) {
          score = score + 500;
          particle = null;
        } else if (particle.body.position.x > 475 && particle.body.position.x < 800) {
          score = score + 100;
          particle = null;

        } else if (particle.body.position.x > 800) {
          score = score + 200;
          particle = null;

        }
      }
    }
    if (count === 5) {
      gameState = "end";
    }
  } else {
    fill("#fff");
    textSize(16);
    text("Game Over!", 500, 300);
  }
}


function mouseClicked() {
  if (gameState === "play") {
    count++;
    particle = new Particle(mouseX, 0);
    // console.log("Hello");
  }
}
