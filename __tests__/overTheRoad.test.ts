import { overTheRoad } from "../src/overTheRoad";

describe("自分の回答", () => {
  test("3行のとき、合計が7", () => {
    expect(overTheRoad(1, 3)).toBe(6)
    expect(overTheRoad(3, 3)).toBe(4)
    expect(overTheRoad(2, 3)).toBe(5)
  })

  test("5行のとき、合計が11", () => {
    expect(overTheRoad(1, 5)).toBe(10)
    expect(overTheRoad(3, 5)).toBe(8)
  })
})

describe("模範回答", () => {

})