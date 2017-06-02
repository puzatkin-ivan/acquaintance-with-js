const WIDTH_CANVAS = 1200;
const HEIGHT_CANVAS = 800;

let canvas = document.getElementById("homeOnTheLawn");
let canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

createSky();
showSun();
moveCloud(50, 50);
createLawn();
createHome();
showRabbit();

function createSky() {
  canvasContext.fillStyle = "#86b0db";
  canvasContext.fillRect(0, 0, WIDTH_CANVAS, 350);
}


function moveCloud(x, y) {
  showCloud(x, y);
  showCloud(x + 70, y + 50);
  showCloud(x + 175, y + 40);
  showCloud(x + 250, y + 10);
  showCloud(x + 300, y + 70);
  showCloud(x + 400, y + 35);
  showCloud(x + 500, y + 20);
  showCloud(x + 600, y + 10);
  showCloud(x + 700, y);
  showCloud(x + 800, y + 35);
  showCloud(x + 900, y + 10);
}

function showCloud(xCloud, yCloud) {
  canvasContext.beginPath();
  canvasContext.fillStyle = "white";
  canvasContext.moveTo(xCloud, yCloud);
  canvasContext.quadraticCurveTo(xCloud - 25, yCloud - 35, xCloud + 40, yCloud - 20);
  canvasContext.quadraticCurveTo(xCloud + 105, yCloud - 45, xCloud + 75, yCloud + 15);
  canvasContext.quadraticCurveTo(xCloud + 20 , yCloud + 40, xCloud, yCloud + 20);
  canvasContext.quadraticCurveTo(xCloud - 25, yCloud + 20, xCloud, yCloud);
  canvasContext.closePath();
  canvasContext.fill();
}

function showSun() {
    canvasContext.arc(1100, 60, 45, 0, 2 * Math.PI);
    canvasContext.fillStyle = '#e1ff00';
    canvasContext.fill();
}

function createLawn() {
    canvasContext.fillStyle = "#4ee239";
    canvasContext.fillRect(0, 350, WIDTH_CANVAS, 450);
    createHerb();
}

function createHerb() {

}

function createHome() {
    canvasContext.fillStyle = "#923b13";
    canvasContext.fillRect(150, 300, 350, 300);
    showWindow();
    createHousetop();
}

function showWindow() {
  for (let numberWindow = 3; numberWindow !== 0; --numberWindow) {
    createWindow();
    canvasContext.translate(100, 0);
  }

  canvasContext.translate(-300, 0);
}

function createWindow() {
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(195, 375, 65, 105);
}

function createHousetop() {
    createChimney();
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

function createChimney() {
    canvasContext.fillStyle = "brown";
    canvasContext.fillRect(195, 145, 35, 110);
}

function showRabbit() {
    let rabbit = new Image();

    rabbit.src = 'spriteCanvas.png';
    rabbit.addEventListener("load", function() {
      canvasContext.drawImage(rabbit, 0, 0, 300, 450, 800, 250, 250, 350)
    });
}