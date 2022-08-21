import '@testing-library/jest-dom';
import { RenderResult, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { formatPrice } from '@ecommerce/shared/utils/format-price';

import { PRODUCT_SIDEBAR_DEFAULT_PROPS } from '../../props/constants';
import { ProductSidebar } from './ProductSidebar';

describe('ProductSidebar', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
        renderResult = render(
            <ProductSidebar {...PRODUCT_SIDEBAR_DEFAULT_PROPS} />,
        );
    });

    it('should render successfully', () => {
        const { baseElement } = renderResult;

        const tree = create(
            <ProductSidebar {...PRODUCT_SIDEBAR_DEFAULT_PROPS} />,
        ).toJSON();
        expect(tree).toMatchSnapshot();

        expect(baseElement).toBeTruthy();
    });

    it('should have proper information', () => {
        const { smallDescription, name, price } =
            PRODUCT_SIDEBAR_DEFAULT_PROPS.product;

        expect(screen.getByText(smallDescription)).toBeInTheDocument();

        expect(screen.getByText(name)).toBeInTheDocument();

        expect(screen.queryByText(price)).not.toBeInTheDocument();
        expect(screen.queryByText(formatPrice(price))).toBeInTheDocument();
    });
});
