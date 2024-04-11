let x = 0;
let X = .05;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(200);
  fill(153,101,21);
  ellipse(X, height/2, 70, 70);
  X++;
  push();
  fill(255,255,0);
  ellipse(x, height/2, 60, 60);
  x++;
  pop();
}
  if (x >= 400){
    set (x=0);
  }
  if (X >= 400){
    set (X=0);
  }
function mousePressed() {
  loop();
}
function mouseReleased() {
  noLoop();
}
function keyTyped(){
  if (key === 'p');
    print ('Pizza pizza!');
}