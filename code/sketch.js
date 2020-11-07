
function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  rectMode(CENTER);
}

function draw(){

  background(0);

  //translate(width/2, height/2);
  stroke(180,97,97);

  //Centre Cross
  line(width/2,0, width/2,height);
  line(0,height/2, height,height/2);



}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
