import '../styles/globals.css';

import { GlobalProvider } from '../global-state/global-context';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </GlobalProvider>
  );
}

export default MyApp;
