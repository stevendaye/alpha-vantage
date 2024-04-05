import { Flex, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FooterProps } from '../props';

export const Footer = ({
  timeSeriesMetadata,
  handleNextPage,
  handlePrevPage,
  endIndex,
  startIndex,
  timeSeries,
}: FooterProps) => {
  return (
    <Flex
      position={'absolute'}
      bottom={0}
      left={0}
      color={'blackAlpha.700'}
      width={'full'}
      justifyContent={'space-between'}
      alignItems={'center'}
      pl={7}
      pr={7}
      height={'60px'}
    >
      <Flex gap={1} fontSize={'0.9em'}>
        <Text fontWeight={'bold'}>Time Series Type:</Text>
        <Text>{timeSeriesMetadata}</Text>
      </Flex>

      <Flex gap={7} alignItems={'center'}>
        <Flex fontSize={'0.8em'} gap={1}>
          <Text>Rows per Page:</Text>
          <Text>25</Text>
        </Flex>

        <Text fontSize={'0.8em'}>
          {`${startIndex === 0 ? 1 : startIndex} - ${endIndex} of ${timeSeries.length}`}
        </Text>

        <Flex alignItems={'center'}>
          <IconButton
            variant={'outline'}
            aria-label="Backword Sign"
            color={'blackAlpha.700'}
            fontSize={'1.5em'}
            icon={<ChevronLeftIcon />}
            onClick={handlePrevPage}
          />
          <IconButton
            color={'blackAlpha.700'}
            aria-label="Forward Sign"
            fontSize={'1.5em'}
            icon={<ChevronRightIcon />}
            onClick={handleNextPage}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
