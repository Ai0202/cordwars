import { findTheOddInt, findTheOddInt2 } from "../src/findTheOddInt";

describe("自分の回答", () => {
  test("奇数回表示された数字を返す", () => {
    expect(findTheOddInt([1, 1, 1, 2, 2, 3, 3])).toBe(1);
  })

  test("奇数回表示された数字がマイナスの値", () => {
    expect(findTheOddInt([-1, 2, 3, 2, 3, 6, 6])).toBe(-1);
  });

  // これは問題の使用としては存在しない
  test("奇数回表示された数字が0", () => {
    expect(findTheOddInt([1, 1, 5, 5, 8, 8])).toBe(0);
  });
})

describe("サンプル回答", () => {
    test("奇数回表示された数字を返す", () => {
      expect(findTheOddInt2([1, 1, 1, 2, 2, 3, 3])).toBe(1);
    });

    test("奇数回表示された数字がマイナスの値", () => {
      expect(findTheOddInt2([-1, 2, 3, 2, 3, 6, 6])).toBe(-1);
    });
});