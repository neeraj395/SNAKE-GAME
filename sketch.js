var snake,snakeimg,snakebg ;
var gameover,gameoverimg,gameoversound ;
var crunchsound ;
var edges ;
var score=0 ;
var bg,bgimg ;


function preload (){

snakeimg=loadImage ("SNAKE.png") ;
appleimg=loadImage ("apple.png")
crunchsound=loadSound ("crunch.mp3")
gameoverimg=loadImage ("gameover.png")
bgimg=loadImage ("background.png")
gameoversound=loadSound ("gameover.wav")
}

function setup () {
  createCanvas(600,600) ;

bg=createSprite(200,200,20,20) ;



snake=createSprite(200,200,20,20) ;
snake.addImage (snakeimg) ;
snake.scale=0.5 ; 

snake.setCollider("circle",0,0,20) ;

apple=createSprite(200,250,20,20)
apple.addImage (appleimg)
apple.scale=0.2 ;



}

function draw () {



  background("red");

  drawSprites () ;


  fill ("white") ;
      textSize(20);
      text("SCORE="+score,489,30) ;

      bg.addImage (bgimg) ;

  if (keyDown ( "LEFT_ARROW")) {
  snake.x=snake.x-2 ; 
  }

if (keyDown ( "RIGHT_ARROW")) {
    snake.x=snake.x+2;

  }

  if (keyDown ( "UP_ARROW")) {
    snake.y=snake.y-2 ;
  }

  if (keyDown ( "DOWN_ARROW")) {
    snake.y=snake.y+2;
  } 
  
  edges=createEdgeSprites () ;

  if (snake.isTouching(apple)) {
    apple.x=random (20,580) ;
    apple.y=random (20,580);
    score=score+1 ;
    crunchsound.play () ;
    
    
      }

      if (snake.bounceOff(edges)) {
     
     
        gameover=createSprite(290,200,20,20);
        gameover.addImage (gameoverimg) ;
        snake.destroy () ;
        gameoversound.play () ;
        

      }
      
      


 

}
