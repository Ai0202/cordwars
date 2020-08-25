import { simpleNumberSequence } from "../src/simpleNumberSequence";

describe('自分の回答', () => {
  test('1桁で1箇所だけ抜けてるケース', () => {
    expect(simpleNumberSequence('123567')).toBe(4);
  })

  test('長いケース', () => {
    expect(simpleNumberSequence('808182838485868788899092939495')).toBe(91);
  })

  test('桁上りしないけど、末尾が9のケース', () => {
    expect(simpleNumberSequence('6970717274')).toBe(73);
  })

  test('2桁の数字だけど89,みたいに1桁ともとれる数字がはいるとき', () => {
    expect(simpleNumberSequence('8990919294')).toBe(93);
  })

  test('4桁の数字だけど6789,みたいに1桁ともとれる数字がはいるとき', () => {
    expect(simpleNumberSequence('6789679067916793')).toBe(6792);
  })

  test('桁上り前の数字が存在しないとき', () => {
    expect(simpleNumberSequence('781011')).toBe(9);
  })

  test('2つ目の数字が存在しないとき', () => {
    expect(simpleNumberSequence('138723138725')).toBe(138724);
  })

  test("2桁で1箇所だけ抜けてるケース", () => {
    expect(simpleNumberSequence("92939596")).toBe(94);
  });

  test("2桁で抜けてる箇所がないケース", () => {
    expect(simpleNumberSequence("31323334")).toBe(-1);
  });

  test("2箇所以上抜けてるケース", () => {
    expect(simpleNumberSequence("100101103104106")).toBe(-1);
  });

  test("桁数が変わるケース", () => {
    expect(simpleNumberSequence("99100101103")).toBe(102);
  });
})