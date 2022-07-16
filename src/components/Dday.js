import React, { useEffect, useState } from 'react';
import * as D from './Dday.style';

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const [hover, setHover] = useState(false);
  const [days, setDays] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     // console.log(date);
  //     setTime(date);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const today = new Date();
    const dday = new Date(date);
    const gapNum = dday.getTime() - today.getTime();
    setDays(Math.floor(gapNum / (1000 * 60 * 60 * 24)));
    // setHours(Math.floor((gapNum / (1000 * 60 * 60)) % 24));
    // setMinutes(Math.floor((gapNum / 1000 / 60) % 60));
    // setSeconds(Math.floor((gapNum / 1000) % 60));
    console.log(days);
  }, [date]);

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <D.BoxStyle>
        <D.DDayInfostyle>
          <D.DDayNameStyle>{dDayName}</D.DDayNameStyle>
          <D.DateStyle>{date}</D.DateStyle>
        </D.DDayInfostyle>
        <D.DDayStyle>
          <span>
            D{days >= -1 ? '-' : '+'}
            {days === -1 ? 'day' : Math.abs(days + 1)}
            <br />
          </span>
        </D.DDayStyle>
        {hover ? <D.CloseBtn onClick={handleClick}>X</D.CloseBtn> : ''}
      </D.BoxStyle>
    </div>
  );
}
