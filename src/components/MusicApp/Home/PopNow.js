import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ChartList from '../Chart/ChartList';

export default function PopNow() {
  return (
    <>
      <h3>지금 인기</h3>
      <ChartBox>
        <ChartHead>
          <ChartTitle to='chartnow'>차트 &gt;</ChartTitle>
          <TopHund>TOP 100 듣기</TopHund>
        </ChartHead>
        <ChartBody>
          <ChartList />
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
  text-decoration: none;
  font-size: 12px;
  color: black;
`;

const TopHund = styled.span`
  font-size: 10px;
`;

const ChartBody = styled.div`
  padding: 10px;
`;
