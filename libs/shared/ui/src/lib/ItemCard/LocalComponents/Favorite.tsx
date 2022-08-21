import React from 'react';

import clsx from 'clsx';

import { Button } from '@ecommerce/shared/ui/Button';
import { Icon } from '@ecommerce/shared/ui/Icon';

interface Props {
    handleClick: () => void;
    hovered: boolean;
    isFavorite: boolean;
}

export const Favorite: React.FC<Props> = (props) => {
    const { handleClick, hovered, isFavorite } = props;

    return (
        <Button
            classes={clsx('flex items-center', !hovered && 'sm:(opacity-0)')}
            tag="button"
            type="transparent"
            elProps={{
                onClick: handleClick,
                title: 'add to favorite',
                type: 'button',
            }}
        >
            <Icon icon="heart" fill={!isFavorite ? 'none' : 'red'} size="sm" />
        </Button>
    );
};
