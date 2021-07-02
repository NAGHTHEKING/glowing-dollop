var gamestate = 0,playercount;
var form,game,player
var database;
var positon;
var allplayers;
var car1,car2,car3,car4,cars;
var carimg1,carimg2,carimg3,carimg4,trackimg;

function preload(){
carimg1=loadImage("images/car1.png")
// carimg2=loadImage("images/car2.png")
// carimg3=loadImage("images/car3.png")
// carimg4=loadImage("images/car4.png")
//trackimg=loadImage("images/track.jpg")
}


function setup(){
    createCanvas(displayWidth-40,displayHeight-120);
  
   database=firebase.database();
   game=new Game()
   game.getstate()
   game.start()
   
}

function draw(){
    background(255)
    if(playercount===2){
        game.update(1)
        
    }

    if(gamestate===1)
    {
      clear()
      game.play()

    }

    if(gamestate===2){
        game.end()
        
    }

}
 











