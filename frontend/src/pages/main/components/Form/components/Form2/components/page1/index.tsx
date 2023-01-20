import { FC, useContext } from "react";

import { MainContext } from "@/setup/context-manager/mainContext";
import { MainContextType } from "@/setup/context-manager/model";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Search from "@/pages/main/components/Search";

import { Calendar } from "react-date-range";

import { FaCalendarAlt } from "react-icons/fa";

import { IPage1 } from "../../../../models";

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
        <Search Name={"From"} PlaceHolder={"From"} Label={"Location"} />
      </div>

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
          <RiEraserFill size={25} color={"#205EFF"} onClick={resetMarkers} />
        </p>
      </div>

      <div className="date-container">
        <div className="date-group">
          <div className="date-wrapper" onClick={ClickCalendarStart}>
            <InputField
              label={"Date Started"}
              type={"text"}
              name={"StartDate"}
              placeholder={StartDate}
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
        <p className="calendar-icon">
          <FaCalendarAlt size={20} color={"#205EFF"} />
        </p>
      </div>

      <div className="date-container">
        <div className="date-group">
          <div className="date-wrapper" onClick={ClickCalendarEnd}>
            <InputField
              label={"Date Ended"}
              type={"text"}
              name={"EndDate"}
              placeholder={EndDate}
              forinput={"end-date"}
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

        <p className="calendar-icon">
          <FaCalendarAlt size={20} color={"#205EFF"} />
        </p>
      </div>

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

      <div className="btn-container-next">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--secondary"}
          onClick={Next}
          buttonSize={"btn--next"}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Page1;
