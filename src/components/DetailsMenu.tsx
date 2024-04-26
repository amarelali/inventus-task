import SubMenuItems from "./SubMenuItems";
import Close from "./SVG/Close";
import { dataDetailsMenu } from "../contants";

interface IProps {
  onClick: () => void;
}
const DetailsMenu = ({ onClick }: IProps) => {
  return (
    <>
      <span
        className="flex justify-end p-2 h-[5%] cursor-pointer"
        onClick={onClick}
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
                  onClick={() => console.log({ icon, color, title })}
                />
              ))}
            </ul>
          </>
        ))}
      </span>
    </>
  );
};
export default DetailsMenu;
