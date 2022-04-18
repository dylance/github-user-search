import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { programmingLanguages } from '../constants';
import { ISearchParams } from '../models';

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  text-align: center;

  input,
  button,
  select {
    width: 200px;
    margin: auto;
  }
`;

interface ISearchSectionProps {
  searchParams: ISearchParams;
  changeSearchParams: (event: ChangeEvent) => void;
  getSearchResults: () => void;
}

export const SearchSection = ({
  searchParams,
  changeSearchParams,
  getSearchResults,
}: ISearchSectionProps) => {
  return (
    <SearchInputWrapper>
      <h1>Search User's Github Repositories</h1>
      <label>Username </label>
      <input
        id="userName"
        onChange={changeSearchParams}
        value={searchParams.userName}
      />
      <label>Select a programming language</label>
      <select
        name="language"
        id="language"
        onChange={changeSearchParams}
        value={searchParams.language}
      >
        <option value=""></option>
        {programmingLanguages.map((language) => {
          return (
            <option value={language} key={language}>
              {language}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => getSearchResults()}
        disabled={!searchParams.userName}
      >
        Search
      </button>
    </SearchInputWrapper>
  );
};
