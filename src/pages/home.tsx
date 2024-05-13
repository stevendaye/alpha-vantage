import { useState } from 'react';
import { Box, Stack, VStack, Flex } from '@chakra-ui/react';
import useGetTimeSeries from '../hooks/useGetTimeSeries';
import {
  EQUITY,
  API_KEY,
  TIME_SERIES_TYPE,
  META_DATA,
  QUERY,
  STOCK_TYPE,
  EXHANGE_MARKET,
  DIGITAL_CURRENCIES,
  DIGITAL_CURRENCY_TYPE,
  META_DATA_TIME_SERIES,
  META_DATA_DIGITAL_CURRENCY,
  ITEMS_PER_PAGE,
} from '../constants';
import {
  HeaderList,
  TabsList,
  TimeSeriesMetaData,
  TimeSeriesList,
  Footer,
  MainHeader,
} from '../components';
import { ItemsCommonProps } from '../props';

const Home = () => {
  /* Set by default the type of core Stock API the user want to request
   * Eg: Time Series (Only takes two values and is controlled by the top right button)
   */
  const [stockType, setStockType] = useState<string>(STOCK_TYPE.TIME_SERIES);

  /* Dynamically set default stock type
   * Eg: TIME_SERIES_DAILY || DIGITAL_CURRENCY_DAILY (based on state change)
   */
  const [timeSeriesType, setTimeSeriesType] = useState<string>(
    TIME_SERIES_TYPE.DAILY,
  );

  /* Set default string metadata to be matched with API reponse
   * Eg: Time Series (Daily)
   */
  const [timeSeriesMetadeta, setTimeSeriesMetadeta] = useState<string>(
    META_DATA_TIME_SERIES.DAILY,
  );

  /* Send Stock Series API Request */
  const params: { [key: string]: string } = {
    function: timeSeriesType,
    symbol:
      stockType === STOCK_TYPE.TIME_SERIES
        ? EQUITY.IBM
        : DIGITAL_CURRENCIES.BTC,
  };

  if (stockType === STOCK_TYPE.DIGITAL_CURRENCIES) {
    params['market'] = EXHANGE_MARKET.EUR;
  }
  params['apikey'] = API_KEY;

  const { error, isLoading, timeSeriesStocks } = useGetTimeSeries(
    timeSeriesType,
    QUERY,
    {
      params,
    },
    [timeSeriesType, stockType],
  );

  /* Handle Paginations & Set visible items in the viewport */
  /* Number of items to be displayed and used for calculation*/
  const defaultPage = 1;
  const itemsPerPage = ITEMS_PER_PAGE;
  const [page, setPage] = useState<number>(1);
  const [timeSeries, setTimeSeries] = useState<ItemsCommonProps[]>([]);

  /* Calculate 'start' and 'end' index for the current page */
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, timeSeries.length);
  const visibleItems = timeSeries.slice(startIndex, endIndex);

  const handleSetTimeSeries = (series: ItemsCommonProps[]) => {
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
    // Reset page count
    setPage(1);

    switch (type) {
      case stockType === STOCK_TYPE.TIME_SERIES
        ? TIME_SERIES_TYPE.WEEKLY
        : DIGITAL_CURRENCY_TYPE.WEEKLY:
        setTimeSeriesMetadeta(
          stockType === STOCK_TYPE.TIME_SERIES
            ? META_DATA_TIME_SERIES.WEEKLY
            : META_DATA_DIGITAL_CURRENCY.WEEKLY,
        );
        break;
      case stockType === STOCK_TYPE.TIME_SERIES
        ? TIME_SERIES_TYPE.MONTHLY
        : DIGITAL_CURRENCY_TYPE.MONTHLY:
        setTimeSeriesMetadeta(
          stockType === STOCK_TYPE.TIME_SERIES
            ? META_DATA_TIME_SERIES.MONTHLY
            : META_DATA_DIGITAL_CURRENCY.MONTHLY,
        );
        break;
      default:
        setTimeSeriesMetadeta(
          stockType === STOCK_TYPE.TIME_SERIES
            ? META_DATA_TIME_SERIES.DAILY
            : META_DATA_DIGITAL_CURRENCY.DAILY,
        );
    }
  };

  /* On change of stockTye button (Time Series or Digital Currencies),
   * - Update the button
   * - Update data to be displayed according to the stock
   * - Update the data according to the current active tab
   */
  const handleStockTypechange = (
    nStockType: string,
    nTimeSerieType: string,
    ntimeSeriesMetadata: string,
  ) => {
    // Reset page count
    setPage(1);

    setStockType(nStockType);
    setTimeSeriesType(nTimeSerieType);
    setTimeSeriesMetadeta(ntimeSeriesMetadata);
  };

  return (
    <>
      <MainHeader
        activeTab={timeSeriesType}
        handleStockTypechange={handleStockTypechange}
        stockType={stockType}
      />

      <Stack
        direction={'column'}
        bg={'#fff'}
        borderRadius={7}
        pb={1}
        position={'relative'}
      >
        <Flex justifyContent={'space-between'}>
          <TabsList handleTabClick={handleTabChange} stockType={stockType} />
          <TimeSeriesMetaData
            metaData={timeSeriesStocks?.[timeSeriesType]?.[META_DATA]}
            isLoading={isLoading}
          />
        </Flex>

        <HeaderList stockType={stockType} />

        <Box
          width={'full'}
          height={'calc(100vh - 325px)'}
          bg={'#fff'}
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
              isLoading={isLoading}
              stockType={stockType}
              visibleItems={visibleItems}
              stocks={timeSeriesStocks}
              timeSeriesMetaData={timeSeriesMetadeta}
              timeSeriesType={timeSeriesType}
              error={error}
              handleSetTimeSeries={handleSetTimeSeries}
            />
          </VStack>
        </Box>

        <Footer
          timeSeriesMetadata={timeSeriesMetadeta}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          endIndex={endIndex}
          startIndex={startIndex}
          timeSeries={timeSeries}
        />
      </Stack>
    </>
  );
};

export default Home;
