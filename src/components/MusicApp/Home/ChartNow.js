import React, { useReducer } from 'react';
import * as H from '../style/Header.style';
import styled from 'styled-components';

import { Outlet, useNavigate } from 'react-router-dom';
import { toggleChart, chartInit } from '../../../store/ChartNowReducer';

export default function ChartNow() {
  const nav = useNavigate();
  const [state, dispatch] = useReducer(toggleChart, chartInit);

  return (
    <>
      <H.Header>
        <span onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
          &lt;
        </span>
        <span>차트</span>
        <span>국가/장르</span>
      </H.Header>
      <ChartCategoty>
        <CategoryBtn
          onClick={() => {
            dispatch({ type: 'SONG' });
          }}
          style={state.songStyle}
        >
          곡
        </CategoryBtn>
        <CategoryBtn
          onClick={() => {
            dispatch({ type: 'ALBUM' });
          }}
          style={state.albumStyle}
        >
          앨범
        </CategoryBtn>
      </ChartCategoty>
      <div style={{ marginTop: '30px' }}>{state.render}</div>
      <Outlet />
    </>
  );
}

const ChartCategoty = styled.div`
  display: flex;
  justify-content: space-around;
  // padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

const CategoryBtn = styled.button`
  background-color: white;
  border: none;
  padding: 15px;
`;
