const button = document.querySelector('#button');
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

button.onclick = () => {
  let count = genfib();
  console.log('count :>> ', count);
  button.textContent = count;
};
