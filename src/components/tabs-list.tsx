import { Tab, Tabs, TabList, TabIndicator } from '@chakra-ui/react';
import { TIME_SERIES_TYPE } from '../constants';
import { TabsProps } from '../props';

export const TabsList = ({ handleTabClick }: TabsProps) => {
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
          onClick={() => handleTabClick(TIME_SERIES_TYPE.DAILY)}
        >
          Daily
        </Tab>
        <Tab
          _selected={{ color: '#1487ff', fontWeight: 'bold' }}
          onClick={() => handleTabClick(TIME_SERIES_TYPE.WEEKLY)}
        >
          Weekly
        </Tab>
        <Tab
          _selected={{ color: '#1487ff', fontWeight: 'bold' }}
          onClick={() => handleTabClick(TIME_SERIES_TYPE.MONTHLY)}
        >
          Monthly
        </Tab>
      </TabList>

      <TabIndicator mt="-2px" height="2px" bg="#1487ff" borderRadius="1px" />
    </Tabs>
  );
};
