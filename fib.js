function fib(n) {
  const res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res[n - 1];
}

console.log('fib :>> ', fib(5));
