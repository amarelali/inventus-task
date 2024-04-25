import "./App.css";
import Table from "./components/SVG/Table";
import MenuItems from "./components/MenuItems";
import Time from "./components/SVG/Time";
import Covers from "./components/SVG/Covers";
import Duration from "./components/SVG/Duration";
import Status from "./components/SVG/Status";
import Date from "./components/SVG/Date";
import Close from "./components/SVG/Close";
import DetailsMenu from "./components/DetailsMenu";
import { useEffect, useState } from "react";
import Button from "./components/ui/Button";
import { dataDetailsMenu } from "./components/contants";
import { controleButtonStyle } from "./components/contants/styles";
import Toggle from "./components/ui/Toggle";

function App() {
  const [covers, setEditedCovers] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [hour, setHour] = useState<number>(12);
  const [minutes, setMinutes] = useState<number>(0);
  const [finalTime, setFinalTime] = useState<string>("12:00 AM");
  const [isAM, setIsAM] = useState<boolean>(true);
  const [isOpenIndex, setOpenIndex] = useState(-1);
  useEffect(() => {
    setFinalTime(formatTime(hour, minutes));
  }, [hour, minutes, isAM]);

  const handleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const editTimeIncrement = () => {
    if (minutes >= 59) {
      setHour((prev) => (prev === 12 ? 1 : prev + 1));
      setMinutes(0);
    } else {
      setMinutes((prev) => (prev === 59 ? 0 : prev + 1));
    }
    if (hour === 11 && minutes === 59) {
      setIsAM((prevIsAM) => !prevIsAM);
    }
  };
  const editTimeDecrement = () => {
    if (minutes === 0) {
      setHour((prev) => (prev === 1 ? 12 : prev - 1));
      setMinutes(59);
    } else {
      setMinutes((prev) => prev - 1);
    }

    if (hour === 12 && minutes === 0) {
      setIsAM((prevIsAM) => !prevIsAM);
    }
  };
  const formatTime = (hour: number, minutes: number): string => {
    const term = isAM ? "AM" : "PM";
    if (minutes < 10) {
      return `${hour}:0${minutes} ${term}`;
    }
    return `${hour}:${minutes} ${term}`;
  };
  return (
    <>
      <ul className="bg-white h-screen font-semibold font-sans w-[57%] md:w-1/4 relative">
        <MenuItems
          icon={<Date />}
          title="Sat, January 20"
          iconTitle="Date"
          className="p-3"
          isOpen={isOpenIndex === 0}
          onOpen={() => handleOpen(0)}
        ></MenuItems>
        <li>
          <span
            className={`p-3 flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] hover:text-black dark:hover:bg-gray-700 group`}
          >
            <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa]">
              <Time /> {"Time"}
            </span>
            <span className="flex flex-3 justify-between items-center ms-3 whitespace-nowrap w-full">
              {finalTime}
              <span className="flex gap-3">
                <Button
                  className={controleButtonStyle}
                  onClick={editTimeDecrement}
                >
                  -
                </Button>
                <Button
                  className={controleButtonStyle}
                  onClick={editTimeIncrement}
                >
                  +
                </Button>
              </span>
            </span>
          </span>
        </li>
        <li>
          <span
            className={`p-3 flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] hover:text-black dark:hover:bg-gray-700 group`}
          >
            <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa]">
              <Covers /> {"Covers"}
            </span>
            <span className="flex flex-3 justify-between items-center ms-3 whitespace-nowrap w-full">
              {covers}
              <span className="flex gap-3">
                <Button
                  className={controleButtonStyle}
                  onClick={() => {
                    setEditedCovers((prev) => (prev <= 0 ? 0 : prev - 1));
                  }}
                >
                  -
                </Button>
                <Button
                  className={controleButtonStyle}
                  onClick={() => {
                    setEditedCovers((prev) => prev + 1);
                  }}
                >
                  +
                </Button>
              </span>
            </span>
          </span>
        </li>
        <li>
          <span
            className={`p-3 flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] hover:text-black dark:hover:bg-gray-700 group`}
          >
            <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa]">
              <Duration /> {"Duration"}
            </span>
            <span className="flex flex-3 justify-between items-center ms-3 whitespace-nowrap w-full">
              {`${duration}h`}
              <span className="flex gap-3">
                <Button
                  className={controleButtonStyle}
                  onClick={() => {
                    setDuration((prev) => (prev <= 1 ? 1 : prev - 1));
                  }}
                >
                  -
                </Button>
                <Button
                  className={controleButtonStyle}
                  onClick={() => {
                    setDuration((prev) => prev + 1);
                  }}
                >
                  +
                </Button>
              </span>
            </span>
          </span>
        </li>
        <MenuItems
          icon={<Table />}
          title="3"
          iconTitle="Table"
          className="p-3"
          isOpen={isOpenIndex === 4}
          onOpen={() => handleOpen(4)}
        ></MenuItems>
        <MenuItems
          icon={<Status />}
          title="Not Confirmed"
          iconTitle="Status"
          className="p-3 cursor-pointer"
          isOpen={isOpenIndex === 6}
          onOpen={() => handleOpen(6)}
        >
          <span
            className="flex justify-end p-2 h-[5%] cursor-pointer"
            onClick={() => handleOpen(6)}
          >
            <Close />
          </span>
          <span className="flex flex-col gap-3 overflow-auto h-[95%] details p-2">
            {dataDetailsMenu.map(({ title, data }) => (
              <DetailsMenu data={data} title={title} />
            ))}
          </span>
        </MenuItems>
        <li>
          <span
            className={`p-2 flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] hover:text-black dark:hover:bg-gray-700 group`}
          >
            <span className="flex flex-3 gap-1 justify-between items-center ms-3 whitespace-nowrap w-full text-balance flex-wrap lg:flex-nowrap">
              {"Send Reservation Requested Message"}
              <Toggle />
            </span>
          </span>
        </li>
      </ul>
    </>
  );
}

export default App;
