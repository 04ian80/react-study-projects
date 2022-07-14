import React, { useEffect, useState } from 'react';
import * as D from './Dday.style';

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const { initDay, setInitDay } = useState(date);

  const today = new Date();
  const dday = new Date(date);
  const gapNum = dday.getTime() - today.getTime();
  const amount = Math.floor(dday / 1000);
  const realDay = Math.floor(amount / 86400);
  const a = Math.ceil(gapNum / (1000 * 60 * 60 * 24));

  return (
    <div>
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
      </D.BoxStyle>
    </div>
  );
}
