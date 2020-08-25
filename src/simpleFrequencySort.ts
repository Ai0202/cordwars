export const simpleFrequencySort = (numArr: number[]) => {
  // 各数字が何個あるか確認 + 数字の昇順に並び替え
  const countMap = new Map()
  numArr.sort().forEach((num) => {
    const count = countMap.has(num) ? countMap.get(num) + 1 : 1;
    countMap.set(num, count);
  });

  // 数字の出現回数順に並び替え
  const sortedMap = new Map([...countMap.entries()].sort((a, b) => b[1] - a[1]));

  // 文字列の羅列に変換
  let sortedArr = '';
  sortedMap.forEach((v, k) => {
    sortedArr += ',' + Array(v).fill(k).join(',');
  });

  // 数字の配列に変換
  const result = sortedArr.split(',').map(n => Number(n));
  result.splice(0, 1);

  return result;
}