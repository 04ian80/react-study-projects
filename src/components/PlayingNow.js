import { React, useReducer } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lists from './Chart/Lists';
import * as H from './style/Header.style';
import { playingNowData } from '../data/data';

let filterdList = [];
const searchSong = (e) => {
  songTitle.forEach((keyword) => {
    if (keyword.includes(e.target.value)) {
      let idx = songTitle.indexOf(keyword);
      filterdList.push(playingNowData[idx]);
    }
  });
};

console.log(playingNowData);
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        render: filterdList,
      };
      break;
    case 'INIT':
      return {
        ...state,
        render: playingNowData,
      };
    default:
      break;
  }
};

export const initArg = {
  render: playingNowData,
};

let songTitle = [];
for (let i = 0; i < playingNowData.length; i++) {
  songTitle.push(playingNowData[i].song);
}
// console.log(songTitle);
// ['indica', 'Take Me (with 11키티즈)', 'Insecure (feat. Pink Sweat$)', 'Good Days', 'Millions']

export default function PlayingNow() {
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
            searchSong(e);
            dispatch({ type: 'SEARCH' });
          }}
          // onChange={() => {
          //   dispatch({ type: 'SEARCH' });
          // }}
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
      {/* {state.render} */}
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
