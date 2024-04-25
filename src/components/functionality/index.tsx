export function getDayName(dayNumber: number) {
  const date = new Date(dayNumber);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const dayIndex = date.getDay();
  const dayName = dayNames[dayIndex];
  return dayName;
}
export function getMonthName(monthIndex: number): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Get the name of the month from the monthNames array
  const monthName = monthNames[monthIndex];

  return monthName;
}
