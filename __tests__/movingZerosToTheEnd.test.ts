import { movingZerosToTheEnd } from "../src/movingZerosToTheEnd";

describe("自分の回答", () => {
  test("", () => {
    expect(movingZerosToTheEnd([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toStrictEqual([
      false,
      1,
      1,
      2,
      1,
      3,
      "a",
      0,
      0,
    ]);
  })
})