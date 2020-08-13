import { simpleStringReversal, clever } from "../src/simpleStringReversal";

describe("自分", () => {
  test("スペースなしの文字列", () => {
    expect(simpleStringReversal("daaike")).toBe("ekiaad");
  })

  test("スペースがある場合、スペースの位置は変わらない", () => {
    expect(simpleStringReversal("atsushi ikeda dayo")).toBe("oyadade kiihs usta");
  })
})

describe("cleverな回答", () => {
  test("スペースなしの文字列", () => {
    expect(clever("daaike")).toBe("ekiaad");
  })

  test("スペースがある場合、スペースの位置は変わらない", () => {
    expect(clever("atsushi ikeda dayo")).toBe("oyadade kiihs usta");
  })
})