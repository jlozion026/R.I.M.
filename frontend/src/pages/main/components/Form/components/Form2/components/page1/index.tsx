import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { Autocomplete } from "@react-google-maps/api";
import { FC } from "react";
import { Calendar } from "react-date-range";
import { FaCalendarAlt } from "react-icons/fa";
import { IPage1 } from "../../../../models";

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
}) => {
  return (
    <>
      <div className="location-container">
        <Autocomplete className="autocomplete-wrapper">
          <InputField
            label={"Location"}
            type={"text"}
            auto={false}
            name={"from"}
            placeholder={"From"}
            forinput={""}
            id={""}
            required={false}
            getData={GetFormData}
            readonly={false}
          />
        </Autocomplete>

        <Autocomplete className="autocomplete-wrapper">
          <InputField
            label={""}
            type={"text"}
            auto={false}
            name={"to"}
            placeholder={"To"}
            forinput={""}
            id={""}
            required={false}
            getData={GetFormData}
            readonly={false}
          />
        </Autocomplete>
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

      <div className="btn-container-next">
        <Button
          icon={""}
          svg={""}
          type={"submit"}
          buttonStyle={"btn--secondary"}
          onClick={Next}
          buttonSize={"btn--next"}
          children={"Next"}
        ></Button>
      </div>
    </>
  );
};

export default Page1;