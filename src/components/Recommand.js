import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Lists from './Chart/Lists';

const playlist = [
  {
    id: 1,
    song: "Rollin'",
    artist: 'OWLER(아울러)',
  },
  {
    id: 2,
    song: 'BRB (Feat. 프리든 (FR:EDEN))',
    artist: 'Shoi',
  },
  {
    id: 3,
    song: 'Right Here (Feat. yuNdAk)',
    artist: '파르코(Parco)',
  },
];

export default function Recommand(props) {
  const params = useParams();
  const nav = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header>
        <Back onClick={() => nav('/')}> &lt; </Back>
        <Title>{params.id}</Title>
      </Header>
      <div>
        <Lists playlist={playlist} />
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
