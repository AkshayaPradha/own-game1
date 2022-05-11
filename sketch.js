var bg;
var bg_image;


function preload(){
   bg_image = loadImage("index.jpg");
}




function setup(){
  createCanvas(1200,700);
  
  bg = createSprite(900,380);
  bg.addImage(bg_image);
  bg.scale = 1;
  
}
  
function draw(){
    background(0);
     bg.velocityX = -8;

     if (bg.x < 370) {
        bg.x = bg.width / 8;
    }

    drawSprites();
    
}
