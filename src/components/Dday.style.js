import styled from 'styled-components';

export const BoxStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #63c3d2;
  color: white;
  font-family:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
  font-weight: 700;
  z-index: -1;
`;

export const DDayStyle = styled.div`
  flex-shrink: 0;
  max-width: 300px;
  font-size: 50px;
`;

export const DDayInfostyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  font-weight: 600;
`;

export const DDayNameStyle = styled.span`
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 30px;
`;

export const DateStyle = styled.span`
  color: #eee;
  font-size: 12px;
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
