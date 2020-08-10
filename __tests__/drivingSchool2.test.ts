import { cost } from "../src/drivingSchool2";

describe("Driving Schoolのテスト", () => {
  test("", () => {
    expect(cost(45)).toBe(30);
  })

  test("", () => {
    expect(cost(63)).toBe(30);
  })

  test("", () => {
    expect(cost(80)).toBe(40);
  })

  test("", () => {
    expect(cost(92)).toBe(40);
  })

  test("", () => {
    expect(cost(102)).toBe(50);
  })

  test("", () => {
    expect(cost(273)).toBe(100);
  })
})