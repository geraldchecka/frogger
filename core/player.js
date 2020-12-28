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

export default function Player(model) {
  function keyHandler(e) {
    if (e.defaultPrevented) {
      return;
    }

    let key = resolveKey(e);

    console.log(key);
  }

  document.addEventListener(
    "keyup",
    keyHandler,
    true          // Because we'd want to capture it ASAP
  );

  // this.movePlayer = function() {};
  this.updateModel = function() {
    model.setPosition(0,0);
  };
};