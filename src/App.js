import React from 'react';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ChartNow from './components/Home/ChartNow';
import Home from './components/Home/Home';
import MyMusic from './components/MyMusic';
import Recommand from './components/Recommand';
import Search from './components/Search';
import SearchLists from './components/SearchLists';
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
            <Route path={'lists'} element={<SearchLists />} />
            <Route path={'/'} element={<Home />} />
            <Route path={'chartnow'} element={<ChartNow />} />
            <Route path={'albuminfo'} element={<AlbumInfo />} />
            <Route path={'search'} element={<Search />} />
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
