import { randomiseRange, detectCollisions } from "../libs/utilities.js";

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

function drawEnemies(context, images, config, enemies, deltaTime) {
  enemies.map(function(position) {
    if (position.xDelta >= 560) {
      position.xDelta = randomiseRange(-60, -60);
    }
    position.xDelta += deltaTime * position.speed;
    // console.log(position.row, position.xDelta);
    context.drawImage(
      images.enemy,
      position.xDelta,
      (position.row * config.imageHeight + position.yDelta) - config.vTransp - 5,
      config.colWidth,
      config.colHeight
    );
  });
}

function drawCharacter(context, images, config, playerPosition) {
  context.drawImage(
    images.character,
    playerPosition.col * config.colWidth,
    playerPosition.row * config.imageHeight - config.vTransp - 5,
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

// This is a kickoff point for the game loop
function draw(grid, player, enemies) {
  // Avoid computing & re-calculating in animate as much as possible to reduce frame drop rate.
  const closure = this;
  const images = grid.getImages();
  const { context, canvas } = this.grid;
  const playerPosition = player.getPosition();
  const _enemies = enemies.getEnemies();
  let lastTime = performance.now();
  let rAF = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.msRequestAnimationFrame;
  let rAFToken;
  let cancelRAF = window.cancelAnimationFrame
                    || window.mozCancelAnimationFrame;

  function animate() {
    let nowTime = performance.now();
    let deltaTime = (nowTime - lastTime)/1000.0;

    context.clearRect(0, 0, canvas.width, canvas.height);
    closure.config.gameBoard.map((row, index) => {
      row === "water" && drawWater(context, images, closure.config, index);
      row === "stone" && drawStone(context, images, closure.config, index);
      row === "grass" && drawGrass(context, images, closure.config, index);
    });
    drawCharacter(context, images, closure.config, playerPosition);
    drawEnemies(context, images, closure.config, _enemies, deltaTime);
    lastTime = nowTime;
    rAFToken = rAF(animate);
    if (detectCollisions(grid, player, enemies) === true) {
      cancelRAF(rAFToken);
    }
  }
  rAFToken = rAF(animate);
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
