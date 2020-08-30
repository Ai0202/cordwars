export const countIpAddress = (from: string, to: string) => {
  const stringToReverseNumbersArr = (ip:string) => ip.split('.').reverse().map((n) => Number(n));

  const fromArr = stringToReverseNumbersArr(from);
  const toArr = stringToReverseNumbersArr(to);

  let result = 0;
  for (let i = 0; i < fromArr.length; i++) {
    result += (toArr[i] - fromArr[i]) * (256 ** i);
  }
   return result;
}