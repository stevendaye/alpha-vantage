import { Flex, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FooterProps } from '../props';
import { ITEMS_PER_PAGE } from '../constants';

/* Component displaying Footer & Pagination Feature */
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
          {/* Number of items per page to be displayed */}
          <Text>Rows per Page:</Text>
          <Text>{ITEMS_PER_PAGE}</Text>
        </Flex>

        <Text fontSize={'0.8em'}>
          {`${startIndex === 0 ? 1 : startIndex} - ${endIndex} of ${timeSeries.length}`}
        </Text>

        <Flex alignItems={'center'} gap={2}>
          <IconButton
            aria-label="Previous Button"
            color={'whiteAlpha.900'}
            bg={'blackAlpha.900'}
            fontSize={'1.5em'}
            icon={<ChevronLeftIcon />}
            onClick={handlePrevPage}
            title="Previous"
            _hover={{
              background: 'whiteAlpha.900',
              color: 'blackAlpha.900',
              border: '1px solid #000',
            }}
          />
          <IconButton
            aria-label="Next Button"
            color={'whiteAlpha.900'}
            bg={'blackAlpha.900'}
            fontSize={'1.5em'}
            icon={<ChevronRightIcon />}
            onClick={handleNextPage}
            title="Next"
            _hover={{
              background: 'whiteAlpha.900',
              color: 'blackAlpha.900',
              border: '1px solid #000',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
