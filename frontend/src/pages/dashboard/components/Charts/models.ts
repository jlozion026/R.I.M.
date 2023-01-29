export interface IData {
  name: string;
  average_congestion2022: number;
  live_congestion: number;
  average_congestion2021: number;
}

export interface IArea {
  key: string;
  fill: string;
}

export interface ICustomAreaChart {
  data: IData[];
  areas: IArea[]
}
