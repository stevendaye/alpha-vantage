import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { VStack, Text, Spinner } from '@chakra-ui/react';
import {
  DATE_OPEN_1A,
  DATE_OPEN_1B,
  DATE_HIGH_2A,
  DATE_HIGH_2B,
  DATE_LOW_3A,
  DATE_LOW_3B,
  DATE_CLOSE_4A,
  DATE_CLOSE_4B,
  DATE_VOLUME_5,
  DATE_MARKET_CAP,
} from '../constants';
import { DigitalRow } from '.';
import { DigitalSeriesDateProps, DigitalSeriesListProps } from '../props';

/* Component Listing Digital Currencies */
const DigitalSeriesLIst = ({
  visibleItems,
  digitalSeriesType,
  stocks,
  error,
  handleSetDigitalSeries,
}: DigitalSeriesListProps) => {
  const [series, setSeries] = useState<DigitalSeriesDateProps[]>([]);

  useEffect(() => {
    setSeries([]);

    if (stocks && digitalSeriesType && stocks[digitalSeriesType]) {
      const digitalSeries = stocks[digitalSeriesType];
      const digitalSeriesByDate: DigitalSeriesDateProps[] = Object.keys(
        digitalSeries,
      ).map((date) => ({
        date,
        open_a: digitalSeries[date][DATE_OPEN_1A],
        open_b: digitalSeries[date][DATE_OPEN_1B],
        high_a: digitalSeries[date][DATE_HIGH_2A],
        high_b: digitalSeries[date][DATE_HIGH_2B],
        low_a: digitalSeries[date][DATE_LOW_3A],
        low_b: digitalSeries[date][DATE_LOW_3B],
        close_a: digitalSeries[date][DATE_CLOSE_4A],
        close_b: digitalSeries[date][DATE_CLOSE_4B],
        volume: digitalSeries[date][DATE_VOLUME_5],
        cap: digitalSeries[date][DATE_MARKET_CAP],
      }));

      /* Sorting list by date */
      const sortedDigitalSeries = digitalSeriesByDate.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      setSeries(sortedDigitalSeries);
      handleSetDigitalSeries(digitalSeriesByDate);
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
       * Given the large dataset, performance wise,
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
            <DigitalRow
              date={visibleItems[index].date}
              open_a={visibleItems[index].open_a}
              open_b={visibleItems[index].open_b}
              high_a={visibleItems[index].high_a}
              high_b={visibleItems[index].high_b}
              low_a={visibleItems[index].low_a}
              low_b={visibleItems[index].low_b}
              close_a={visibleItems[index].close_a}
              close_b={visibleItems[index].close_b}
              volume={visibleItems[index].volume}
              cap={visibleItems[index].cap}
              style={style}
            />
          )}
        </List>
      )}
    </VStack>
  );
};

export default React.memo(DigitalSeriesLIst);
