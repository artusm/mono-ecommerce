import { AppProps } from 'next/app';
import { wrapper } from '../store';
import 'windi.css';
import '../styles/global.css';
import {ErrorBoundary} from '../components/ErrorBoundary';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ErrorBoundary>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
