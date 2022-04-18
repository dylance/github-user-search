import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import { SearchSection, RepositoryList, SearchPagination } from './';
import { usePaginatedData } from '../hooks';
import { getUsersRepoSearchUrl } from '../util';
import { resultsPerPage } from '../constants';
import { IRepoResponse, ISearchParams } from '../models';

const GithubSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding 50px 0;
`;

export const GithubSearch = () => {
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    userName: '',
    language: '',
  });
  const [{ data: userRepos, currentPage, isLoading, error }, updateUrl] =
    usePaginatedData<IRepoResponse>({ total_count: 0, items: [] });

  const changeSearchParams = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchParams({
      ...searchParams,
      [target.id]: target.value,
    });
  };

  const getSearchResults = async (pageNumber: number = 1) => {
    const searchUrl = getUsersRepoSearchUrl(
      searchParams,
      resultsPerPage,
      pageNumber,
    );
    updateUrl(searchUrl, pageNumber);
  };

  const { total_count, items } = userRepos;

  return (
    <GithubSearchWrapper>
      <SearchSection
        searchParams={searchParams}
        changeSearchParams={changeSearchParams}
        getSearchResults={getSearchResults}
      />
      <RepositoryList
        repositories={items}
        loading={isLoading}
        totalCount={total_count}
        error={error}
      />
      <SearchPagination
        totalCount={total_count}
        getNewResults={getSearchResults}
        currentPage={currentPage}
      />
    </GithubSearchWrapper>
  );
};
