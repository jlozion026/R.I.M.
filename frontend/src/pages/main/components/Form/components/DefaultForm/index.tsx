import { FC } from "react";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Search from "@/pages/main/components/Search";

import { FaCalendarAlt } from "react-icons/fa";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { btnType } from "@/components/Button/models";

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
  StartDate,
  EndDate,
  SetFrom,
  SetTo,
  SetToCoord,
  SetFromCoord,
}) => {
  return (
    <>
      <div className="location-container">
        <Search
          SetCoordinates={SetFromCoord}
          SetPlace={SetFrom}
          Name={"From"}
          PlaceHolder={"From"}
          Label={"Location"}
        />

        <Search
          SetCoordinates={SetToCoord}
          SetPlace={SetTo}
          Name={"To"}
          PlaceHolder={"to"}
          Label={""}
        />
      </div>

      <div className="date-container">
        <div className="date-group">
          <div className="date-wrapper" onClick={ClickCalendarStart}>
            <InputField
              label={"Date Started"}
              type={"text"}
              auto={false}
              name={"StartDate"}
              placeholder={StartDate}
              forinput={"calendar"}
              id={"start-date"}
              required={true}
              getData={() => {}}
              readonly={true}
            />
          </div>
          {CalendarStart ? (
            <Calendar
              date={new Date()}
              onChange={HandleStartDate}
              className="calendarElement"
            />
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
              auto={false}
              name={"EndDate"}
              placeholder={EndDate}
              forinput={"end-date"}
              id={""}
              required={false}
              getData={() => {}}
              readonly={true}
            />
          </div>
          {CalendarEnd ? (
            <Calendar
              date={new Date()}
              onChange={HandleEndDate}
              className="calendarElement"
            />
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

      <div className="default-btn-container">
        <Button
          icon={""}
          svg={""}
          type={btnType.Submit}
          buttonStyle={"btn--secondary"}
          onClick={Submit}
          buttonSize={"btn--next"}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default DefaultForm;
