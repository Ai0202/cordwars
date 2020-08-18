export const movingZerosToTheEnd = (numArr: any[]) => {
  return [
    ...numArr.filter((num) => num !== 0),
    ...numArr.filter((num) => num === 0),
  ];
  // const count = numArr.filter(num => num === 0).length;
  // return [...numArr.filter((num) => num !== 0), ...Array(count).fill(0)];
}