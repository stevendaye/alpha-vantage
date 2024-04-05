import { Box, Flex, Text, Skeleton } from '@chakra-ui/react';
import {
  META_DATA_LAST_REFRESHED,
  META_DATA_OUTPUT_SIZE,
  META_DATA_SYMBOL,
  META_DATA_TIMZONE,
} from '../constants';
import { MetadataProps } from '../props';

export const TimeSeriesMetaData = ({ metaData }: MetadataProps) => {
  return (
    <Box
      flex={1}
      display={'flex'}
      color={'blackAlpha.800'}
      alignItems={'flex-end'}
      justifyContent={'flex-start'}
      gap={5}
      mr={5}
      pb={4}
    >
      <Flex gap={0.5} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'}>Synbol:</Text>
        <Box>
          {!metaData ? (
            <Skeleton height="10px" width="60px" />
          ) : (
            <Text>{metaData[META_DATA_SYMBOL]}</Text>
          )}
        </Box>
      </Flex>

      <Flex gap={1} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'}>Last Refreshed:</Text>
        <Box>
          {!metaData ? (
            <Skeleton height="10px" width="60px" />
          ) : (
            <Text>{metaData[META_DATA_LAST_REFRESHED]}</Text>
          )}
        </Box>
      </Flex>

      <Flex gap={0.5} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'}>Output Size:</Text>
        <Box>
          {!metaData ? (
            <Skeleton height="10px" width="60px" />
          ) : (
            <Text>{metaData[META_DATA_OUTPUT_SIZE]}</Text>
          )}
        </Box>
      </Flex>

      <Flex gap={0.5} fontSize={'0.8em'} alignItems={'center'}>
        <Text fontWeight={'bold'}>Time Zone:</Text>
        <Box>
          {!metaData ? (
            <Skeleton height="10px" width="60px" />
          ) : (
            <Text>{metaData[META_DATA_TIMZONE]}</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
