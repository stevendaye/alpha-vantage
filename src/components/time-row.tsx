import { Flex, Box, Text } from '@chakra-ui/react';
import { ItemsCommonProps } from '../props';

/* Row for each Time Serie Result */
export const TimeRow = ({
  date,
  open,
  high,
  low,
  close,
  volume,
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
      <Text>{date}</Text>
      <Text>{open}</Text>
      <Text>{high}</Text>
      <Text>{low}</Text>
      <Text>{close}</Text>
      <Text>{volume}</Text>
    </Flex>
  </Box>
);
