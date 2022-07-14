import React, { useEffect, useState } from 'react';
import * as D from './Dday.style';

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const [hover, setHover] = useState(false);

  const today = new Date();
  const dday = new Date(date);
  const gapNum = dday.getTime() - today.getTime();
  const a = Math.ceil(gapNum / (1000 * 60 * 60 * 24));

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
            D{a >= 0 ? '-' : '+'}
            {a === 0 ? 'day' : Math.abs(a)}
          </span>
        </D.DDayStyle>
        {hover ? <D.CloseBtn onClick={handleClick}>X</D.CloseBtn> : ''}
      </D.BoxStyle>
    </div>
  );
}
