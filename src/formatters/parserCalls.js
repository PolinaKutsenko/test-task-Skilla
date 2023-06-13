const parserCalls = (callsData) => {
  const todayDate = new Date();

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

  const resultArray = {
    today: [],
    yesterday: [],
    currentMonth: [],
    lastMonth: [],
    currentYear: [],
    beforeLastYear: [],
  }

  const isEqualDays = (date1, date2) => date1.getDate() === date2.getDate();
  const isEqualMonths = (date1, date2) => date1.getMonth() === date2.getMonth();
  const isEqualYears = (date1, date2) => date1.getFullYear() === date2.getFullYear();

  callsData.forEach((callItem) => {
    const callDate = new Date(callItem.date);

    if (isEqualDays(callDate, todayDate) && isEqualMonths(callDate, todayDate) && isEqualYears(callDate, todayDate)) {
      resultArray.today.push(callItem);
      return;
    }
    if (isEqualDays(callDate, yesterdayDate) && isEqualMonths(callDate, yesterdayDate) && isEqualYears(callDate, yesterdayDate)) {
      resultArray.yesterday.push(callItem);
      return;
    }
    if (isEqualMonths(callDate, todayDate) && isEqualYears(callDate, todayDate)) {
      resultArray.currentMonth.push(callItem);
      return;
    }
    if (isEqualMonths(callDate, lastMonthDate) && isEqualYears(callDate, lastMonthDate)) {
      resultArray.lastMonth.push(callItem);
      return;
    }
    if (isEqualYears(callDate, todayDate)) {
      resultArray.currentYear.push(callItem);
      return;
    } else if (!isEqualYears(callDate, todayDate)) {
      resultArray.beforeLastYear.push(callItem);
      return;
    }
  });

  return resultArray;
};
  
export default parserCalls;