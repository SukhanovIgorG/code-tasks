function triangle(row) {
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

console.log('case B                   >>', triangle('B'));
console.log('case GB                  >>', triangle('GB'));
console.log('case RRR                 >>', triangle('RRR'));
console.log('case RGBG                >>', triangle('RGBG'));
console.log('case RBRGBRB             >>', triangle('RBRGBRB'));
console.log('case RBRGRBGGBR          >>', triangle('RBRGRBGGBR'));
console.log('case RBRGBRBGGRRRBGBBBGG >>', triangle('RBRGBRBGGRRRBGBBBGG'));
