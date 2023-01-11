import RoadClosure from "@/Assets/svg/RoadClosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";
import Cityproject from "@/Assets/svg/Cityproject.svg";
import { btnType } from "@/components/Button/models";

export const ReportsBtnProps = [
  {
    id: "City Project Form",
    type: btnType.Button,
    svg: Cityproject,
    svgBackGround: "alligatorBg",
    children: "City Project Form",
    buttonStyle: "btn--categories",
    buttonSize: "btn--reports",
    onclick: () => {},
  },

  {
    id: "Road Closure Form",
    type: btnType.Button,
    svg: RoadClosure,
    svgBackGround: "orangeBg",
    children: "Road Closure",
    buttonStyle: "btn--categories",
    buttonSize: "btn--reports",
    onclick: () => {},
  },

  {
    id: "Road Constraction Form",
    type: btnType.Button,
    svg: Construction,
    svgBackGround: "deepYellowBg",
    children: "Road Constraction",
    buttonStyle: "btn--categories",
    buttonSize: "btn--reports",
    onclick: () => {},
  },

  {
    id: "Road Accident Form",
    type: btnType.Button,
    svg: Accident,
    svgBackGround: "kowloonBg",
    children: "Road Accident",
    buttonStyle: "btn--categories",
    buttonSize: "btn--reports",
    onclick: () => {},
  },

  {
    id: "Road Event Form",
    type: btnType.Button,
    svg: Event,
    svgBackGround: "softBlueBg",
    children: "Road Event",
    buttonStyle: "btn--categories",
    buttonSize: "btn--reports",
    onclick: () => {},
  },

  {
    id: "Road Hazzard Form",
    type: btnType.Button,
    svg: Hazzard,
    svgBackGround: "yellowBg",
    children: "Road Hazzard",
    buttonStyle: "btn--categories",
    buttonSize: "btn--reports",
    onclick: () => {},
  },
];
