function resolveKey(e) {
  let code = "invalid";

  let keyConstants = {
    key: {
      "ArrowLeft": "left",
      "ArrowUp": "up",
      "ArrowRight": "right",
      "ArrowDown": "down",
    },
    keyCode: {
      37: "left",
      38: "up",
      39: "right",
      40: "bottom",
    }
  };

  if (e.key !== undefined) {
    code = keyConstants.key[e.key] ?? code;
  }
  else if (e.keyCode !== undefined) {
    code = keyConstants.keyCode[e.keyCode] ?? code;
  }
  return code;
}

function calculatePlayerPosition(key, gridInfo, playerPosition) {
  let newPlayerPosition = {
    row: playerPosition.row,
    col: playerPosition.col,
  };

  if (key === "left") {
    if (playerPosition.col > 0) {
      newPlayerPosition.col = playerPosition.col - 1;
    }
  }
  else if (key === "up") {
    if (playerPosition.row > 0) {
      newPlayerPosition.row = playerPosition.row - 1;
    }
  }
  else if (key === "right") {
    if (playerPosition.col < gridInfo.cols - 1) {
      newPlayerPosition.col = playerPosition.col + 1;
    }
  }
  else if (key === "down") {
    if (playerPosition.row < gridInfo.rows - 1) {
      newPlayerPosition.row = playerPosition.row + 1;
    }
  }

  return newPlayerPosition;
}

export default function Player(gridModel, playerModel) {
  function keyHandler(e) {
    if (e.defaultPrevented) {
      return;
    }
    let key = resolveKey(e);
    if (key !== "invalid") {
      let newPositions = calculatePlayerPosition(
        key,
        gridModel.getGridInfo(),
        playerModel.getPosition()
      );
      playerModel.setPosition(newPositions.row, newPositions.col);
    }
  }

  document.addEventListener(
    "keyup",
    keyHandler,
    true          // Because we'd want to capture it ASAP
  );
};

Player.prototype.freezePlayer = function() {
  document.removeEventListener("keyup");
};
