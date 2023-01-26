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

import useOnclickOutside from "react-cool-onclickoutside";

const DefaultUpdateForm: FC<IDefaultUpdateForm> = ({
  SubmitUpdatedForm,
  GetUpdatedData,
}) => {
  const {
    startDate,
    endDate,
    calendarStart,
    calendarEnd,
    setCalendarStart,
    setCalendarEnd,
    clickCalendar,
    handleStartDate,
    handleEndDate,
  } = useContext(LogsInfoContext) as LogsInfoContextType;

  const ref = useOnclickOutside(() => {
    clickCalendar();
  });

  return (
    <>
      <div className="ui-field">
        <InputField
          label={"Date Started"}
          value={startDate}
          type={"text"}
          name={"StartDate"}
          placeholder={"YYYY/MM/DD"}
          forinput={"calendar"}
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
              className="calendarElement"
            />
          </div>
        ) : null}
      </div>

      <div className="ui-field">
        <InputField
          label={"Date Ended"}
          type={"text"}
          value={endDate}
          name={"EndDate"}
          placeholder={"YYYY/MM/DD"}
          forinput={"calendar"}
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
              className="calendarElement"
            />
          </div>
        ) : null}
      </div>

      <div className="update-description">
        <p>
          <label htmlFor="up-description">Description</label>
        </p>
        <textarea
          id="description"
          name="description"
          onChange={GetUpdatedData}
          rows={7}
          cols={51}
        />
      </div>

      <div className="update-button">
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
