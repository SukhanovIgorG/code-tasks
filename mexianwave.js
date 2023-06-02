function wave(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    str[i] !== ' '
      ? res.push(
          str.slice(0, i).toLowerCase() +
            String(str[i]).toUpperCase() +
            str.slice(i + 1, str.length).toLowerCase()
        )
      : null;
  }
  return res;
}

console.log('wave :>> ', wave('Two words'));
