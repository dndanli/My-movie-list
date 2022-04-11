export const convertToMonthDayYear = (date: string) => {
  const [year, month, day] = date.split("-");
  const result = [month, day, year].join("/");

  return result;
};
