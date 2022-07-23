import React from 'react';
import styled from 'styled-components';

const SEARCH_CATEGORY = ['뮤직PD 앨범', '뮤직포스트', '커넥트', '장르/테마'];

export default function Search() {
  return (
    <div style={{ margin: '0', padding: '0' }}>
      <SearchForm>
        <SearchInput type='text' placeholder='검색어를 입력하세요' />
      </SearchForm>
      <SearchCategory>
        {SEARCH_CATEGORY.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </SearchCategory>
    </div>
  );
}

const SearchForm = styled.form`
  margin: 30px 10px 10px 0;
`;

const SearchInput = styled.input`
  padding: 5px 0 5px 5px;
  width: 100%;
`;

const SearchCategory = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    padding: 8px 0;
  }
`;
