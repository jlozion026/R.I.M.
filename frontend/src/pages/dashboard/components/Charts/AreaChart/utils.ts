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
    average_congestion2022: 40,
    live_congestion: 24,
    average_congestion2021: 30,
  },
  {
    name: '8:00am',
    average_congestion2022: 30,
    live_congestion: 13,
    average_congestion2021 : 80,
  },
  {
    name: '12:00pm',
    average_congestion2022: 20,
    live_congestion: 98,
    average_congestion2021: 50,
  },
  {
    name: '4:00pm',
    average_congestion2022: 27,
    live_congestion: 39,
    average_congestion2021: 40,
  },
  {
    name: '8:00pm',
    average_congestion2022: 18,
    live_congestion: 48,
    average_congestion2021: 90,
  },
  {
    name: '12:00am',
    average_congestion2022: 23,
    live_congestion: 38,
    average_congestion2021: 25,
  },
  {
    name: '1:00am',
    average_congestion2022: 34,
    live_congestion: 43,
    average_congestion2021: 21,
  },
];

export const areas: IArea[] = [
{ key: "average_congestion2021", fill: "#E3E3E8" },
{ key: "live_congestion", fill: "#52CFFF" },
{ key: "average_congestion2022", fill: "#3A7ADA" },
]
