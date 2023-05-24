function countCheckerboard(width, height, resolution) {
  function getColor(x, y) {
    resX = x % (resolution * 2) == 0 ? true : false;
    resY = y % (resolution * 2) == 0 ? true : false;
    return resX != resY ? 1 : 0;
  }

  const res = Array.from({length: height}, (_, i) => i + 1).map(
    (line, indexLine) => {
      return Array.from({length: width}, (_, i) => i + 1).map((el, indexCol) =>
        getColor(indexLine, indexCol)
      );
    }
  );

  return res;
}

console.log(countCheckerboard(6, 5, 1));
console.log(countCheckerboard(6, 5, 2));
console.log(countCheckerboard(6, 5, 3));
console.log(countCheckerboard(6, 5, 4));
