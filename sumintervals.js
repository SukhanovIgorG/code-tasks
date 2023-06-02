function sumIntervals(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const res = intervals.reduce(
    (acc, el) => {
      if (acc[acc.length - 1][1] < el[0]) {
        acc.push(el);
      } else if (acc[acc.length - 1][1] > el[1]) {
      } else {
        acc[acc.length - 1] = [acc[acc.length - 1][0], el[1]];
      }
      return acc;
    },
    [intervals[0]]
  );

  return res.reduce((acc, el) => {
    return (acc += el[1] - el[0]);
  }, 0);
}

// function sumIntervals(xs) {
//   let ys = xs.sort(([a, b], [c, d]) => a - c);
//   let m = -Number.MAX_VALUE;
//   console.log('m :>> ', m);
//   let res = 0;
//   for (let [a, b] of ys) {
//     m = Math.max(m, a);
//     res += Math.max(0, b - m);
//     m = Math.max(m, b);
//   }
//   return res;
// }

console.log(
  'sumIntervals :>> ',
  sumIntervals([
    [0, 20],
    [-1e8, 10],
    [30, 40],
  ])
);
