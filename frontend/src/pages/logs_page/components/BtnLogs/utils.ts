import RoadClosure from "@/Assets/svg/RoadClosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";
import Cityproject from "@/Assets/svg/Cityproject.svg"

export const LogsReportsBtnProps = [
  
  {
    id: "Recent",
    type: "button",
    svg: "",
    icon: "",
    children: "Recent",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs2",
    onclick: () => {},
  },
  {
    id: "Oldest",
    type: "button",
    svg: "",
    icon: "",
    children: "Oldest",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs2",
    onclick: () => {},
  },
  {
    id: "CityProject",
    type: "button",
    svg: Cityproject,
    icon: "",
    children: "City Project",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadClosure",
    type: "button",
    svg: RoadClosure,
    icon: "",
    children: "Road Closure",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadConstruction",
    type: "button",
    svg: Construction,
    icon: "",
    children: "Road Construction",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadAccident",
    type: "button",
    svg: Accident,
    icon: "",
    children: "Road Accident",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadEvent",
    type: "button",
    svg: Event,
    icon: "",
    children: "Road Event",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

  {
    id: "RoadHazard",
    type: "button",
    svg: Hazzard,
    icon: "",
    children: "Road Hazzard",
    buttonStyle: "btn--logs-design",
    buttonSize: "btn--logs",
    onclick: () => {},
  },

];
