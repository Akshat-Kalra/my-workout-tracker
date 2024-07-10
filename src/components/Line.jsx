import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={
        [
          { data: [1, 2, 3] }
        ]
      }
      series={[
        {
          data: [2, 3, 8.5],
        },
      ]}
      width={300}
      height={200}
    />
  );
}