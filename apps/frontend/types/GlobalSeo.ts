import { GlobalSeoQuery } from '@ecommerce/shared/graphql/types';

export type GlobalSeo = NonNullable<
  NonNullable<NonNullable<GlobalSeoQuery['globalSeo']>['data']>['attributes']
>;
