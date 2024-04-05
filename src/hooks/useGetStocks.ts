import { useEffect, useState } from 'react';
import apiClient from '../utils/apiClient';
import useShowToast from './useShowToast';
import { TimeSeriesProps } from '../props';

const useGetStocks = (endpoint: string, config: object, dep: Array<string>) => {
  const [stocks, setStocks] = useState<TimeSeriesProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const showToast = useShowToast();

  const getStocks = async () => {
    setIsLoading(true);
    setStocks(null);

    try {
      const res = await apiClient.get(endpoint, config);
      setStocks(res.data);
    } catch (err) {
      showToast('Error', (err as Error).message, 'error');
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStocks();
  }, dep || []);

  return { error, isLoading, stocks };
};

export default useGetStocks;
