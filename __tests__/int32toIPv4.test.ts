import { int32toIPv4, int32ToIp } from "../src/int32toIPv4";

describe("自分の回答", () => {
  test("1桁目だけ", () => {
    expect(int32toIPv4(32)).toBe("0.0.0.32");
  })

  test("2桁目もあり", () => {
    expect(int32toIPv4(300)).toBe("0.0.1.44");
  });


  test("3桁目もあり", () => {
    expect(int32toIPv4(5000000)).toBe("0.76.75.64");
  });

  test("4桁目もあり", () => {
    expect(int32toIPv4(2149583361)).toBe("128.32.10.1");
  })

  test("最大値", () => {
    expect(int32toIPv4(4294967295)).toBe("255.255.255.255");
  })

  test("IPの範囲外(上)", () => {
    expect(int32toIPv4(50000000000)).toBe("符号なしIntの範囲外です。")
  })

  test("IPの範囲外(下)", () => {
    expect(int32toIPv4(-100)).toBe("符号なしIntの範囲外です。")
  })
})

describe("サンプル", () => {
    test("1桁目だけ", () => {
      expect(int32ToIp(32)).toBe("0.0.0.32");
    });

    test("2桁目もあり", () => {
      expect(int32ToIp(300)).toBe("0.0.1.44");
    });

    test("3桁目もあり", () => {
      expect(int32ToIp(5000000)).toBe("0.76.75.64");
    });

    test("4桁目もあり", () => {
      expect(int32ToIp(2149583361)).toBe("128.32.10.1");
    });

    test("最大値", () => {
      expect(int32ToIp(4294967295)).toBe("255.255.255.255");
    });
})