import { CSSProperties } from "react";

interface IProps {
  style?:CSSProperties;
}
const TableSkeleton= ({style}: IProps) => {
  return (
    <div className={`w-14 h-14 border`} style={style}></div>
  );
};
export default TableSkeleton;