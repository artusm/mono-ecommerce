import {
  CategoriesSearchQuery,
  ProductSearchQuery,
} from '@ecommerce/shared/graphql/types';
import { Filters } from './Components/Filters';
import { Products } from './Components/Products';
import React from "react";

interface Props {
  products: NonNullable<ProductSearchQuery['products']>['data'];
  categories: NonNullable<CategoriesSearchQuery['categories']>['data'];
}

export const Search: React.FC<Props> = (props) => {
  const { products, categories } = props;

  return (
    <section>
      <h1 className="font-semibold text-3xl">Search</h1>
      <Filters categories={categories} />
      <Products products={products} />
    </section>
  );
};
