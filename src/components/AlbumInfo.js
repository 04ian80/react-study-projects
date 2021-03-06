import React from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function AlbumInfo() {
  const { data: docs, error } = useSWR('posts');
  const nav = useNavigate();

  if (error) return <div>ðð»ââï¸</div>;
  if (!docs) return <div>loading...</div>;
  return (
    <div>
      <AlbumInfoHeader>
        <span onClick={() => nav('/')} className='back-btn'>
          &lt;
        </span>
        <h2 className='album-title'>{docs[0].title}</h2>
        {/* <br /> */}
        <span className='album-artist'>artist&#40;ìí°ì¤í¸&#41; &gt;</span>
        <span className='album-info'>
          2019.10.07ï¹ì¸ë, ìì¤ë¹/ìì¸ï¹ì±ê¸ï¹FLAC
        </span>
        <ReactionToAlbum>
          <span>âï¸1</span>
          <span>â¡9</span>
          <span>â </span>
        </ReactionToAlbum>

        <img
          src='https://via.placeholder.com/300.png/eee'
          alt='album cover'
          width='300'
          height='300'
        />
      </AlbumInfoHeader>
      <h3>ì¨ë² ìê°</h3>
      <AlbumIntroduce>
        <span>{docs[0].body}</span>
      </AlbumIntroduce>
      {/* <Outlet /> */}
    </div>
  );
}

const AlbumInfoHeader = styled.div`
  display: flex;
  // align-items: center;
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
    font-size: 10px;
  }

  & > .album-info {
    color: rgba(0, 0, 0, 0.4);
    font-size: 8px;
    font-weight: 400;

`;

const AlbumIntroduce = styled.div`
  font-size: 12px;
`;

const ReactionToAlbum = styled.div`
  display: flex;
  // flex-direction: column;
  padding: 0 10px;
  width: 280px;
  justify-content: space-between;
`;
