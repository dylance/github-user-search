import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaRegStar } from 'react-icons/fa';

import { IRepository } from '../models';

interface IRepositoryProps {
  repository: IRepository;
}

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 10px 0;
  padding: 10px 20px;

  h4 {
    margin: 5px 0;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    padding: 2px 0;

    span {
      &.topic {
        background-color: #ddf4ff;
        border-radius: 40px;
        margin: 3px 6px;
        padding: 4px 12px;

        :first-child {
          margin-left: 0;
        }
      }

      :not(:first-child) {
        padding-left: 12px;
      }
    }
  }

  .star-icon {
    color: #eac54f;
    padding-right: 5px;
  }

  a {
    text-decoration: none;
  }
`;

export const Repository = ({ repository }: IRepositoryProps) => {
  const {
    description,
    stargazers_count,
    html_url,
    language,
    full_name,
    topics,
    updated_at,
  } = repository;
  return (
    <SearchResultWrapper>
      <div>
        <h4>
          <a target="_blank" href={html_url} rel="noreferrer">
            {full_name}
          </a>
        </h4>
      </div>
      <div>{description}</div>
      <div>
        {topics.map((topic) => {
          return (
            <span className="topic" key={topic}>
              {topic}{' '}
            </span>
          );
        })}
      </div>
      <div>
        <span>
          <IconContext.Provider value={{ className: 'star-icon' }}>
            <FaRegStar />
          </IconContext.Provider>
          {stargazers_count}
        </span>
        <span>{language}</span>
        <span>{`Updated on ${new Date(updated_at).toDateString()}`}</span>
      </div>
    </SearchResultWrapper>
  );
};
