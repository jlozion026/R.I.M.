import { ReportType } from "@/generated/graphql";

export interface IDelete{
  PopOut(): void;
  reportType: ReportType|undefined;
  reportID: string|undefined;
}
