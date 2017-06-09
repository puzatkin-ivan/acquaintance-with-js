const WIDTH_CANVAS = 1200;
const HEIGHT_CANVAS = 800;

let canvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

class ball {
  constructor(xBall, yBall, radiusBall) {
    this.x = xBall;
    this.y = yBall;
    this.radiusBall = radiusBall;
  }

  drawBall(context) {
    context.beginPath();
    context.fillStyle = "black";
    context.arc(this.x, this.y, this.radiusBall, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

  splotBall(xStep, yStep) {
    this.x += xStep;
    this.y += yStep;
  }
}

let xStepCoord = 2;
let yStepCoord = 2;

const balls = new ball(10, 10, 10);
let col = function(){
  canvasContext.clearRect(0, 0, 1200, 800);
  balls.drawBall(canvasContext);

  if (balls.y > 785) {
    yStepCoord = -2;
  } else if (balls.y < 10) {
    yStepCoord = 2;
  }

  if (balls.x > 1190) {
    xStepCoord= -2;
  } else if (balls.x < 10) {
    xStepCoord = 2;
  }

  balls.splotBall(xStepCoord, yStepCoord);

  requestAnimationFrame(col);
};

col();