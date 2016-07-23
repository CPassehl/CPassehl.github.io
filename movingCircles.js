function setup() {
  createCanvas(1600, 1200);
   
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 100, 100);
  } else {
    fill(80, 115,196, 1);
  }
  ellipse(mouseX, mouseY, 60, 60);
 
 

  if (keyIsPressed) {
    ellipse(mouseX, mouseY, 300, 300);
   
} else {
    fill(150, 34,84, 1);
  }





}

