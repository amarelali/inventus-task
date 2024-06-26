import { svgStyle } from "../../contants";

const Duration = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className={svgStyle}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 11-1.414-1.414zM12 20a7 7 0 100-14 7 7 0 000 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z" />
    </svg>
  );
};
export default Duration;
