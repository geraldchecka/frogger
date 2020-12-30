import { randomiseRange } from "../libs/utilities.js";

function randomiseSpeedAndDelta(enemyModel) {
  enemyModel.setEnemies((enemy) => {
    enemy.speed = randomiseRange(50, 125);
    enemy.xDelta = randomiseRange(-70, 60);
    return enemy;
  });
}

export default function Enemy(gridModel, enemyModel) {
  // 
  randomiseSpeedAndDelta(enemyModel);
  // spawn new enemies

  // setInterval(() => {
  //   randomiseEnemyDelta(enemyModel);
  // }, 500);
}