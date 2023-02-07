import { FC } from 'react';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { data, COLORS } from "./utils";


const CustomPieChart: FC = () => {
  return (

    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip/>
      </PieChart>
    </ResponsiveContainer>
  )
}
export default CustomPieChart;
