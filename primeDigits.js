function checkPrimeDigits (dig) {
  let i = 2
  while (i < dig) {
    if (dig % i == 0) {
      return false
    }
    i++
  }
  return true
} 

function primeBefAft(num) {
  let result = []
  for (let i = num-1; 2 < i ; i--) {
    if (checkPrimeDigits(i)) {
      result.push(i)
      break
    } 
  }
  for (let i = num+1; 2 < i ; i++) {
    if (checkPrimeDigits(i)) {
      result.push(i)
      break
    }
  }
  return result
}

console.log(primeBefAft(1010))