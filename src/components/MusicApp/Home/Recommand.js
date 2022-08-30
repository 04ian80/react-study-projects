import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Lists from '../Chart/Lists';

export default function Recommand() {
  const params = useParams();
  const nav = useNavigate();
  const location = useLocation();

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
  font-weight: 400;
  margin-bottom: 30px;
`;

const Back = styled.span`
  cursor: pointer;
`;

const Title = styled.span`
  margin: auto;
  font-size: 1rem;
  font-weight: 500;
`;
