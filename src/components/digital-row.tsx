import { Flex, Box, Text } from '@chakra-ui/react';
import { DigitalRowProps } from '../props';

/* Row for each Digital Currency result */
export const DigitalRow = ({
  date,
  open_a,
  open_b,
  high_a,
  high_b,
  low_a,
  low_b,
  close_a,
  close_b,
  volume,
  cap,
  style,
}: DigitalRowProps) => (
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
      <Text>{parseFloat(date).toFixed(2)}</Text>
      <Text>{parseFloat(open_a).toFixed(2)}</Text>
      <Text>{parseFloat(open_b).toFixed(2)}</Text>
      <Text>{parseFloat(high_a).toFixed(2)}</Text>
      <Text>{parseFloat(high_b).toFixed(2)}</Text>
      <Text>{parseFloat(low_a).toFixed(2)}</Text>
      <Text>{parseFloat(low_b).toFixed(2)}</Text>
      <Text>{parseFloat(close_a).toFixed(2)}</Text>
      <Text>{parseFloat(close_b).toFixed(2)}</Text>
      <Text>{parseFloat(volume).toFixed(2)}</Text>
      <Text>{parseFloat(cap).toFixed(2)}</Text>
    </Flex>
  </Box>
);
