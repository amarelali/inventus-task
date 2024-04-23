import { svgStyle } from "../contants";

interface IProps {}
const Arrow = ({}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${svgStyle} group-hover:text-gray-600`}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
    </svg>
  );
};
export default Arrow;
