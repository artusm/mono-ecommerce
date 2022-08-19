export const getApiURL = (path = '') =>
  `${process.env['NX_API_URL'] ?? 'http://localhost:1337'}${path}`;
export const getImageURL = (path = '') =>
  `${process.env['NX_IMAGE_URL'] ?? 'http://localhost:1337'}${path}`;
export const createItemHref = (id = '') => `/i/${id}`;
