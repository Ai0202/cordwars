import { doubleCola } from "../src/doubleCola";

const members = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
describe('自分の回答', () => {
  test('', () => {
    expect(
      doubleCola(members, 1)
    ).toBe("Sheldon");
  })

  test('', () => {
    expect(doubleCola(members, 52)).toBe("Sheldon");
  })

  // test('', () => {
  //   expect(doubleCola(members, 7230702951)).toBe("Leonard");
  // })
})