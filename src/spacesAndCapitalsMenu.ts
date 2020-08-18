export const spacesAndCapitalsMenu = (orders: string): any[] | any => {
  const MenuList = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  
  let result = "";

  // 文字列からmenulistの内容が入ってるかチェック
  MenuList.forEach((menu: string) => {
    const reg = new RegExp(menu, "gi");
    const matchedMenuArr = orders.match(reg);

    if (matchedMenuArr !== null) {
      result +=
        " " +
        matchedMenuArr
          .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
          .join(" ");
    }
  });

  // 先頭の空白を削除
  return result.trim();
}