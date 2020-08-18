import { count9sFrom1ToN, count9sFrom1ToN2 } from "../src/count9sFrom1ToN";

describe("自分の回答", () => {
  test("9が含まれる数値が0個の場合", () => {
      expect(count9sFrom1ToN(8)).toBe(0);
  })

  test("9が含まれる数値が1つの場合", () => {
      expect(count9sFrom1ToN(9)).toBe(1);
  })

  test("357のとき", () => {
      expect(count9sFrom1ToN2(357)).toBe(65);
  })

  test("989のとき", () => {
      expect(count9sFrom1ToN2(989)).toBe(279);
  })

  test("1つの数字に9が2つ含まれてる場合2つカウントする", () => {
      expect(count9sFrom1ToN(100)).toBe(20);
  })


  test("", () => {
    expect(count9sFrom1ToN(899)).toBe(180);
  });

  test("", () => {
      expect(count9sFrom1ToN2(1000)).toBe(300);
  })

  test("", () => {
      expect(count9sFrom1ToN(10000)).toBe(4000);
  })

  test("", () => {
      expect(count9sFrom1ToN(100000)).toBe(50000);
  })

  // test("めちゃ大きい数のときにタイムアウトにならない", () => {
  //     expect(count9sFrom1ToN(10000000000)).toBe(10000000000);
  // })
})