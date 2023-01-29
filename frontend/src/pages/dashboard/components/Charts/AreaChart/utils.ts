import {
  IData,
  IArea
} from '../models'

export const data: IData[] = [
  {
    name: "9:00pm",
    average_congestion2022: 10,
    live_congestion: 20,
    average_congestion2021: 5
  },
  {
    name: '4:00am',
    average_congestion2022: 4000,
    live_congestion: 2400,
    average_congestion2021: 3000,
  },
  {
    name: '8:00am',
    average_congestion2022: 3000,
    live_congestion: 1398,
    average_congestion2021 : 8000,
  },
  {
    name: '12:00pm',
    average_congestion2022: 2000,
    live_congestion: 9800,
    average_congestion2021: 5000,
  },
  {
    name: '4:00pm',
    average_congestion2022: 2780,
    live_congestion: 3908,
    average_congestion2021: 4000,
  },
  {
    name: '8:00pm',
    average_congestion2022: 1890,
    live_congestion: 4800,
    average_congestion2021: 9000,
  },
  {
    name: '12:00am',
    average_congestion2022: 2390,
    live_congestion: 3800,
    average_congestion2021: 2500,
  },
  {
    name: '1:00am',
    average_congestion2022: 3490,
    live_congestion: 4300,
    average_congestion2021: 2100,
  },
];

export const areas: IArea[] = [
{ key: "average_congestion2021", fill: "#E3E3E8" },
{ key: "live_congestion", fill: "#52CFFF" },
{ key: "average_congestion2022", fill: "#3A7ADA" },
]
