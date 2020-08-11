import { diagonalsSum, diagonalsSum2, diagonalsSum3 } from "../src/diagonalsSum"

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
describe('自分の回答', () => {
  test("引数が数字で来るとおもって作ったやつ", () => {
    expect(diagonalsSum(3)).toBe(30);
    expect(diagonalsSum(4)).toBe(68);
  })

  test("正しい(引数が配列)", () => {
    expect(diagonalsSum2(matrix)).toBe(1 + 5 + 9 + 3 + 5 + 7)
  })
})

describe('サンプル回答', () => {
  test('3 * 3のマトリクス', () => {
    expect(diagonalsSum3(matrix)).toBe(1 + 5 + 9 + 3 + 5 + 7)
  })
})
