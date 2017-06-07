<script>
    var wordsString = "c, h, r, i, s, t, o, p, h, e, r";
   // var wordsArray = wordsString.split(",");
    var sourceText = "c c  c c C c h ri s top h e   r";     //"c h r i s";
    var curIndex = 0;
function setup() {
  var div1 = createCanvas(windowWidth , windowHeight );
  //myCanvas.class("canvaaa");
  var res = 20;
  var countX = ceil(width/res) + 1;
  var countY = ceil(height/res) + 1;
  //frameRate(6);
  // div1.rotate(PI/10);
  // for (var j = 0; j < countY; j++) {
  //   for (var i = 0; i < countX; i++) {
  //     wordsArray.push( new p5.Vector(res*i, res*j) );    //  locs
  //   }
  // };
}
function draw() {
//background(random(250), 150+(sin(frameCount/10)*50) , 400-frameCount, 50);
  //textSize(150+(sin(frameCount/10)*50) );
    textSize(10+random(1500) );
    stroke(mouseY + 40,75,mouseX + 128, 50);
    text(
    //sourceText.substring(curIndex, curIndex+1),
    sourceText.substring(curIndex+2, curIndex+3),
    random(1200), height/1.5);  //width/2, height/2
    curIndex++;
        if (curIndex > sourceText.length) {
            curIndex = 0;
  }
  // if (mouseX > 500) {
    fill(random(255),random(200),random(200), 100);
 // }
  // for (var i = wordsArray.length - 1; i >= 0; i--) {
  //   var h = calcVec( wordsArray[i].x - mouseX, wordsArray[i].y - mouseY);
  // //rotate(PI/32.0);
  //noFill();
  // };
}
// function calcVec(x, y) {
//   return new p5.Vector(y - x, - x - y);
// }
</script>
