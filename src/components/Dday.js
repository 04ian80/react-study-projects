import React, { useEffect, useState } from 'react';
import * as D from './Dday.style';

export default function Dday(props) {
  const { dDayName, date } = props.info;
  const [boxDelete, setBoxDelete] = useState(true);
  const [hover, setHover] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const today = new Date();
    const dday = new Date(date);
    const gapNum = dday.getTime() - today.getTime();
    setDays(Math.floor(gapNum / (1000 * 60 * 60 * 24)));
    console.log(days);
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
        <D.BoxStyle style={{ transform: hover ? 'scale(1.02)' : 'scale(1)' }}>
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
        </D.BoxStyle>
      )}
    </div>
  );
}
