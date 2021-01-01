export const Assets = [
  ['stone', './images/stone-block.png'],
  ['water', './images/water-block.png'],
  ['grass', './images/grass-block.png'],
  ['enemy', './images/enemy-bug.png'],
  ['character', './images/char-boy.png'],
];

function loadImage(url, key) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.addEventListener('load', () => resolve({ key, img }));
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
  })
}

const imagePromises = Assets.reduce(function (acc, asset) {
  acc.push(loadImage(asset[1], asset[0]));
  return acc;
}, []);

export default {
  initiate: function initiate() {
    return Promise.allSettled(imagePromises)
      .then(function ([stone, water, grass, enemy, character]) {
        Assets[stone.value.key] = stone.value.img;
        Assets[water.value.key] = water.value.img;
        Assets[grass.value.key] = grass.value.img;
        Assets[enemy.value.key] = enemy.value.img;
        Assets[character.value.key] = character.value.img;
        return Assets;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }
}