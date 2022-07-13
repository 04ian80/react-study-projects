import React, { useEffect, useState } from 'react';
import * as D from './Dday.style';

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const { initDay, setInitDay } = useState(date);

  const today = new Date().getTime();
  const inputDate = new Date(date).getTime();
  const dday = inputDate - today;
  const amount = Math.floor(dday / 1000);
  const realDday = Math.floor(amount / 86400);

  return (
    <div>
      <D.BoxStyle>
        <D.DDayInfostyle>
          <D.DDayNameStyle>{dDayName}</D.DDayNameStyle>
          <D.DateStyle>{date}</D.DateStyle>
        </D.DDayInfostyle>
        <D.DDayStyle>
          <span>
            D{realDday >= 0 ? '-' : '+'}
            {realDday === 0 ? 'day' : Math.abs(realDday)}
          </span>
        </D.DDayStyle>
      </D.BoxStyle>
    </div>
  );
}
