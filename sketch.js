let pos, vel;
let bgImg;
let interacted = false;

function preload() {
  bgImg = loadImage('type-brief.jpg');
}

function setup() {
  createCanvas(594, 841);
  pos = createVector(width - 150, height - 75); // set initial placement of 'hiya' 
  vel = createVector(0, 0);

  textFont('fit-wide');
  textSize(150);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  image(bgImg, 0, 0, width, height);

  let d = dist(mouseX, mouseY, pos.x, pos.y);
  
  if (d < 150) {
    interacted = true;
  }

  if (interacted) {
    fill('#FBC64B'); // active color
  } else {
    fill('#efe9e7'); // default color
  }

  if (interacted) {
    if (d < 150) {
      let dir = p5.Vector.sub(pos, createVector(mouseX, mouseY));
      dir.setMag(2);
      vel.add(dir);
    }
  }

  pos.add(vel);
  vel.mult(0.9);

  pos.x = constrain(pos.x, 60, width - 60);
  pos.y = constrain(pos.y, 60, height - 60);

  text("hiya", pos.x, pos.y);
}
