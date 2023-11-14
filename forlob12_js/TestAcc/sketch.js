let ax = 0;
let x = 200;
let y = 200;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  window.addEventListener("devicemotion", phoneMoved);
}

function phoneMoved(event){
  ax = event.accelerationIncludingGravity.x;
}

function draw() {
  background(220);
  textSize(30);
  text(frameRate(),40,40);  
  fill(255,0,0);
  circle(x,y,100);
  if(ax > 1) x=x+10;
  if(ax < -1) x=x-10;
}