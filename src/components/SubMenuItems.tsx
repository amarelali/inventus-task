import { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  iconTitle?: string;
  title?: ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
}
const SubMenuItems = ({ icon, className, color, iconTitle,onClick,title }: IProps) => {
  return (
    <>
      <li onClick={onClick}>
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
            {title}
          </span>
        </span>
      </li>
    </>
  );
};

export default SubMenuItems;
