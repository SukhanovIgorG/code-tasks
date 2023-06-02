// function delayedValue(time, value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(value), time);
//   });
// }

// async function* createAsyncGenerator() {
//   yield delayedValue(500, 1);
//   yield delayedValue(500, 2);
//   yield delayedValue(500, 3);
// }

// const asyncGen = createAsyncGenerator();
// asyncGen.next().then((res) => console.log(res)); // { значение: 1, готово: ложь }
// asyncGen.next().then((res) => console.log(res)); // { значение: 2, готово: ложь }
// asyncGen.next().then((res) => console.log(res)); //{{value:3,done:false }
// asyncGen.next().then((res) => console.log(res)); //{{value:undefined,done:true }

function* getIterator() {
  let indexFirst = 0;
  let indexSek = 1;
  let ans = 0;
  while (true) {
    yield ans;
    ans = indexSek;
    indexSek += indexFirst;
    indexFirst = ans;
  }
}

const gen = getIterator();

console.log('next :>> ', gen.next());
console.log('next :>> ', gen.next());
console.log('next :>> ', gen.next());
console.log('next :>> ', gen.next());
console.log('next :>> ', gen.next());
console.log('next :>> ', gen.next());
console.log('next :>> ', gen.next());
