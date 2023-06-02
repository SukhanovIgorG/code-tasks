function kebabize(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    str[i] > 0
      ? null
      : str[i] === "-"
      ? (res += str[i])
      : str[i] === str[i].toUpperCase()
      ? (res += "-" + str[i].toLowerCase())
      : (res += str[i]);
  }
  return res;
}

kebabize("jv");
