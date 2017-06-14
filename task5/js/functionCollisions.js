const WIDTH_CANVAS = 1200;
const HEIGHT_CANVAS = 800;
const DIRECTION_UP = "direction_up";
const DIRECTION_LEFT = "direction_left";
const DIRECTION_RIGHT = "direction_right";
const DIRECTION_DOWN = "direction_down";
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

class Ball {
  constructor(xBall, yBall, radiusBall) {
    this.x = xBall;
    this.y = yBall;
    this.radiusBall = radiusBall;
    this.WIDTH = radiusBall;
    this.HEIGHT = radiusBall;
    this.directionX = DIRECTION_RIGHT;
    this.directionY = DIRECTION_DOWN;
  }

  drawBall(context) {
    context.beginPath();
    context.fillStyle = "black";
    context.arc(this.x, this.y, this.radiusBall, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

  setDirectionX(direction) {
    this.directionX = direction;
  }

  setDirectionY(direction) {
    this.directionY = direction;
  }

  moveBallX(speed) {
    this.x += (this.directionX === DIRECTION_RIGHT) ? speed : -speed;
  }

  moveBallY(speed) {
    this.y += (this.directionY === DIRECTION_DOWN) ? speed : -speed;
  }
}

const processBallCollision = function(ball) {
  const ballLeft = ball.x;
  const ballRight = ball.x + ball.WIDTH;

  if (ballLeft < ball.radiusBall) {
    ball.setDirectionX(DIRECTION_RIGHT);
    ball.x = ball.radiusBall;
  } else if (ballRight >= WIDTH_CANVAS) {
    ball.setDirectionX(DIRECTION_LEFT);
    ball.x = WIDTH_CANVAS - ball.WIDTH;
  }

  const ballUp = ball.y;
  const ballDown = ball.y + ball.HEIGHT;

  if (ballUp < ball.radiusBall) {
    ball.setDirectionY(DIRECTION_DOWN);
    ball.y = ball.radiusBall;
  } else if (ballDown >= HEIGHT_CANVAS) {
    ball.setDirectionY(DIRECTION_UP);
    ball.y = HEIGHT_CANVAS - ball.HEIGHT;
  }
};

const gameContext = {
  balls: [
    new Ball(0, 100, 100),
    new Ball(1200, 500, 105),
  ]
};

const mainLoop = function (gameContext) {
  //update
  for (const ball of gameContext.balls) {
    ball.moveBallX(5);
    ball.moveBallY(5);
    processBallCollision(ball);
  }

  //draw
  canvasContext.clearRect(0, 0, WIDTH_CANVAS, HEIGHT_CANVAS);
  for (const ball of gameContext.balls) {
    ball.drawBall(canvasContext);
  }

  requestAnimationFrame(function() {
    mainLoop(gameContext);
  });
};

mainLoop(gameContext);