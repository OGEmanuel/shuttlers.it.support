export function useFormatDate(date: Date): string {
  const day: number = date.getDate();
  const month: string = new Intl.DateTimeFormat("en-GB", {
    month: "long",
  }).format(date);
  const year: number = date.getFullYear();

  function getDayWithSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  const formattedDay: string = getDayWithSuffix(day);

  return `${formattedDay} ${month}, ${year}`;
}

// const date: Date = new Date("2020-10-03");
// const formattedDate: string = formatDate(date);
// console.log(formattedDate);
// Output: "3rd October, 2020"
