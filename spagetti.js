let plate1 = [
  'AAAAAAAAA      '.split(''),
  '________A__CCC_'.split(''),
  ' B   C  A    C '.split(''),
  '_B___C__A____C_'.split(''),
  ' B   C       C '.split(''),
  '_B___CCCCCCCCC_'.split(''),
];

var plate2 = [
  'AAAAAAAA____'.split(''),
  '____________'.split(''),
  'BBBBBBBBBBB_'.split(''),
  '____________'.split(''),
  'CCCCCC______'.split(''),
];

var spaghettiCode = (plate) => {
  let answer = '';
  let symbol = '';
  let count = '';
  const filter = plate.flat().filter((sym) => /[a-z]/gi.test(sym));
  const dict = filter.reduce((acc, val) => {
    acc[val] > 0 ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});
  for (key of Object.keys(dict)) {
    count < dict[key] ? ((symbol = key), (count = dict[key])) : null;
  }
  answer = `Longest spaghetti: ${symbol} is length ${count}`;
  console.log('dict :>> ', dict);
  return symbol;
};

console.log(spaghettiCode(plate2));
console.log(spaghettiCode(plate1));
