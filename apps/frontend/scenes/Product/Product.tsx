import { ProductSlugQuery } from '@ecommerce/shared/graphql/types';
import { ProductSidebar } from '@ecommerce/shared/ui/ProductSidebar';
import { ProductInformation } from '@ecommerce/shared/ui/ProductInformation';
import { ProductGallery } from '@ecommerce/shared/ui/ProductGallery';
import clsx from 'clsx';
import { useFavorite } from '@/hooks/useFavorite';
import { useCartItem } from '@/hooks/useCartItem';
import React from "react";

interface Props {
  product: NonNullable<
    NonNullable<ProductSlugQuery['products']>['data'][0]['attributes']
  >;
}

export const Product: React.FC<Props> = (props) => {
  const { product = {} as Props['product'] } = props;
  const { isFavorite, toggleFavorite } = useFavorite(product.slug);
  const { inCartAmount, addCart } = useCartItem(product.slug);

  return (
    <section
      className={clsx(
        'flex flex-col gap-12 justify-between',
        'sm:(mt-12)',
        'md:(flex-row)'
      )}
    >
      <div className="order-2 w-full relative">
        {product?.images && <ProductGallery images={product.images.data} />}
        <div className="my-12">
          <p className="text-xl">{product.description}</p>
        </div>
        {product.information && (
          <ProductInformation information={product.information} />
        )}
      </div>
      <ProductSidebar
        isFavorite={isFavorite}
        inCartAmount={inCartAmount}
        product={product}
        handleCartClick={() => addCart({ slug: product.slug, amount: 1 })}
        handleRemoveCartClick={() =>
          addCart({ slug: product.slug, amount: -16 })
        }
        handleFavoriteClick={() => toggleFavorite()}
      />
    </section>
  );
};
