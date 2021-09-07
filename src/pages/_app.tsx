import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import styled, { ThemeProvider } from 'styled-components';
import Overlay from 'src/modules/layout/Overlay';
import Header from 'src/modules/layout/Header';
import Footer from 'src/modules/layout/Footer';
import Sidebar from 'src/modules/layout/Sidebar';

import 'styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { UIDReset } from 'react-uid';

fontAwesomeConfig.autoAddCss = false;

const theme = {
  colors: {
    primary: '#003399',
    secondary: '#ffca00',
    white: '#ffffff',
  },
};

const Page = styled.div`
  display: flex;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex: 1 1 85%;
  flex-direction: column;
  width: fill-available;
  min-height: 100vh;
`;
const Content = styled.main`
  padding: 5px;
`;

export type theme = typeof theme;

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>EUE</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Showing the connections between power in Europe" />
      <meta name="robots" content="noindex,follow" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UIDReset>
          <Overlay />
          <Page>
            <Sidebar />
            <Container>
              <Header
                title="EUE"
              />
              <Content>
                <Component {...pageProps} />
              </Content>
              <Footer>
                Made with &lt;3 <br />
                This website is not connected with or benefits from the support, sponsorship or approval of any of
                the institutions, bodies, offices, agencies and organs of the European Union or the Council of Europe.
              </Footer>
            </Container>
          </Page>
        </UIDReset>
      </ThemeProvider>
    </Provider>
  </>
}
