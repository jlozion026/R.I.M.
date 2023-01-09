import RoadClosure from "@/Assets/svg/RoadClosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";
import { btnType } from "@/components/Button/models";

export const ReportsBtnProps = [
  {
    id: "City Project Form",
    type: btnType.Button,
    svg: Hazzard,
    icon: "",
    children: "City Project Form",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Closure Form",
    type: btnType.Button,
    svg: RoadClosure,
    icon: "",
    children: "Road Closure",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Constraction Form",
    type: btnType.Button,
    svg: Construction,
    icon: "",
    children: "Road Constraction",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Accident Form",
    type: btnType.Button,
    svg: Accident,
    icon: "",
    children: "Road Accident",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Event Form",
    type: btnType.Button,
    svg: Event,
    icon: "",
    children: "Road Event",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Hazzard Form",
    type: btnType.Button,
    svg: Hazzard,
    icon: "",
    children: "Road Hazzard",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },
];
