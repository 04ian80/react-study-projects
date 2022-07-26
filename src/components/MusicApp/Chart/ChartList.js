import React from 'react';
import Lists from './Lists';
import { songChartData } from '../data/data';

export default function ChartList() {
  return (
    <>
      <Lists playlist={songChartData} />
    </>
  );
}
