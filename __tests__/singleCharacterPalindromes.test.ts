import { singleCharacterPalindromes } from "../src/singleCharacterPalindromes"

describe("自分の回答", () => {
  test("もともと回文の場合", () => {
    expect(singleCharacterPalindromes("abba")).toBe("OK");
  })

  test("1文字除くと回文になる場合", () => {
    expect(singleCharacterPalindromes("abbaa")).toBe("remove one");
  })

  test("1文字除いても回文にならない場合", () => {
    expect(singleCharacterPalindromes("abcde")).toBe("not possible");
  });
})