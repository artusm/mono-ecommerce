export const getApiUrl = (path = ''): string =>
  `${process.env['PUB_IMG_URL'] ?? ''}${path}`;

export const getImageUrl = (path = ''): string =>
  `${process.env['PUB_API_URL'] ?? 'http://localhost:4200'}${path}`;

export const createItemHref = (id: string): string => `/i/${id}`;
