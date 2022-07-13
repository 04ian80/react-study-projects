import React, { useEffect, useState } from 'react';
import * as D from './Dday.style';

const dateStyle = {
  fontSize: '12px',
};

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const { initDay, setInitDay } = useState(date);
  // const {state, setState} = useState({
  //   initDay: 0,
  // })

  const today = new Date().getTime();
  const inputDate = new Date(date).getTime();
  const dday = inputDate - today;
  const amount = Math.floor(dday / 1000);
  const realDday = Math.floor(amount / 86400) + 1;
  // useEffect(() => {
  //   setInitDay(realDday);
  // });

  return (
    <div>
      {date && (
        <D.BoxStyle>
          <D.DDayInfostyle>
            <D.DDayNameStyle>{dDayName}</D.DDayNameStyle>
            <D.DateStyle>{date}</D.DateStyle>
          </D.DDayInfostyle>
          <D.DDayStyle>
            <span>
              D{realDday > 0 ? '-' : '+'}
              {Math.abs(realDday)}
            </span>
          </D.DDayStyle>
        </D.BoxStyle>
      )}
    </div>
  );
}
