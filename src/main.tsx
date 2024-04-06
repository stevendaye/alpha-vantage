import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      bg: mode('gray.100', '#dedede')(props),
      color: mode('gray.900', 'blackAlpha.700')(props),
    },
  }),
};

const config = {
  initialColorMode: '#dedede',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
