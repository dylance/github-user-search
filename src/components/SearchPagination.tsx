import React from 'react';
import styled from 'styled-components';

import { resultsPerPage } from '../constants';

const PagesButton = styled.button`
  margin: 0 10px;
  background: unset;
  border: 1px solid white;
  font-size: 24px;

  &:hover {
    border: 1px solid grey;
  }

  &.active {
    background-color: #0000ee;
    color: #ffffff;
  }
`;

interface ISearchPagination {
  totalCount: number;
  currentPage: number;
  getNewResults: (pageNumber: number) => void;
}

export const SearchPagination = ({
  totalCount,
  getNewResults,
  currentPage,
}: ISearchPagination) => {
  if (totalCount < 1) {
    return null;
  }

  const totalPages: string[] = Array(
    Math.ceil(totalCount / resultsPerPage),
  ).fill('');
  const getPageResults = (pageNumber: number) => getNewResults(pageNumber);

  return (
    <div>
      <button
        onClick={() => getPageResults(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {totalPages.map((page, index) => {
        return (
          <PagesButton
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => getPageResults(index + 1)}
            key={`page-button-${index}`}
          >
            {index + 1}
          </PagesButton>
        );
      })}
      <button
        onClick={() => getPageResults(currentPage + 1)}
        disabled={currentPage === totalPages.length}
      >
        Next
      </button>
    </div>
  );
};
