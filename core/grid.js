import Resources from './resources.js';

function drawGrass(context, images, config, row) {
  for (let c = 0; c < config.cols; c++) {
    context.drawImage(
      images.grass,
      config.colWidth * c,
      row * config.imageHeight - config.vTransp,
      config.colWidth,
      config.colHeight
    );
  }
}

function drawStone(context, images, config, row) {
  for (let c = 0; c < config.cols; c++) {
    context.drawImage(
      images.stone,
      config.colWidth * c,
      row * config.imageHeight - config.vTransp,
      config.colWidth,
      config.colHeight
    );
  }
}

function drawWater(context, images, config, row) {
  for (let c = 0; c < config.cols; c++) {
    context.drawImage(
      images.water,
      config.colWidth * c,
      row * config.imageHeight - config.vTransp,
      config.colWidth,
      config.colHeight
    );
  }
}

function drawEnemies(context, images, config, getEnemies) {
  getEnemies().map(function(position) {
    context.drawImage(
      images.enemy,
      position.col * config.colWidth + position.xDelta,
      (position.row * config.imageHeight + position.yDelta)- config.vTransp - 5,
      config.colWidth,
      config.colHeight
    );
  })
}

function drawCharacter(context, images, config, getPlayerPosition) {
  context.drawImage(
    images.character,
    getPlayerPosition().col * config.colWidth,
    getPlayerPosition().row * config.imageHeight - config.vTransp - 5,
    config.colWidth,
    config.colHeight
  );
}

function createCanvas(canvasID = "frogger-canvas", config) {
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

function draw(grid, player, enemies) {
  var closure = this;
  // 1. cache all values here to avoid re-calculating in animation frame
  // 2. Avoid expensive calculations here

  function animate() {
    const images = grid.getImages();
    const { context, canvas } = closure.grid;

    context.clearRect(0, 0, canvas.width, canvas.height);
    closure.config.gameBoard.map((row, index) => {
      row === "water" && drawWater(context, images, closure.config, index);
      row === "stone" && drawStone(context, images, closure.config, index);
      row === "grass" && drawGrass(context, images, closure.config, index);
    });
    drawCharacter(context, images, closure.config, player.getPosition);
    drawEnemies(context, images, closure.config, enemies.getEnemies);
    requestAnimationFrame(animate);
  }
  animate();
}

// Grid class initialises the grid and makes available necessary methods and properties
export default function Grid(id, gridModel) {

  let {
    rows,
    cols,
    colHeight,
    colWidth,
    vTransp,
    gameBoard,
  } = gridModel.getGridInfo();

  Object.defineProperty(this, 'config', {
    value: Object.freeze({
      get gameBoard() {
        return gameBoard;
      },
      rows,
      cols,
      colWidth,
      colHeight,
      vTransp,
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
      ...createCanvas(id, this.config)
    },
    configurable: false,
    writable: true,
    enumerable: false,
  });
}

Grid.prototype.draw = draw;
