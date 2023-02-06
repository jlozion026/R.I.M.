import { FC, useState } from "react";
import { ICustomAreaChart } from '../models'

import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Legend,
} from "recharts"


const CustomAreaChart: FC<ICustomAreaChart> = ({ data }) => {
  const [key, setKey] = useState(
    {
      average_congestion2021: false,
      average_congestion2022: false,
      live_congestion: false,
    }
  );


  const toogle_area = (dataKey: string) => {
    setKey({
        ...key,
        [dataKey]: !key[dataKey as keyof typeof key]
      })
  }

  return (
    <ResponsiveContainer
      width="85%"
      height="85%"
    >
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(tick) => `${tick}%`}
        />
        <Tooltip />
        <Legend verticalAlign="top"
          height={70}
          iconType={'square'}
          iconSize={20}
          onClick={data => toogle_area(data.dataKey)}
        />

            <Area
              type="monotone"
              dataKey={"average_congestion2021"}
              stroke={"#E3E3E8"}
              fill={"#E3E3E8"}
              key={"average congestion2021"}
              hide={key.average_congestion2021}
            />

            <Area
              type="monotone"
              dataKey={"live_congestion"}
              stroke={"#52CFFF"}
              fill={"#52CFFF"}
              key={"live"}
              hide={key.live_congestion}
            />

            <Area
              type="monotone"
              dataKey={"average_congestion2022"}
              stroke={"#3A7ADA"}
              fill={"#3A7ADA"}
              key={"average_congestion2022"}
              hide={key.average_congestion2022}
            />

      </AreaChart>
    </ResponsiveContainer>
  );
};
export default CustomAreaChart;
