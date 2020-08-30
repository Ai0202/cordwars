import { convertAHexStringToRGB } from '../src/convertAHexStringToRGB';

describe('自分の回答', () => {
  test('', () => {
    expect(convertAHexStringToRGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
  })
})
