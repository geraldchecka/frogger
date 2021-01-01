export function randomiseRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// calculate current player position by pixels
export function detectCollisions(grid, player, enemies) {
  const gridColWidth = grid.getGridInfo().colWidth;
  const _enemies = enemies.getEnemies();
  const _player = player.getPosition();
  let hasCollisions = false;

  for (let e = 0; e < _enemies.length; e++) {
    let enemy = _enemies[e];
    if (enemy.row === _player.row
        && (enemy.xDelta + gridColWidth - 10) >= _player.col * gridColWidth
        && (enemy.xDelta + gridColWidth - 10) <= (_player.col * gridColWidth + gridColWidth)
    ) {
      hasCollisions = true;
      console.log("Game Over! Bugs won.");
      break;
    }
    else if (_player.row === 0 || _player.row === 1) {
      hasCollisions = true;
      console.log("Game Over! Frogger won.");
      break;
    }
  }
  return hasCollisions;
}