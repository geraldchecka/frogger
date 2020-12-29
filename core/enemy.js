import { randomiseRange } from "../libs/utilities.js";

function randomiseEnemySpeed(enemyModel) {
  enemyModel.setEnemies((enemy) => {
    enemy.speed = randomiseRange(10, 50);
    return enemy;
  });
}

function randomiseEnemyDelta(enemyModel) {
  enemyModel.setEnemies((enemy) => {
    enemy.xDelta += enemy.speed; // randomiseRange(50, 80);
    return enemy;
  });
}

export default function Enemy(gridModel, enemyModel) {
  randomiseEnemySpeed(enemyModel);
  setInterval(() => {
    randomiseEnemyDelta(enemyModel);
  }, 500);
}