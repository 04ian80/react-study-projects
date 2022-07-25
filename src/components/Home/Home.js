import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PopNow from './PopNow';
// import useSWR from 'swr';
// import axios from 'axios';

const data = [
  {
    id: 0,
    title: 'Citrus 느낌의 노래',
    info: 'Hadji Gaviota, Good Scott, Chris James...',
    song: 'Good Days',
    artist: 'SZA',
    lists: [
      {
        id: 1,
        song: 'Rollin',
        artist: 'OWLER(아울러)',
      },
      {
        id: 2,
        song: 'BRB (Feat. 프리든 (FR:EDEN))',
        artist: 'Shoi',
      },
      {
        id: 3,
        song: 'Right Here (Feat. yuNdAk)',
        artist: '파르코(Parco)',
      },
    ],
  },
  {
    id: 1,
    title: '먹구름 낀 날 듣기 좋은 플리',
    info: 'Jeff Bernat, Jack Garret, Shawn Mendes...',
    song: 'Slow Motion',
    artist: 'Karina',
    lists: [
      {
        id: 1,
        song: 'Peter Pan Was Right',
        artist: 'Anson Seabra',
      },
      {
        id: 2,
        song: 'Tied Up',
        artist: 'Kailee Morgue',
      },
      {
        id: 3,
        song: '21',
        artist: 'Gracie Abrams',
      },
    ],
  },
  {
    id: 2,
    title: '내 취향 최신 곡',
    info: 'roof301, 모트, 윤한',
    song: 'days like this',
    artist: 'John K',
    lists: [
      {
        id: 1,
        song: '#한강',
        artist: 'roof301',
      },
      {
        id: 2,
        song: 'My Story',
        artist: '모트(Motte), 윤한(Yoonhan)',
      },
      {
        id: 3,
        song: '우산, 안녕',
        artist: '김예슬',
      },
    ],
  },
  {
    id: 3,
    title: '나의 요즘 Pick',
    info: '2022 상반기 결산 : 해외편 100',
    song: 'Off My Face',
    artist: 'Justin Bieber(저스틴 비버)',
    lists: [
      {
        id: 1,
        song: 'abcdefu',
        artist: 'GAYLE',
      },
      {
        id: 2,
        song: 'Off My Face',
        artist: 'Justin Bieber(저스틴 비버)',
      },
      {
        id: 3,
        song: "That's Hilarious",
        artist: 'Charlie Puth(찰리 푸스)',
      },
      {
        id: 4,
        song: "don't miss me",
        artist: 'Claire Rosinkranz',
      },
      {
        id: 5,
        song: 'I Feel Good',
        artist: 'Pink Sweat$',
      },
    ],
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
              <RecommandBox to={`${rec.id}`} state={{ data }}>
                {rec.title}
              </RecommandBox>
              <RecommandDesc to={`${rec.id}`}>{rec.info}</RecommandDesc>
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
