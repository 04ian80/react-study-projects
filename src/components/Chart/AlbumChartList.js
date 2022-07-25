import React from 'react';
import Lists from './Lists';

const playlist = [
  {
    id: 1,
    song: 'MANIFESTO : DAY 1',
    artist: 'ENHYPEN',
    release: '2022. 07. 04',
    type: 'EP(미니)',
  },
  {
    id: 2,
    song: 'Girls - The 2nd Mini Album',
    artist: 'aespa',
    release: '2022. 06. 27',
    type: 'EP(미니)',
  },
  {
    id: 3,
    song: 'CHECKMATE',
    artist: 'ITZY (있지)',
    release: '2022. 07. 15',
    type: 'EP(미니)',
  },
  {
    id: 4,
    song: 'I NEVER DIE',
    artist: '(여자)아이들',
    release: '2022. 03. 14',
    type: '정규',
  },
  {
    id: 5,
    song: '탑건 : 매버릭 (Top Gun : Maverich) (영화 OST)',
    artist: 'Lady GaGa(레이디 가가)',
    release: '2022. 05. 27',
    type: 'OST',
  },
];

export default function AlbumChartList() {
  return (
    <>
      <Lists albumPlaylist={playlist} />
    </>
  );
}
