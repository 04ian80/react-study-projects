import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;

  & > span {
    width: 33%;
  }

  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  & > span:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;
