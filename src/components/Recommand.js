import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const playlist = [
  {
    id: 1,
    song: "Rollin'",
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
];

export default function Recommand() {
  const params = useParams();
  const nav = useNavigate();

  return (
    <>
      <Header>
        <Back onClick={() => nav('/')}> &lt; </Back>
        <Title>{params.id}</Title>
      </Header>
      <div>
        {playlist.map((list) => (
          <EachList key={list.id}>
            <Img>앨범</Img>
            <SongInfo>
              <span>{list.song}</span>
              <span>{list.artist}</span>
            </SongInfo>
            <Play>
              <PlayItem>▷</PlayItem>
              <PlayItem>⠇</PlayItem>
            </Play>
          </EachList>
        ))}
      </div>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Back = styled.span`
  cursor: pointer;
`;

const Title = styled.span`
  margin: auto;
`;

const EachList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 10px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #eee;
  font-size: 10px;
`;

const Play = styled.div`
  margin-left: auto;
  font-size: 16px;
`;

const PlayItem = styled.span`
  margin-left: 5px;
`;
