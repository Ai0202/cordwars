export const sumConsecutives = (numArr: number[]) => {
  let lastNum = NaN;
  let tmpTotal = 0;
  const result: number[] = [];
  numArr.forEach((n: number, i: number) => {
    if (i === 0) {
      tmpTotal = lastNum = n;
      return;
    }

    if (lastNum === n) {
      tmpTotal += n;
    } else {
      result.push(tmpTotal);
      tmpTotal = lastNum = n;
    }

    if (i === numArr.length - 1) {
      result.push(tmpTotal);
    }
  })

  return result;
}

export const sumConsecutivesClever = (s: number[]) => {
  return s.reduce((prev: number[], curr: number, i: number, arr: number[]) => {
    if (curr != arr[i - 1]) prev.push(curr);
    else prev[prev.length - 1] += curr;
    return prev;
  }, []);
}