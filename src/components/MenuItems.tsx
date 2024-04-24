import { ReactNode } from "react";
import Arrow from "./SVG/Arrow";

interface IProps {
  icon: ReactNode;
  iconTitle?: string;
  title?: ReactNode;
  children?: ReactNode;
  showArrow?: boolean;
  className?: string;
  color?: string;
  onOpen?: () => void;
  isOpen?: boolean;
  onClick?: () => void;
  isSubMenu?:boolean
}
const MenuItems = ({
  icon,
  iconTitle,
  className,
  children,
  color,
  onOpen,
  isOpen,
  // isSubMenu =false,
  title,
  showArrow=true
}: IProps) => {
  // const [titleValue, setTitleValue] = useState<ReactNode>(
  //   <div className="flex justify-center gap-1">
  //     {(iconTitle==='Status') && (<div
  //       className={`p-1 flex justify-center items-center rounded-full`}
  //       style={{ backgroundColor: `#4a4e52` }}
  //     >
  //       <NotConfirmed />
  //     </div>)}
  //     {title}
  //   </div>
  // );
  // const onCheckStatusDetails = ({icon,color,title}:{icon:ReactNode;color?:string;title:ReactNode})=>{
  //   if(!isSubMenu) return;
  //   console.log({icon,color,title});
  //   setTitleValue(
  //     <div className="flex justify-center gap-1">
  //     {(iconTitle==='Status') && (<div
  //       className={`p-1 flex justify-center items-center rounded-full`}
  //       style={{ backgroundColor: `${color}` }}
  //     >
  //       {icon}
  //     </div>)}
  //     {title}
  //   </div>
  //   );
  // }
  // onClick={()=>onCheckStatusDetails({icon,color,title})}
  return (
    <>
      <li > 
        <span
          onClick={onOpen}
          className={`flex items-center text-gray-900 dark:text-white hover:bg-[#dbf3e3] ${
            isOpen ? "isOpen" : ""
          } hover:text-black dark:hover:bg-gray-700 group ${className}`}
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
            {title} {showArrow && <Arrow />}
          </span>
        </span>
      </li>
      {isOpen && children && (
        <div className="absolute top-0 left-full bg-white h-screen text-black">
          {children}
        </div>
      )}
    </>
  );
};
export default MenuItems;
