import React from 'react';
import styled from 'styled-components';
import * as L from '../style/List.style';
import * as A from '../style/AlbumList.style';
import { Link } from 'react-router-dom';

export default function Lists(props) {
  const { playlist, albumPlaylist } = props;

  if (albumPlaylist) {
    return (
      <div>
        {albumPlaylist.map((l) => (
          <A.EachList key={l.id}>
            <A.Img>앨범</A.Img>
            <span>{l.id}</span>
            <A.SongInfo>
              <span>{l.song}</span>
              <span>{l.artist}</span>
              <span>
                {l.release}﹒{l.type}
              </span>
            </A.SongInfo>
            <A.Play>
              <PlayItem to='albuminfo'>⠇</PlayItem>
            </A.Play>
          </A.EachList>
        ))}
      </div>
    );
  }

  return (
    <div>
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
            {/* <L.PlayItem onClick={popAlbumInfo}>⠇</L.PlayItem> */}
            <PlayItem to='albuminfo'>⠇</PlayItem>
            {/* {albuminfo && <L.AlbumInfo>앨범 정보</L.AlbumInfo>} */}
          </L.Play>
        </L.EachList>
      ))}
    </div>
  );
}

// Link 스타일은 스타일드 컴포넌트로 안되서 여기서 사용
const PlayItem = styled(Link)`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
  color: black;
  text-decoration: none;
`;
