const playlist = [
  {
    id: 1,
    song: 'indica',
    artist: 'Alaina Castillo',
  },
  {
    id: 2,
    song: 'Take Me (with 11키티즈)',
    artist: '코드 쿤스트, 미노이(meenoi)',
  },
  {
    id: 3,
    song: 'Insecure (feat. Pink Sweat$)',
    artist: 'Bren Joy',
  },
  {
    id: 4,
    song: 'Good Days',
    artist: 'SZA',
  },
  {
    id: 5,
    song: 'Millions',
    artist: 'Sylo Nozra',
  },
];

export const searchSong = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        render: <ChartList />,
      };
      break;
    default:
      break;
  }
};

export const initArg = {
  render: <Lists playlist={playlist} />,
};
