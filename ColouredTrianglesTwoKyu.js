function triangleCheck(row) {
  if (row.length == 1) {
    return row;
  }
  function getColor(a, b) {
    const set = new Set(['R', 'G', 'B']);
    set.delete(a);
    set.delete(b);
    return Array.from(set)[0];
  }

  let current = row.split('');
  for (let i = 0; i < current.length - 1; i++) {
    current[i] == current[i + 1]
      ? (current[i] = current[i])
      : (current[i] = getColor(current[i], current[i + 1]));
  }
  current = current.slice(0, current.length - 1);
  return triangle(current.join(''));
}

function triangle(row) {
  if (row.length == 1) {
    return row;
  }
  function getColor(a, b) {
    if (a === b) {
      return a;
    }
    const set = new Set(['R', 'G', 'B']);
    set.delete(a);
    set.delete(b);
    return Array.from(set)[0];
  }

  let current = row.split('').reverse();
  let prev = current[0];
  for (let i = 0; i < current.length - 1; i++) {
    // console.log('i              :>> ', i);
    // console.log('prev           :>> ', prev);
    // console.log('current[i + 1] :>> ', current[i + 1]);
    // console.log('new            :>> ', getColor(prev, current[i + 1]));
    prev = getColor(prev, current[i + 1]);
  }
  return prev;
}

function check(string) {
  return {
    answer: triangle(string),
    right: triangleCheck(string),
    checked: triangle(string) == triangleCheck(string),
  };
}

console.log('case B                   >>', check('B'));
console.log('case GB                  >>', check('GB'));
console.log('case RRR                 >>', check('RRR'));
console.log('case RGBG                >>', check('RGBG'));
console.log('case RBRGBRB             >>', check('RBRGBRB'));
console.log('case RGBRGRR             >>', check('RGBRGRR'));
console.log('case GRBRRGG             >>', check('GRBRRGG'));
console.log('case RBRGRBGGBR          >>', check('RBRGRBGGBR'));
console.log('case RBRGBRBGGRRRBGBBBGG >>', check('RBRGBRBGGRRRBGBBBGG'));
