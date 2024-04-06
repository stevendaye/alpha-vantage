import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  STOCK_TYPE,
  TIME_SERIES_TYPE,
  DIGITAL_CURRENCY_TYPE,
  META_DATA_TIME_SERIES,
  META_DATA_DIGITAL_CURRENCY,
} from '../constants';
import { MainHeaderProps } from '../props';

/* Component displaying buttons for main Stocks: Time Series and Digital Currencies
 * Handles stock type to be requested and displays its related data
 * according to the cuurent tab, etither DAILY, WEEKLY and MONTHLY
 */
export const MainHeader = ({
  activeTab,
  handleStockTypechange,
  stockType,
}: MainHeaderProps) => {
  const handleStockType = (
    newStockType: string,
    newTimeSeriesType: string,
    newMetaData: string,
  ) => {
    handleStockTypechange(newStockType, newTimeSeriesType, newMetaData);
  };

  const getTimeSeriesTypeAndMetadata = (type: string) => {
    let timeSeriesType;
    let metaData;

    switch (type) {
      case DIGITAL_CURRENCY_TYPE.WEEKLY:
        timeSeriesType = TIME_SERIES_TYPE.WEEKLY;
        metaData = META_DATA_TIME_SERIES.WEEKLY;
        break;
      case DIGITAL_CURRENCY_TYPE.MONTHLY:
        timeSeriesType = TIME_SERIES_TYPE.MONTHLY;
        metaData = META_DATA_TIME_SERIES.MONTHLY;
        break;
      default:
        timeSeriesType = TIME_SERIES_TYPE.DAILY;
        metaData = META_DATA_TIME_SERIES.DAILY;
    }

    return { timeSeriesType, metaData };
  };

  const getDigitalSeriesTypeAndMetadata = (type: string) => {
    let digitalSeriesType;
    let metaData;

    switch (type) {
      case TIME_SERIES_TYPE.WEEKLY:
        digitalSeriesType = DIGITAL_CURRENCY_TYPE.WEEKLY;
        metaData = META_DATA_DIGITAL_CURRENCY.WEEKLY;
        break;
      case TIME_SERIES_TYPE.MONTHLY:
        digitalSeriesType = DIGITAL_CURRENCY_TYPE.MONTHLY;
        metaData = META_DATA_DIGITAL_CURRENCY.MONTHLY;
        break;
      default:
        digitalSeriesType = DIGITAL_CURRENCY_TYPE.DAILY;
        metaData = META_DATA_DIGITAL_CURRENCY.DAILY;
    }

    return { digitalSeriesType, metaData };
  };

  return (
    <Box mb={5}>
      <Flex
        justifyContent={'space-between'}
        mt={5}
        alignItems={'baseline'}
        p={0}
      >
        <Heading
          as={'h3'}
          textAlign={'center'}
          color={'#1487FF'}
          px={4}
          py={2}
          borderLeft={'5px solid whitesmoke'}
        >
          Alpha Vantage
        </Heading>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {stockType}
              </MenuButton>

              <MenuList>
                <MenuItem
                  onClick={() => {
                    const { timeSeriesType, metaData } =
                      getTimeSeriesTypeAndMetadata(activeTab);
                    handleStockType(
                      STOCK_TYPE.TIME_SERIES,
                      timeSeriesType,
                      metaData,
                    );
                  }}
                >
                  {STOCK_TYPE.TIME_SERIES}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    const { digitalSeriesType, metaData } =
                      getDigitalSeriesTypeAndMetadata(activeTab);
                    handleStockType(
                      STOCK_TYPE.DIGITAL_CURRENCIES,
                      digitalSeriesType,
                      metaData,
                    );
                  }}
                >
                  {STOCK_TYPE.DIGITAL_CURRENCIES}
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};
