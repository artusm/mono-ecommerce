import 'windi.css';

import { AppProps } from 'next/app';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { wrapper } from '@/store';
import '@/styles/global.css';

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
