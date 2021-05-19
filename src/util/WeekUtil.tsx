
export const weekOfYear = (date:Date) => {
    var target = new Date(date.valueOf()),
      dayNumber = (date.getUTCDay() + 6) % 7,
      firstThursday;
  
    target.setUTCDate(target.getUTCDate() - dayNumber + 3);
    firstThursday = target.valueOf();
    target.setUTCMonth(0, 1);
  
    if (target.getUTCDay() !== 4) {
      target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
    }
  
    let weekNum = Math.ceil((firstThursday - target.valueOf()) /  (7 * 24 * 3600 * 1000)) + 1;
    return weekNum;
  }
  