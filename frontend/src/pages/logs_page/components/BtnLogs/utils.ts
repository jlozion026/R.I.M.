import roadclosure from "@/Assets/svg/roadclosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";

export const LogsReportsBtnProps = [
  
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
    id: "CityProject",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "City Project btn",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadClosure",
    type: "button",
    svg: roadclosure,
    icon: "",
    children: "Road Closure",
    buttonStyle: "btn--categories",
    buttonSize: "btn--active",
    onclick: () => {},
  },

  {
    id: "RoadConstruction",
    type: "button",
    svg: Construction,
    icon: "",
    children: "Road Construction",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadAccident",
    type: "button",
    svg: Accident,
    icon: "",
    children: "Road Accident",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadEvent",
    type: "button",
    svg: Event,
    icon: "",
    children: "Road Event",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadHazard",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "Road Hazzard",
    buttonStyle: "btn--categories",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

];
