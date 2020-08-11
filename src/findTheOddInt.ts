export const findTheOddInt = (A: number[]) => {
    const result: any = {};
    A.forEach((num) => {
      result[num] ? (result[num] += 1) : (result[num] = 1);
    });

    for (let i in result) {
      if (result[i] % 2 === 1) {
        return Number(i);
      }
    }
    
    return 0;
}

export const findTheOddInt2 = (xs: number[]) => xs.reduce((a, b) => a ^ b);