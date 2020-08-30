export const convertAHexStringToRGB = (hex: string) => {
  const r = Number(parseInt(hex.substr(1, 2), 16).toString(10));
  const g = Number(parseInt(hex.substr(3, 2), 16).toString(10));
  const b = Number(parseInt(hex.substr(5, 2), 16).toString(10));
  
  return {r, g, b};
}