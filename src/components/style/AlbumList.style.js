import styled from 'styled-components';

export const EachList = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  font-size: 10px;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  min-width: 150px;

  & > span:not(:first-child) {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Img = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  background-color: #eee;
  font-size: 10px;
  flex-shrink: 0;
`;

export const Play = styled.div`
  margin-left: auto;
  font-size: 16px;
`;

export const PlayItem = styled.span`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
`;

export const AlbumInfo = styled.div`
  position: absolute;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
  font-size: 10px;
`;
