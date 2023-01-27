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
  const [startDate, setStartDate] = useState<string>("YYYY-MM-DD");
  const [endDate, setEndDate] = useState<string>("YYYY-MM-DD");

  //Calendar Pop-Up
  const [calendarStart, setCalendarStart] = useState<boolean>(false);
  const [calendarEnd, setCalendarEnd] = useState<boolean>(false);

  const [defaultUpdateData, setDefaultUpdateData] =
    useState<IDefaultUpdateData>({
      startDate: "",
      endDate: "",
      description: "",
    });

  const [updateForm2Data, setUpdateForm2Data] = useState<IUpdateForm2Data>({
    startDate: "",
    endDate: "",
    description: "",
    projectName: "",
    contractor: "",
    sourceFund: "",
    programAmount: 0,
    contractAmount: 0,
  });

  const handleStartDate = (date: Date) => {
    defaultUpdateData["startDate"] = format(date, "yyyy-MM-dd");
    updateForm2Data["startDate"] = format(date, "yyyy-MM-dd");
    clickCalendar();
  };

  const handleEndDate = (date: Date) => {
    defaultUpdateData["endDate"] = format(date, "yyyy-MM-dd");
    updateForm2Data["endDate"] = format(date, "yyyy-MM-dd");
    clickCalendar();
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
