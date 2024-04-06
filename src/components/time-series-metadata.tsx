import { Box, Flex, Text, Spinner } from '@chakra-ui/react';
import {
  META_DATA_LAST_REFRESHED_DIGITAL,
  META_DATA_LAST_REFRESHED_TIME,
  META_DATA_SYMBOL,
  META_DATA_CURRENCY_NAME,
  META_DATA_MARKET_NAME,
} from '../constants';
import { MetadataProps } from '../props';

/* Component displaying basic Metadata info on the Stock Type */
export const TimeSeriesMetaData = ({ metaData, isLoading }: MetadataProps) => {
  return (
    <Box
      flex={2}
      display={'flex'}
      color={'blackAlpha.700'}
      alignItems={'flex-end'}
      justifyContent={'flex-end'}
      gap={5}
      mr={5}
      pb={4}
    >
      <Flex gap={0.5} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'} color={'#1487FF'}>
          Synbol:
        </Text>

        <Box>
          {isLoading && !metaData ? (
            <Spinner size={'sm'} color="blackAlpha.700" thickness="1px" />
          ) : (
            <Text>
              {metaData?.[META_DATA_SYMBOL] ? metaData[META_DATA_SYMBOL] : '--'}
            </Text>
          )}
        </Box>
      </Flex>

      <Flex gap={1} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'} color={'#1487FF'}>
          Last Refreshed:
        </Text>

        <Box>
          {isLoading && !metaData ? (
            <Spinner size={'sm'} color="blackAlpha.700" thickness="1px" />
          ) : (
            <Text>
              {metaData?.[META_DATA_LAST_REFRESHED_DIGITAL] ||
              metaData?.[META_DATA_LAST_REFRESHED_TIME]
                ? metaData[META_DATA_LAST_REFRESHED_DIGITAL] ||
                  metaData[META_DATA_LAST_REFRESHED_TIME]
                : '--'}
            </Text>
          )}
        </Box>
      </Flex>

      <Flex gap={0.5} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'} color={'#1487FF'}>
          Market Name:
        </Text>

        <Box>
          {isLoading && !metaData ? (
            <Spinner size={'sm'} color="blackAlpha.700" thickness="1px" />
          ) : (
            <Text>
              {metaData?.[META_DATA_MARKET_NAME]
                ? metaData[META_DATA_MARKET_NAME]
                : '--'}
            </Text>
          )}
        </Box>
      </Flex>

      <Flex gap={0.5} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'} color={'#1487FF'}>
          Currency Name:
        </Text>

        <Box>
          {isLoading && !metaData ? (
            <Spinner size={'sm'} color="blackAlpha.700" thickness="1px" />
          ) : (
            <Text>
              {metaData?.[META_DATA_CURRENCY_NAME]
                ? metaData[META_DATA_CURRENCY_NAME]
                : '--'}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
