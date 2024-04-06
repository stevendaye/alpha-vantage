import { Flex, Box, Text } from '@chakra-ui/react';
import { ItemsCommonProps } from '../props';

/* Row for each Digital Currency result */
export const DigitalRow = ({
  date,
  open,
  open_b,
  high,
  high_b,
  low,
  low_b,
  close,
  close_b,
  volume,
  cap,
  style,
}: ItemsCommonProps) => (
  <Box style={style}>
    <Flex
      key={date}
      width={'full'}
      justifyContent={'space-between'}
      borderBottom={'1px solid #d2d2d2'}
      pb={3}
    >
      {/* Used parseFloat().toFixed(2)
       * to allow a nice display of the data on the UI
       * to keep decimal numbers to minimum
       */}
      <Text>{date}</Text>
      <Text>{parseFloat(open).toFixed(2)}</Text>
      <Text>{parseFloat(open_b || '').toFixed(2)}</Text>
      <Text>{parseFloat(high || '').toFixed(2)}</Text>
      <Text>{parseFloat(high_b || '').toFixed(2)}</Text>
      <Text>{parseFloat(low || '').toFixed(2)}</Text>
      <Text>{parseFloat(low_b || '').toFixed(2)}</Text>
      <Text>{parseFloat(close || '').toFixed(2)}</Text>
      <Text>{parseFloat(close_b || '').toFixed(2)}</Text>
      <Text>{parseFloat(volume).toFixed(2)}</Text>
      <Text>{parseFloat(cap || '').toFixed(2)}</Text>
    </Flex>
  </Box>
);
