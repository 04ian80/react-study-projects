import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ChartList from '../Chart/ChartList';
import Lists from '../Chart/Lists';
import { songChartData } from '../data/data';

export default function PopNow() {
  return (
    <>
      <h2>지금 인기</h2>
      <ChartBox>
        <ChartHead>
          <ChartTitle to='chartnow'>차트 &gt;</ChartTitle>
          <TopHund>TOP 100 듣기</TopHund>
        </ChartHead>
        <ChartBody>
          <Lists popnow={songChartData} />
        </ChartBody>
      </ChartBox>
    </>
  );
}

const ChartBox = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
`;

const ChartHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-weight: 400;
`;

const ChartTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  color: black;
`;

const TopHund = styled.span`
  font-size: 0.8rem;
`;

const ChartBody = styled.div`
  padding: 15px;
`;
