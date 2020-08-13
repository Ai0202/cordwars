export const characterWithLongest = (n: string): (string | number)[] => {
  if (n === "") return ["", 0];

  const counts: any = {}
  let lastStr = "";
  let tmpStrLen = 0;

  const nArr = n.split('');
  for (let i = 0; i < nArr.length; i++) {
    const key = nArr[i]
    
    tmpStrLen++;
    if (lastStr !== key || i === nArr.length - 1) {
      counts[lastStr] = tmpStrLen;
      tmpStrLen = 1;
    }

    // counts[key] ? (counts[key] += 1) : (counts[key] = 1);

    lastStr = key;

    // // 1文字目
    // if (i === 0) {
    //   tmpStrLen = 1;
    // } else if (lastStr === key) {
    //   tmpStrLen += 1;
    // }

    // // 文字がかわった場合 or 最後の文字だった場合
    // if (lastStr !== key || i === nArr.length - 1) {
    //   // counts[key] = counts[key] ? Math.max(counts[key], tmpStrLen) : tmpStrLen;
    //   counts[key] = tmpStrLen;
    //   tmpStrLen = 0;
    // }
    // lastStr = key;
  }
  // return counts;

  let max = 0;
  let maxStr = "";
  for (let i in counts) {
    if (max === 0 || counts[i] > max) {
      max = counts[i]
      maxStr = i;
    }
  }

  return [maxStr, max];
}

export const characterWithLongest2 = (s: string): (string | number)[] => {
  let count = 0
  let temp = 1
  let letter = ''

  for (let i = 0; i < s.length; i++) {
    // 今の文字と次の文字が同じであれば
    if (s.charAt(i) == s.charAt(i + 1)) {
      temp++
      if (temp > count) {
        count = temp
        letter = s.charAt(i)
      }
    }
    else {
      temp = 1
    }
  }
  return [letter, count]
}