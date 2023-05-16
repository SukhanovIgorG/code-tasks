function loopify (per) {
    let newArr = Array.from(per)
        return function () {newArr.pop}
}

const loopStr = loopify("str")
const loopTest = loopify("test")

console.log(loopStr()); //"s"
console.log(loopStr()); //"t"
console.log(loopStr()); //"r"
console.log(loopTest()); //"t"
console.log(loopStr()); //"s"
console.log(loopTest()) ;//"e"