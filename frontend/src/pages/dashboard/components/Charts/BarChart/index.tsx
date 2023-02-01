import { FC } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import {data} from './utils'


const CustomBarChart: FC = () => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend 
          verticalAlign='top'
          height={60}
          iconType={'rect'}
          iconSize={20}
        
        />

        <Bar dataKey="2021" stackId="a" fill="#5594f3" />
        <Bar dataKey="2020" stackId="a" fill="#6cd6ff" />
        <Bar dataKey="current" stackId="a" fill="#e7e7eb" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default CustomBarChart;
