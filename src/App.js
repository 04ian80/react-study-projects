import React from 'react';
import Today from './components/Today';
import SetDday from './components/SetDday';
import styled from 'styled-components';

export default function App() {
  return (
    <div>
      <Today />
      <SetDday />
    </div>
  );
}
