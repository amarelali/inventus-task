import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface IProps {
  setFunction: (date: string) => void;
}
const DatePickerComponent = ({ setFunction }: IProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const formatDate = (date: Date) => {
    console.log(date);
    setFunction(
      `${date.toLocaleDateString("en-US", {
        weekday: "short",
      })}, ${date.toLocaleDateString("en-US", {
        month: "long",
      })} ${date.getUTCDate()}`
    );
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          formatDate(date);
          setStartDate(date);
        }}
      />
    </>
  );
};
export default DatePickerComponent;
