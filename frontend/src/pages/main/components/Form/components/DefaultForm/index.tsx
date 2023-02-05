import { FC, useContext } from "react";

import { MainContext } from "@/setup/context-manager/mainContext";

import { MainContextType } from "@/setup/context-manager/model";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Search from "../Search/index";

import { FaCalendarAlt } from "react-icons/fa";
import { RiEraserFill } from "react-icons/ri";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import useOnclickOutside from "react-cool-onclickoutside";

import { btnType } from "@/components/Button/models";

import format from "date-fns/format";

import "./style.css";

import { IDefaultForm } from "../../models";

const DefaultForm: FC<IDefaultForm> = ({
  GetFormData,
  HandleStartDate,
  HandleEndDate,
  ClickCalendarStart,
  ClickCalendarEnd,
  Submit,
  CalendarStart,
  CalendarEnd,
  setGenAdd,
  StartDate,
  EndDate,
  ClickCalendar,
  Disabled,
}) => {
  const { coordinates, addresses, resetMarkers } = useContext(
    MainContext
  ) as MainContextType;

  const ref = useOnclickOutside(() => {
    ClickCalendar();
  });

  return (
    <>
      <div className="form-wrapper">
        <div className="location-container">
          <Search
            Name={"location"}
            PlaceHolder={"Search Location"}
            Label={"Location"}
            SetGenAdd={setGenAdd}
          />
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
                  <span className="lat-lng-color">
                    {coordinates.origin.lat}
                  </span>
                </div>
                <div>
                  <span className="label-styles">Lng:</span>
                  <span className="lat-lng-color">
                    {coordinates.origin.lng}
                  </span>
                </div>
              </div>
            </div>
            <div className="org-des-column">
              <div>
                <span className="label-styles">To:</span>
                <span className="address-styles">
                  {addresses.addDestination}
                </span>
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

        <div className="date-container">
          <div className="date-group">
            <div className="date-wrapper" onClick={ClickCalendarStart}>
              <InputField
                label={"Date Started"}
                type={"text"}
                name={"StartDate"}
                placeholder={format(StartDate as Date, "yyyy-MM-dd")}
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
            <span className="calendar-svg">
              <FaCalendarAlt />
            </span>
          </div>
        </div>

        <div className="date-container">
          <div className="date-group">
            <div className="date-wrapper" onClick={ClickCalendarEnd}>
              <InputField
                label={"Date Ended"}
                type={"text"}
                name={"EndDate"}
                placeholder={format(EndDate as Date, "yyyy-MM-dd")}
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

          <div className="calendar-icon">
            <span className="calendar-svg">
              <FaCalendarAlt />
            </span>
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

        <div className="default-btn-container">
          <Button
            type={btnType.Submit}
            buttonStyle={"btn--superBlue"}
            onClick={Submit}
            buttonSize={"btn--large"}
            disabled={Disabled}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default DefaultForm;
