import { ReactNode } from "react";
import MenuItems from "./MenuItems";

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
          <MenuItems
            key={idx}
            icon={icon}
            title={title}
            className="p-2 cursor-pointer"
            showArrow={false}
            color={color}
          />
        ))}
      </ul>
    </>
  );
};
export default DetailsMenu;
