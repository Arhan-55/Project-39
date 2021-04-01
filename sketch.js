var groundImg, right_mario_running,left_mario_running, mario_jumping, mario_collided,mario_standing;
var goombaImg, obstacleImg_1, obstacleImg_2, obstacleImg_3;
var cloudImg, SunImg, mountainImg;
var jumpSound, gameoverSound, kickSound, resetSound, checkpointSound, flagpoleSound, WinSound;
var castleImg,flag_cloth_Img,flag_pole_Img,stairsImg;

var END = 0;
var PLAY = 1;
var gameState = PLAY;
var gameOverImg, RestartImg;
var score,highestscore;

function preload() {

  groundImg = loadImage("images/ground.png");

  right_mario_running = loadAnimation("images/small mario(1).png", "images/small mario(2).png", "images/small mario(3).png", "images/small mario(4).png");
  left_mario_running = loadAnimation("images/left_mario(1).png", "images/left_mario(2).png", "images/left_mario(3).png", "images/left_mario(4).png");
  mario_collided = loadAnimation("images/mario_collided.png");
  mario_jumping = loadAnimation("images/mario_jumping.png");
  mario_standing = loadAnimation("images/mario_standing.png");

  goombaImg = loadAnimation("images/goomba(1).png", "images/goomba(2).png");

  obstacleImg_1 = loadAnimation("images/pirana(1).png", "images/pirana(2).png", "images/pirana(3).png", "images/pirana(4).png", "images/pirana(5).png");
  obstacleImg_2 = loadImage("images/spikes.png");

  cloudImg = loadImage("images/cloud.png");
  SunImg = loadAnimation("images/sun(1).png", "images/sun(2).png");
  mountainImg = loadImage("images/mountain.png");
  
  castleImg = loadImage("images/castle.png");
  flag_cloth_Img = loadImage("images/flag_cloth.png");
  flag_pole_Img = loadImage("images/flag.png");
  stairsImg = loadImage("images/stairs.png");

  gameOverImg = loadImage("images/GAME_OVER.png");
  RestartImg = loadImage("images/RESTART.png");

  jumpsound = loadSound("sounds/jump.wav");
  gameoverSound = loadSound("sounds/game over.wav");
  kickSound = loadSound("sounds/kick.wav");
  resetSound = loadSound("sounds/reset.wav");
  checkpointSound = loadSound("sounds/checkpoint.wav");
  flagpoleSound = loadSound("sounds/flagpole.wav");
  WinSound = loadSound("sounds/game win.wav");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  
  ground1 = createSprite(displayWidth-940,displayHeight-60);
  ground1.addImage(groundImg);
  ground1.scale = 1.4;

  ground2 = createSprite(displayWidth-100,displayHeight-60);
  ground2.addImage(groundImg);
  ground2.scale = 1.4;

  ground3 = createSprite(displayWidth+100,displayHeight-60);
  ground3.addImage(groundImg);
  ground3.scale = 1.4;

  ground4 = createSprite(ground3.x+840,displayHeight-60);
  ground4.addImage(groundImg);
  ground4.scale = 1.4;

  ground5 = createSprite(ground4.x+840,displayHeight-60);
  ground5.addImage(groundImg);
  ground5.scale = 1.4;
 
  ground6 = createSprite(ground5.x+840,displayHeight-60);
  ground6.addImage(groundImg);
  ground6.scale = 1.4;

  ground7 = createSprite(ground6.x+840,displayHeight-60);
  ground7.addImage(groundImg);
  ground7.scale = 1.4;

  ground8 = createSprite(ground7.x+840,displayHeight-60);
  ground8.addImage(groundImg);
  ground8.scale = 1.4;

  ground9 = createSprite(ground8.x+840,displayHeight-60);
  ground9.addImage(groundImg);
  ground9.scale = 1.4;

  ground10 = createSprite(ground9.x+840,displayHeight-60);
  ground10.addImage(groundImg);
  ground10.scale = 1.4;

  castle = createSprite(ground10.x+240,ground10.y-220);
  castle.addImage(castleImg);
  castle.scale = 4;
  
  flag = createSprite(ground10.x-100,ground10.y-410);
  flag.addImage(flag_cloth_Img);

  mario = createSprite(displayWidth/13,displayHeight/2+300);
  mario.addAnimation("standing", mario_standing);
  mario.addAnimation("rightrunning", right_mario_running);
  mario.addAnimation("jumping", mario_jumping);
  mario.addAnimation("collided", mario_collided);
  mario.addAnimation("leftrunning",left_mario_running);

  sun = createSprite(1000,80);
  sun.addAnimation("Sun", SunImg);
  sun.scale = 1.8;

  piranha1 = createSprite(displayWidth,displayHeight/2+240);
  piranha1.addAnimation("obstacle",obstacleImg_1);
  piranha1.scale = 1.2;

  piranha2 = createSprite(displayWidth + 1200,displayHeight/2+240);
  piranha2.addAnimation("obstacle",obstacleImg_1);
  piranha2.scale = 1.2;

  goomba1 = createSprite(piranha1.x + 500,piranha1.y+20);
  goomba1.addAnimation("walking",goombaImg);
  goomba1.scale = 0.8;
  
  goomba2 = createSprite(piranha1.x + 590,piranha1.y+20);
  goomba2.addAnimation("walking",goombaImg);
  goomba2.scale = 0.8;
  
  goomba3 = createSprite(piranha1.x + 680,piranha1.y+20);
  goomba3.addAnimation("walking",goombaImg);
  goomba3.scale = 0.8;

  goomba4 = createSprite(piranha2.x + 500,piranha2.y+20);
  goomba4.addAnimation("walking",goombaImg);
  goomba4.scale = 0.8;
  
  goomba5 = createSprite(piranha2.x + 590,piranha2.y+20);
  goomba5.addAnimation("walking",goombaImg);
  goomba5.scale = 0.8;
  
  goomba6 = createSprite(piranha2.x + 680,piranha2.y+20);
  goomba6.addAnimation("walking",goombaImg);
  goomba6.scale = 0.8;
  
  invBlock1 = createSprite(goomba1.x,goomba1.y-50,40,20);
  invBlock2 = createSprite(goomba2.x,goomba2.y-50,40,20);
  invBlock3 = createSprite(goomba3.x,goomba3.y-50,40,20);
  invBlock14 = createSprite(goomba4.x,goomba4.y-50,40,20);
  invBlock15 = createSprite(goomba5.x,goomba5.y-50,40,20);
  invBlock16 = createSprite(goomba6.x,goomba6.y-50,40,20);
  invBlock4 = createSprite(castle.x-880,goomba1.y+15,40,40);
  invBlock5 = createSprite(castle.x-835,goomba2.y-20,40,40);
  invBlock6 = createSprite(castle.x-790,goomba3.y-60,40,40);
  invBlock7 = createSprite(castle.x-745,goomba1.y-100,40,40);
  invBlock8 = createSprite(castle.x-700,goomba2.y-140,40,40);
  invBlock9 = createSprite(castle.x-655,goomba3.y-180,40,40);
  invBlock10 = createSprite(castle.x-615,goomba1.y-220,40,40);
  invBlock11 = createSprite(castle.x-570,goomba2.y-255,40,40);
  invBlock12 = createSprite(castle.x-525,goomba3.y-300,40,40);
  invBlock13 = createSprite(castle.x,castle.y+125,60,130);
  
  game_over = createSprite(displayWidth/2,displayHeight/2-70);
  game_over.addImage(gameOverImg);
  game_over.scale = 1.8;

  reset_btn = createSprite(displayWidth/2,displayHeight/2+20);
  reset_btn.addImage(RestartImg);
  reset_btn.scale = 1.3;

  score = 0;
  highestscore = 0;
}

