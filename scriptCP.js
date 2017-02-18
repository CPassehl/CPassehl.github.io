var y = 0; 
  var x = 60;
  var yA = 10; 
  var xA = 250;
  //var xB = mouseX;
  //var yB = mouseB;
  function setup() {
    var canvas = createCanvas(displayWidth * .65, displayHeight * .7); 
    canvas.parent('sketch-holder'); 
    background('255');
    textFont("Source Code Pro");
  }

  function draw() {
    strokeWeight(0);
    textSize(80);
    text("c    l     i       c           k               .                       .                         .", 10, 900);
    stroke(78, 91, 115);
    strokeWeight(.5);
    line(x + 20, y + 1, 200, 400);
    // first series of circles 
    ellipse(x,y, 60,60);
      y = y+3;             // animates first circle at left

      if(y >= 225) { 
      y=401; 
      x=x+3;
    }
      if(x >= 400) {
      x = x + 2; y = 500;
      if(x >= 500) { 
      x = x + 1;y = 700;
          if(x >= 1100 && y < x) { 
          noLoop(25) }}
    } 

    // second series of circles
    ellipse(xA,yA, 80,80);    
      yA = yA+5;
      if(x >= 1200 && yA >= 200) {
      xA = 1199; yA = yA-1; 
    }
    //beginShape(rect); 
    rect(xA, yA, 600, 600);
    noFill();
      if(yA <= 400) {
        stroke(0);
        xA = xA + 6; yA = yA + 3;
          if(xA >= 550){
            console.log("ok okkkkkkkkkk");
            frameRate(20);
            xA = xA + 10;
          }

}
}


    document.addEventListener("click", function aFunction() { 
    var elem1 = canvas; 
    if (click = true) { 
      loop();
      translate(mouseX, mouseY + 35);
      rotate(mouseX - 50, mouseY);
        beginShape();
        vertex(300, 375);
        vertex(400, 920);
        vertex(500, 675);
        vertex(600, 200);
        vertex(700, 750);
        vertex(800, 290);
        vertex(900, 375);
        vertex(10, 75);
        vertex(40, 20);
        vertex(50, 5);
        vertex(60, 20);
        vertex(70, 7);
        vertex(80, 29);
        vertex(90, 37);
        vertex(300, 175);
        endShape(); 
        }
}) 
