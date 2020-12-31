import { randomiseRange } from "../libs/utilities.js";

function randomiseSpeedAndDelta(enemyModel) {
  enemyModel.setEnemies((enemy) => {
    enemy.speed = randomiseRange(80, 175);
    enemy.xDelta = randomiseRange(-150, 250);
    return enemy;
  });
}

export default function Enemy(enemyModel) {
  randomiseSpeedAndDelta(enemyModel);
}