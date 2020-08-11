export const diagonalsSum = (n:number) => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += (i * n) + (i + 1) // 左上から右下
    result += ((i + 1) * n) - i // 右上から左下
  }
  return result;

  /**
   * n = 3
   * [
   *  [1, 2, 3],
   *  [4, 5, 6],
   *  [7, 8, 9],
   * ]
   * 
   * [0][0]
   * [1][1]
   * [2][2]
   * 
   * [0][2]
   * [1][1]
   * [2][0]
   * 
   * n = 4
   * [
  *   [1,  2,  3,  4 ],
   *  [5,  6,  7,  8 ],
   *  [9,  10, 11, 12],
   *  [13, 14, 15, 16],
   * ]
   * 
   * [0][0]
   * [1][1]
   * [2][2]
   * [3][3]
   * 
   * 1 6 11 16  n = 4 / 1 (1 * n) +2
   * 0 * n + 1 1
   * 1 * n + 2 6
   * 2 * n + 3 11
   * 3 * n + 4 16
   * 
   * 4 7 10 13
   * 
   * 1 * n - 0 4
   * 2 * n - 1 7
   * 3 * n - 2 10
   * 4 * n - 3 13
   */
}

export const diagonalsSum2 = (matrix: any[]) => {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i][i];
    result += matrix[i][matrix.length - 1 - i]
  }
  return result;
}

export const diagonalsSum3 = (matrix: any[]) => matrix.reduce((sum, line, i) => sum + line[i] + line[matrix.length - i - 1], 0)