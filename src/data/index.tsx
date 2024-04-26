import Bowl from "../components/SVG/Bowl";
import Confirmed from "../components/SVG/Confirmed";
import Covers from "../components/SVG/Covers";
import Late from "../components/SVG/Late";
import MainCourse from "../components/SVG/MainCourse";
import NotConfirmed from "../components/SVG/NotConfirmed";
import Status from "../components/SVG/Status";
import Time from "../components/SVG/Time";
import PartiallyArrived from "../components/SVG/partiallyArrived";
import { IDetails, ITables } from "../interfaces";

export const upcoming: IDetails[] = [
  {
    color: "#ff6300",
    icon: <Late />,
    title: "Late",
  },
  {
    color: "#4a4e52",
    icon: <NotConfirmed />,
    title: "Not Confirmed",
  },
  {
    color: "#0796d5",
    icon: <Confirmed />,
    title: "Confirmed",
  },
  {
    color: "#c40414",
    icon: <NotConfirmed />,
    title: "No Answer",
  },
];
export const waitList: IDetails[] = [
  {
    color: "#cea5f0",
    icon: <Time />,
    title: "Wait list",
  },
];
export const preservice: IDetails[] = [
  {
    color: "#95d368",
    icon: <Covers />,
    title: "Arrived",
  },
  {
    color: "#ec8b07",
    icon: <PartiallyArrived />,
    title: "Partially Arrived",
  },
];
export const inService: IDetails[] = [
  {
    color: "#068b43",
    icon: <Status />,
    title: "Seated",
  },
  {
    color: "#1e66d7",
    icon: <Bowl />,
    title: "Appitizer",
  },
  {
    color: "#1e66d7",
    icon: <MainCourse />,
    title: "Main Course",
  },
];
export const tableData: ITables[] = [{ color: "#e07488", bgcolor: "#fadde2" },{ color: "#c8ded2", bgcolor: "#e9f2ef" },{ color: "rgb(202 228 239 / 50%)", bgcolor: "white" }];