function draw() {
  background("skyblue");

  invBlock1.visible = false;
  invBlock2.visible = false;
  invBlock3.visible = false;
  invBlock4.visible = false;
  invBlock5.visible = false;
  invBlock6.visible = false;
  invBlock7.visible = false;
  invBlock8.visible = false;
  invBlock9.visible = false;
  invBlock10.visible = false;
  invBlock11.visible = false;
  invBlock12.visible = false;
  invBlock13.visible = false;
  invBlock14.visible = false;
  invBlock15.visible = false;
  invBlock16.visible = false;

  game_over.x = mario.x + 580;
  reset_btn.x = mario.x + 580;
  
  image(groundImg,8,ground1.y+30,800,60)
  image(groundImg,808,ground1.y+30,800,60)
  image(groundImg,1608,ground1.y+30,800,60)
  image(groundImg,2408,ground1.y+30,800,60)
  image(groundImg,3208,ground1.y+30,800,60)
  image(groundImg,4008,ground1.y+30,800,60)
  image(groundImg,4805,ground1.y+30,800,60)
  image(groundImg,5608,ground1.y+30,800,60)
  image(groundImg,6408,ground1.y+30,800,60)
  image(groundImg,6960,ground1.y+30,800,60)
  
  image(mountainImg,displayWidth/2,displayHeight/2+100,350,200);
  image(cloudImg,displayWidth-500,displayHeight/19,150,50);
  image(mountainImg,displayWidth,displayHeight/2+200,250,100);
  image(cloudImg,displayWidth+1000,displayHeight/17,150,50);

  image(flag_pole_Img,ground10.x-80,230,50,450);
  image(stairsImg,flag.x-560,castle.y-160,400,350);

if(gameState === PLAY){
  if(mario.isTouching(ground1) || mario.isTouching(ground2)|| mario.isTouching(ground3)|| mario.isTouching(ground4)|| mario.isTouching(ground5)|| mario.isTouching(ground6)|| mario.isTouching(ground7)|| mario.isTouching(ground8)|| mario.isTouching(ground9)|| mario.isTouching(ground10)){
  if(keyWentDown("left_arrow")){
    mario.changeAnimation("leftrunning",left_mario_running);
  }

  if(keyWentUp("left_arrow")){
    mario.changeAnimation("standing",mario_standing);
  }

  if(keyWentDown("right_arrow")){
    mario.changeAnimation("rightrunning",right_mario_running);
  }

  if(keyWentUp("right_arrow")){
    mario.changeAnimation("standing",mario_standing);
  }
}
  if(keyDown("left_arrow")){
  mario.x = mario.x-20;
  }

  if(keyDown("right_arrow")){
    mario.x = mario.x+20;
  }
  game_over.visible = false;
  reset_btn.visible = false;

  mario.collide(ground1);
  mario.collide(ground2);
  mario.collide(ground3);
  mario.collide(ground4);
  mario.collide(ground5);
  mario.collide(ground6);
  mario.collide(ground7);
  mario.collide(ground8);
  mario.collide(ground9);
  mario.collide(ground10);

  mario.collide(invBlock4);
  mario.collide(invBlock5);
  mario.collide(invBlock6);
  mario.collide(invBlock7);
  mario.collide(invBlock8);
  mario.collide(invBlock9);
  mario.collide(invBlock10);
  mario.collide(invBlock11);
  mario.collide(invBlock12);

  camera.position.x = mario.x+590;
  camera.position.y = mario.y-220;
  
  fill("white");
  noStroke();
  textSize(34);
  text("Score : "+score,camera.x-600,camera.y-300);

  sun.x = mario.x+1150;
  sun.y = mario.y-500;
 if(keyWentDown("space")){
    mario.velocityY = -30;
    mario.changeAnimation("jumping",mario_jumping);
  }

  if(keyWentDown("space")){
    jumpsound.play();
  }
  if(mario.isTouching(ground1)){
    mario.changeAnimation("standing", mario_standing);
  }
  if(mario.y > ground1.y){
    gameState = END;
    mario.velocityY = -30;
  }

  if(mario.isTouching(invBlock1)){
    goomba1.velocityY = 2.8;
    invBlock1.velocityY = 2.8;
    mario.velocityY = -30;
    kickSound.play();
    score = score+10;
  }

  if(mario.isTouching(invBlock2)){
    goomba2.velocityY = 2.8;
    invBlock2.velocityY = 2.8;
    mario.velocityY = -30;
    kickSound.play();
    score = score+10;
  }

  if(mario.isTouching(invBlock3)){
    goomba3.velocityY = 2.8;
    invBlock3.velocityY = 2.8;
    mario.velocityY = -30;
    kickSound.play();
    score = score+10;
  }

  if(mario.isTouching(invBlock14)){
    goomba4.velocityY = 2.8;
    invBlock14.velocityY = 2.8;
    mario.velocityY = -30;
    kickSound.play();
    score = score+10;
  }

  if(mario.isTouching(invBlock15)){
    goomba5.velocityY = 2.8;
    invBlock15.velocityY = 2.8;
    mario.velocityY = -30;
    kickSound.play();
    score = score+10;
  }

  if(mario.isTouching(invBlock16)){
    goomba6.velocityY = 2.8;
    invBlock16.velocityY = 2.8;
    mario.velocityY = -30;
    kickSound.play();
    score = score+10;
  }

if(mario.isTouching(flag)){
    flag.velocityY = 3.8;
    flag.y = mario.y;
    flagpoleSound.play();
  } 

  if(mario.isTouching(piranha1) || mario.isTouching(goomba1) || mario.isTouching(goomba2) || mario.isTouching(goomba3) || mario.isTouching(piranha2) || mario.isTouching(goomba4) || mario.isTouching(goomba5) || mario.isTouching(goomba6)){
    gameState = END;
    mario.velocityY = -30;
    gameoverSound.play();
  }

  if(mario.isTouching(invBlock13)){
    mario.x = mario.x + 500;
    mario.visible = false;
    WinSound.play();
  }
}

if(gameState === END){
  
  mario.changeAnimation("collided",mario_collided);
 
  game_over.visible = true;
  reset_btn.visible = true;

  
  if(mousePressedOver(reset_btn)){
    reset();
  }
}

  drawSprites();
  mario.velocityY = mario.velocityY + 2.8;

}

