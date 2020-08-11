export const cost = (mins: number) => { 
  const costOfFirstAnHour = 30;
  const costOfEvery30min = 10;
  const serviceTime = 5;
  let cost = costOfFirstAnHour;
  
  if (mins <= 60 + serviceTime) return cost;
  mins -= 60;
  
  if (mins <= 30) return cost += costOfEvery30min;
  
  cost += Math.floor(mins / 30) * costOfEvery30min;
  mins = mins % 30;
  
  if (mins <= serviceTime) return cost;
  cost += costOfEvery30min;
  
  return cost;
}

export const costSample = (mins: number) =>
         30 + (mins > 65 ? Math.ceil((mins - 65) / 30) : 0) * 10;