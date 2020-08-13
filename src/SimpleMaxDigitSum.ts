export const SimpleMaxDigitSum = (n: number): any => {


  /**
   * 1つ下の桁で最大
   * 1501から1998はチェック不要
   * 1番上の桁以外の数を引いて
   * さらに1を引いた値からスタート
   * for文でチェックする数を減らす
   * 2500
   * 1501 - 2500まで 1000件
   * 
   * n % 10 ** length - 1
   * 4桁 1000 10 ** length - 1
   * 5桁 10000 10 ** length - 1
   * 
   * 3桁
   * 377
   * 299はチェック
   * 369 
   *
   * 4桁
   *  3777
   *  2999
   *  3699
   *  3769
   *  3710
   *  3709
   * 
   *  3705
   *  0だったら1つ下の位を-1する
   *  それより下はすべて9で埋める
   *  3075
   *  3069
   *  30755
   *  30699
   *  
   *  各位が最大の場合のみチェック
   *  先頭だけ -1
   *  2つめだけ -1
   *  3つめだけ -1
   * 
   * 3200 - 201 = 2999
   * 3200 - 1 = 3199
   * 
   * 3225
   * 3225 - 226 = 2999 3000で割ったあまり + 1 => 2 * 100
   * 3225 - 26 = 3199 3200でわったあまり + 1 1 => 2 * 10
   * 3225 - 6 = 3219 3220でわったあまり + 1 0 => 5
   * 
   * 100 - 1 = 99
   * 1000 - 1 = 999
   * 1100 - 1 = 1099
   * 1100 - 11 = 1099
   * 
   */

  const numArr = String(n).split('').reverse();
  let result = n;
  let num = 0;
  let max = String(n).split('').map(str => Number(str)).reduce((a, b) => a + b);
  for (let i = 0; i < numArr.length - 1; i++) {
    num += Number(numArr[i]) * (10 ** i);
    
    result = n - num;
  }
  return result;


  // const length = String(n).length;
  // const startNum = (10 ** (length - 1)) - 1;
  // let max = String(startNum).split('').map(str => Number(str)).reduce((a, b) => a + b);
  // let result = startNum;

  // for (let i = n - hoge - 1; i <= n; i++) {
  //   // const sum = String(i).split('').map(str => Number(str)).reduce((a, b) => a + b)
  //   let sum = 0;
  //   String(i).split('').forEach(numStr => {
  //     sum += Number(numStr);
  //   })
  //   if (max <= sum) {
  //     max = sum;
  //     result = i;
  //   }
  // }
  // return result;
}