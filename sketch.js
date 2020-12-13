var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale= 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
}


function draw() {
  
  
  
background(255);
  
  Spawnobstacles();
  Spawnbananas();
  
  
  if(ground.x<0) {
    ground.x = ground.width/2 ;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    bananasGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
    bananasGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    
  }
    stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,100,50);
  
  drawSprites();
}
function Spawnobstacles() {
  if(frameCount%100===0) {
  obstacles = createSprite(400,320,50,50);
  obstacles.addImage(obstacleImage);
    obstacles.scale = 0.15;
  obstacles.velocityX = -4;
  obstacles.lifetime=100;
    obstaclesGroup.add(obstacles);
  }
}

function Spawnbananas() {
  if(frameCount%60===0) {
  bananas = createSprite(400,230,50,50);
  bananas.addImage(bananaImage);
    bananas.scale = 0.1;
    bananas.y = Math.round(random(130,230));
  bananas.velocityX = -5;
  bananas.lifetime=100;
    bananasGroup.add(bananas);
    monkey.depth=bananas.depth+1;
  }
}








