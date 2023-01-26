import { ReportType } from "@/generated/graphql";
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

  const handleStartDate = (date: Date) => {
    setStartDate(format(date, "yyyy-MM-dd"));
    clickCalendar();
  };

  const handleEndDate = (date: Date) => {
    setEndDate(format(date, "yyyy-MM-dd"));
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
      }}
    >
      {children}
    </LogsInfoContext.Provider>
  );
};

export default LogsInfoContextProvider;
