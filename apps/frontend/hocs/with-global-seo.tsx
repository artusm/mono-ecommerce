import { useGlobalSeoQuery } from '@ecommerce/shared/graphql/types';
import {ComponentType} from "react";

export function withGlobalSeo<P>(WrappedComponent: ComponentType<P>) {
  // eslint-disable-next-line react/display-name
  return (props: P) => {
    const { data: seo } = useGlobalSeoQuery();

    return (
      <WrappedComponent
        {...props}
        globalSeo={seo?.globalSeo?.data?.attributes}
      />
    );
  };
}
