export interface IRepository {
  name: string;
  description: string;
  full_name: string;
  stargazers_count: string;
  html_url: string;
  language: string;
  topics: string[];
  updated_at: Date;
}

export interface IRepoResponse {
  total_count: number;
  items: IRepository[];
}

export interface ISearchParams {
  userName: string;
  language: string;
}
