import { ReactNode, useState } from "react";
import NotConfirmed from "./SVG/NotConfirmed";

interface IProps {
  icon: ReactNode;
  iconTitle?: string;
  title?: ReactNode;
  // children?: ReactNode;
  // showArrow?: boolean;
  className?: string;
  color?: string;
  // onOpen?: () => void;
  // isOpen?: boolean;
  onClick?: () => void;
}
const SubMenuItems = ({ icon, className, title, color, iconTitle }: IProps) => {
  const [titleValue, setTitleValue] = useState<ReactNode>(
    <div className="flex justify-center gap-1">
      {iconTitle === "Status" && (
        <div
          className={`p-1 flex justify-center items-center rounded-full`}
          style={{ backgroundColor: `#4a4e52` }}
        >
          <NotConfirmed />
        </div>
      )}
      {title}
    </div>
  );
  const onCheckStatusDetails = ({
    icon,
    color,
    title,
  }: {
    icon: ReactNode;
    color?: string;
    title: ReactNode;
  }) => {
    console.log({ icon, color, title });
    setTitleValue(
      <div className="flex justify-center gap-1">
        {iconTitle === "Status" && (
          <div
            className={`p-1 flex justify-center items-center rounded-full`}
            style={{ backgroundColor: `${color}` }}
          >
            {icon}
          </div>
        )}
        {title}
      </div>
    );
  };
  return (
    <>
      <li onClick={() => onCheckStatusDetails({ icon, color, title })}>
        <span
          className={`flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] hover:text-black dark:hover:bg-gray-700 group ${className}`}
        >
          {iconTitle && (
            <span className="text-[13px] flex items-center gap-1 text-[#aaaaaa]">
              {icon} {iconTitle}
            </span>
          )}
          {color && (
            <div
              className={`p-1 flex justify-center items-center rounded-full`}
              style={{ backgroundColor: `${color}` }}
            >
              {icon}
            </div>
          )}
          <span className="flex flex-3 justify-between items-center ms-3 whitespace-nowrap w-full">
            {titleValue}
          </span>
        </span>
      </li>
    </>
  );
};

export default SubMenuItems;
