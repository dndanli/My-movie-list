export const convertToMonthDayYear = (date: string) => {
  if (date !== "") {
    const [year, month, day] = date.split("-");
    const result = [month, " ", day, ", ", year].join("");
    return result;
  }
  return null;
};

export const convertISO8601toMMDDYYY = (dateInput: string) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedMonth = date.toLocaleString("default", { month: "long" });

 return `${formattedMonth} ${day} ${year}`;
};
