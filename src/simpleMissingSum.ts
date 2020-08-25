export const simpleMissingSum = (numbers: number[]): any => {
  // n ** 2
  // すべての組み合わせを取得(combination)
  let sumList = [];
  for (let i = 0; i < numbers.length; i++) {
    sumList.push(numbers[i]);
    for (let j = i + 1; j < numbers.length; j++) {
      sumList.push(numbers[i] + numbers[j]);
      // for (let k = j + 1; j < numbers.length; k++) {
      //   sumList.push(numbers[i] + numbers[j] + numbers[k]);
      // }
    }
  }

  return sumList;

  // 重複の削除と整列
  sumList = [...new Set(sumList.sort())];

  const maximumNum = Number([...sumList].pop());
  const minimumNum = sumList[0];
  for (let i = minimumNum; i <= maximumNum; i++) {

  }

  return [sumList.pop(), sumList];
  


}