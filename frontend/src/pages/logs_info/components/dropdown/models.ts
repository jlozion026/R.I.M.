import { GetOneReportQuery } from "@/generated/graphql";

export interface IDropDown {
  report: GetOneReportQuery|undefined
  setMenuTrig(): void;
}
