import "./App.css";
import Table from "./components/SVG/Table";
import TableSkeleton from "./components/TableSkeleton";
import MenuItems from "./components/MenuItems";
import Time from "./components/SVG/Time";
import Covers from "./components/SVG/Covers";
import Duration from "./components/SVG/Duration";
import Status from "./components/SVG/Status";
import DateSvg from "./components/SVG/Date";
import Close from "./components/SVG/Close";
import { ReactNode, useEffect, useState } from "react";
import Button from "./components/ui/Button";
import { dataDetailsMenu } from "./contants";
import { controleButtonStyle } from "./contants/styles";
import Toggle from "./components/ui/Toggle";
import Divider from "./components/ui/Divider";
import Comments from "./components/SVG/Comments";
import Tags from "./components/SVG/Tags";
import Notes from "./components/SVG/Notes";
import Draggable from "react-draggable";
import SubMenuItems from "./components/SubMenuItems";
import Late from "./components/SVG/Late";
import Arrow from "./components/SVG/Arrow";
import DatePickerComponent from "./components/DatePicker";
import { formatDate } from "./functionality";
import { tableData } from "./data";

function App() {
  const [date, setDate] = useState<string>(formatDate(new Date()));
  const [covers, setEditedCovers] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [hour, setHour] = useState<number>(12);
  const [minutes, setMinutes] = useState<number>(0);
  const [finalTime, setFinalTime] = useState<string>("12:00 AM");
  const [isAM, setIsAM] = useState<boolean>(true);
  const [selectedStatus, setSelectedStatus] = useState<{
    icon: ReactNode;
    title: string;
    color: string;
  }>({ icon: <Late />, color: "#FF6300", title: "Late" });
  const [isOpenIndex, setOpenIndex] = useState(-1);
  const [showTables, setShowTables] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
const tableReservation = ()=>{
  setIsLoading(true);
  setTimeout(()=>{
    setIsLoading(false)
    setShowTables(true);
  },1000);
}
  return (
    <>
      <div className="flex gap-2">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[25, 25]}
          scale={1}
        >
          <ul className="handle bg-white h-full font-semibold font-sans w-[66%] md:w-1/4 relative border-[#e5e5e5] border-[1px] border-solid cursor-move">
            <MenuItems
              icon={<DateSvg />}
              title={
                <>
                  <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
                    <span className="flex gap-2">{date}</span>
                    <Arrow />
                  </span>
                </>
              }
              iconTitle="Date"
              className="p-3"
              isOpen={isOpenIndex === 0}
              onOpen={() => handleOpen(0)}
            >
              <>
                <span
                  className="flex justify-end p-2 h-[5%] cursor-pointer"
                  onClick={() => handleOpen(0)}
                >
                  <Close />
                </span>
                <span className="flex flex-col gap-3 overflow-auto h-[95%] details p-2">
                  <span>Set new Date:</span>
                  <DatePickerComponent setFunction={setDate} />
                </span>
              </>
            </MenuItems>
            <li>
              <span
                className={`p-3 flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] hover:text-black dark:hover:bg-gray-700 group`}
              >
                <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa] w-40">
                  <Time /> {"Time"}
                </span>
                <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
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
                <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa] w-40">
                  <Covers /> {"Covers"}
                </span>
                <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
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
                <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa] w-40">
                  <Duration /> {"Duration"}
                </span>
                <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
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
              title={
                <>
                  <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
                    <span className="flex gap-2">{"3"}</span>
                    <Arrow />
                  </span>
                </>
              }
              iconTitle="Table"
              className="p-3"
              isOpen={isOpenIndex === 1}
              onOpen={() => handleOpen(1)}
            ></MenuItems>
            <MenuItems
              icon={<Status />}
              title={
                <>
                  <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
                    <span className="flex gap-2 details">
                      <div
                        className={`p-1 flex justify-center items-center rounded-full`}
                        style={{ backgroundColor: `${selectedStatus.color}` }}
                      >
                        {selectedStatus.icon}
                      </div>
                      {selectedStatus.title}
                    </span>
                    <Arrow />
                  </span>
                </>
              }
              iconTitle="Status"
              className="p-3 cursor-pointer"
              isOpen={isOpenIndex === 2}
              onOpen={() => handleOpen(2)}
            >
              <>
                <span
                  className="flex justify-end p-2 h-[5%] cursor-pointer"
                  onClick={() => handleOpen(2)}
                >
                  <Close />
                </span>
                <span className="flex flex-col gap-3 overflow-auto h-[95%] details p-2">
                  {dataDetailsMenu.map(({ title, data }) => (
                    <>
                      <span>{title}</span>
                      <ul className="text-black">
                        {data.map(({ icon, title, color }, idx) => (
                          <SubMenuItems
                            key={idx}
                            icon={icon}
                            title={title}
                            className="p-2 cursor-pointer"
                            color={color}
                            onClick={() => {
                              setSelectedStatus({ icon, title, color });
                              handleOpen(2);
                            }}
                          />
                        ))}
                      </ul>
                    </>
                  ))}
                </span>
              </>
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
            <Divider />
            <MenuItems
              icon={<Comments />}
              title={
                <>
                  <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
                    <span className="flex gap-2">{"Add private comments"}</span>
                    <Arrow />
                  </span>
                </>
              }
              iconTitle="Comment"
              className="p-3 cursor-pointer notes"
              isOpen={isOpenIndex === 3}
              onOpen={() => handleOpen(3)}
            />
            <MenuItems
              icon={<Tags />}
              title={
                <>
                  <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
                    <span className="flex gap-2">{"Add resevation tags"}</span>
                    <Arrow />
                  </span>
                </>
              }
              iconTitle="Tags"
              className="p-3 cursor-pointer notes"
              isOpen={isOpenIndex === 4}
              onOpen={() => handleOpen(4)}
            />
            <Divider />
            <MenuItems
              icon={<Notes />}
              title={
                <>
                  <span className="flex flex-3 justify-between items-center whitespace-nowrap w-full">
                    <span className="flex gap-2">
                      {"Add notes to send to guest"}
                    </span>
                    <Arrow />
                  </span>
                </>
              }
              iconTitle="notes"
              className="p-3 cursor-pointer notes"
              isOpen={isOpenIndex === 5}
              onOpen={() => handleOpen(5)}
            >
              <span
                className="flex justify-end p-2 h-[5%] cursor-pointer"
                onClick={() => handleOpen(5)}
              >
                <Close />
              </span>
              <span className="flex flex-col gap-3 overflow-auto h-[95%] details p-2">
                {"Notes..."}
              </span>
            </MenuItems>
            <li className="flex justify-center items-center">
              <Button className="w-[90%] p-2 text-uppercase rounded-md bg-[#018B40] hover:bg-green-600 active:bg-green-800 text-white my-4" onClick={tableReservation} isLoading={isLoading}>
                Create Reservation
              </Button>
            </li>
          </ul>
        </Draggable>
        {showTables && (
           tableData.map(({ color, bgcolor }, idx) => (
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 550, y: 200 }}
              grid={[25, 25]}
              scale={1}
            >
              <div className="handle relative w-fit h-fit">
                <TableSkeleton
                  style={{
                    border: `2px solid ${color}`,
                    backgroundColor: `${bgcolor}`,
                    borderRadius: 5,
                  }}
                />
                <span
                  className="px-2 py-1 text-white rounded-lg bg-slate-600 text-xs absolute "
                  style={{
                    top: "70%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {idx}
                </span>
              </div>
            </Draggable>
          ))
        )}
       
      </div>
    </>
  );
}

export default App;
