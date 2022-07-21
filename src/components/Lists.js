import { React, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Lists() {
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
      <Header>
        <span onClick={goBackHome} style={{ cursor: 'pointer' }}>
          홈
        </span>
        <span>재생목록</span>
        <span onClick={goBackHome} style={{ cursor: 'pointer' }}>
          ▽
        </span>
      </Header>
      <SearchForm>
        <Search
          className='search-input'
          type='text'
          placeholder='곡명 또는 아티스트명을 입력하세요.'
        />
        <CancelBtn type='button' value='취소' onClick={clickCancel} />
      </SearchForm>
    </>
  );
}

export default Lists;

const Header = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
`;

const SearchForm = styled.form`
  display: flex;
  padding: 10px;
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
