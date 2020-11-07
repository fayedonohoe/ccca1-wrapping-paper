let numberOfLines = 10; //per quadrant

function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  rectMode(CENTER);
}

function draw(){

  let step = height/(numberOfLines*2);
  let x = width/2;
  let y = 0;

  background(0);

  //translate(width/2, height/2);
  stroke(180,97,97);

  //Centre Cross
  line(width/2,0, width/2,height);
  line(0,height/2, height,height/2);

  // for each increment of y, x goes from centre to zero then centre to width

  //Quadrant 1
  for (let i = 0; i <= height/2; i += step ){
    line(width/2,y, x,height/2);
    x -= step;
    y += step;
  }

  //Quadrant 3
  for (let i = 0; i <= height/2; i += step ){
    line(width/2,y, x,height/2);
    x += step;
    y += step;
  }

  //y = 0;

  //Quadrant 4
  for (let i = 0; i <= height/2; i += step ){
    line(width/2,y, x,height/2);
    x += step;
    y -= step;
  }

  //Quadrant 4
  for (let i = 0; i <= height/2; i += step ){
    line(width/2,y, x,height/2);
    x -= step;
    y -= step;
  }

}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
