import "./App.css";
import Table from "./components/SVG/Table";
import MenuItems from "./components/MenuItems";
import Time from "./components/SVG/Time";
import Covers from "./components/SVG/Covers";
import Duration from "./components/SVG/Duration";
import Status from "./components/SVG/Status";
import Date from "./components/SVG/Date";
import Close from "./components/SVG/Close";
import { inService, preservice, upcoming, waitList } from "./data";
import DetailsMenu from "./components/DetailsMenu";
import { useState } from "react";

function App() {
  const dataDetailsMenu = [
    { data: upcoming, title: "Upcoming" },
    { data: waitList, title: "Wait List" },
    { data: preservice, title: "Pre-Service" },
    { data: inService, title: "In-Service" },
  ];
  const [isOpenIndex, setOpenIndex] = useState(-1);
  const handleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <>
      <ul className="bg-white h-screen font-semibold font-sans w-1/4 relative">
        <MenuItems
          icon={<Date />}
          title="Date"
          iconTitle="Date"
          className="p-3"
          isOpen={isOpenIndex === 0}
          onOpen={()=>handleOpen(0)}
        ></MenuItems>
        <MenuItems
          icon={<Time />}
          title="Hello"
          iconTitle="Time"
          className="p-3"
          isOpen={isOpenIndex === 1}
          onOpen={()=>handleOpen(1)}
        ></MenuItems>
        <MenuItems
          icon={<Covers />}
          title="Hello"
          iconTitle="Covers"
          className="p-3"
          isOpen={isOpenIndex === 2}
          onOpen={()=>handleOpen(2)}
        ></MenuItems>
        <MenuItems
          icon={<Duration />}
          title="Hello"
          iconTitle="Duration"
          className="p-3"
          isOpen={isOpenIndex === 3}
          onOpen={()=>handleOpen(3)}
        ></MenuItems>
        <MenuItems
          icon={<Table />}
          title="Hello"
          iconTitle="Table"
          className="p-3"
          isOpen={isOpenIndex === 4}
          onOpen={()=>handleOpen(4)}
        ></MenuItems>
        <MenuItems
          icon={<Status />}
          title="Hello"
          iconTitle="Status"
          className="p-3 cursor-pointer"
          isOpen={isOpenIndex === 6}
          onOpen={()=>handleOpen(6)}
        >
          <span className="flex justify-end p-2 h-[5%] cursor-pointer" onClick={()=>handleOpen(6)}>
            <Close />
          </span>
          <span className="flex flex-col gap-3 overflow-auto h-[95%] details p-2">
            {dataDetailsMenu.map(({ title, data }) => (
              <DetailsMenu data={data} title={title} />
            ))}
          </span>
        </MenuItems>
      </ul>
    </>
  );
}

export default App;
