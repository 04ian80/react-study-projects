import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PopNow from './PopNow';
// import useSWR from 'swr';
// import axios from 'axios';

const data = [
  {
    id: 1,
    title: 'Citrus 느낌의 노래',
    info: 'Hadji Gaviota, Good Scott, Chris James...',
    song: 'Good Days',
    artist: 'SZA',
  },
  {
    id: 2,
    title: '나만의 스테이션',
    info: 'Jeff Bernat, Jack Garret, Shawn Mendes...',
    song: 'Slow Motion',
    artist: 'Karina',
  },
  {
    id: 3,
    title: '여름밤, 보코의 테라스를 채우는 트렌디 팝',
    info: '비비의 팬이라면',
    song: 'days like this',
    artist: 'John K',
  },
  {
    id: 4,
    title: '나의 요즘 Pick',
    info: '2022 상반기 결산 : 해외편 100',
    song: 'Off My Face',
    artist: 'Justin Bieber(저스틴 비버)',
  },
];

export default function Home() {
  return (
    <>
      <div>
        <h3>홈</h3>
        <h5>ㅇㅇ님을 위한 추천</h5>
        <RecommandContainer>
          {data.map((rec) => (
            <RecommandInfo key={rec.id}>
              <RecommandBox to={`${rec.title}`}>{rec.title}</RecommandBox>
              <RecommandDesc to={`${rec.title}`}>{rec.info}</RecommandDesc>
            </RecommandInfo>
          ))}
        </RecommandContainer>

        <PopNow />

        <Playing>
          <PlayingLink to='lists'>
            {data[0].song} | {data[0].artist}
          </PlayingLink>
        </Playing>

        <NavBar>
          {/* <LinkStyle to='/'>홈</LinkStyle> */}
          {/* <LinkStyle to='search'>탐색</LinkStyle> */}
        </NavBar>

        <BottomBox></BottomBox>
        {/* nav bar때문에 박스 하나 놔줌 */}
        <Outlet />
      </div>
    </>
  );
}

const NavBar = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin: 0;
  border-top: 1px solid #eee;
  background-color: #fff;
  text-decoration: none;
  list-style: none;
  font-size: 10px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
`;

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
  width: 100px;
  height: 100px;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const RecommandInfo = styled.div`
  margin: 5px;
  font-size: 1px;
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
  font-size: 10px;
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
  width: 100px;
  color: black;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
