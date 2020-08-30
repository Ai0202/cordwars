export const doubleCola = (members: string[], num: number): string => {
  /**
   * 1 5人
   * 2 10人
   * 3 20人
   * 4 40人
   * 5 80人
   * 6 160人
   * n週目 
   * 
   * 1人あたりの登場回数
   * 1 1回
   * 2 2回
   * 3 4回
   * 4 8回
   * 5 16回 2 ** 4 
   * 6 32回
   * 7 64回
   * 
   * (2 ** n - 1) * 5
   */



   // numが2の何乗か
   return String(Math.sqrt(num));
  return 'Sheldon';
}