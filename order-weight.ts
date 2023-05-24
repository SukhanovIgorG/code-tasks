const orderWeight = (strng: string): string => {
  const answer = strng.split(' ')
    .sort((a: string, b: string): number => {
      const resA: number = String(a)
        .split('')
        .reduce((acc, el): number => {
          return (acc += +el);
        }, 0);
      const resB: number = String(b)
        .split('')
        .reduce((acc, el): number => {
          return (acc += +el);
        }, 0);

      return (resA - resB == 0 ? (a > b ? 1 : -1) : resA - resB)
    });
  return String(answer.join(' '))
}
