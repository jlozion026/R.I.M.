import { ChangeEvent, FC, useState, useContext } from "react";

import { useCreateOneReportMutation, ReportType } from "@/generated/graphql";

import { MainContext } from "@/setup/context-manager/mainContext";
import { MainContextType } from "@/setup/context-manager/model";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";
import { useQueryClient } from "@tanstack/react-query";

import DefaultForm from "./components/DefaultForm";
import Form2 from "./components/Form2";
import Steps from "./components/Steps";

import { FaArrowLeft } from "react-icons/fa";

import format from "date-fns/format";

import { IDefaultFormData, IForm, IForm2Data } from "./models";

import { getToken } from "@/lib/auth";

import { toast } from "react-toastify";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./style.css";

const Form: FC<IForm> = ({ PopUp, FormType, Title, TypeOfReport }) => {
  const { coordinates, addresses } = useContext(MainContext) as MainContextType;

  //Form 2 conditional rendering and Progress Steps
  const [page, setPage] = useState(false);

  const [genAdd, setGenAdd] = useState<string>("");

  //Calendar
  const [startDate, setStartDate] = useState("YYYY/MM/DD");
  const [endDate, setEndDate] = useState("YYYY/MM/DD");

  //Toastify Message!
  const Success = () => toast.success("Successfully Created!");
  const Errors = () =>
    toast.error("Report not created. Please complete all fields!");

  //Todo state of origin and destination Form2Data.
  const [form2Data, setForm2Data] = useState<IForm2Data>({
    location: {
      origin: { lat: 0, lng: 0 },
      destination: { lat: 0, lng: 0 },
    },
    projectName: "",
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
    location: {
      origin: { lat: 0, lng: 0 },
      destination: { lat: 0, lng: 0 },
    },
    startDate: "",
    endDate: "",
    description: "",
  });

  const next = () => {
    setPage(true);
  };

  const queryClient = useQueryClient();

  graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`); //sets the authorization header

  const { mutate } = useCreateOneReportMutation<Error>(graphqlRequestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllReports", {}]);
      Success();
    },

    onError: (error: Error) => {
      console.log(error);
      Errors();
    },
  });

  const SubmitForm2Data = () => {
    form2Data["startDate"] = startDate;
    form2Data["endDate"] = endDate;
    mutate({
      data: {
        location: {
          addresses: {
            general_address: genAdd,
            to: addresses.addOrigin,
            from: addresses.addDestination,
          },
          origin: coordinates.origin,
          destination: coordinates.destination,
        },
        description: form2Data.description,
        report_type: TypeOfReport as ReportType,
        city_project: {
          create: {
            project_name: form2Data.projectName,
            contractor_name: form2Data.contractor,
            date_started: form2Data.startDate,
            date_ended: form2Data.endDate,
            source_fund: form2Data.sourceFund,
            project_ammount: parseFloat(form2Data.programAmount),
            contract_ammount: parseFloat(form2Data.contractAmount),
          },
        },
      },
    });

    PopUp();
  };

  const SubmitDefaultFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    defaultFormData["startDate"] = startDate;
    defaultFormData["endDate"] = endDate;

    mutate({
      data: {
        location: {
          addresses: {
            general_address: genAdd,
            to: addresses.addOrigin,
            from: addresses.addDestination,
          },
          origin: coordinates.origin,
          destination: coordinates.destination,
        },
        description: defaultFormData.description,
        report_type: TypeOfReport as ReportType,
        incident: {
          create: {
            date_started: defaultFormData.startDate,
            date_ended: defaultFormData.endDate,
          },
        },
      },
    });

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
    setStartDate(format(date, "yyyy-MM-dd"));
    clickCalendar();
  };

  const handleEndDate = (date: Date) => {
    if (date > new Date(startDate)) {
      setEndDate(format(date, "yyyy-MM-dd"));
      clickCalendar();
    } else {
      console.log("invalid");
    }
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
    <form className="main-form">
      <div className="header-form">
        {page ? (
          <p className="back-btn" onClick={() => setPage(false)}>
            <FaArrowLeft />
          </p>
        ) : null}

        <h1 className="title-form">{Title}</h1>
      </div>
      {FormType ? (
        <div className="step-bar">
          <Steps page={page} />
        </div>
      ) : null}

      {!FormType ? (
        <DefaultForm
          setGenAdd={setGenAdd}
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
          ClickCalendar={clickCalendar}
          Submit={(e) => SubmitDefaultFormData(e)}
        />
      ) : (
        <Form2
          setGenAdd={setGenAdd}
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
          ClickCalendar={clickCalendar}
          Submit={SubmitForm2Data}
        />
      )}
    </form>
  );
};

export default Form;
