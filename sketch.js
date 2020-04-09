
var r = 255;
var g = 255;
var b = 255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1500,700);
}


function draw(){
  r = World.mouseX/6;
  g = World.mouseX/7;
  b = World.mouseX/8;

  background(r, g, b);
  ellipse(mouseX, mouseY, 30);

  drawSprites();
}