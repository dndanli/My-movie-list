export const convertToMonthDayYear = (date: string) => {
  if (date !== "") {
    const [year, month, day] = date.split("-");
    const result = [month, " ", day, ", ", year].join("");
    return result;
  }
  return null;
};
