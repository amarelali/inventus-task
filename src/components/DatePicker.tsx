import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../functionality";
interface IProps {
  setFunction: (date: string) => void;
}
const DatePickerComponent = ({ setFunction }: IProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          setFunction(formatDate(date));
          setStartDate(date);
        }}
      />
    </>
  );
};
export default DatePickerComponent;
