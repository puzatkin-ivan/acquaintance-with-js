const WIDTH_CANVAS = 1200;
const HEIGHT_CANVAS = 800;

let canvas = document.getElementById("homeOnTheLawn");
let canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;


function moveCloud(xCloud) {
  drawCloud(xCloud, 50);
  drawCloud(xCloud + 100, 75);
  drawCloud(xCloud + 50, 150);
}
let xCloud = 50;
let timeBetweenJump = 50;
let animatedCanvas = function() {
  drawAll();

  moveCloud(xCloud);

  timeBetweenJump -= 1;
  xCloud += 2;

  if (timeBetweenJump === 0) {
    jumpRabbit();
    timeBetweenJump = 50;
  } else {
    drawRabbit(250);
  }

  if (xCloud > 1100) {
    xCloud = 0;
    requestAnimationFrame(animatedCanvas);
  } else {
    requestAnimationFrame(animatedCanvas);
  }
};

animatedCanvas();

function drawCloud(xCloud, yCloud) {
  canvasContext.beginPath();
  canvasContext.fillStyle = "white";
  canvasContext.strokeStyle = "white";
  canvasContext.moveTo(xCloud, yCloud);
  canvasContext.quadraticCurveTo(xCloud - 25, yCloud - 35, xCloud + 40, yCloud - 20);
  canvasContext.quadraticCurveTo(xCloud + 105, yCloud - 45, xCloud + 75, yCloud + 15);
  canvasContext.quadraticCurveTo(xCloud + 20 , yCloud + 40, xCloud, yCloud + 20);
  canvasContext.quadraticCurveTo(xCloud - 25, yCloud + 20, xCloud, yCloud);
  canvasContext.closePath();
  canvasContext.fill();
  canvasContext.stroke();
}

function jumpRabbit() {
  let yRabbit = 250;

  for (let timeJumpTop = 100; timeJumpTop !== 0; timeJumpTop--) {
    yRabbit -= 1;
    drawRabbit(yRabbit);
  }
}

function drawRabbit(yRabbit) {
  let rabbit = document.getElementById("rabbit");

  canvasContext.drawImage(rabbit, 0, 0, 350, 500, 800, yRabbit, 300, 450);
}

function drawAll(){
  drawSky();
  drawSun();
  drawLawn();
  drawHome();
}

function drawSky() {
  canvasContext.fillStyle = "#86b0db";
  canvasContext.fillRect(0, 0, WIDTH_CANVAS, 350);
}

function drawSun() {
  canvasContext.arc(1100, 60, 45, 0, 2 * Math.PI);
  canvasContext.fillStyle = '#e1ff00';
  canvasContext.fill();
}

function drawLawn() {
  canvasContext.fillStyle = "#4ee239";
  canvasContext.fillRect(0, 350, WIDTH_CANVAS, 450);
  drawHerb(10, 500);
  drawHerb(550, 400);
  drawHerb(600, 500);
  drawHerb(800, 450);
}

function drawHerb(x, y) {
  canvasContext.beginPath();
  canvasContext.moveTo(x, y);
  canvasContext.strokeStyle = "#1dab28";
  canvasContext.lineWidth = 5;
  canvasContext.lineTo(x + 10, y + 10);
  canvasContext.lineTo(x + 10, y - 10);
  canvasContext.moveTo(x + 10, y + 10);
  canvasContext.lineTo(x + 20, y);
  canvasContext.closePath();
  canvasContext.stroke()
}


function drawHome() {
    canvasContext.fillStyle = "#923b13";
    canvasContext.fillRect(150, 300, 350, 300);
    drawWindow();
    drawHousetop();
}

function drawWindow() {
  for (let numberWindow = 3; numberWindow !== 0; --numberWindow) {
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(195, 375, 65, 105);
    canvasContext.translate(100, 0);
  }

  canvasContext.translate(-300, 0);
}

function drawHousetop() {
  drawChimney();
  canvasContext.beginPath();
  canvasContext.fillStyle = "#371b07";
  canvasContext.strokeStyle = "#000000";
  canvasContext.lineWidth = 5;
  canvasContext.moveTo(325, 120);
  canvasContext.lineTo(125, 300);
  canvasContext.lineTo(525, 300);
  canvasContext.lineTo(325, 120);
  canvasContext.fill();
  canvasContext.stroke();
}

function drawChimney() {
  canvasContext.fillStyle = "brown";
  canvasContext.fillRect(195, 145, 35, 110);
}

