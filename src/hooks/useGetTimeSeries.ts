import { useEffect, useState } from 'react';
import apiClient from '../utils/apiClient';
import useShowToast from './useShowToast';
import { TimeSeriesProps } from '../props';

/* Hooks to get any kind of time series Stock */
const useGetTimeSeries = (
  endpoint: string,
  config: object,
  dep: Array<string>,
) => {
  const [timeSeriesStocks, setTimeSeriesStocks] =
    useState<TimeSeriesProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const showToast = useShowToast();

  const getStocks = async () => {
    setIsLoading(true);
    setTimeSeriesStocks(null);

    try {
      const res = await apiClient.get(endpoint, config);
      setTimeSeriesStocks(res.data);
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

  return { error, isLoading, timeSeriesStocks };
};

export default useGetTimeSeries;
