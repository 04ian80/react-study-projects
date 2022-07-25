import React from 'react';
import Lists from './Lists';

const playlist = [
  {
    id: 1,
    song: 'ParadoXXX Invasion',
    artist: 'ENHYPEN',
  },
  {
    id: 2,
    song: '그때 그 순간 그대로(그그그)',
    artist: 'WSG워너비 (가야G)',
  },
  {
    id: 3,
    song: '보고싶었어',
    artist: 'WSG워너비 (4FIRE)',
  },
  {
    id: 4,
    song: 'SNEAKERS',
    artist: 'ITZY(있지)',
  },
  {
    id: 5,
    song: 'Sparkling',
    artist: '청하',
  },
];

export default function ChartList() {
  return (
    <>
      <Lists playlist={playlist} />
    </>
  );
}
