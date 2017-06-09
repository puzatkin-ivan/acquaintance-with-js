const WIDTH_CANVAS = 1200;
const HEIGHT_CANVAS = 800;

let canvas = document.getElementById("homeOnTheLawn");
let canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

class cloud {
  constructor (xCloud, yCloud, xStep) {
    this.x = xCloud;
    this.y = yCloud;
    this.slip = xStep;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#ffffff";
    context.moveTo(this.x, this.y);
    context.quadraticCurveTo(this.x - 25, this.y - 35, this.x + 40, this.y - 20);
    context.quadraticCurveTo(this.x + 105, this.y - 45, this.x + 75, this.y + 15);
    context.quadraticCurveTo(this.x + 20 , this.y + 40, this.x, this.y + 20);
    context.quadraticCurveTo(this.x - 25, this.y + 20, this.x, this.y);
    context.closePath();
    context.fill();
    context.stroke();
    if (this.x > 1200) {
      this.x = -150;
    }
    this.x += this.slip;
  }
}
const cloud1 = new cloud(100, 50, 2);
const cloud2 = new cloud(150, 30, 3);
const cloud3 = new cloud(250, 35, 10);
const cloud4 = new cloud(350, 30, 7);
const cloud5 = new cloud(450, 50, 4);
const cloud6 = new cloud(450, 60, 1);

function drawSkyAndSun(context) {
  context.fillStyle = "#1f64ff";
  context.fillRect(0, 0, WIDTH_CANVAS, HEIGHT_CANVAS);

  context.arc(1100, 60, 45, 0, 2 * Math.PI);
  context.fillStyle = "#e1ff00";
  context.fill();

  cloud1.draw(canvasContext);
  cloud2.draw(canvasContext);
  cloud3.draw(canvasContext);
  cloud4.draw(canvasContext);
  cloud5.draw(canvasContext);
  cloud6.draw(canvasContext);
}

class herb {
  constructor (xHerb, yHerb) {
    this.x = xHerb;
    this.y = yHerb;
  }

  draw(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.strokeStyle = "#1dab28";
    context.lineWidth = 5;
    context.lineTo(this.x + 10, this.y + 10);
    context.lineTo(this.x + 10, this.y - 10);
    context.moveTo(this.x + 10, this.y + 10);
    context.lineTo(this.x + 20, this.y);
    context.closePath();
    context.stroke()
  }
}
const herb1 = new herb(40, 400);
const herb2 = new herb(500, 400);
const herb3 = new herb(600, 600);
const herb4 = new herb(25, 550);
const herb5 = new herb(800, 400);
const herb6 = new herb(1100, 600);
const herb7 = new herb(500, 750);
const herb8 = new herb(550, 450);
const herb9 = new herb(30, 450);
const herb10 = new herb(10, 400);
const herb11 = new herb(1000, 400);

function drawLawn(context) {
  context.fillStyle = "#44ff25";
  context.fillRect(0, 350, WIDTH_CANVAS, HEIGHT_CANVAS);

  herb1.draw(context);
  herb2.draw(context);
  herb3.draw(context);
  herb4.draw(context);
  herb5.draw(context);
  herb6.draw(context);
  herb7.draw(context);
  herb8.draw(context);
  herb9.draw(context);
  herb10.draw(context);
  herb11.draw(context);
}

class windowHome {
  constructor(xWindow, yWindow, widthWindow, hWindow) {
    this.x = xWindow;
    this.y = yWindow;
    this.widthW = widthWindow;
    this.hWindow = hWindow;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = "#fff";
    context.strokeStyle = "#abc";
    context.fillRect(this.x, this.y, this.widthW, this.hWindow);
    context.closePath();
  }
}
const windowHome1 = new windowHome(195, 375, 65, 105);
const windowHome2 = new windowHome(295, 375, 65, 105);
const windowHome3 = new windowHome(395, 375, 65, 105);

class home {
  constructor(xHome, yHome, wHome, heightHome, colorHome) {
    this.x = xHome;
    this.y = yHome;
    this.wHome = wHome;
    this.heightHome = heightHome;
    this.colorHome = colorHome;
  }

  draw(context) {
    context.fillStyle = this.colorHome;
    context.fillRect(this.x, this.y, this.wHome, this.heightHome);

    context.fillStyle = "brown";
    context.fillRect(195, 145, 35, 110);

    context.beginPath();
    context.fillStyle = "#371b07";
    context.strokeStyle = "#000000";
    context.lineWidth = 5;
    context.moveTo(325, 120);
    context.lineTo(125, 300);
    context.lineTo(525, 300);
    context.lineTo(325, 120);
    context.fill();
    context.stroke();

    windowHome1.draw(context);
    windowHome2.draw(context);
    windowHome3.draw(context);
  }
}
const mainHome = new home(150, 300, 350, 300, "#923b13");

class rabbit {
  constructor (xRabbit, yRabbit) {
    this.x = xRabbit;
    this.y = yRabbit;
  }

  drawRabbit(context) {
    let rabbit = document.getElementById("rabbit");
    context.drawImage(rabbit, 0, 0, 350, 500, this.x, this.y, 300, 450);
  }
}
const bigRabbit = new rabbit(800, 400, 5);

function jumpRabbit(objectRabbit, context, stepJump) {
  objectRabbit.drawRabbit(context);

  objectRabbit.y += stepJump;
}

let stepJumpRabbit = -25;
let moveCloud = function () {
  drawSkyAndSun(canvasContext);
  drawLawn(canvasContext);
  mainHome.draw(canvasContext);
  jumpRabbit(bigRabbit, canvasContext, stepJumpRabbit);
  stepJumpRabbit += 1;
  if (stepJumpRabbit > 25) {
    stepJumpRabbit = -25;
  }
  requestAnimationFrame(moveCloud);
};

moveCloud();