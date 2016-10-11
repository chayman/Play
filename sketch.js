var ball = {
  x: 500,
  y: 500,
  diameter: 20,
  xspeed: 3,
  yspeed: 3,
  xdirection: 2,
  ydirection: 1
};

var target = {
  x: 0,
  y: 0,
  w: 20,
  h: 20,

};

function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(255);

  var s = (millis() / 1000).toFixed(2);

  textSize(32);
  fill(0);
  text("Timer: " + s, 5, 50);
  if (ball.x < 0) {
    ball.x = 100;
    ball.y = 100;
  }
    renderBall();
    moveBall();
    detectEdges();
    renderTarget();
    targetMove();
    targetHit();
    clearCanvas();
    newCanvas();
    restart();
    finish();
}
