export interface IData {
  name: string;
  a: number;
  b: number;
}

export interface IArea {
  key: string;
  fill: string;
}

export interface ICustomAreaChart {
  data: IData[];
  areas: IArea[]
}
