import { ReportType } from "@/generated/graphql";

export type TSearchResults = Array<{
  __typename?: "Report";
  report_id: string;
  report_type: ReportType;
  description: string;
  location: any;
}>;

export interface ISearchResults {
  searchData: TSearchResults | undefined;
  setVal(arg0: string): void;
  cbOnClick(arg0: string): void;
  mapRef: React.MutableRefObject<google.maps.Map | null>;
}
