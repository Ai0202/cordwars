import { nextBigger } from '../src/NextBiggerNumberWithTheSameDigits'

describe('自分の回答', () => {
  test('元の数が最大の場合', () => {
    expect(nextBigger(531)).toBe(-1);
  });

  test('単純なケース', () => {
    expect(nextBigger(513)).toBe(531);
  })

  test('一般的なケース', () => {
    expect(nextBigger(561)).toBe(615);
  })

  test('難しいケース', () => {
    expect(nextBigger(1921)).toBe(9121);
  })
})