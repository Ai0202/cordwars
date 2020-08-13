import { SimpleMaxDigitSum } from "../src/SimpleMaxDigitSum";

describe("自分の回答", () => {
  test("nが答えのとき", () => {
    expect(SimpleMaxDigitSum(99)).toBe(99);
  })

  test("n - 1が答えのとき", () => {
    expect(SimpleMaxDigitSum(100)).toBe(99);
  })

  test("各桁を合計した数字が同じ場合は、値が大きいほうが出力される", () => {
    expect(SimpleMaxDigitSum(48)).toBe(48);
  })

  test("3桁のとき", () => {
    expect(SimpleMaxDigitSum(454)).toBe(399);
  })
})