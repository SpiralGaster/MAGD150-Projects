var MOVEx,MOVEy;
var MOVESHAPE,STARTCIRCLE,STARTSQUARE;
var MOVExspeed;
var circleFill, rectFill;
var channel1;
var channel;
var mouseX,mouseY;

function setup() {
  createCanvas(400, 400);
  MOVEx=200;
  MOVEy=height/2;
  MOVExspeed=3;
  STARTCIRCLE=false;
  STARTSQUARE=false;
  channel1=0;
  channel=0;
}

function draw() {
  //bezel
  background(32);
//screen
  push();
  fill(80);
  rectMode(CENTER);
  rect(200,200,275,275)
  pop();

  //circle button and label
  push();
    if((dist(mouseX, mouseY,30,375)<20)){
  STARTCIRCLE = true;
    print(STARTCIRCLE);
     }else {
     STARTCIRCLE=false;
     }
  
  if (STARTCIRCLE){
    circleFill=100
  } else {
  circleFill = 255;
  }
  fill(circleFill,0,0);
  circle(30,375,40);
  fill(255);
  text("Start",15,350);
  pop();

 ///square button and label  
push();
  if (mouseX > 75 && mouseX < 110 && mouseY > 357 && mouseY < 392) {
STARTSQUARE=true;
}else{
  STARTSQUARE=false
}
  if (STARTSQUARE){
    rectFill=100
  } else {
  rectFill = 255;
  }
  fill(rectFill,0,0);
  rect(75,357,35,35);
  fill(255);
text("Reset",75,350);
pop();
  
  

  if(channel1>=1){
  ellipse(MOVEx,MOVEy,50,50);
  MOVEx+= MOVExspeed; 
  if(MOVEx-25<=65||MOVEx+25>335){
    MOVExspeed *=-1; 
  } 

}
}
function mousePressed() {
  if (STARTCIRCLE){
    channel++;
    channel1= channel / 1;
} else if (STARTSQUARE){
  set(channel=0)
  channel1= channel / 1;
}
  print( "Channel #: " +channel1);
}
