var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var randomX, randomY;
var obstacles;
var form, player, game;
var slidingSound;
var oilImage,oil;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img, track, ground;
var xVelocity = 0, yVelocity = 0;


function preload(){
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
  oilImage = loadImage("images/f1.png");
  slidingSound = loadSound("sound/sound_sliding.mp3");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obstacles = createGroup()
  for(var i = 0; i<5 ; i++){
    randomX = random(750 , 2000)
    randomY = random(-height*4, height-200)
    oil = createSprite(randomX,randomY)
    oil.addImage("oilImage",oilImage)
    obstacles.add(oil)
  }

}


function draw(){
  if(playerCount === 4 && gameState === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
