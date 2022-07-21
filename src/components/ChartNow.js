import React from 'react';
import * as H from './Head.style';
import ChartList from './ChartList';
import { Outlet, useNavigate } from 'react-router-dom';

function ChartNow() {
  const nav = useNavigate();
  return (
    <>
      <H.Header>
        <span onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
          &lt;
        </span>
        <span>차트</span>
        <span style={{ cursor: 'pointer', fontSize: '12px' }}>국가/장르</span>
      </H.Header>
      <div style={{ marginTop: '30px' }}>
        <ChartList />
      </div>
      <Outlet />
    </>
  );
}

export default ChartNow;
