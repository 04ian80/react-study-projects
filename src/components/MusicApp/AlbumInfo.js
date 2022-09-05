import React from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function AlbumInfo() {
  document.title = 'Album | Music App';
  const { data, error } = useSWR('posts');
  const nav = useNavigate();

  if (error) return <div>🙅🏻‍♀️</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <AlbumInfoHeader>
        <span onClick={() => nav('/')} className='back-btn'>
          &lt;
        </span>
        <h2 className='album-title'>{data[0].title}</h2>
        <span className='album-artist'>artist&#40;아티스트&#41; &gt;</span>
        <span className='album-info'>
          2019.10.07﹒인디, 알앤비/소울﹒싱글﹒FLAC
        </span>
        <ReactionToAlbum>
          <span>☁️1</span>
          <span>♡9</span>
          <span>⠇</span>
        </ReactionToAlbum>

        <img
          src='https://via.placeholder.com/300.png/eee'
          alt='album cover'
          width='300'
          height='300'
        />
      </AlbumInfoHeader>
      <h3>앨범 소개</h3>
      <AlbumIntroduce>
        <span>
          {data[0].body}
          {data[1].body}
          {data[2].body}
          {data[3].body}
        </span>
      </AlbumIntroduce>
    </div>
  );
}

const AlbumInfoHeader = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin-bottom: 10px;
  }

  & > .back-btn {
    cursor: pointer;
  }

  & > .album-title {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }

  & > .album-artist {
    font-size: 0.9rem;
  }

  & > .album-info {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const AlbumIntroduce = styled.div`
  font-size: 1rem;
`;

const ReactionToAlbum = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 280px;
  justify-content: space-between;
`;
