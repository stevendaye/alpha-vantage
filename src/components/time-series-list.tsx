import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { VStack, Text, Spinner } from '@chakra-ui/react';
import {
  DATE_CLOSE,
  DATE_CLOSE_4A,
  DATE_CLOSE_4B,
  DATE_HIGH,
  DATE_HIGH_2A,
  DATE_HIGH_2B,
  DATE_LOW,
  DATE_LOW_3A,
  DATE_LOW_3B,
  DATE_MARKET_CAP,
  DATE_OPEN,
  DATE_OPEN_1A,
  DATE_OPEN_1B,
  DATE_VOLUME,
  DATE_VOLUME_5,
  STOCK_TYPE,
} from '../constants';
import { DigitalRow, TimeRow } from '.';
import { ItemsCommonProps, TimeSeriesListProps } from '../props';

/* Component Listing Time Series Results */
const TimeSeriesList = ({
  isLoading,
  stockType,
  visibleItems,
  stocks,
  timeSeriesMetaData,
  timeSeriesType,
  error,
  handleSetTimeSeries,
}: TimeSeriesListProps) => {
  const [series, setSeries] = useState<ItemsCommonProps[]>([]);
  /* Retrieve the cached stock type */
  const cachedStocks = stocks?.[timeSeriesType];

  useEffect(() => {
    setSeries([]);

    if (
      cachedStocks &&
      timeSeriesMetaData &&
      cachedStocks[timeSeriesMetaData]
    ) {
      const timeSeries = cachedStocks[timeSeriesMetaData];
      const timeSeriesByDate: ItemsCommonProps[] = Object.keys(timeSeries).map(
        (date) => {
          let itemsMap;
          if (stockType === STOCK_TYPE.DIGITAL_CURRENCIES) {
            itemsMap = {
              date,
              open: timeSeries[date][DATE_OPEN_1A],
              open_b: timeSeries[date][DATE_OPEN_1B],
              high: timeSeries[date][DATE_HIGH_2A],
              high_b: timeSeries[date][DATE_HIGH_2B],
              low: timeSeries[date][DATE_LOW_3A],
              low_b: timeSeries[date][DATE_LOW_3B],
              close: timeSeries[date][DATE_CLOSE_4A],
              close_b: timeSeries[date][DATE_CLOSE_4B],
              volume: timeSeries[date][DATE_VOLUME_5],
              cap: timeSeries[date][DATE_MARKET_CAP],
            };
            return itemsMap;
          }
          itemsMap = {
            date,
            open: timeSeries[date][DATE_OPEN],
            high: timeSeries[date][DATE_HIGH],
            low: timeSeries[date][DATE_LOW],
            close: timeSeries[date][DATE_CLOSE],
            volume: timeSeries[date][DATE_VOLUME],
          };
          return itemsMap;
        },
      );

      /* Sorting list by date*/
      const sortedTimeSeries = timeSeriesByDate.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      setSeries(sortedTimeSeries);
      handleSetTimeSeries(timeSeriesByDate);
    }
  }, [cachedStocks]);

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

      {isLoading && !error && (
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
          {({ index, style }) =>
            stockType === STOCK_TYPE.TIME_SERIES ? (
              <TimeRow
                date={visibleItems[index].date}
                open={visibleItems[index].open}
                high={visibleItems[index].high}
                low={visibleItems[index].low}
                close={visibleItems[index].close}
                volume={visibleItems[index].volume}
                style={style}
              />
            ) : (
              <DigitalRow
                date={visibleItems[index].date}
                open={visibleItems[index].open}
                open_b={visibleItems[index].open_b}
                high={visibleItems[index].high}
                high_b={visibleItems[index].high_b}
                low={visibleItems[index].low}
                low_b={visibleItems[index].low_b}
                close={visibleItems[index].close}
                close_b={visibleItems[index].close_b}
                volume={visibleItems[index].volume}
                cap={visibleItems[index].cap}
                style={style}
              />
            )
          }
        </List>
      )}
    </VStack>
  );
};

export default React.memo(TimeSeriesList);
