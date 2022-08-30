import styled from 'styled-components';

export const EachList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.8rem;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  min-width: 100px;

  & > span:last-child {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Img = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: #eee;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

export const Play = styled.div`
  margin-left: auto;
  font-size: 1.2rem;
`;

export const PlayItem = styled.span`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
`;
