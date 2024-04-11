function setup() {
  createCanvas(300, 300);
}
function draw() {
  background(100);
  rectMode(CENTER);
  fill(225);
  rect(250,250,100,100);
  rect(250,150,100,100);
  rect(250,50,100,100);
  line(275,300,275,240);
  line(230,300,230,240);
  line(230,240,275,240);
  ellipseMode(CENTER);
  ellipse(125,270,50,50);
  point(125,270);
  noFill();
  ellipseMode(RADIUS)
  ellipse(40,270,25,25);
  point(40,270);
}