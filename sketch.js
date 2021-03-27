 var bg1, bg2;
 var charImg, char;
 var form;
 var gameState;
 gameState = "Intro";

 function preload(){
   bg1 = loadImage("images/start.png");
   bg2 = loadImage("images/z bg.jpg");

   charImg = loadImage("images/char p.png");
 }


function setup() {
  createCanvas(displayWidth - 10, displayHeight - 130);
  form = new Form();

  char = createSprite(displayWidth/2 - 450, displayHeight/2 + 100, 20, 20);
  char.addImage(charImg);
  char.scale = 0.3;
  char.visible = false;

}

function draw() {
  background(bg1); 

  if(gameState == "Start")
  {
    background(bg2);

    char.visible = true;

    stroke("red");
    fill("red");
    textSize(30);
    text("GOOD LUCK!!", displayWidth/2 - 50, displayHeight/2 - 150);
  }

  form.display(); 
  drawSprites();
}