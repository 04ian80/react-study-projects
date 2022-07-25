import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Lists from './Chart/Lists';

export default function Recommand() {
  const params = useParams();
  const nav = useNavigate();
  const location = useLocation();
  console.log(location.state.recommandData[params.id].lists);

  return (
    <>
      <Header>
        <Back onClick={() => nav('/')}> &lt; </Back>
        <Title>{location.state.recommandData[params.id].title}</Title>
      </Header>
      <div>
        <Lists playlist={location.state.recommandData[params.id].lists} />
      </div>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Back = styled.span`
  cursor: pointer;
`;

const Title = styled.span`
  margin: auto;
  font-size: 11px;
  font-weight: 500;
`;
