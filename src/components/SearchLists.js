import { React, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lists from './Chart/Lists';
import * as H from './style/Head.style';

const playlist = [
  {
    id: 1,
    song: 'indica',
    artist: 'Alaina Castillo',
  },
  {
    id: 2,
    song: 'Take Me (with 11키티즈)',
    artist: '코드 쿤스트, 미노이(meenoi)',
  },
  {
    id: 3,
    song: 'Insecure (feat. Pink Sweat$)',
    artist: 'Bren Joy',
  },
  {
    id: 4,
    song: 'Good Days',
    artist: 'SZA',
  },
  {
    id: 5,
    song: 'Millions',
    artist: 'Sylo Nozra',
  },
];

export default function SearchLists() {
  // const [input, setInput] = useState('');

  const nav = useNavigate();

  const goBackHome = () => {
    nav('/');
  };

  const clickCancel = (e) => {
    e.target.parentNode[0].value = '';
  };

  return (
    <>
      <H.Header>
        <span onClick={goBackHome} style={{ cursor: 'pointer' }}>
          홈
        </span>
        <span>재생목록</span>
        <span onClick={goBackHome} style={{ cursor: 'pointer' }}>
          ▽
        </span>
      </H.Header>
      <SearchForm>
        <Search
          className='search-input'
          type='text'
          placeholder='곡명 또는 아티스트명을 입력하세요.'
        />
        <CancelBtn type='button' value='취소' onClick={clickCancel} />
      </SearchForm>
      <Lists playlist={playlist} />
    </>
  );
}

const SearchForm = styled.form`
  display: flex;
  padding: 15px 5px;
`;

const Search = styled.input`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  font-size: 11px;

  &:focus {
    outline: none;
  }
`;

const CancelBtn = styled.input`
  background-color: white;
  border: none;
  cursor: pointer;
`;
