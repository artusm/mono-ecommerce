import type {
  Category as PreCategory,
  Product as PreProduct,
  UploadFileEntityResponse,
} from './types';

type StrapiImage = UploadFileEntityResponse;

export type SimplifiedImage = {
  data?: {
    attributes?: Partial<NonNullable<StrapiImage['data']>['attributes']> | null;
  } | null;
};

export type SimplifiedImages = {
  data?:
    | {
        attributes?: Partial<
          NonNullable<StrapiImage['data']>['attributes']
        > | null;
      }[]
    | null;
};

export type Product = Omit<PreProduct, 'images'> & {
  images?: SimplifiedImages | null;
};
export type Category = Omit<Partial<PreCategory>, 'image'> & {
  image?: SimplifiedImage | null;
};
