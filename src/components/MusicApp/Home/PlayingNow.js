import { React, useReducer } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lists from '../Chart/Lists';
import * as H from '../style/Header.style';
import { playingNowData } from '../data/data';

let filteredList = [];
const searchSong = (e) => {
  let input = e.target.value.toLowerCase();
  playingNowData.forEach((data) => {
    if (
      data.song.toLowerCase().includes(input) ||
      data.artist.toLowerCase().includes(input)
    ) {
      let idx = playingNowData.indexOf(data);
      filteredList.push(playingNowData[idx]);
    }
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        render: action.payload,
      };
      break;
    case 'INIT':
      return { ...state, render: playingNowData };
    default:
      return state;
      break;
  }
};

const initArg = {
  render: playingNowData,
};

export default function PlayingNow() {
  document.title = 'Playlist | Music App';
  const nav = useNavigate();
  const [state, dispatch] = useReducer(reducer, initArg);

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
          onChange={(e) => {
            filteredList = [];
            searchSong(e);
            dispatch({ type: 'SEARCH', payload: filteredList });
          }}
        />
        <CancelBtn
          type='button'
          value='취소'
          onClick={(e) => {
            clickCancel(e);
            dispatch({ type: 'INIT' });
          }}
        />
      </SearchForm>
      <Lists playlist={state.render} />
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
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;

const CancelBtn = styled.input`
  background-color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;
