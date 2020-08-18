import { spacesAndCapitalsMenu } from "../src/spacesAndCapitalsMenu"

describe("自分の回答", () => {
  test('', () => {
    expect(
      spacesAndCapitalsMenu(
        "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
      )
    ).toBe(
      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
    );
  })
})