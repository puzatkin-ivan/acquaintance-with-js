const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 800;

let canvas = document.getElementById("homeOnTheLawn");
let canvasContext = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT ;

class Cloud {
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

class Herb {
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

class WindowHome {
  constructor(xWindow, yWindow, widthWindow, hWindow) {
    this.x = xWindow;
    this.y = yWindow;
    this.widthW = widthWindow;
    this.hWindow = hWindow;
  }

  drawWindow(context) {
    context.beginPath();
    context.fillStyle = "#fff";
    context.strokeStyle = "#abc";
    context.fillRect(this.x, this.y, this.widthW, this.hWindow);
    context.closePath();
  }
}

class House {
  constructor(xHome, yHome, wHome, heightHome, colorHome) {
    this.x = xHome;
    this.y = yHome;
    this.wHome = wHome;
    this.heightHome = heightHome;
    this.colorHome = colorHome;
  }

  draw(context, homeContext) {
    context.fillStyle = this.colorHome;
    context.fillRect(this.x, this.y, this.wHome, this.heightHome);

    context.fillStyle = "#923b13";
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

    for (const windowHome of homeContext.windowsHome) {
      windowHome.drawWindow(context);
    }
  }
}

class Rabbit {
  constructor (xRabbit, yRabbit) {
    this.x = xRabbit;
    this.y = yRabbit;
    this.jump = true;
    this.stepJump = -25;
  }

  drawRabbit(context) {
    let rabbit = document.getElementById("rabbit");
    context.drawImage(rabbit, 0, 0, 350, 500, this.x, this.y, 300, 450);
  }

  jumpRabbit(context) {
    this.drawRabbit(context);

    this.y += this.stepJump;
    this.stepJump += 1;
    if (this.stepJump > 25) {
      this.stepJump = -25;
      this.jump = false;
    }
  }
}

const animateContext = {
  clouds: [
    new Cloud(100, 50, 2),
    new Cloud(150, 30, 3),
    new Cloud(250, 35, 10),
    new Cloud(350, 30, 7),
    new Cloud(450, 50, 4),
    new Cloud(450, 60, 1),
  ],

  houses: [
    new House(150, 300, 350, 300, "#923b13"),
  ],

  herbs: [
    new Herb(40, 400),
    new Herb(500, 400),
    new Herb(600, 600),
    new Herb(25, 550),
    new Herb(800, 400),
    new Herb(1100, 600),
    new Herb(500, 750),
    new Herb(550, 450),
    new Herb(30, 450),
    new Herb(10, 400),
    new Herb(1000, 400),
  ],

  rabbits: [
    new Rabbit(800, 350),
  ],
};

const houseContext = {
  windowsHome: [
    new WindowHome(195, 375, 65, 105),
    new WindowHome(295, 375, 65, 105),
    new WindowHome(395, 375, 65, 105),
  ]
};

function drawSky(context) {
  context.fillStyle = "#1f64ff";
  context.fillRect(0, 0, 1200, 350);
}

function drawSoon(context) {
  context.arc(1100, 60, 45, 0, 2 * Math.PI);
  context.fillStyle = "#e1ff00";
  context.fill();
}

function drawLawn(context) {
  context.fillStyle = "#44ff25";
  context.fillRect(0, 350, 1200, 450);
}

let start = Date.now();
const mainLoop = function(context, animateContext) {
  //update
  let timingJumpRabbit = Date.now();
  let timing  = timingJumpRabbit - start;
  if (timing > 3000) {
    for (const rabbit of animateContext.rabbits) {
      rabbit.jump = true;
      start = timingJumpRabbit;
    }
  }
  //draw
  drawSky(context);
  drawSoon(context);
  drawLawn(context);
  for (const cloud of animateContext.clouds) {
    cloud.draw(context);
  }
  for (const house of animateContext.houses) {
    house.draw(context, houseContext);
  }
  for (const herb of animateContext.herbs) {
    herb.draw(context);
  }
  for (const rabbit of animateContext.rabbits) {
    if (rabbit.jump) {
      rabbit.jumpRabbit(context);
    } else {
      rabbit.drawRabbit(context);
    }
  }
  requestAnimationFrame(function() {
    mainLoop(context, animateContext);
  });
};

mainLoop(canvasContext, animateContext);