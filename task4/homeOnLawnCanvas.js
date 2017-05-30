const WIDTH_CANVAS = 1200;
const HEIGHT_CANVAS = 800;

let canvas = document.getElementById("homeOnTheLawn");
let canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

createSky();
showSoon();
createLawn();
createHome();
showRabbit();

function createSky() {
  canvasContext.fillStyle = "#86b0db";
  canvasContext.fillRect(0, 0, WIDTH_CANVAS, 350);

  let imgCloud = new Image();
  imgCloud.src = 'spriteCanvas.png';
  imgCloud.addEventListener("load", function() {
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 50, 10, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 150, 50, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 250, 25, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 400, 5, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 500, 40, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 550, 5, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 650, 45, 120, 80);
    canvasContext.drawImage(imgCloud, 300, 70, 200, 150, 800, 10, 120, 80);
  });
}

function showSoon() {
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
    let img2 = new Image();

    img2.src = 'spriteCanvas.png';
    img2.addEventListener("load", function() {
      canvasContext.drawImage(img2, 0, 0, 300, 450, 800, 250, 250, 350)
    });
}