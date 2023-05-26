arr = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
];

const snake = (array) => {
  let m = array.length - 1;
  let n = array[0].length - 1;
  let right = n;
  let down = m;
  let left = 0;
  let up = 1;
  let steps = array.length * array[0].length;

  const getNewVector = (prev) => {
    switch (prev) {
      case 'right':
        return 'down';
      case 'down':
        return 'left';
      case 'left':
        return 'up';
      case 'up':
        return 'right';
      default:
        return 'right';
    }
  };

  function path() {
    const res = [];
    let currentVector = 'right';
    let currentPos = {x: 0, y: 0};

    for (let i = 0; i < steps; i++) {
      res.push(array[currentPos.y][currentPos.x]);
      if (currentVector == 'right') {
        if (currentPos.x == right) {
          currentVector = getNewVector(currentVector);
          right -= 1;
          currentPos.y += 1;
        } else {
          currentPos.x += 1;
        }
      } else if (currentVector == 'down') {
        if (currentPos.y == down) {
          currentVector = getNewVector(currentVector);
          down -= 1;
          currentPos.x -= 1;
        } else {
          currentPos.y += 1;
        }
      } else if (currentVector == 'left') {
        if (currentPos.x == left) {
          currentVector = getNewVector(currentVector);
          left += 1;
          currentPos.y -= 1;
        } else {
          currentPos.x -= 1;
        }
      } else if (currentVector == 'up') {
        if (currentPos.y == up) {
          currentVector = getNewVector(currentVector);
          up += 1;
          currentPos.x += 1;
        } else {
          currentPos.y -= 1;
        }
      }
    }
    return res;
  }

  return path();
};

console.log(snake(arr));
