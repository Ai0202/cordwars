export const simpleStringReversal = (str: string): any => {
  // スペースの存在を確認
  // 何文字目か取得
  let strArr = str.split('');
  const spaces: any = [];
  let tmpStr = "";

  strArr.forEach((letter, i) => {
    if (letter == " ") {
      spaces.push(i)
    } else {
      tmpStr += letter;
    }
  })

  // 文字を反転
  let reverseStr = tmpStr.split('').reverse().join('');

  // スペースを追加
  spaces.forEach((index: number) => {
    reverseStr = reverseStr.slice(0, index) + ' ' + reverseStr.slice(index, reverseStr.length);
  })

  return reverseStr;
}

export const clever = (str: string) => {
  // 空白を抜いた文字列の作成
  let arr: string[] = [...str].filter(x => x != ' ')

  // 文字列部分をreplace
  return str.replace(/\S/g, _ => arr.pop() as string)
}