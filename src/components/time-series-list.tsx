import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { VStack, Text, Spinner } from '@chakra-ui/react';
import {
  DATE_CLOSE,
  DATE_HIGH,
  DATE_LOW,
  DATE_OPEN,
  DATE_VOLUME,
} from '../constants';
import { TimeRow } from '.';
import { TimeSeriesCommonProps, TimeSeriesListProps } from '../props';

/* Component Listing Time Series Results */
const TimeSeriesList = ({
  visibleItems,
  timeSeriesType,
  stocks,
  error,
  handleSetTimeSeries,
}: TimeSeriesListProps) => {
  const [series, setSeries] = useState<TimeSeriesCommonProps[]>([]);

  useEffect(() => {
    setSeries([]);

    if (stocks && timeSeriesType && stocks[timeSeriesType]) {
      const timeSeries = stocks[timeSeriesType];
      const timeSeriesByDate: TimeSeriesCommonProps[] = Object.keys(
        timeSeries,
      ).map((date) => ({
        date,
        open: timeSeries[date][DATE_OPEN],
        high: timeSeries[date][DATE_HIGH],
        low: timeSeries[date][DATE_LOW],
        close: timeSeries[date][DATE_CLOSE],
        volume: timeSeries[date][DATE_VOLUME],
      }));

      /* Sorting list by date*/
      const sortedTimeSeries = timeSeriesByDate.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      setSeries(sortedTimeSeries);
      handleSetTimeSeries(timeSeriesByDate);
    }
  }, [stocks]);

  /* Height of List cannot accpet string calc(100vh - 315px)
   * But can be set dynamically
   */
  const listHeight = window.innerHeight - 375;

  return (
    <VStack width={'full'}>
      {error && (
        <Text
          textAlign={'center'}
          mt={'10rem'}
          fontSize={'1em'}
          fontWeight={'bold'}
          color="blackAlpha.600"
        >
          An Unexpected Error Happened, We could net get your data at this time
        </Text>
      )}

      {!stocks && !error && (
        <Spinner
          textAlign={'center'}
          mt={'10rem'}
          size={'xl'}
          color="blackAlpha.300"
        />
      )}

      {/*
       * Given the large dataset,
       * let's render each item in a Virtualized List
       */}
      {stocks && series.length > 0 && (
        <List
          height={listHeight}
          itemCount={visibleItems.length}
          itemSize={50}
          width={'100%'}
        >
          {({ index, style }) => (
            <TimeRow
              date={visibleItems[index].date}
              open={visibleItems[index].open}
              high={visibleItems[index].high}
              low={visibleItems[index].low}
              close={visibleItems[index].close}
              volume={visibleItems[index].volume}
              style={style}
            />
          )}
        </List>
      )}
    </VStack>
  );
};

export default React.memo(TimeSeriesList);
