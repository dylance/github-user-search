import { useState, useEffect } from 'react';
import { fetchData } from '../util';

export const usePaginatedData = <T>(
  initialData: T,
): [
  { data: T; currentPage: number; isLoading: boolean; error: string },
  (url: string, pageNumber: number) => void,
] => {
  const [data, setData] = useState<T>(initialData);
  const [url, setUrl] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      if (!url) return;
      setError('');
      setIsLoading(true);

      try {
        const result = await fetchData<T>(url);

        if (result) {
          setData(result);
        }
      } catch (error) {
        if (typeof error === 'string') {
          setError(error);
        } else {
          setError('Unable to load data');
        }
        setCurrentPage(0)
        setData(initialData);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const updateUrl = (url: string, pageNumber: number) => {
    setUrl(url);
    setCurrentPage(pageNumber);
  };

  return [{ data, currentPage, isLoading, error }, updateUrl];
};
