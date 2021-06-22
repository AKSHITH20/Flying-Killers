
var r = 0;
var g = 50;
var b= 255;

function preload(){
  bg=loadImage("png/BG.png")
  shootImage=loadAnimation("png/Shoot1.png","png/Shoot2.png","png/Shoot3.png","png/Shoot4.png","png/Shoot5.png")
 //bulletImage=loadAnimation("png/Bullet1.png","png/Bullet2.png","png/Bullet3.png","png/Bullet4.png","png/Bullet5.png")
  bulletImage=loadAnimation("png/Bullet1.png")
  MeteorImage1=loadAnimation("png/Meteor1.png")
  MeteorImage2=loadAnimation("png/Meteor2.png")
}


function setup(){
  createCanvas(displayWidth,displayHeight);

  player=createSprite(displayWidth/2,displayHeight/2)
  player.addAnimation("shoot",shootImage)
  player.scale=0.3
}

function draw(){
background(bg)
edges=createEdgeSprites()
player.collide(edges[0])
player.collide(edges[1])
player.collide(edges[2])
player.collide(edges[3])
player.x=mouseX
player.y=mouseY 
if (keyWentDown("up_arrow")){
  createBullet()
} 
Meteor1()
drawSprites()
}
function createBullet(){
  var bullet=createSprite(player.x+25,player.y+25)
  bullet.addAnimation("bullet",bulletImage)
  bullet.velocityX=15  
  bullet.scale=0.2
}
function Meteor1(){
  if (frameCount%60===0){
  var M1=createSprite(displayWidth,displayHeight/2)
  M1.addAnimation("M1",MeteorImage1)
  M1.velocityX=-5 
  M1.scale=0.3
  M1.y=random(0,800)
  }
}