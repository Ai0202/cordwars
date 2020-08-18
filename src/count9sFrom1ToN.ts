export const count9sFrom1ToN2 = (n: number): number => {
  let count = 0;
  // 9が含まれない数
  // 100までには20個
  // 各値に9が含まれるのがどれくらいあるかカウント
  /**
   * 1桁のとき 1つ
   * 100まで 1 - 89 => 10 / 90 - 99 => 10
   * 
   * 1000まで 100 - 899 => 
   * 10: 1
   * 100: 20 10 * 1 * 2
   * 1000: 300 10 * 10 * 3
   * 10000: 4000 10 * 10 * 10 * 4
   * 100000: 50000 10000 * 5
   * 
   * n桁で表示される9の数は
   * 10 ** (n - 1)
   * 10 ** (n - 1) * (n - 1)
   * (n - 1) ** 10
   */

  for (let i = 1; i <= n; i++) {
    if (String(i).indexOf('9') === -1) continue;

    count += String(i).split("").filter(j => j === '9').length;
  }

  return count;
}

export const count9sFrom1ToN = (n: number) => {
  let result = 0;
  let i = 1;
  while (true && i <= 10) {
    /**
     * 4357 % 1000 4 10 * 10 * 10
     * 357 % 100 357 / 100 = 3 : 3 * 20 60
     * 57 % 10 57 / 10 = 5 5
     * 7 % 1
     * 0 
     * 
     * 500 / 100 = 5
     * 500 / 99 = 
     * 98
     * 99: 20 10 * 1 * 2
     * 999: 300 10 * 10 * 3
     * 9999: 4000 10 * 10 * 10 * 4
     * 99999: 50000 10000 * 5
     * 
     * 
     * 91 - 100 10個
     * 901 - 1000 100個
     * 9001 - 10000 1000個
     */

    // n = 9 / 10 ** -1 * 0 j = 0
    // 桁数確認
    const len = String(n).length; // 1
    const j = 10 ** (len - 2) * (len - 1); // 0
    const num = 10 ** len - 1; // 1
    const hoge = Math.floor(n / num); // 9

    if (j === 0) {
      if (hoge < 9) {
        break;
      } else if (hoge === 9) {
        result +=1;
        break;
      }
    } 

    result += hoge * j;
    n = n % num;
    if (hoge == 9) {
      result += n;
    }

    if (n < 0) {
      break;
    }
    i++;
  }

  return result;
}