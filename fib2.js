let x = 0;
let y = 1;
function genfib() {
  console.log(x, y);
  let prev = x;
  function fib() {
    let temp = y;
    y += x;
    x = temp;
    return x;
  }
  fib();
  return prev;
}

console.log('genfib() :>> ', genfib());
