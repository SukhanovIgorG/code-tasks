function padovan(n) {
  var p;
  let arr = [1, 1, 1, 2]
  if (n < 3) {
    return 1
  } else if (n === 4 || n === 3) {
    return 2
  } else {
    for (let i = 4; i <=n; i++) {
      let k = arr[i-3] + arr[i-2]
      arr.push(k)
    }
    p = arr[n] 
  // console.log(arr)
  }
  return p;
}

console.log(padovan(0));
console.log(padovan(1));
console.log(padovan(2));
console.log(padovan(3));
console.log(padovan(4));
console.log(padovan(5));
console.log(padovan(6));
console.log(padovan(7));
console.log(padovan(8));
console.log(padovan(9));