import { svgStyle } from "../contants";

interface IProps {
}
const NotConfirmed= ({}: IProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className={svgStyle}
    >
      <path d="M22.54 16.88l-1.42-1.41L19 17.59l-2.12-2.12-1.41 1.41L17.59 19l-2.12 2.12 1.41 1.42L19 20.41l2.12 2.13 1.42-1.42L20.41 19l2.13-2.12m-8 6.12H7a2 2 0 01-2-2V3c0-1.11.89-2 2-2h10a2 2 0 012 2v10c-.7 0-1.37.13-2 .35V5H7v14h6c0 1.54.58 2.94 1.54 4z" />
    </svg>
  );
};
export default NotConfirmed;