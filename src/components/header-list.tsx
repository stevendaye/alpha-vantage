import { Stack, Text } from '@chakra-ui/react';
import { HeaderListProps } from '../props';
import { STOCK_TYPE } from '../constants';

/* Component Listing 2 type of header information */
export const HeaderList = ({ stockType }: HeaderListProps) => {
  return (
    <Stack
      width={'full'}
      justifyContent={'space-between'}
      fontWeight={'bold'}
      fontSize={'0.9em'}
      direction={'row'}
      mt={-2}
      p={'15px 26px 15px 26px'}
      bg={'#ececec'}
      color={'blackAlpha.700'}
      mb={5}
    >
      {stockType === STOCK_TYPE.DIGITAL_CURRENCIES ? (
        <>
          <Text>Date</Text>
          <Text>Open (CNY)</Text>
          <Text>Open (USD)</Text>
          <Text>High (CNY)</Text>
          <Text>High (USD)</Text>
          <Text>Low (CNY)</Text>
          <Text>Low (USD)</Text>
          <Text>Close (CNY)</Text>
          <Text>Close (USD)</Text>
          <Text>Volume</Text>
          <Text>Market Cap (USD)</Text>
        </>
      ) : (
        <>
          <Text>Date</Text>
          <Text>Open</Text>
          <Text>High</Text>
          <Text>Low</Text>
          <Text>Close</Text>
          <Text>Volume</Text>
        </>
      )}
    </Stack>
  );
};
