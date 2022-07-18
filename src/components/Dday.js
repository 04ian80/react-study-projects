import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const [boxDelete, setBoxDelete] = useState(true);
  const [hover, setHover] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const today = new Date();
    const dday = new Date(`${date} 00:00:00`);
    const gapNum = dday - today;
    setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
  }, [date]);

  return (
    <div
      onClick={() => {
        setBoxDelete(false);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {boxDelete && (
        <BoxStyle
          style={{
            transform: hover ? 'scale(1.02)' : 'scale(1)',
          }}
        >
          <DDayInfostyle>
            <DDayNameStyle>{dDayName}</DDayNameStyle>
            <DateStyle>{date}</DateStyle>
          </DDayInfostyle>
          <DDayStyle>
            <span>
              D{days >= 0 ? '-' : '+'}
              {days === 0 ? 'day' : Math.abs(days)}
              <br />
            </span>
          </DDayStyle>
          {hover && <CloseBtn>지우기</CloseBtn>}
        </BoxStyle>
      )}
    </div>
  );
}

const BoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 35px;
  padding: 20px;
  margin: 10px;
  overflow: hidden;
  background-color: #FDE6D8;
  color: rgba(10,10,10,0.8);
  font-family:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
  font-weight: 700;
  z-index: -1;
`;

const DDayStyle = styled.div`
  flex-shrink: 0;
  font-size: 40px;
  color: #6b705d;
`;

const DDayInfostyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  font-weight: 600;
`;

const DDayNameStyle = styled.div`
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 50px;
  color: black;
`;

const DateStyle = styled.span`
  font-size: 20px;
`;

const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  font-size: 70px;
  font-weight: 700;
  background-color: rgba(165, 165, 140, 0.7);
`;
