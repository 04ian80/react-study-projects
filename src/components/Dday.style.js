import styled from 'styled-components';

export const BoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  border-radius: 35px;
  padding: 20px;
  margin: 10px;
  // background-color: rgba(0,0,0,0.1);
  background-color: #FDE6D8;

  color: rgba(10,10,10,0.8);
  font-family:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
  font-weight: 700;
  z-index: -1;
  cursor: pointer;
`;

// export const HoverBoxStyle = styled.div`
//   color: white;
// `;

export const DDayStyle = styled.div`
  flex-shrink: 0;
  font-size: 40px;
  color: #6b705d;
  // #54a692
`;

export const DDayInfostyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  // flex-direction: column;
  // margin-left: 30px;
  font-weight: 600;
`;

export const DDayNameStyle = styled.div`
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 50px;
  color: black;
`;

export const DateStyle = styled.span`
  font-size: 20px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
`;
