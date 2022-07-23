import React from 'react';
import * as H from '../style/Header.style';
import ChartList from '../Chart/ChartList';
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
        <span>국가/장르</span>
      </H.Header>
      <div style={{ marginTop: '30px' }}>
        <ChartList />
      </div>
      <Outlet />
    </>
  );
}

export default ChartNow;
