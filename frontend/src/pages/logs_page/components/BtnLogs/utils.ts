import roadclosure from "@/Assets/svg/roadclosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";

export const LogsReportsBtnProps = [
  
  {
    id: "All",
    type: "button",
    svg: "",
    icon: "",
    children: "All",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },
  {
    id: "Recent",
    type: "button",
    svg: "",
    icon: "",
    children: "Recent",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },
  {
    id: "Oldest",
    type: "button",
    svg: "",
    icon: "",
    children: "Oldest",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },
  {
    id: "City Project btn",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "City Project btn",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "Road Closure btn",
    type: "button",
    svg: roadclosure,
    icon: "",
    children: "Road Closure",
    buttonStyle: "btn--categories",
    buttonSize: "btn--active",
    onclick: () => {},
  },

  {
    id: "Road Construction btn",
    type: "button",
    svg: Construction,
    icon: "",
    children: "Road Construction",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "Road Accident btn",
    type: "button",
    svg: Accident,
    icon: "",
    children: "Road Accident",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "Road Event btn",
    type: "button",
    svg: Event,
    icon: "",
    children: "Road Event",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "Road Hazzard btn",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "Road Hazzard",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

];
