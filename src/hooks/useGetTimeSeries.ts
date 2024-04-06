import { useEffect, useState } from 'react';
import apiClient from '../utils/apiClient';
import useShowToast from './useShowToast';
import { TimeSeriesProps } from '../props';

/* Hooks to get any kind of time series Stock */
const useGetTimeSeries = (
  key: string,
  endpoint: string,
  config: object,
  dep: Array<string>,
) => {
  const [timeSeriesStocks, setTimeSeriesStocks] =
    useState<TimeSeriesProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const showToast = useShowToast();

  const getStocks = async (key: string) => {
    /* Performance wise, block unnecessary api calls
     * Store/Cache each stock result in a key-value object
     */
    if (!timeSeriesStocks || !timeSeriesStocks[key]) {
      setIsLoading(true);

      try {
        const res = await apiClient.get(endpoint, config);
        setTimeSeriesStocks((prevStock) => ({
          ...(prevStock || {}),
          [key]: res.data,
        }));
      } catch (err) {
        showToast('Error', (err as Error).message, 'error');
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getStocks(key);
  }, dep || []);

  return { error, isLoading, timeSeriesStocks };
};

export default useGetTimeSeries;
