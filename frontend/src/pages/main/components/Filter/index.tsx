import { FC } from "react";
import { ReportType } from "@/generated/graphql";
import { BtnFilterprops } from "./utils";
import { FaCalendarAlt } from "react-icons/fa";
import "./style.css";



const Filter: FC= () => {
    const getReportType=(reportType:ReportType)=>{
        console.log(reportType);
      }

  return (
    <>
  <div className="filter-container">
    <p className="locate">Locate</p>
    <div className="btn-filter">
    {BtnFilterprops.map((val, key) => {
          return (
            <div className="icon-container" onClick={()=>getReportType(val.reporttype)} key ={key}>
           <img src={val.svg} alt="icon" className="btn-filter-img" />
          </div>
          );
        })}
    </div>
    <div className="calendarflt-container">
        <div className="filter-calendar">
        <p> MM/DD/YYY</p></div>
         <span className="calendar-svg"><FaCalendarAlt/></span>
        
        
    </div>
        </div>
    </>
  );
};

 export default Filter;
 