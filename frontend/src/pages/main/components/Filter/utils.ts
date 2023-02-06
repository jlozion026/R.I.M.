import RoadClosure from "@/Assets/svg/RoadClosure.svg";
import Construction from "@/Assets/svg/Constructions.svg";
import Hazzard from "@/Assets/svg/Hazzard.svg";
import Accident from "@/Assets/svg/Accident.svg";
import Event from "@/Assets/svg/Event.svg";
import Cityproject from "@/Assets/svg/Cityproject.svg";
import { ReportType } from "@/generated/graphql";
import { btnType } from "@/components/Button/models";


export const BtnFilterprops = [

    {
        svg: RoadClosure,
        reporttype:ReportType.RoadClosure,
        id: "",
        type: btnType.Button,
        svgBackGround: "",
        children: "",
        buttonStyle: "filter-style",
        buttonSize: "btn--filter",
        onclick: () => {},

    },
    {
   
        svg: Construction,
        reporttype:ReportType. RoadConstruction,
        id: "",
        type: btnType.Button,
        svgBackGround: "",
        children: "",
        buttonStyle: "filter-style",
        buttonSize: "btn--filter",
        onclick: () => {},
    },
    {
      
        svg: Hazzard,
        reporttype:ReportType. RoadHazard,
        id: "",
        type: btnType.Button,
        svgBackGround: "",
        children: "",
        buttonStyle: "filter-style",
        buttonSize: "btn--filter",
        onclick: () => {},
    },
    {
    
        svg: Accident,
        reporttype:ReportType. RoadAccident,
        id: "",
        type: btnType.Button,
        svgBackGround: "",
        children: "",
        buttonStyle:"filter-style",
        buttonSize: "btn--filter",
        onclick: () => {},
   
    },
    {
     
        svg: Event,
        reporttype:ReportType. RoadEvent,
        id: "",
        type: btnType.Button,
        svgBackGround: "",
        children: "",
        buttonStyle: "filter-style",
        buttonSize: "btn--filter",
        onclick: () => {},
       
    },
    {

        svg: Cityproject,
        reporttype:ReportType. CityProject,
        id: "",
        type: btnType.Button,
        svgBackGround: "",
        children: "",
        buttonStyle: "filter-style",
        buttonSize: "btn--filter",
        onclick: () => {},
       
    }
]
