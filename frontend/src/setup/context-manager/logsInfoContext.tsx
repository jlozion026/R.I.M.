import { ReportType } from "@/generated/graphql";
import { IDefaultUpdateData, IUpdateForm2Data } from "@/models";
import { format } from "date-fns";
import { FC, useState, createContext } from "react";
import { LogsInfoContextType, Props } from "./model";

export const LogsInfoContext = createContext<LogsInfoContextType | null>(null);

const LogsInfoContextProvider: FC<Props> = ({ children }) => {
  //Form 2 conditional rendering and Progress Steps
  const [page, setPage] = useState<boolean>(false);

  const [reportType, setReportType] = useState<ReportType | undefined>();

  //Calendar
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  //Calendar Pop-Up
  const [calendarStart, setCalendarStart] = useState<boolean>(false);
  const [calendarEnd, setCalendarEnd] = useState<boolean>(false);

  const [defaultUpdateData, setDefaultUpdateData] =
    useState<IDefaultUpdateData>({
      startDate: startDate,
      endDate: endDate,
      description: "",
    });

  const [updateForm2Data, setUpdateForm2Data] = useState<IUpdateForm2Data>({
    startDate: startDate,
    endDate: endDate,
    description: "",
    projectName: "",
    contractor: "",
    sourceFund: "",
    programAmount: 0,
    contractAmount: 0,
  });

  const handleStartDate = (date: Date) => {
    setStartDate(date);
    clickCalendar();
  };

  const handleEndDate = (date: Date) => {
    if (date >= new Date(startDate)) {
      setEndDate(date);
      clickCalendar();
    } else {
      console.log("invalid");
    }
  };

  //Calendar StartDate and Calendar EndDate Pop-Up!!!
  const clickCalendar = () => {
    if (calendarStart) {
      setCalendarStart(false);
    } else if (calendarEnd) {
      setCalendarEnd(false);
    }
  };

  const next = () => {
    setPage(true);
  };

  return (
    <LogsInfoContext.Provider
      value={{
        startDate,
        endDate,
        calendarStart,
        calendarEnd,
        setStartDate,
        setEndDate,
        setCalendarStart,
        setCalendarEnd,
        clickCalendar,
        next,
        setPage,
        page,
        reportType,
        setReportType,
        handleStartDate,
        handleEndDate,
        defaultUpdateData,
        setDefaultUpdateData,
        updateForm2Data,
        setUpdateForm2Data,
      }}
    >
      {children}
    </LogsInfoContext.Provider>
  );
};

export default LogsInfoContextProvider;
