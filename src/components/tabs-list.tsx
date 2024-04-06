import { Tab, Tabs, TabList, TabIndicator } from '@chakra-ui/react';
import {
  DIGITAL_CURRENCY_TYPE,
  STOCK_TYPE,
  TIME_SERIES_TYPE,
} from '../constants';
import { TabsProps } from '../props';

/* Component Listing 3 Time Series or Digital Currencies Functions in Tabs
 * Eg: Daily => TIME_SERIES_DAILY => Time Series (Daily)
 */
export const TabsList = ({ handleTabClick, stockType }: TabsProps) => {
  return (
    <Tabs flex={1} color={'blackAlpha.800'} p={0}>
      <TabList
        borderBottom={'1px solid #ececec'}
        pt={3}
        pb={3}
        pl={3}
        color={'#6a6a6a'}
      >
        <Tab
          _selected={{ color: '#1487ff', fontWeight: 'bold' }}
          onClick={() =>
            handleTabClick(
              stockType === STOCK_TYPE.TIME_SERIES
                ? TIME_SERIES_TYPE.DAILY
                : DIGITAL_CURRENCY_TYPE.DAILY,
            )
          }
        >
          Daily
        </Tab>
        <Tab
          _selected={{ color: '#1487ff', fontWeight: 'bold' }}
          onClick={() =>
            handleTabClick(
              stockType === STOCK_TYPE.TIME_SERIES
                ? TIME_SERIES_TYPE.WEEKLY
                : DIGITAL_CURRENCY_TYPE.WEEKLY,
            )
          }
        >
          Weekly
        </Tab>
        <Tab
          _selected={{ color: '#1487ff', fontWeight: 'bold' }}
          onClick={() =>
            handleTabClick(
              stockType === STOCK_TYPE.TIME_SERIES
                ? TIME_SERIES_TYPE.MONTHLY
                : DIGITAL_CURRENCY_TYPE.MONTHLY,
            )
          }
        >
          Monthly
        </Tab>
      </TabList>

      <TabIndicator mt="-2px" height="2px" bg="#1487ff" borderRadius="1px" />
    </Tabs>
  );
};
