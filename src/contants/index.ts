import { upcoming,waitList,preservice,inService } from "../data";

export const svgStyle ="flex-shrink-0 text-[#aaaaaa] transition duration-75 dark:text-gray-400 group-hover:text-[#0fb354] dark:group-hover:text-white";
export const dataDetailsMenu = [
    { data: upcoming, title: "Upcoming" },
    { data: waitList, title: "Wait List" },
    { data: preservice, title: "Pre-Service" },
    { data: inService, title: "In-Service" },
  ];