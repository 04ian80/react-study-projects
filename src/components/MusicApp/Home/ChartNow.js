import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { toggleChart, chartInit } from '../../../store/ChartNowReducer';

export default function ChartNow() {
  document.title = 'Chart | MusicApp';
  const nav = useNavigate();
  const [state, dispatch] = useReducer(toggleChart, chartInit);

  return (
    <>
      <Header>
        <span onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
          &lt;
        </span>
        <span>차트</span>
      </Header>

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
  border-bottom: 1px solid #eee;
`;

const CategoryBtn = styled.button`
  background-color: white;
  border: none;
  padding: 15px;
  font-size: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;

  & > span:last-child {
    margin: auto;
  }
`;
