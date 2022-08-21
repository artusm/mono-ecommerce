import {FunctionComponent} from 'react';
import dynamic from 'next/dynamic';

export const withNoSsr = (Component: FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });
