const WIDTH_CANVAS = 400;
const HEIGHT_CANVAS = 450;

let canvas = document.getElementById("honkeycomb");
let canvasContext = canvas.getContext("2d");

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

showHonkeycomb(canvasContext);

function showHonkeycomb(canvasContext) {
  const STEP_BY_X = 50;
  const STEP_BY_Y = 35;
  let amountString = 12;

  while (amountString !== 0) {
    let amountItemString = 7;
    let numberH = -STEP_BY_X * amountItemString;

    while (amountItemString !== 0) {
      createHexagon(canvasContext);
      canvasContext.translate(STEP_BY_X, 0);
      amountItemString -= 1
    }

    if (amountString % 2 === 0) {
      canvasContext.translate(numberH + 25, STEP_BY_Y);
    } else {
      canvasContext.translate(numberH - 25, STEP_BY_Y);
    }

    amountString -= 1;
  }
}

function createHexagon(canvasContext) {
  canvasContext.beginPath();
  canvasContext.lineWidth = 3;
  canvasContext.moveTo(10, 20);
  canvasContext.lineTo(10, 20);
  canvasContext.lineTo(10, 40);
  canvasContext.lineTo(30, 50);
  canvasContext.lineTo(50, 40);
  canvasContext.lineTo(50, 20);
  canvasContext.lineTo(30, 10);
  canvasContext.lineTo(10, 20);
  canvasContext.stroke();
}