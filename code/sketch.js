let numberOfLines = 10; //per quadrant
let canW = 500;
let canH = 500;

function setup(){
  createCanvas(500,500);
  colorMode(HSB, canW, canH); // change colour mode and defined the range as the canW and canH
  rectMode(CENTER);
}

function draw(){

  let step = canH/(numberOfLines*2);
  let x = canW/2;
  let y = 0;

  numberOfLines = map(mouseX, 0,canW, 3,15);

  background(0);

  //translate(canW/2, canH/2);
  stroke(180,97,97);

  //Centre Cross
  line(canW/2,0, canW/2,canH);
  line(0,canH/2, canH,canH/2);

  // for each increment of y, x goes from centre to zero then centre to canW

  //Quadrant 1
  for (let i = 0; i <= canH/2; i += step ){
    line(canW/2,y, x,canH/2);
    x -= step;
    y += step;
  }

  //Quadrant 3
  for (let i = 0; i <= canH/2; i += step ){
    line(canW/2,y, x,canH/2);
    x += step;
    y += step;
  }

  //Quadrant 4
  for (let i = 0; i <= canH/2; i += step ){
    line(canW/2,y, x,canH/2);
    x += step;
    y -= step;
  }

  //Quadrant 2
  for (let i = 0; i <= canH/2; i += step ){
    line(canW/2,y, x,canH/2);
    x -= step;
    y -= step;
  }



  // Smaller
  //Quadrant 1

  rotate(mouseY);
  push();
    for (let i = 0; i <= canH/2; i += step ){
      line(canW/2,y, x,canH/2);
      x -= step;
      y += step;
    }

    //Quadrant 3
    for (let i = 0; i <= canH/2; i += step ){
      line(canW/2,y, x,canH/2);
      x += step;
      y += step;
    }

    //Quadrant 4
    for (let i = 0; i <= canH/2; i += step ){
      line(canW/2,y, x,canH/2);
      x += step;
      y -= step;
    }

    //Quadrant 2
    for (let i = 0; i <= canH/2; i += step ){
      line(canW/2,y, x,canH/2);
      x -= step;
      y -= step;
    }
  pop();


}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
