import React from 'react';
import styled from 'styled-components';
import { SWRConfig } from 'swr';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ChartNow from './components/MusicApp/Home/ChartNow';
import Home from './components/MusicApp/Home/Home';
import Recommand from './components/MusicApp/Home/Recommand';
import PlayingNow from './components/MusicApp/Home/PlayingNow';
import AlbumInfo from './components/MusicApp/AlbumInfo';

export default function App() {
  async function fetcher() {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return result.data;
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <Container>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'chartnow'} element={<ChartNow />} />
            <Route path={'albuminfo'} element={<AlbumInfo />} />
            <Route path={'/:id'} element={<Recommand />} />
            <Route path={'playingnow'} element={<PlayingNow />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </SWRConfig>
  );
}

const Container = styled.div`
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
