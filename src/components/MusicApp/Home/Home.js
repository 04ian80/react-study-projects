import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PopNow from './PopNow';
import { recommandData } from '../data/data';

export default function Home() {
  document.title = 'Home | Music App';
  return (
    <>
      <div>
        <h2>홈</h2>
        <h3>ㅇㅇ님을 위한 추천</h3>
        <RecommandContainer>
          {recommandData.map((rec) => (
            <RecommandInfo key={rec.id}>
              <RecommandBox to={`${rec.id}`} state={{ recommandData }}>
                {rec.title}
              </RecommandBox>
              <RecommandDesc to={`${rec.id}`}>{rec.info}</RecommandDesc>
            </RecommandInfo>
          ))}
        </RecommandContainer>

        <PopNow />

        <Playing>
          <PlayingLink to='playingnow'>
            {recommandData[0].song} | {recommandData[0].artist}
          </PlayingLink>
        </Playing>

        <BottomBox></BottomBox>
        <Outlet />
      </div>
    </>
  );
}

const RecommandContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  overflow: auto;
  white-space: wrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecommandBox = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 5px;
  padding: 5px;
  width: 150px;
  height: 150px;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const RecommandInfo = styled.div`
  margin: 5px;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
`;

const Playing = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin: 0;
  background-color: rgba(240, 240, 240);
  text-decoration: none;
  border-top: 1px solid black;
  list-style: none;
  font-size: 0.8rem;
  z-index: 9999;
`;

const PlayingLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const BottomBox = styled.div`
  height: 50px;
`;

const RecommandDesc = styled(Link)`
  width: 150px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
