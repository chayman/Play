
function renderBall() {

  fill(200, 255, 200);
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

}

function moveBall() {
  ball.x = ball.x + (ball.xspeed * ball.xdirection);
  ball.y = ball.y + (ball.yspeed * ball.ydirection);
}

function detectEdges() {
  if (ball.x > width - 10 || ball.x < 10) {
    ball.xspeed *= -1.1;
  }
  if (ball.y > width - 10 || ball.y < 10) {
    ball.yspeed *= -1.1;
  }

}

function renderTarget() {
  fill(180, 190, 250, 100);
  ellipse(target.x, target.y, target.w, target.h);
}



function targetMove() {
  target.x = mouseX;
  target.y = mouseY;

}

function targetHit() {
  if (ball.x < target.x) {
    ball.xspeed = ball.xspeed * 1.01;

  }
  if (ball.y < target.y) {
    ball.yspeed = ball.yspeed - 0.5;
  }
}

function clearCanvas() {
  if (mouseIsPressed) {
    noStroke();
    fill(255);
    rect(0, 0, width, height);
  }
}

function newCanvas() {
  if (mouseIsPressed) {
    noLoop();
    ball.xspeed = 0;
    ball.yspeed = 0;
  }

}

function restart() {
  if (keyCode === LEFT_ARROW) {
    redraw();
  }
}

function finish() {
  if (ball.x <= 200 && ball.y<=200) {
noLoop();
  }
}