import { FC } from "react";

import { IForm2 } from "../../models";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import Page1 from "./components/page1";
import Page2 from "./components/Page2";

const Form2: FC<IForm2> = ({
  GetFormData,
  HandleStartDate,
  HandleEndDate,
  ClickCalendarStart,
  ClickCalendarEnd,
  Submit,
  Next,
  CalendarStart,
  setGenAdd,
  CalendarEnd,
  StartDate,
  EndDate,
  page,
  Disabled,
  DisabledSumbit,
  ClickCalendar,
}) => {
  return (
    <>
      {!page ? (
        <div className="form-wrapper">
          <Page1
            setGenAdd={setGenAdd}
            GetFormData={GetFormData}
            HandleStartDate={HandleStartDate}
            HandleEndDate={HandleEndDate}
            ClickCalendarStart={ClickCalendarStart}
            ClickCalendarEnd={ClickCalendarEnd}
            CalendarStart={CalendarStart}
            CalendarEnd={CalendarEnd}
            StartDate={StartDate}
            EndDate={EndDate}
            Next={Next}
            ClickCalendar={ClickCalendar}
            Disabled={Disabled}
          />
        </div>
      ) : (
        <Page2
          GetFormData={GetFormData}
          Submit={Submit}
          Disabled={Disabled}
          DisabledSumbit={DisabledSumbit}
        />
      )}
    </>
  );
};

export default Form2;
