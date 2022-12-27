import { ChangeEvent, FC, useState } from "react";

import DefaultForm from "./components/DefaultForm";
import Form2 from "./components/Form2";
import Steps from "./components/Steps";

import { FaArrowLeft } from "react-icons/fa";

import format from "date-fns/format";

import { IDefaultFormData, IForm, IForm2Data, LatLngLiteral } from "./models";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./style.css";

const Form: FC<IForm> = ({ PopUp, FormType, Title }) => {
  //Form 2 conditional rendering and Progress Steps
  const [page, setPage] = useState(false);

  //Calendar
  const [startDate, setStartDate] = useState("mm/dd/yyyy");
  const [endDate, setEndDate] = useState("mm/dd/yyyy");

  // coordinates 
  const [fromPos, setFromPos] = useState<LatLngLiteral | null>(null);
  const [toPos, setToPos] = useState<LatLngLiteral | null>(null);
  // place
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const setToPlace = (place:string) => setTo(place)
  const setFromPlace = (place:string) => setFrom(place)
  const setToCoord = (position: google.maps.LatLngLiteral) => setToPos(position)
  const setFromCoord = (position: google.maps.LatLngLiteral) => setFromPos(position)

  //Todo state of origin and destination Form2Data.
  const [form2Data, setForm2Data] = useState<IForm2Data>({
    from: null,
    to: null,
    startDate: "",
    endDate: "",
    description: "",
    contractor: "",
    sourceFund: "",
    programAmount: "",
    contractAmount: "",
  });

  //Todo state of origin and destination DefaultFromData.
  const [defaultFormData, setDefaultFormData] = useState<IDefaultFormData>({
    from: null,
    to: null,
    startDate: "",
    endDate: "",
    description: "",
  });

  const next = () => {
    setPage(true);
  };

  const SubmitForm2Data = () => {
    form2Data["startDate"] = startDate;
    form2Data["endDate"] = endDate;
    form2Data["to"] = toPos;
    form2Data["from"] = fromPos;
    console.table(form2Data);
    console.table([from, to]);
    PopUp();
  };

  const SubmitDefaultFormData = () => {
    defaultFormData["startDate"] = startDate;
    defaultFormData["endDate"] = endDate;
    defaultFormData["to"] = toPos;
    defaultFormData["from"] = fromPos;
    console.table(defaultFormData);
    console.table([from, to]);
    PopUp();
  };

  const getDefaultFormData = (
    val: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDefaultFormData({
      ...defaultFormData,
      [val.target.name]: val.target.value,
    });
  };

  const getForm2Data = (
    val: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm2Data({
      ...form2Data,
      [val.target.name]: val.target.value,
    });
  };

  const handleStartDate = (date: Date) => {
    console.log("start-date:" + format(date, "MM/dd/yyyy"));
    setStartDate(format(date, "MM/dd/yyyy"));
    clickCalendar();
  };

  const handleEndDate = (date: Date) => {
    console.log("end-date:" + format(date, "MM/dd/yyyy"));
    setEndDate(format(date, "MM/dd/yyyy"));
    clickCalendar();
  };

  //Calendar Pop-Up
  const [calendarStart, setCalendarStart] = useState(false);
  const [calendarEnd, setCalendarEnd] = useState(false);

  //Calendar StartDate and Calendar EndDate Pop-Up!!!
  const clickCalendar = () => {
    if (calendarStart) {
      setCalendarStart(false);
    } else if (calendarEnd) {
      setCalendarEnd(false);
    }
  };

  return (
    <form className="form">
      <div className="header">
        {page ? (
          <p className="back-btn" onClick={() => setPage(false)}>
            <FaArrowLeft />
          </p>
        ) : null}

        <h1 className="title">{Title}</h1>
      </div>
      {FormType ? (
        <div className="step-bar">
          <Steps page={page} />
        </div>
      ) : null}

      {!FormType ? (
        <DefaultForm
          SetTo={setToPlace}
          SetFrom={setFromPlace}
          SetToCoord={setToCoord}
          SetFromCoord={setFromCoord}
          GetFormData={getDefaultFormData}
          HandleStartDate={handleStartDate}
          HandleEndDate={handleEndDate}
          CalendarStart={calendarStart}
          CalendarEnd={calendarEnd}
          StartDate={startDate}
          EndDate={endDate}
          ClickCalendarStart={() =>
            setCalendarStart((calendarStart) => !calendarStart)
          }
          ClickCalendarEnd={() => setCalendarEnd((calendarEnd) => !calendarEnd)}
          Submit={SubmitDefaultFormData}
        />
      ) : (
        <Form2
          SetTo={setToPlace}
          SetFrom={setFromPlace}
          SetToCoord={setToCoord}
          SetFromCoord={setFromCoord}
          GetFormData={getForm2Data}
          HandleStartDate={handleStartDate}
          HandleEndDate={handleEndDate}
          Next={next}
          CalendarStart={calendarStart}
          CalendarEnd={calendarEnd}
          StartDate={startDate}
          EndDate={endDate}
          page={page}
          ClickCalendarStart={() =>
            setCalendarStart((calendarStart) => !calendarStart)
          }
          ClickCalendarEnd={() => setCalendarEnd((calendarEnd) => !calendarEnd)}
          Submit={SubmitForm2Data}
        />
      )}
    </form>
  );
};

export default Form;
