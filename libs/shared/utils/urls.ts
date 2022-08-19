export const getApiUrl = (path = ''): string =>
  `${process.env['NX_STRAPI_IMG_URL'] ?? ''}${path}`;

export const getImageUrl = (path = ''): string =>
  `${process.env['NX_STRAPI_URL'] ?? 'http://localhost:4200'}${path}`;

export const createItemHref = (id: string): string => 
    `/i/${id}`;
