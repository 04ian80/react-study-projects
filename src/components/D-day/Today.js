import React from 'react';
import styled from 'styled-components';

const today = new Date();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();
const todayDate = today.getDate();
const todayDay = today.getDay();

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function Today() {
  return (
    <TodayStyle>
      <TodayYear>{todayYear}년 </TodayYear>
      <TodayMonthnDate>
        {todayMonth + 1}월 {todayDate}일 {DAYS[todayDay]}요일
      </TodayMonthnDate>
    </TodayStyle>
  );
}

const TodayStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  background-color: #a5a58c;
  color: white;
  font-weight: 600;
`;

const TodayYear = styled.span`
  font-size: 20px;
`;

const TodayMonthnDate = styled.span`
  font-size: 40px;
`;
