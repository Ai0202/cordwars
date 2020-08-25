import { sumConsecutives, sumConsecutivesClever } from "../src/sumConsecutives";

describe('自分の回答', () => {
  test('プラスの値のみ', () => {
    expect(sumConsecutives([1, 4, 4, 4])).toEqual([
      1,
      12,
    ]);
  })

  test('同じ数字でも連続してなければたさない', () => {
    expect(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])).toEqual([
      1,
      12,
      0,
      4,
      6,
      1,
    ]);
  })

  test('マイナス同士をプラスできる', () => {
    expect(sumConsecutives([-5, -5, 7, 7, 12, 0])).toEqual([-10, 14, 12, 0]);
  })
})

describe('頭の良い回答', () => {
  test('プラスの値のみ', () => {
    expect(sumConsecutivesClever([1, 4, 4, 4])).toEqual([
      1,
      12,
    ]);
  })

  test('同じ数字でも連続してなければたさない', () => {
    expect(sumConsecutivesClever([1, 4, 4, 4, 0, 4, 3, 3, 1])).toEqual([
      1,
      12,
      0,
      4,
      6,
      1,
    ]);
  })

  test('マイナス同士をプラスできる', () => {
    expect(sumConsecutivesClever([-5, -5, 7, 7, 12, 0])).toEqual([-10, 14, 12, 0]);
  })
})