import Head from 'next/head';
import { AppProps } from 'next/app';
import { wrapper } from "../store";
import 'windi.css';
import '../styles/global.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
