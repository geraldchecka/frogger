import Resources from './resources.js';

// classes - OOD
  // Grid
    // method - grid operation related
    // variables - grid operation related configuration

// Future
// Portrait & landscape

function drawGrid(images, { context, canvas }, config) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  config.getGameBoard.map((row, index) => {
    if (row === "water") {
      drawWater(context, images, config, index);
    }
    else if (row === "stone") {
      drawStone(context, images, config, index);
    }
    else {
      drawGrass(context, images, config, index);
    }
  })
  // ctx.drawImage(images.enemy, 100, 0, 50, 50);
  // ctx.drawImage(images.stone, 300, 204);
  // ctx.drawImage(images.character, 0, 450);
}

function drawGrass(context, images, config, row) {
  for (let c = 0; c < config.cols; c++) {
    context.drawImage(images.grass, config.colWidth * c, row * config.imageHeight - config.vTransp, config.colWidth, config.colHeight);
  }
}
function drawStone(context, images, config, row) {
  for (let c = 0; c < config.cols; c++) {
    context.drawImage(images.stone, config.colWidth * c, row * config.imageHeight - config.vTransp, config.colWidth, config.colHeight);
  }
}
function drawWater(context, images, config, row) {
  for (let c = 0; c < config.cols; c++) {
    context.drawImage(images.water, config.colWidth * c, row * config.imageHeight - config.vTransp, config.colWidth, config.colHeight);
  }
}
function drawEnemy(context) {}

function createCanvas(config, canvasID = "frogger-canvas") {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.setAttribute("id", canvasID);
  canvas.width = config.gridWidth;
  canvas.height = config.gridHeight;
  canvas.style = "margin-right: auto; margin-left: auto; display: block;";
  document.body.appendChild(canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);

  return {
    canvas,
    context
  };
}

// Grid class initialises the grid and makes available necessary methods and properties
export default function Grid(canvasID, /* Frogger v2.0 orientation feature */) {
  Object.defineProperty(this, 'config', {
    value: Object.freeze({
      // board: {
      //   water: 1,
      //   stone: 4,
      //   grass: 2
      // },
      get getGameBoard() {
        return [
          "water",
          "water",
          "stone",
          "stone",
          "stone",
          "stone",
          "grass",
          "grass"
        ];
      },
      rows: 7,
      cols: 9,
      colWidth: 60,
      colHeight: 90,
      vTransp: 26,
      get gridWidth() {
        return this.cols * this.colWidth;
      },
      get gridHeight() {
        return this.rows * this.imageHeight+65;
      },
      get imageHeight() {
        return Math.round((171-(this.colWidth-22))/171*this.colHeight)-this.vTransp;
      }
    }),
    configurable: false,
    writable: false,
    enumerable: true,
  });

  Object.defineProperty(this, 'grid', {
    value: {
      ...createCanvas(this.config, canvasID)
    },
    configurable: false,
    writable: true,
    enumerable: false,
  });
}

Grid.prototype.init = function(images) {
  // Make API call from here instead of Resources
  drawGrid(images, this.grid, this.config);
}

Resources.then((res) => {
  // debugger;
  // draw grid
  console.log("loaded assets")
  const frogger = new Grid();
  frogger.init(res);
})
.catch(err => {
  console.log(err);
})