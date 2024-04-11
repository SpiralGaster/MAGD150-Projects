  var w = .5;
  var h = .5;

function setup() {
  createCanvas(400, 400);
  frameRate(60)
  print("Apparently if you make the denumrator or whatever different to each...")
  print("You get something pretty interesting, multiple pops and yet they arent.")
  let d = dist(width/565, height/565, mouseX, mouseY);
  print(d);

}

function draw() {
  background(0);
  ceil()
  w = (w + 1) % (height / 4);
  h = (h + 1) % (height / 6);
  fill(128, 0, 128)
  ellipse(pmouseX, pmouseY, w, h);
  ellipse(225, 200, w - 10, h - 10);
  ellipse(300,50, w + 10, h + 10)
  ellipse(300,300,w / 7 + 20, h / 7 + 20)
  ellipse(100,275, w * 2, h * 2)
  push()
  fill('#00FFFF')
  triangle(370,375,400,375,385,345)
  pop()
  push()
  ellipse(200,375,350,20)
  pop()
}