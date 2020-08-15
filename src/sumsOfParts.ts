export const sumsOfParts = (ls: number[]): any => {

  // NOTE 毎回全部計算するから処理が遅い
  // const result = [];
  // for (let i in ls) {
  //   const tmpArr = [...ls];
  //   tmpArr.splice(0, Number(i));
  //   result.push(tmpArr.reduce((a, b) => a + b));
  // }
  // result.push(0);
  if (ls.length === 0) return [0];

  const result: number[] = [ls.reduce((a, b) => a + b)];
  // 毎回新しい配列作り直してるから遅い
  // ls.forEach(num => {
  //   result.push([...result].pop()! - num);
  // })

 let total = 0;
 const firstNum = result[0];
 ls.forEach((num) => {
   total += num;
   result.push(firstNum - total);
 });

  return result;
}

export const sample1 = (ls: number[]) => {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map((v) => (sum = sum - v));
}
