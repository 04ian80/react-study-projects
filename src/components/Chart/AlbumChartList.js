import React from 'react';
import Lists from './Lists';
import { albumChartData } from '../../data/data';

export default function AlbumChartList() {
  return (
    <>
      <Lists albumPlaylist={albumChartData} />
    </>
  );
}
