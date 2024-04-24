import { ReactNode } from "react";
import SubMenuItems from "./SubMenuItems";

interface IProps {
  data: { title: string; icon: ReactNode; color: string }[];
  title: string;
}
const DetailsMenu = ({ data, title }: IProps) => {
  return (
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
            onClick={()=>console.log({icon,color,title})}
          />
        ))}
      </ul>
    </>
  );
};
export default DetailsMenu;
