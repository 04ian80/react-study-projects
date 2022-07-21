import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Music4u from './components/Music4u';
import MyMusic from './components/MyMusic';
import Recommand from './components/Recommand';
import Search from './components/Search';
import Lists from './components/Lists';
import TFS from './components/TFS';
// import Main from './components/Main';

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={'/lists'} element={<Lists />} />
          <Route path={'/'} element={<Home />} />
          {/* <Route path={'/'} element={<Main />}> */}
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
