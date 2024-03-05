var capture;
var hold;

function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.hide();
  hold = createImage(320, 240);
  
}

function draw() {
  background(255);
  
  image(capture, 0, 0, 320, 240);

 
  image(hold, 0, 0, 320, 240);
}

function mousePressed() {
	
  hold = capture.get(0, 0, 320, 240);
  
  capture = createCapture(VIDEO);
  
  saveCanvas();
  
  
}