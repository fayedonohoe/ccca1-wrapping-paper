
function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  rectMode(CENTER);
}

function draw(){

  background(0);

  fill(240,97,97);
  rect(0,0, 100, 100, 20);

}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
