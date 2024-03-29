import React from 'react';
import * as L from '../style/List.style';
import * as A from '../style/AlbumList.style';
import { useNavigate } from 'react-router-dom';

export default function Lists(props) {
  const { playlist, albumPlaylist, popnow } = props;
  const nav = useNavigate();

  if (popnow) {
    return (
      <div>
        {popnow.map(
          (l) =>
            l.id <= 5 && (
              <L.EachList key={l.id}>
                <L.Img>앨범</L.Img>
                <span>{l.id}</span>
                <L.SongInfo>
                  <span>{l.song}</span>
                  <span>{l.artist}</span>
                </L.SongInfo>
                <L.Play>
                  <L.PlayItem>▷</L.PlayItem>
                  <L.PlayItem onClick={() => nav('/albuminfo')}>⠇</L.PlayItem>
                </L.Play>
              </L.EachList>
            )
        )}
      </div>
    );
  }

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
              <A.PlayItem onClick={() => nav('/albuminfo')}>⠇</A.PlayItem>
            </A.Play>
          </A.EachList>
        ))}
      </div>
    );
  }

  return (
    <div>
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
            <L.PlayItem onClick={() => nav('/albuminfo')}>⠇</L.PlayItem>
          </L.Play>
        </L.EachList>
      ))}
    </div>
  );
}
