function countCheckerboard(width, height, resolution) {
  function getColor(x, y) {
    const preY = y > resolution * 2 ? y % (resolution * 2) : y;
    const resY =
      resolution == 1
        ? y % 2 == 1
          ? true
          : false
        : preY / resolution > 1
        ? true
        : false;

    const preX = x > resolution * 2 ? x % (resolution * 2) : x;
    const resX =
      resolution == 1
        ? x % 2 == 1
          ? true
          : false
        : preX / resolution > 1
        ? false
        : true;
    return resX != resY ? 1 : 0;
  }

  function getSumArr(arr) {
    return arr.reduce((acc, el) => {
      if (Array.isArray(el)) {
        return (acc += +getSumArr(el));
      } else {
        return (acc += +el);
      }
    }, 0);
  }

  const res = Array.from({length: height}, (_, i) => i + 1).map(
    (line, indexLine) => {
      return Array.from({length: width}, (_, i) => i + 1).map((el, indexCol) =>
        getColor(indexLine + 1, indexCol + 1)
      );
    }
  );
  console.log('res :>> ', res);
  return getSumArr(res);
}
console.log(countCheckerboard(11, 6, 2));
