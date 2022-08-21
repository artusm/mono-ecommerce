import { ComponentType } from 'react';

import { useGlobalSeoQuery } from '@ecommerce/shared/graphql/types';

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
