import pinRoadClosure from "@/Assets/svg/pinRoadClosure.svg";
import pinCityProject from "@/Assets/svg/pinCityProject.svg";
import pinRoadConstraction from "@/Assets/svg/pinRoadConstraction.svg";
import pinRoadEvent from "@/Assets/svg/pinRoadEvent.svg";
import pinRoadAccident from "@/Assets/svg/pinRoadAccident.svg";
import pinRoadHazzard from "@/Assets/svg/pinRoadHazzard.svg";

import { IGenerateCoordinates, MarkerData } from "./models";

const pinIcons = [
  pinCityProject,
  pinRoadAccident,
  pinRoadClosure,
  pinRoadConstraction,
  pinRoadEvent,
  pinRoadHazzard,
];

const GenerateCoordinates = (position: IGenerateCoordinates) => {
  const _houses: Array<MarkerData> = [];
  for (let i = 0; i < 200; i++) {
    const direction = Math.random() < 0.5 ? -20 : 20;
    const iconIndex = Math.floor(Math.random() * pinIcons.length);
    const randomIcon = pinIcons[iconIndex];
    _houses.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
      icons: randomIcon,
    });
  }
  return _houses;
};

export default GenerateCoordinates;
