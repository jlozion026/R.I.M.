import { FC, useContext } from "react";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { IDefaultUpdateForm } from "../../models";

import { LogsInfoContext } from "@/setup/context-manager/logsInfoContext";
import { LogsInfoContextType } from "@/setup/context-manager/model";

import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import format from "date-fns/format";

import useOnclickOutside from "react-cool-onclickoutside";

const DefaultUpdateForm: FC<IDefaultUpdateForm> = ({
  SubmitUpdatedForm,
  GetUpdatedData,
}) => {
  const {
    calendarStart,
    calendarEnd,
    startDate,
    endDate,
    setCalendarStart,
    setCalendarEnd,
    clickCalendar,
    handleStartDate,
    handleEndDate,
    defaultUpdateData,
  } = useContext(LogsInfoContext) as LogsInfoContextType;

  const ref = useOnclickOutside(() => {
    clickCalendar();
  });

  return (
    <>
      <div className="ui-field spce-gap">
        <InputField
          label={"Date Started"}
          value={format(startDate, "yyyy-MM-dd")}
          type={"text"}
          name={"StartDate"}
          placeholder={"YYYY/MM/DD"}
          forinput={"start-date"}
          id={"start-date"}
          readonly={true}
          onClick={() => {
            setCalendarStart(true);
          }}
          getData={GetUpdatedData}
        />
      </div>

      <div className="d-wrap">
        {calendarStart ? (
          <div ref={ref}>
            <Calendar
              date={new Date()}
              onChange={handleStartDate}
              className="calendarUpdate"
            />
          </div>
        ) : null}
      </div>

      <div className="ui-field">
        <InputField
          label={"Date Ended"}
          type={"text"}
          value={format(endDate, "yyyy-MM-dd")}
          name={"EndDate"}
          placeholder={"YYYY/MM/DD"}
          forinput={"end-date"}
          id={"end-date"}
          readonly={true}
          onClick={() => {
            setCalendarEnd(true);
          }}
          getData={GetUpdatedData}
        />
      </div>

      <div className="d-wrap">
        {calendarEnd ? (
          <div ref={ref}>
            <Calendar
              date={new Date()}
              onChange={handleEndDate}
              className="calendarUpdate"
            />
          </div>
        ) : null}
      </div>

      <div className="update-description f-gap">
        <p>
          <label htmlFor="up-description">Description</label>
        </p>
        <textarea
          data-testid="areatext-desc"
          id="description"
          name="description"
          value={defaultUpdateData.description}
          onChange={GetUpdatedData}
          rows={7}
          cols={51}
        />
      </div>

      <div className="update-button ub-gap">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={SubmitUpdatedForm}
          buttonSize={"btn--large"}
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default DefaultUpdateForm;
