import { cost } from "../src/drivingSchool2";

describe("Driving Schoolのテスト", () => {
  test("最初の60分以内の場合は30ドルであること", () => {
    expect(cost(45)).toBe(30);
  })

  test("超過した時間が5分以内であれば追加料金は発生しないこと(最初の60分)", () => {
    expect(cost(65)).toBe(30);
  })

  test("60分経過後の次の30分で10ドル加算されること", () => {
    expect(cost(80)).toBe(40);
  })

  test("30分ごとに10ドル加算されること", () => {
    expect(cost(102)).toBe(50);
  });

  test("超過した時間が5分以内であれば追加料金は発生しないこと(30分ごと)", () => {
    expect(cost(95)).toBe(40);
    expect(cost(125)).toBe(50);
    expect(cost(273)).toBe(100);
  });
})