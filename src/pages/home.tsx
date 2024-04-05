import { useState } from 'react';
import { Box, Stack, VStack, Flex } from '@chakra-ui/react';
import useGetStocks from '../hooks/useGetStocks';
import {
  EQUITY,
  API_KEY,
  TIME_SERIES_TYPE,
  META_DATA_TIME_SERIES_DAILY,
  META_DATA,
  META_DATA_TIME_SERIES_MONTHLY,
  META_DATA_TIME_SERIES_WEEKLY,
  QUERY,
} from '../constants';
import {
  HeaderList,
  TabsList,
  TimeSeriesMetaData,
  TimeSeriesList,
  Footer,
} from '../components';
import { TimeSeriesDateProps } from '../props';

const Home = () => {
  const [timeSeriesType, setTimeSeriesType] = useState<string>(
    TIME_SERIES_TYPE.DAILY,
  );
  const [timeSeriesMetadeta, setTimeSeriesMetadeta] = useState<string>(
    META_DATA_TIME_SERIES_DAILY,
  );

  /* Send Stocks API Request */
  const { error, stocks } = useGetStocks(
    QUERY,
    {
      params: {
        function: timeSeriesType,
        symbol: EQUITY.IBM,
        apikey: API_KEY,
      },
    },
    [timeSeriesType],
  );

  /* Handle Paginations & Set Items per page visible in the viewport */
  const [timeSeries, setTimeSeries] = useState<TimeSeriesDateProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const defaultPage = 1;
  const itemsPerPage = 25;

  // start and end index for current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, timeSeries.length);
  const visibleItems = timeSeries.slice(startIndex, endIndex);

  const handleTimeSeries = (series: TimeSeriesDateProps[]) => {
    setTimeSeries(series);
  };
  const handleNextPage = () => {
    if (endIndex < timeSeries.length) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (startIndex > defaultPage) {
      setPage((prevPage) => Math.max(1, prevPage - 1));
    }
  };

  /* Update Time Series Metadata to be displayed on Tab Change
   * Eg: TIME_SERIES_DAILY => Time Series (Daily)
   */
  const handleTabChange = (type: string) => {
    setTimeSeriesType(type);
    setPage(1);

    switch (type) {
      case TIME_SERIES_TYPE.DAILY:
        setTimeSeriesMetadeta(META_DATA_TIME_SERIES_DAILY);
        break;
      case TIME_SERIES_TYPE.WEEKLY:
        setTimeSeriesMetadeta(META_DATA_TIME_SERIES_WEEKLY);
        break;
      case TIME_SERIES_TYPE.MONTHLY:
        setTimeSeriesMetadeta(META_DATA_TIME_SERIES_MONTHLY);
        break;
      default:
        break;
    }
  };

  return (
    <Stack
      direction={'column'}
      bg={'whitesmoke'}
      borderRadius={7}
      pb={1}
      position={'relative'}
    >
      {/* Tabs Listing 3 Core Stock Types & Basic Metadata Info */}
      <Flex justifyContent={'space-between'}>
        <TabsList handleTabClick={handleTabChange} />
        <TimeSeriesMetaData metaData={stocks?.[META_DATA]} />
      </Flex>

      {/* Header List*/}
      <HeaderList />

      {/* Stock List */}
      <Box
        width={'full'}
        height={'calc(100vh - 325px)'}
        bg={'whitesmoke'}
        color={'blackAlpha.800'}
        mt={0}
      >
        <VStack
          height={'inherit'}
          overflow={'hidden'}
          alignItems={'flex-start'}
          pl={7}
          pr={7}
        >
          <TimeSeriesList
            visibleItems={visibleItems}
            stocks={stocks}
            timeSeriesType={timeSeriesMetadeta}
            error={error}
            handleTimeSeries={handleTimeSeries}
          />
        </VStack>
      </Box>

      {/* Footer & Pagination */}
      <Footer
        timeSeriesMetadata={timeSeriesMetadeta}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        endIndex={endIndex}
        startIndex={startIndex}
        timeSeries={timeSeries}
      />
    </Stack>
  );
};

export default Home;
