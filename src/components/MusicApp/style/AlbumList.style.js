import styled from 'styled-components';

export const EachList = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  font-size: 0.8rem;
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
  font-size: 0.8rem;
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
