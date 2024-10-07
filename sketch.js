function setup() {
  createCanvas(400, 400);
  ey = 0;
  ex = random(0, width)
}

let ey, ex;

function draw() {
  background(230, 177, 101);
  fill(150, 255, 255)
  square(mouseX, height-100, 50);
  // line(mouseX, mouseY, pmouseX, pmouseY);
  fill(255, 19, 240)
  ellipse(ex, ey, 10);
  ey = ey + 10;

  if(ey > height) {
    ey = 0;
    ex = random(0, width)
  }

  if (ey > height - 100 && ex > mouseX+25 && ex < mouseX-25) {
    print("hit")
  }
}
