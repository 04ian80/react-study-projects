import ChartList from '../components/MusicApp/Chart/ChartList';
import AlbumChartList from '../components/MusicApp/Chart/AlbumChartList';

export const toggleChart = (state, action) => {
  switch (action.type) {
    case 'SONG':
      return {
        songStyle: { color: 'black', borderBottom: '1px solid black' },
        albumStyle: {
          color: 'rgba(0,0,0,.4)',
        },
        render: <ChartList />,
      };
      break;
    case 'ALBUM':
      return {
        songStyle: { color: 'rgba(0,0,0,.4)' },
        albumStyle: { color: 'black', borderBottom: '1px solid black' },
        render: <AlbumChartList />,
      };
    default:
      break;
  }
};

export const chartInit = {
  render: <ChartList />,
  songStyle: { color: 'black', borderBottom: '1px solid black' },
  albumStyle: { color: 'rgba(0,0,0,0.4)' },
};
