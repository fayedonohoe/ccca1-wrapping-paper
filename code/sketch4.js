let numberOfLines = 5; //per quadrant
let numberOfLinesMID = 10; //per quadrant

let canW = 500;
let canH = 500;

let transValX;
let transValY;
let rotValue;
let scaleVal;

let numberOfTiles = 20;
let tile = canW/numberOfTiles;
let lineLength = tile;

let lines = [];
let points = [];
let intersections = [];

function setup(){
  createCanvas(500,500);
  colorMode(HSB, canW, canH); // change colour mode and defined the range as the canW and canH
  rectMode(CENTER);
  // noLoop();
}

function draw(){

  let step = canH/(numberOfLines);
  let x = canW/2;
  let y = 0;

  numberOfLines = map(mouseX, 0,canW, 3,15);
  scaleVal = map(mouseY, 0,canH, 0.2,1);

  background(0);

  for (let j = 0; j<numberOfTiles; j++){
    for (let i = 0; i<numberOfTiles; i++){

      transValX = i*canW;
      transValY = j*canH;

      push()
      scale(0.2);
        translate(transValX,transValY);
        //rotValue = atan2(mouseY-transValY, mouseX-transValX);
        //let distance = dist(mouseX, mouseY, transValX, transValY);

        stroke(189,78,92);

        let rand = round(random(0,3));
        let p1 = createVector();
        let p2 = createVector();
        let tempLine = [];
        //switch (rand) {

        //Centre Cross
        // line(canW/2,0, canW/2,canH);
        // line(0,canH/2, canH,canH/2);

        // for each increment of y, x goes from centre to zero then centre to canW

        push()
        scale(scaleVal);
        //Quadrant 1
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.y = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x -= step;
          y += step;
        }

        //Quadrant 3
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.y = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x += step;
          y += step;
        }

        //Quadrant 4
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.y = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x += step;
          y -= step;
        }

        //Quadrant 2
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.y = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x -= step;
          y -= step;
        }
        pop()
        pop()

      } // end inner for
    }  // end outer for

}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
