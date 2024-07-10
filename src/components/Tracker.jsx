// src/GymHeatmap.js
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const GymHeatmap = ({ data }) => {
  return (
    <div>
      <h2>Gym Visits Heatmap</h2>
      <CalendarHeatmap
        startDate={new Date('2023-01-01')}
        endDate={new Date('2023-12-31')}
        values={data}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-gitlab-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': value.date ? `${value.date}: ${value.count} visits` : 'No visits',
          };
        }}
      />
    </div>
  );
};

export default GymHeatmap;
