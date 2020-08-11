import { simpleMissingSum } from "../src/simpleMissingSum";

describe('自分の回答', () => {
  test('引数でわたされた数字の組み合わせで作成できない数の最小', () => {
    expect(simpleMissingSum([1, 2, 4, 5])).toBe(8)
  })
})