import { FC } from "react";
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


const CustomAreaChart: FC<ICustomAreaChart> = ({ data, areas }) => {
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
        />
        <Tooltip />
        <Legend verticalAlign="top"
          height={100}
          iconType={'square'}
          iconSize={30}
        />

        {areas.map((area) => {
          return (
            <Area
              type="monotone"
              dataKey={area.key}
              stroke={area.fill}
              fill={area.fill}
              key={area.key}
            />
          );
        })}

      </AreaChart>
    </ResponsiveContainer>
  );
};
export default CustomAreaChart;
