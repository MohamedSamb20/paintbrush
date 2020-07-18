/* global p5 */

// DO NOT DELETE THE FOLLOWING LINE
const p = new p5(() => {});

/*
Today's topics:

+ keyPressed() and mousePressed()
+ More HSB color mode
+ Mouse input data
+ random() function

*/


let brushHue, priorX, priorY, brushWeight, saturation, brightness;

p.setup = function () {
  // Canvas & color settings
  p.createCanvas(400, 400);
  p.colorMode(p.HSB, 360, 100, 100);
  brushHue = 0;
  p.strokeWeight(6);
  p.background(95);
  priorX = 0;
  priorY = 0;
  brushWeight = 5;
  saturation = 50;
  brightness = 80;
}

p.draw = function () {
  chooseColors();
  p.strokeWeight(brushWeight);
  if(p.mouseIsPressed){
    p.line(priorX, priorY, p.mouseX, p.mouseY);
  }
  priorX = p.mouseX;
  priorY = p.mouseY
  if(brushWeight >= 15){
    brushWeight = 4;
  }
  brushWeight++;
}

p.keyPressed = function() {
  let key = event.keyCode;
  if(key == 82){//if r is pressed
    brushHue = 0;//color is red
  }
  else if(key == 79){//if o is pressed
    brushHue = 25;//color is orange
  }
  else if(key == 89){
    brushHue = 50;
  }
  else if(key == 71){//if g is pressed
    brushHue = 95;//color is green
  }
  else if(key == 66){//if b is pressed
    brushHue = 175;//color is blue
  }
  else if(key == 80){//if p is pressed
    brushHue = 250;//color is purple
  }
  else if(key == 191){//if ? is pressed
    brushHue = p.random(360);//color is random
  }
  else if(key == 83){//if s is pressed
    p.rect(p.random(400), p.random(400),10,10);
  }
  else if(key == 67){//if c is pressed
    p.ellipse(p.random(400), p.random(400),10);
  }
  else if(key == 68){//if d is pressed
    saturation = p.random(100);
  }
  else if(key == 78){//if n is pressed
    brightness = p.random(100);
  }
  /*else if(key == 69){
    //saturation = 0;
  }*/
  else if(key == 32){
    p.background(95);
  }
}

p.mousePressed = function(){
}

function chooseColors() {
  p.stroke(brushHue, saturation, brightness);
  p.fill(brushHue, saturation, brightness);
}
