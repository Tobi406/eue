import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app'

import 'styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

fontAwesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
