import { ISearchParams } from '../models';

export const getUsersRepoSearchUrl = (
  searchParams: ISearchParams,
  resultsPerPage: number,
  pageNumber: number,
): string => {
  return `https://api.github.com/search/repositories?q=user:${
    searchParams.userName
  }+language:${encodeURIComponent(
    searchParams.language,
  )}&sort=stars&order=desc&per_page=${resultsPerPage}&page=${pageNumber}`;
};
