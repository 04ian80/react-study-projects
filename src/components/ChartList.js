import React from 'react';
import * as L from './List.style';
import styled from 'styled-components';

const chart = [
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
      {chart.map((l) => (
        <L.EachList key={l.id}>
          <L.Img>앨범</L.Img>
          <span>{l.id}</span>
          <L.SongInfo>
            <span>{l.song}</span>
            <span>{l.artist}</span>
          </L.SongInfo>
          <L.Play>
            <L.PlayItem>▷</L.PlayItem>
            <L.PlayItem>⠇</L.PlayItem>
          </L.Play>
        </L.EachList>
      ))}
    </>
  );
}
