import NextNProgress from 'nextjs-progressbar';
import React, { ReactNode } from 'react';

import { GlobalSeo } from '@ecommerce/shared/graphql/types';
import type { SimplifiedImage } from '@ecommerce/shared/graphql/refactored-types';

import { Head } from './LocalComponents/Head';
import Header from '../Header';
import {Footer} from "@ecommerce/shared/ui/Footer";

interface Props {
  children: ReactNode;
  defaultSeo: Omit<GlobalSeo, 'metaImage'> & { metaImage: SimplifiedImage };
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const Layout: React.FC<Props> = ({ children, defaultSeo, seo }) => {
  return (
    <>
      <NextNProgress />
      <Head defaultSeo={defaultSeo} seo={seo} />
      <Header />
      <main className="mx-auto min-h-screen max-w-screen-xl px-4">
        {children}
      </main>
      <Footer />
    </>
  );
};
