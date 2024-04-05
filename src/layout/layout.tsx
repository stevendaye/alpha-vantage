import { Container, Box, Flex } from '@chakra-ui/react';
import { Header } from '../components';
import { LayoutProps } from '../props';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth={'container.xl'}>
      <Flex flexDirection={'column'} gap={5}>
        <Header />

        <Box width={'full'} flex={1} mx={'auto'}>
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default Layout;
