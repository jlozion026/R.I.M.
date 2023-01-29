import { FC } from "react";
import {ICustomAreaChart} from './models'

import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
} from "recharts"


const CustomAreaChart: FC<ICustomAreaChart> = ({ data, areas }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid
          vertical={false}
          stroke="#222222"
        />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
        />
        {areas.map((area) => {
          <Area
            type="monotone"
            key={area.key}
            dataKey={area.key}
            fill={area.fill}
            stroke="0"
          />
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default CustomAreaChart;
