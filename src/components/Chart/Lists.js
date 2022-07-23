import React from 'react';
import styled from 'styled-components';
import * as L from '../style/List.style';

function Lists(props) {
  const { playlist } = props;

  return (
    <>
      {/* Lists */}
      {playlist.map((l) => (
        <L.EachList key={l.id}>
          <L.Img>앨범</L.Img>
          <span>{l.id}</span>
          <L.SongInfo>
            <span>{l.song}</span>
            <span>{l.artist}</span>
          </L.SongInfo>
          <L.Play>
            <L.PlayItem>▷</L.PlayItem>
            <L.PlayItem>⠇</L.PlayItem>
          </L.Play>
        </L.EachList>
      ))}
    </>
  );
}

export default Lists;

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
