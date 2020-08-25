export const readTheTime = (time: string) => {
  const hourTexts = new Map([
    [0, "midnight"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
  ]);

  const minutesTexts = new Map([
    [0, ""],
    [1, "one minute"],
    [2, "two minutes"],
    [3, "three minutes"],
    [4, "four minutes"],
    [5, "five minutes"],
    [6, "six minutes"],
    [7, "seven minutes"],
    [8, "eight minutes"],
    [9, "nine minutes"],
    [10, "ten minutes"],
    [11, "eleven minutes"],
    [12, "twelve minutes"],
    [13, "thirteen minutes"],
    [14, "fourteen minutes"],
    [15, "quarter"],
    [16, "sixteen minutes"],
    [17, "seventeen minutes"],
    [18, "eighteen minutes"],
    [19, "nineteen minutes"],
    [20, "twenty minutes"],
    [21, "twenty one minutes"],
    [22, "twenty two minutes"],
    [23, "twenty three minutes"],
    [24, "twenty four minutes"],
    [25, "twenty five minutes"],
    [26, "twenty six minutes"],
    [27, "twenty seven minutes"],
    [28, "twenty eight minutes"],
    [29, "twenty nine minutes"],
    [30, "half"],
  ]);

  let [hour, minutes] = time.split(":").map(n => Number(n));
  let hourText =
    hour === 12 ? hourTexts.get(hour) : hourTexts.get(hour % 12);

  let joinText = "past";
  if (minutes > 30) {
    minutes = 60 - minutes;
    joinText = "to";
    hour = hour === 23 ? 0 : (hour % 12) + 1;
    hourText = hourTexts.get(hour);
  }
  
  const minutesText = minutesTexts.get(minutes);

  if (hour === 0 && minutes === 0) {
    return hourText;
  }

  if (minutes === 0) {
    return `${hourText} o'clock`;
  }

  return `${minutesText} ${joinText} ${hourText}`;
}