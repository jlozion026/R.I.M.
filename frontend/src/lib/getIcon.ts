import pinRoadClosure from "@/Assets/svg/pinRoadClosure.svg";
import pinCityProject from "@/Assets/svg/pinCityProject.svg";
import pinRoadConstraction from "@/Assets/svg/pinRoadConstraction.svg";
import pinRoadEvent from "@/Assets/svg/pinRoadEvent.svg";
import pinRoadAccident from "@/Assets/svg/pinRoadAccident.svg";
import pinRoadHazzard from "@/Assets/svg/pinRoadHazzard.svg";

import Constructions from "@/Assets/svg/Constructions.svg";
import RoadClosure from "@/Assets/svg/RoadClosure.svg"
import Cityproject from "@/Assets/svg/Cityproject.svg"
import Hazzard from "@/Assets/svg/Hazzard.svg"
import Event from "@/Assets/svg/Event.svg"
import Accident from "@/Assets/svg/Accident.svg"


const pinIcons = {
  pinCityProject: pinCityProject,
  pinRoadAccident: pinRoadAccident,
  pinRoadClosure: pinRoadClosure,
  pinRoadConstruction: pinRoadConstraction,
  pinRoadEvent: pinRoadEvent,
  pinRoadHazard: pinRoadHazzard,
}

const reportIcons = {
  CityProject: Cityproject,
  RoadAccident: Accident,
  RoadClosure: RoadClosure,
  RoadConstruction: Constructions,
  RoadEvent: Event,
  RoadHazard: Hazzard,
}


export const getPinIcon = <T,>(reportType: T) => {
  const pinType = "pin".concat(reportType as string);

  if (pinType in pinIcons) {
    return pinIcons[pinType as keyof typeof pinIcons];
  }
  return;
}

export const getIcon = <T,>(reportType: T) => {
  const iconType = reportType as string;

  if (iconType in reportIcons) {
    return reportIcons[iconType as keyof typeof reportIcons];
  }
  return;
}
