export const int32toIPv4A = (unsigned32Int: number): string => {
  // 10進数 -> 2進数に変換

  const binary = parseInt(unsigned32Int.toString(2));
  
  const binaryArr = String(binary).split("").reverse();

  const result: string[] = ['0', '0', '0', '0'];
  let temp = 0;
  binaryArr.forEach((n, i) => {
    temp += Number(n) * (2 ** (i % 8))

    if ((i !== 0 && (i + 1) % 8 === 0) || i === binaryArr.length - 1) {
      const index = Math.floor(i / 8);
      result[index] = String(temp);
      temp = 0;
    }
  })

  return result.reverse().join(".");
};

export const int32toIPv4 = (unsigned32Int: number): string => {

  if (0 > unsigned32Int || unsigned32Int > 4294967295) {
    return "符号なしIntの範囲外です。";
  }
  
  const unsigned32IntToBinaryIP = (n: number): number[] => {
    const result = [];
    for (let i = 31; i >= 0; i--) {
      const num = 2 ** i;
      if (n - num >= 0) {
        result.push(1);
        n -= num;
      } else {
        result.push(0);
      }
    }
    return result;
  };

  const binaryToDecimalNumberIP = (binaryArr: number[]): string => {
    let temp = 0;
    const result: string[] = ["0", "0", "0", "0"];
    binaryArr.reverse().forEach((n, i) => {
      temp += Number(n) * 2 ** (i % 8);

      if ((i + 1) % 8 === 0 || i === binaryArr.length - 1) {
        const index = Math.floor(i / 8);
        result[index] = String(temp);
        temp = 0;
      }
    });

    return result.reverse().join(".");
  };

  const binaryArr = unsigned32IntToBinaryIP(unsigned32Int);
  const result = binaryToDecimalNumberIP(binaryArr);

  return result;
}

export const int32ToIp = (int32: number): string => {
  return (
    ((int32 >> 24) & 0xff) +
    "." +
    ((int32 >> 16) & 0xff) +
    "." +
    ((int32 >> 8) & 0xff) +
    "." +
    (int32 & 0xff)
  );
}