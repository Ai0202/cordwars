export const singleCharacterPalindromes = (s: string) => {
  if (s === s.split("").reverse().join("")) {
    return "OK";
  }

  let result = "not possible";
  const strArr = s.split("");
  for (let i in strArr) {
    // spread構文で別の配列を作成できる？
    const tmpStrArr = [...strArr];

    tmpStrArr.splice(Number(i), 1);
    const reverseStr = [...tmpStrArr].reverse().join("");

    if (tmpStrArr.join("") === reverseStr) {
      result = "remove one";
      break;
    }
  } 

  return result;
}