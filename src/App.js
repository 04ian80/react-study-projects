import React from 'react';
import Today from './components/Today';
import SetDday from './components/SetDday';
import styled from 'styled-components';

export default function App() {
  return (
    <DDayContainer>
      <Today />
      <SetDday />
    </DDayContainer>
  );
}

const DDayContainer = styled.div`
  background-color: #d7d7d8;
  // color: white;
  height: 100vh;
`;
