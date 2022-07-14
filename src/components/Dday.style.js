import styled from 'styled-components';

export const BoxStyle = styled.div`
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
