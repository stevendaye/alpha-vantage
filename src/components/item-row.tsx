import { Flex, Box, Text } from '@chakra-ui/react';
import { ItemRowProps } from '../props';

export const ItemRow = ({
  date,
  open,
  high,
  low,
  close,
  volume,
  style,
}: ItemRowProps) => (
  <Box style={style}>
    <Flex key={date} width={'full'} justifyContent={'space-between'}>
      <Text>{date}</Text>
      <Text>{open}</Text>
      <Text>{high}</Text>
      <Text>{low}</Text>
      <Text>{close}</Text>
      <Text>{volume}</Text>
    </Flex>
  </Box>
);
