function solution(a) {
  // Your code here
  let len = a.length
  let wey = 0
  for (let i = 0; i <= len; i++) {
    console.log(`
                шаг - ${i}
                элемент - ${a[i]}
                путь - ${wey}
                длинна - ${len}`)
    if (wey > len) {
      return(i+1)
    } else if (wey == len || wey <= -1) {
      return(i)
    } else {
      wey = wey + a[i]
    }
  }
  return -1
}

console.log(solution([8,-3,8,0,3,-4,5,6,-2,0,8,-2,1,2,0,-3,5,-4,5]))