import React from 'react';
import dynamic from 'next/dynamic';

export const withNoSsr = (Component: React.FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });
