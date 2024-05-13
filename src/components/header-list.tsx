import { Stack, Text } from '@chakra-ui/react';

/* Component Listing 2 type of header information */
export const HeaderList = () => {
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
      <>
        <Text>Date</Text>
        <Text>Open</Text>
        <Text>High</Text>
        <Text>Low</Text>
        <Text>Close</Text>
        <Text>Volume</Text>
      </>
    </Stack>
  );
};
