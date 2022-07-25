import React from 'react';
import styled from 'styled-components';
import { SWRConfig } from 'swr';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ChartNow from './components/Home/ChartNow';
import Home from './components/Home/Home';
import Recommand from './components/Recommand';
// import Search from './components/Search';
import PlayingNow from './components/PlayingNow';
import AlbumInfo from './components/AlbumInfo';

export default function App() {
  async function fetcher() {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(result.data);
    return result.data;
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path={'lists'} element={<PlayingNow />} />
            <Route path={'/'} element={<Home />} />
            <Route path={'chartnow'} element={<ChartNow />} />
            <Route path={'albuminfo'} element={<AlbumInfo />} />
            {/* <Route path={'search'} element={<Search />} /> */}
            <Route path={'/:id'} element={<Recommand />} />
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
