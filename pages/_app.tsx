import { AppProps } from 'next/app';
import 'styles/base/_base.scss';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
// import './global.css'

const App = ({ Component, pageProps }: AppProps) => (
  <MantineProvider>
    <Component {...pageProps} />
  </MantineProvider>
);

export default App;
