import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const data = [
  {
    id: 1,
    title: 'Collagen (Feat. Sylo) 느낌의 노래',
    info: 'LOGI(로기)...',
    song: 'Good Days',
    artist: 'SZA',
  },
  {
    id: 2,
    title: '나만의 스테이션',
    info: 'Karina, 방...',
    song: 'Slow Motion',
    artist: 'Karina',
  },
  {
    id: 3,
    title: '바닷속으로 숨 참고 Love Di...',
    info: '비비의 팬이라면',
    song: 'days like this',
    artist: 'John K',
  },
  {
    id: 4,
    title: '나의 요즘 Pick',
    info: '2022 상반기 결산...',
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
              <RecommandLink
                to={`${rec.title}`}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                }}
              >
                {rec.title}
              </RecommandLink>
              <Link
                to={`${rec.title}`}
                style={{ color: 'black', textDecoration: 'none' }}
              >
                {rec.info}
              </Link>
            </RecommandInfo>
          ))}
        </RecommandContainer>

        <Playing>
          <PlayingLink to='lists'>
            {data[0].song} | {data[0].artist}
          </PlayingLink>
        </Playing>

        <NavBar>
          <LinkStyle to='/'>홈</LinkStyle>

          <LinkStyle to='mymusic'>내 음악</LinkStyle>

          <LinkStyle to='search'>탐색</LinkStyle>
        </NavBar>
        <Outlet />
      </div>
    </>
  );
}

const NavBar = styled.ul`
  position: absolute;
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
  overflow: auto;
  white-space: wrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecommandLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 5px;
  padding: 5px;
  width: 100px;
  height: 100px;
  text-decoration: none;
`;

const RecommandInfo = styled.div`
  margin: 5px;
  font-size: 1px;
  color: rgba(0, 0, 0, 0.4);
`;

const Playing = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin: 0;
  background-color: rgba(192, 192, 192, 0.1);
  text-decoration: none;
  border-top: 1px solid black;
  list-style: none;
  font-size: 10px;
  z-index: -9999;
`;

const PlayingLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
