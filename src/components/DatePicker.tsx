import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface IProps{
    setFunction:(date:string)=>void;
}
const DatePickerComponent = ({setFunction}:IProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
//   const [date, setDate] = useState<string>(`Sat, January 20`);
  function getDayName(dayNumber: number) {
    const date = new Date(dayNumber);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const dayIndex = date.getDay();
    const dayName = dayNames[dayIndex];
    return dayName;
  }
  function getMonthName(monthIndex: number): string {
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
  const formatDate = (date: Date) => {
    setFunction(
      `${getDayName(date.getDay())}, ${getMonthName(
        date.getMonth()
      )} ${date.getDay()}`
    );
  };
  return (
    <>
      <DatePicker selected={startDate} onChange={(date:Date) =>{
         formatDate(date);
         setStartDate(date);
      }} />
    </>
  );
};
export default DatePickerComponent;
