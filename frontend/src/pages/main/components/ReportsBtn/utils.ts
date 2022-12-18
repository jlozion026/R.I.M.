import roadclosure from "@/Assets/svg/roadclosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";

export const ReportsBtnProps = [
  {
    id: "City Project Form",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "City Project Form",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Closure Form",
    type: "button",
    svg: roadclosure,
    icon: "",
    children: "Road Closure",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Constraction Form",
    type: "button",
    svg: Construction,
    icon: "",
    children: "Road Constraction",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Accident Form",
    type: "button",
    svg: Accident,
    icon: "",
    children: "Road Accident",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Event Form",
    type: "button",
    svg: Event,
    icon: "",
    children: "Road Event",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },

  {
    id: "Road Hazzard Form",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "Road Hazzard",
    buttonStyle: "btn--categories",
    buttonSize: "btn--small",
    onclick: () => {},
  },
];
