import roadclosure from "@/Assets/svg/roadclosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";
import Cityproject from "@/Assets/svg/Cityproject.svg";
import { ReportType } from "@/generated/graphql";

export const BtnFilterprops = [

    {
        type: "button",
        svg: roadclosure,
        reporttype:ReportType.RoadClosure
    },
    {
        type: "button",
        svg: Construction,
        reporttype:ReportType. RoadConstruction
    },
    {
        type: "button",
        svg: Hazzard,
        reporttype:ReportType. RoadHazard
    },
    {
        type: "button",
        svg: Accident,
        reporttype:ReportType. RoadAccident
   
    },
    {
        type: "button",
        svg: Event,
        reporttype:ReportType. RoadEvent
       
    },
    {
        type: "button",
        svg: Cityproject,
        reporttype:ReportType. CityProject
       
    }
]