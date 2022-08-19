import { HomePageQuery } from '@ecommerce/shared/graphql/types';
import {CategoriesSection} from "./Components/CategoriesSection";
import {ProductsSection} from "./Components/ProductsSection";

type HomePageAttributes = NonNullable<
  NonNullable<NonNullable<HomePageQuery['homePage']>['data']>['attributes']
  >;

export type GetHomePageData<T extends keyof HomePageAttributes> = NonNullable<HomePageAttributes[T]>;

interface Props {
  categories: GetHomePageData<'categories'>;
  products: GetHomePageData<'products'>;
}

export const Home: React.FC<Props> = (props) => {
  const { categories, products } = props;

  return (
    <div>
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </div>
  );
};