function reset(){
  mario.x = displayWidth/13;
  mario.y = displayHeight/2+300;
  

  goomba1.x = piranha1.x + 500;
  goomba1.y = piranha1.y+20;
  goomba1.velocityY = 0;

  goomba2.x = piranha1.x + 590;
  goomba2.y = piranha1.y+20;
  goomba2.velocityY = 0;
  
  goomba3.x = piranha1.x + 680;
  goomba3.y = piranha1.y+20;
  goomba3.velocityY = 0;

  invBlock1.x = goomba1.x
  invBlock1.y = goomba1.y-50;
  invBlock1.velocityY = 0;
  
  invBlock2.x = goomba2.x
  invBlock2.y = goomba2.y-50;
  invBlock2.velocityY = 0;
  
  invBlock3.x = goomba3.x
  invBlock3.y = goomba3.y-50;
  invBlock3.velocityY = 0;

  goomba4.x = piranha2.x + 500;
  goomba4.y = piranha2.y+20;
  goomba4.velocityY = 0;

  goomba5.x = piranha2.x + 590;
  goomba5.y = piranha2.y+20;
  goomba5.velocityY = 0;
  
  goomba6.x = piranha2.x + 680;
  goomba6.y = piranha2.y+20;
  goomba6.velocityY = 0;

  invBlock14.x = goomba1.x
  invBlock14.y = goomba1.y-50;
  invBlock14.velocityY = 0;
  
  invBlock15.x = goomba2.x
  invBlock15.y = goomba2.y-50;
  invBlock15.velocityY = 0;
  
  invBlock16.x = goomba3.x
  invBlock16.y = goomba3.y-50;
  invBlock16.velocityY = 0;

  mario.changeAnimation("standing",mario_standing);
  mario.visible = true;

  gameState = PLAY;

  flag.velocityY = 0;
  flag.x = ground10.x-100
  flag.y = ground10.y-410
  score = 0;
}