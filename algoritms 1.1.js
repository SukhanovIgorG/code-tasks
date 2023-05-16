const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Check(count) {
  Math.sqrt(Number(count) * 8 + 1) % 1 == 0
    ? console.log((Math.sqrt(Number(count) * 8 + 1) - 1) / 2)
    : console.log(Math.floor((Math.sqrt(Number(count) * 8 + 1) - 1) / 2));
  return rl.close();
}

rl.question('Количество ступенек ? ', (count) => Check(count));
rl.on('close', function () {
  console.log('\nprogram finished');
  process.exit(0);
});
