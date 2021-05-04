var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(110,580,210,30);
    block1.shapeColor = "blue";

    block2 = createSprite(335,580,210,30);
    block2.shapeColor = "orange";

    block3= createSprite(562,580,210,30);
    block3.shapeColor = "green";

    block4= createSprite(790,580,210,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY =10;
    ball.velocityX =-1;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if( ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
        music.play();
    }

  
    if(  ball.bounceOff(block2)){
        ball.shapeColor = "orange";
    }


    if(block3.isTouching(ball) && ball.bounceOff(block3)){
            ball.shapeColor = "green";     
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
          ball.shapeColor = "red";
         
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }

    drawSprites();
}
