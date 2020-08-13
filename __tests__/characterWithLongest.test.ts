import { characterWithLongest, characterWithLongest2 } from "../src/characterWithLongest";

describe("自分の回答", () => {
  test("連続した回数が最も多い文字が表示される", () => {
      expect(characterWithLongest("aaaabbb")).toStrictEqual(["a", 4])
  })

  test("空文字の場合は0が返される", () => {
      expect(characterWithLongest("")).toStrictEqual(["", 0])
  })

  test("連続してない場合は対象外", () => {
    expect(characterWithLongest("aaaabbbabbb")).toStrictEqual(["a", 4]);
  })

  test("連続した回数最も多い文字が重複した場合は最初に出現した方が出力される", () => {
      expect(characterWithLongest("aabb")).toStrictEqual(["a", 2])
  })
})

describe("自分の回答", () => {
  test("連続した回数が最も多い文字が表示される", () => {
    expect(characterWithLongest2("aaaabbb")).toStrictEqual(["a", 4])
  })

  test("空文字の場合は0が返される", () => {
    expect(characterWithLongest2("")).toStrictEqual(["", 0])
  })

  test("連続してない場合は対象外", () => {
    expect(characterWithLongest2("aaaabbbabbb")).toStrictEqual(["a", 4]);
  })

  test("連続した回数最も多い文字が重複した場合は最初に出現した方が出力される", () => {
    expect(characterWithLongest2("aabb")).toStrictEqual(["a", 2])
  })
})