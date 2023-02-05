import { FC, useContext } from "react";

import { MainContext } from "@/setup/context-manager/mainContext";
import { MainContextType } from "@/setup/context-manager/model";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Search from "../../../Search/index";

import { Calendar } from "react-date-range";

import { FaCalendarAlt } from "react-icons/fa";

import { IPage1 } from "../../../../models";

import format from "date-fns/format";

import useOnclickOutside from "react-cool-onclickoutside";

import { btnType } from "@/components/Button/models";

import { RiEraserFill } from "react-icons/ri";

import "./style.css";

const Page1: FC<IPage1> = ({
  GetFormData,
  ClickCalendarStart,
  ClickCalendarEnd,
  HandleEndDate,
  HandleStartDate,
  setGenAdd,
  Next,
  StartDate,
  CalendarStart,
  EndDate,
  CalendarEnd,

  ClickCalendar,
}) => {
  const { coordinates, addresses, resetMarkers } = useContext(
    MainContext
  ) as MainContextType;

  const ref = useOnclickOutside(() => {
    ClickCalendar();
  });
  return (
    <>
    <div className="location-container">
        <Search
          Name={"Location"}
          PlaceHolder={"Search Location"}
          SetGenAdd={setGenAdd}
          Label={"Location"}
        />
      </div>

      <div className="addresses-wrapper">
      <div className="addresses-container">
        <div className="address-flex-column">
          <div className="org-des-column">
            <div>
              <span className="label-styles">From:</span>
              <span className="address-styles">{addresses.addOrigin}</span>
            </div>
            <div className="lat-lng-row">
              <div>
                <span className="label-styles">Lat:</span>
                <span className="lat-lng-color">{coordinates.origin.lat}</span>
              </div>
              <div>
                <span className="label-styles">Lng:</span>
                <span className="lat-lng-color">{coordinates.origin.lng}</span>
              </div>
            </div>
          </div>
          <div className="org-des-column">
            <div>
              <span className="label-styles">To:</span>
              <span className="address-styles">{addresses.addDestination}</span>
            </div>
            <div className="lat-lng-row">
              <div>
                <span className="label-styles">Lat:</span>
                <span className="lat-lng-color">
                  {coordinates.destination.lat}
                </span>
              </div>
              <div>
                <span className="label-styles">Lng:</span>
                <span className="lat-lng-color">
                  {coordinates.destination.lng}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="eraser-icon">
          <RiEraserFill onClick={resetMarkers} />
        </p>
      </div>
  
      </div>

      <div className="date-container">
        <div className="date-group">
          <div className="date-wrapper" onClick={ClickCalendarStart}>
            <InputField
              label={"Date Started"}
              type={"text"}
              name={"StartDate"}
              placeholder={format(StartDate, "yyyy-MM-dd")}
              forinput={"calendar"}
              id={"start-date"}
              readonly={true}
            />
          </div>

          {CalendarStart ? (
            <div ref={ref}>
              <Calendar
                date={new Date()}
                onChange={HandleStartDate}
                className="calendarElement"
              />
            </div>
          ) : null}
        </div>
        <div className="calendar-icon">
        <span className="calendar-svg"><FaCalendarAlt /></span>
        </div>
      </div>

      <div className="date-container">
        <div className="date-group">
          <div className="date-wrapper" onClick={ClickCalendarEnd}>
            <InputField
              label={"Date Ended"}
              type={"text"}
              name={"EndDate"}
              forinput={"end-date"}
              placeholder={format(EndDate!,"yyyy-MM-dd")}
              readonly={true}
            />
          </div>
          {CalendarEnd ? (
            <div ref={ref}>
              <Calendar
                date={new Date()}
                onChange={HandleEndDate}
                className="calendarElement"
              />
            </div>
          ) : null}
        </div>

        <div className="calendar-icon">
        <span className="calendar-svg"><FaCalendarAlt/></span>
        </div>
      </div>

      
      <div className="description-wrapper">
        <div className="description">
            <p>
              <label htmlFor="description">Description</label>
            </p>
            <textarea
              id="description"
              name="description"
              onChange={GetFormData}
              rows={7}
              cols={51}
            />
          </div>
      </div>


   
      
      <div className="btn-container-next">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={Next}
          buttonSize={"btn--large"}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Page1;
