import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { STOCK_TYPE } from '../constants';

export const Header = () => {
  const [stockType, setStockType] = useState('Time Series');

  return (
    <Box mb={5}>
      <Flex
        justifyContent={'space-between'}
        mt={5}
        alignItems={'baseline'}
        p={0}
      >
        <Heading
          as={'h2'}
          textAlign={'center'}
          color={'#1487FF'}
          px={4}
          py={2}
          borderLeft={'5px solid whitesmoke'}
        >
          Alpha Vantage
        </Heading>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {stockType}
              </MenuButton>

              <MenuList>
                <MenuItem onClick={() => setStockType(STOCK_TYPE.TIME_SERIES)}>
                  {STOCK_TYPE.TIME_SERIES}
                </MenuItem>
                <MenuItem
                  onClick={() => setStockType(STOCK_TYPE.DIGITAL_CURRENCIES)}
                >
                  {STOCK_TYPE.DIGITAL_CURRENCIES}
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};
