import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import MyMusic from './components/MyMusic';
import Recommand from './components/Recommand';
import Search from './components/Search';
import SearchLists from './components/SearchLists';
// import Main from './components/Main';

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={'/lists'} element={<SearchLists />} />
          <Route path={'/'} element={<Home />} />
          <Route path={'/mymusic'} element={<MyMusic />} />
          <Route path={'/search'} element={<Search />} />
          <Route path={'/:id'} element={<Recommand />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
