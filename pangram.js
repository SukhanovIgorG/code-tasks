function isPangram(string) {
  return new Set(
    string
      .split('')
      .filter((w) => /\w/.test(w) && !/\d/.test(w))
      .map((w) => w.toUpperCase())
  ).size == 26
    ? true
    : false;
}

console.log('isPangram :>> ', isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));
