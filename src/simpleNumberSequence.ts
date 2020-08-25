export const simpleNumberSequence = (n: string) => {
  // 全体の桁数取得
  // 1数字あたり何桁区切りか調べる
  // n桁取得 n + 1, n + 2を調べる
  // 桁数の3分の1の長さまでチェック

  let numberOfDigits = 1;
  const maxNumLength = Math.ceil(n.length / 3);
  for (let i = maxNumLength; i >= 1; i--) {
    const numberStr = n.substr(0, i);
    const additionalNum = numberStr.split('').every(n => n == '9') ? 1 : 0;
    const number = Number(n.substr(0, i));
    const nextNumber = Number(n.substr(0 + i, i + additionalNum));

    if (nextNumber === number + 1 || nextNumber === number + 2) {
      numberOfDigits = i;
      break;
    }
  }

  const missingNumbers = [];
  let lastNumber = -1;
  for (let i = 0; i < n.length; i = i + numberOfDigits) {
    
    /**
     * 99100101102
     * 99 i = 0; numberOfDigits 2 n.substr(0, 2) == 99
     * 100 i = 2; numberOfDigits 3 n.substr(2, 3) == 100
     * 100 i = 3; numberOfDigits 3 n.substr(3, 3) == 010
     */

    // 文字がすべて9だった場合
    // if (String(lastNumber).slice(-1) === '9') {
    if (String(lastNumber).split('').every(n => n == '9')) {
      numberOfDigits++;
    }
    const number = Number(n.substr(i, numberOfDigits));
    
    if (i !== 0 && lastNumber + 1 !== number) {
      missingNumbers.push(number - 1)
    }
    lastNumber = number;
  }

  return missingNumbers.length !== 1 ? -1 : missingNumbers[0];
}