import React from 'react';
import styled from 'styled-components';

import { Repository, LoadingSpinner } from './';
import { IRepository } from '../models';

const StyledHeader = styled.h2`
  text-align: center;
`;

interface IRepositoryListProps {
  repositories: IRepository[];
  loading: boolean;
  totalCount: number;
  error: string;
}

export const RepositoryList = ({
  repositories = [],
  loading,
  totalCount,
  error,
}: IRepositoryListProps) => {
  if (error) {
    return <StyledHeader>{error}</StyledHeader>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }
  if (repositories.length === 0) {
    return <StyledHeader>No results found</StyledHeader>;
  }

  return (
    <>
      <StyledHeader>{`Total Repositories ${totalCount}`}</StyledHeader>
      {repositories.map((repository) => (
        <Repository repository={repository} key={repository.name} />
      ))}
    </>
  );
};
