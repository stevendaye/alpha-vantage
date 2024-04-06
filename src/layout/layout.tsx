import { Container, Flex } from '@chakra-ui/react';
import { LayoutProps } from '../props';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth={'container.xl'}>
      <Flex
        flexDirection={'column'}
        gap={5}
        width={'full'}
        flex={1}
        mx={'auto'}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default Layout;
