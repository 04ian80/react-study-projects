import React, { useState } from 'react';
import styled from 'styled-components';
import * as L from '../style/List.style';
import { Link, Outlet } from 'react-router-dom';

export default function Lists(props) {
  const [albuminfo, setAlbuminfo] = useState(false);
  const { playlist } = props;

  const popAlbumInfo = () => {
    setAlbuminfo(true);
  };

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

export const PlayItem = styled(Link)`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
  color: black;
  text-decoration: none;
`;
