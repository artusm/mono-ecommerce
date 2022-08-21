import NextHead from 'next/head';
import { GlobalSeo } from '@ecommerce/shared/graphql/types';
import { getImageURL } from '@ecommerce/shared/utils/url';
import type { SimplifiedImage } from '@ecommerce/shared/graphql/refactored-types';
import React from "react";

interface Props {
  defaultSeo: Omit<GlobalSeo, 'metaImage'> & { metaImage: SimplifiedImage };
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const Head: React.FC<Props> = ({ defaultSeo, seo }) => {
  const { metaTitle, metaDescription, meta } = defaultSeo || {};

  const title = seo?.title || metaTitle;
  const description = seo?.description || metaDescription;
  const image =
    seo?.image || getImageURL(defaultSeo?.metaImage.data?.attributes?.url);

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {meta &&
        meta.map(
          (m) => m && <meta key={m.id} name={m.name} content={m.content} />
        )}
    </NextHead>
  );
};
